$(function () {
    $('.nav-btn').on('hover', function () {
        $(this).toggleClass('open');
    });
});

$(document).ready(function () {
    $(window).scroll(function () {
        var scroll = $(window).scrollTop();
        if (scroll > 100) {
            $("#header").addClass('glass-effect');
        } else {
            $("#header").removeClass("glass-effect");
        }
    });

    const tabDuration = $('#tab-duration');

    // Ambil tab yang aktif pertama kali
    let durationActive = tabDuration.find('.tab.active');
    let dataDurationActive = durationActive.data('duration');

    // Filter pertama kali saat halaman dimuat
    filterDuration(dataDurationActive);

    // Event click pada tab
    tabDuration.find('.tab').on('click', function (e) {
        e.preventDefault();
        let duration = $(this).data('duration');
        filterDuration(duration);
        $(this).addClass('active');
        $(this).siblings().removeClass('active');
    });

    // Fungsi untuk filter berdasarkan durasi
    function filterDuration(duration) {
        $('.class-duration').each(function () {
            const durations = $(this).attr('data-duration') || '';
            if (durations === duration) {
                $(this).addClass('active').show();
            } else {
                $(this).removeClass('active').hide();
            }
        });
    }
});

$(document).ready(function () {
    $(window).scroll(function () {
        var scroll = $(window).scrollTop();
        if (scroll > 100) {
            $("#header").addClass('glass-effect');
        } else {
            $("#header").removeClass("glass-effect");
        }
    });

    const tabTeam = $('#team-tab');
    const tabDuration = $('#tab-duration');

    let teamActive = tabTeam.find('.tab.active');
    let dataTeamActive = teamActive.data('team');

    let durationActive = tabDuration.find('.tab.active');
    let dataDurationActive = durationActive.data('duration');

    filterClasses(dataTeamActive);
    filterDuration(dataDurationActive);

    tabTeam.find('.tab').on('click', function (e) {
        e.preventDefault();
        let team = $(this).data('team');
        filterClasses(team);
        $(this).addClass('active');
        $(this).siblings().removeClass('active');
    });

    tabDuration.find('.tab').on('click', function (e) {
        e.preventDefault();
        let duration = $(this).data('duration');
        filterDuration(duration);
        $(this).addClass('active');
        $(this).siblings().removeClass('active');
    });

    function filterClasses(team) {
        if (team === 'all') {
            $('.class-team').addClass('active');
        } else {
            $('.class-team').each(function () {
                const teams = $(this).attr('data-teams') || '';
                if (teams.includes(team)) {
                    $(this).addClass('active');
                } else {
                    $(this).removeClass('active');
                }
            });
        }
    }

    function filterDuration(duration) {
        if (duration === 'all') {
            $('.class-duration').addClass('active');
        } else {
            $('.class-duration').each(function () {
                const durations = $(this).attr('data-duration') || '';
                if (durations.includes(duration)) {
                    $(this).addClass('active');
                } else {
                    $(this).removeClass('active');
                }
            });
        }
    }
})

function formatNumber(number) {
    return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

function animateNumber(element, targetNumber, duration) {
    const startTime = performance.now();
    const startNumber = 0;

    function updateNumber(currentTime) {
        const elapsedTime = currentTime - startTime;
        const progress = Math.min(elapsedTime / duration, 1);
        const currentNumber = Math.floor(startNumber + progress * (targetNumber - startNumber));

        element.innerText = formatNumber(currentNumber);

        if (progress < 1) {
            requestAnimationFrame(updateNumber);
        }
    }

    requestAnimationFrame(updateNumber);
}

function checkScroll() {
    const numberElements = document.querySelectorAll('.number');
    numberElements.forEach(element => {
        // Periksa jika elemen sudah dianimasikan
        if (!element.classList.contains('animated')) {
            const targetValue = parseInt(element.getAttribute("data-target"), 10);
            const durationValue = parseInt(element.getAttribute("data-duration"), 10);

            // Memeriksa apakah elemen muncul di viewport
            const rect = element.getBoundingClientRect();
            if (rect.top >= 0 && rect.bottom <= window.innerHeight) {
                animateNumber(element, targetValue, durationValue);
                element.classList.add('animated'); // Tandai elemen sudah dianimasikan
            }
        }
    });
}

// Menambah event listener untuk scroll
window.addEventListener('scroll', checkScroll);

$(document).ready(function () {
    $('.marquee-container').each(function () {
        const cont = $(this); // Mengambil marquee-container saat ini
        const content = cont.find('.marquee-content');
        const clone = content.clone();
        const clone2 = clone.clone();
        cont.append(clone);
        cont.append(clone2); // Clone hanya untuk container ini

        cont.find('.marquee-content').addClass('marquee'); // Tambahkan class marquee pada konten yang di-clone
    });
});

