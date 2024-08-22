// Ensure Sidebar and Overlay are inactive initially
document.addEventListener('DOMContentLoaded', function() {
    const sidebar = document.getElementById('sidebar');
    const overlay = document.getElementById('overlay');
    
    // Make sure they are hidden on load
    sidebar.classList.remove('active');
    overlay.classList.remove('active');
});

// Toggle Sidebar Visibility and Content Shifting
document.getElementById('hamburger-menu').addEventListener('click', function() {
    const sidebar = document.getElementById('sidebar');
    const content = document.querySelector('.content');

    sidebar.classList.toggle('active');
    content.classList.toggle('shifted');
});

// Close Sidebar on 'Esc' key press
document.addEventListener('keydown', function(event) {
    if (event.key === 'Escape') {
        closeSidebar();
    }
});

function closeSidebar() {
    const sidebar = document.getElementById('sidebar');
    const content = document.querySelector('.content');

    sidebar.classList.remove('active');
    content.classList.remove('shifted');
}


document.getElementById('overlay').addEventListener('click', function() {
    closeSidebar();
});



$(document).ready(function() {
    // Smooth scroll functionality
    $('.navbar-item').on('click', function() {
        const target = $(this).data('scroll');
        $('html, body').animate({
            scrollTop: $(target).offset().top
        }, 800);
    });

    // Scroll Progress Bar
    $(window).on('scroll', function() {
        const scrollPosition = $(window).scrollTop();
        const windowHeight = $(window).height();
        const documentHeight = $(document).height();
        const progress = (scrollPosition / (documentHeight - windowHeight)) * 100;
        $('#progress-bar').css('width', progress + '%');
    });

    // Back to Top Button
    const backToTopBtn = $('#back-to-top');

    $(window).on('scroll', function() {
        if ($(window).scrollTop() > 300) {
            backToTopBtn.fadeIn();
        } else {
            backToTopBtn.fadeOut();
        }
    });

    backToTopBtn.on('click', function() {
        $('html, body').animate({scrollTop: 0}, 800);
    });

    // Fade-In Animation on Scroll
    function checkVisibility() {
        $('.fade-in').each(function() {
            const elementTop = $(this).offset().top;
            const viewportBottom = $(window).scrollTop() + $(window).height();
            if (elementTop < viewportBottom - 50) {
                $(this).addClass('visible');
            }
        });
    }

    $(window).on('scroll', checkVisibility);
    checkVisibility(); // Check visibility on initial load

    // Existing form submission handling
    $('#contact-form').on('submit', function(event) {
        event.preventDefault();
        const formData = $(this).serialize();
        $.ajax({
            type: 'POST',
            url: 'send_email.php',
            data: formData,
            success: function(response) {
                alert('Message sent successfully!');
                $('#contact-form')[0].reset();
            },
            error: function() {
                alert('There was an error sending the message. Please try again.');
            }
        });
    });
});
