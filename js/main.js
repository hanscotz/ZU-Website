$(document).ready(function () {
    $(".owl-carousel").owlCarousel({
        loop: true,
        margin: 20,
        autoplay: true,
        autoplayTimeout: 3000,
        autoplayHoverPause: true,
        responsive: {
            0: { items: 1 },
            576: { items: 2 },
            768: { items: 3 },
            992: { items: 4 } // col-lg-3 = 4 per row
        }
    });
});



document.addEventListener("DOMContentLoaded", function () {
    let dots = document.querySelectorAll(".itemDot");
    let contents = document.querySelectorAll(".title-box");
    let circle = document.querySelector(".dotCircle");
    let currentIndex = 0;
    let angleStep = 360 / dots.length;

    function arrangeDots() {
        dots.forEach((dot, index) => {
            let angle = angleStep * index;
            let x = 200 * Math.cos(angle * (Math.PI / 180)) + 170; // Adjusted for larger circle size
            let y = 210 * Math.sin(angle * (Math.PI / 180)) + 170; // Adjusted for larger circle size
            dot.style.transform = `translate(${x}px, ${y}px)`;
        });
    }

    document.addEventListener("DOMContentLoaded", function () {
        const circle = document.querySelector(".circle"); // or use an ID if available
        const dots = document.querySelectorAll(".dot");
        const contents = document.querySelectorAll(".tab-content");
        let currentIndex = 0;
        const angleStep = 360 / dots.length;
    
        function rotateItems() {
            if (!circle || !dots.length || !contents.length) return;
    
            circle.style.transform = `rotate(${angleStep * currentIndex}deg)`;
            dots.forEach(d => d.classList.remove("active", "focused"));
            contents.forEach(content => content.classList.remove("active"));
            dots[currentIndex].classList.add("active", "focused");
            contents[currentIndex].classList.add("active");
            currentIndex = (currentIndex + 1) % dots.length;
        }
    
        if (dots.length && contents.length && circle) {
            arrangeDots(); // Make sure this is defined
            setInterval(rotateItems, 2500);
    
            dots.forEach(dot => {
                dot.addEventListener("click", function () {
                    dots.forEach(d => d.classList.remove("active", "focused"));
                    this.classList.add("active", "focused");
                    let tab = this.getAttribute("data-tab");
                    contents.forEach(content => content.classList.remove("active"));
                    contents[tab - 1].classList.add("active");
                    currentIndex = tab - 1;
                    rotateItems();
                });
            });
        } else {
            console.warn("Required elements not found in DOM.");
        }
    });
}
);

(function ($) {
    "use strict";

    // Spinner
    var spinner = function () {
        setTimeout(function () {
            if ($('#spinner').length > 0) {
                $('#spinner').removeClass('show');
            }
        }, 1);
    };
    spinner(0);


    $(document).ready(function() {
        // Initialize WOW.js after the DOM is fully loaded
        new WOW().init();
      });

    // Sticky Navbar
    $(window).scroll(function () {
        if ($(this).scrollTop() > 45) {
            $('.nav-bar').addClass('sticky-top shadow-sm');
        } else {
            $('.nav-bar').removeClass('sticky-top shadow-sm');
        }
    });

    // Facts counter
    $('[data-toggle="counter-up"]').counterUp({
        delay: 5,
        time: 2000
    });


    // Modal Video
    $(document).ready(function () {
        var $videoSrc;
        $('.btn-play').click(function () {
            $videoSrc = $(this).data("src");
        });
        console.log($videoSrc);

        $('#videoModal').on('shown.bs.modal', function (e) {
            $("#video").attr('src', $videoSrc + "?autoplay=1&amp;modestbranding=1&amp;showinfo=0");
        })

        $('#videoModal').on('hide.bs.modal', function (e) {
            $("#video").attr('src', $videoSrc);
        })
    });


    // Testimonial-carousel
    $(".testimonial-carousel").owlCarousel({
        autoplay: true,
        smartSpeed: 2000,
        center: false,
        dots: false,
        loop: true,
        margin: 25,
        nav: true,
        navText: [
            '<i class="bi bi-arrow-left"></i>',
            '<i class="bi bi-arrow-right"></i>'
        ],
        responsiveClass: true,
        responsive: {
            0: {
                items: 1
            },
            576: {
                items: 1
            },
            768: {
                items: 2
            },
            992: {
                items: 2
            },
            1200: {
                items: 2
            }
        }
    });



    // Back to top button
    $(window).scroll(function () {
        if ($(this).scrollTop() > 300) {
            $('.back-to-top').fadeIn('slow');
        } else {
            $('.back-to-top').fadeOut('slow');
        }
    });
    $('.back-to-top').click(function () {
        $('html, body').animate({ scrollTop: 0 }, 1500, 'easeInOutExpo');
        return false;
    });




})(jQuery);


document.getElementById('subscribeForm').addEventListener('submit', function (e) {
    e.preventDefault();

    const email = document.getElementById('mc-email').value;
    const submitting = document.querySelector('.mailchimp-submitting');
    const success = document.querySelector('.mailchimp-success');
    const error = document.querySelector('.mailchimp-error');

    submitting.style.display = 'block';
    success.style.display = 'none';
    error.style.display = 'none';

    setTimeout(() => {
        submitting.style.display = 'none';

        if (email.includes('@')) {
            success.style.display = 'block';
        } else {
            error.style.display = 'block';
        }
    }, 1500);
});



const swiper = new Swiper('.publications-swiper', {
    slidesPerView: 4,   // Show 4 cards on large screens
    spaceBetween: 30,    // Space between cards
    loop: true,          // Infinite loop for the slider
    autoplay: {
        delay: 3000,       // Auto-slide every 3 seconds
        disableOnInteraction: false
    },
    breakpoints: {
        320: { slidesPerView: 1 },     // 1 card on small screens
        768: { slidesPerView: 2 },     // 2 cards on medium screens
        1024: { slidesPerView: 3 },    // 3 cards on tablets
        1200: { slidesPerView: 4 }     // 4 cards on large screens
    }
});


// Toggle submenus on click
document.querySelectorAll('.dropdown-submenu > a').forEach(function (element) {
    element.addEventListener('click', function (e) {
        e.preventDefault();
        e.stopPropagation();

        // Close all other open submenus
        document.querySelectorAll('.dropdown-submenu .dropdown-menu').forEach(function (submenu) {
            if (submenu !== element.nextElementSibling) {
                submenu.classList.remove('show');
            }
        });

        // Toggle this submenu
        let submenu = this.nextElementSibling;
        if (submenu) {
            submenu.classList.toggle('show');
        }
    });
});

// Close submenus when clicking outside
document.addEventListener('click', function (e) {
    document.querySelectorAll('.dropdown-submenu .dropdown-menu').forEach(function (submenu) {
        submenu.classList.remove('show');
    });
});




document.addEventListener('DOMContentLoaded', () => {
    AOS.init(); // Initialize AOS
});



