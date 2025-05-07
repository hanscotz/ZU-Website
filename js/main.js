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



const dots = document.querySelectorAll(".item-dot");
const centerContent = document.getElementById("centerContent");

const texts = [
  {
    title: "About ZU",
    desc: "The Zanzibar University, the first University on the Isles, a private institution founded by DICA."
  },
  {
    title: "Location",
    desc: "Main campus at Tunguu, Central District. Another at Mpendae."
  },
  {
    title: "Registration",
    desc: "Interim Reg. in 1998, Full Reg. on 4th May 2000."
  },
  {
    title: "Membership",
    desc: "Member of IUCEA, ACU, AAU, TAPU, TUSA, TACOGA, ZHELB, etc."
  },
  {
    title: "Motto",
    desc: "The Spring of Knowledge and Virtue."
  },
  {
    title: "Expertise",
    desc: "Experts in Business, Law, Engineering, Education, Health, etc."
  }
];

let currentIndex = 0;
const totalDots = dots.length;

// Position dots around circle
dots.forEach((dot, index) => {
  const angle = (index / totalDots) * 2 * Math.PI;
  const radius = 150;
  const x = radius * Math.cos(angle);
  const y = radius * Math.sin(angle);
  dot.style.transform = `translate(${x}px, ${y}px)`;
});

// Rotate active state every 3 seconds
setInterval(() => {
  dots.forEach(dot => dot.classList.remove("active"));
  dots[currentIndex].classList.add("active");

  const { title, desc } = texts[currentIndex];
  centerContent.innerHTML = `<h2>${title}</h2><p>${desc}</p>`;

  currentIndex = (currentIndex + 1) % totalDots;
}, 3000);
  
    // ———————————————
    // 5) OPTIONAL: Initialize AOS if it’s loaded
    if (typeof AOS !== "undefined") {
      AOS.init({
        duration: 600,
        once: true,
      });
    } else {
      // If you don’t plan to use AOS, you can remove any AOS.init() calls entirely.
      console.info("AOS is not loaded—skipping AOS.init()");
    }
  

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



