import { NextResponse } from "next/server";
import { z } from "zod";

const contactSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Invalid email address"),
  company: z.string().optional(),
  budget: z.string().min(1, "Please select an estimated budget"),
  services: z.array(z.string()).min(1, "Please select at least one service"),
  message: z.string().min(10, "Message must be at least 10 characters"),
});

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const result = contactSchema.safeParse(body);

    if (!result.success) {
      return NextResponse.json(
        {
          success: false,
          errors: result.error.flatten().fieldErrors,
        },
        { status: 400 }
      );
    }

    // In production, send via Resend / SendGrid / Slack webhook
    console.log("New Project Inquiry Received:", result.data);

    return NextResponse.json({
      success: true,
      message: "Thank you for reaching out. We will review your briefing within 24 hours.",
      data: {
        referenceId: `INC-${Math.random().toString(36).substring(2, 8).toUpperCase()}`,
      },
    });
  } catch (error) {
    console.error("Contact API error:", error);
    return NextResponse.json(
      {
        success: false,
        message: "An unexpected error occurred while processing your inquiry.",
        error: error instanceof Error ? error.message : String(error),
      },
      { status: 500 }
    );
  }
}
