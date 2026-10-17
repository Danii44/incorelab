export interface StatItem {
  id: string;
  number: number;
  suffix: string;
  label: string;
  detail: string;
}

export const statsData: StatItem[] = [
  {
    id: "projects",
    number: 64,
    suffix: "+",
    label: "Projects Shipped",
    detail: "Websites, Shopify stores, and web applications delivered on time.",
  },
  {
    id: "clients",
    number: 38,
    suffix: "",
    label: "Active Clients",
    detail: "Funded tech startups, e-commerce brands, and global studios.",
  },
  {
    id: "years",
    number: 6,
    suffix: " Yrs",
    label: "Years in Business",
    detail: "Dedicated to production-ready Next.js and high-speed software.",
  },
  {
    id: "satisfaction",
    number: 99,
    suffix: "%",
    label: "Client Retention",
    detail: "Our clients continue working with us for ongoing updates and support.",
  },
];
