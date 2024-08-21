document.querySelector("form").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent form submission for validation

    // Toggle Sidebar Visibility
document.getElementById('hamburger-menu').addEventListener('click', function() {
    const sidebar = document.getElementById('sidebar');
    sidebar.classList.toggle('active');
});


    const name = document.getElementById("name");
    const email = document.getElementById("email");
    const subject = document.getElementById("subject");
    const message = document.getElementById("message");

    let isValid = true;

    // Name validation
    if (name.value.trim() === "") {
        isValid = false;
        name.classList.add("error");
        alert("Please enter your name.");
    } else {
        name.classList.remove("error");
    }

    // Email validation
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email.value.trim())) {
        isValid = false;
        email.classList.add("error");
        alert("Please enter a valid email address.");
    } else {
        email.classList.remove("error");
    }

    // Subject validation
    if (subject.value.trim() === "") {
        isValid = false;
        subject.classList.add("error");
        alert("Please enter a subject.");
    } else {
        subject.classList.remove("error");
    }

    // Message validation
    if (message.value.trim() === "") {
        isValid = false;
        message.classList.add("error");
        alert("Please enter your message.");
    } else {
        message.classList.remove("error");
    }

    if (isValid) {
        this.submit(); // If form is valid, proceed with submission
    }
});

$(document).ready(function() {
    // Smooth scroll functionality
    $('.navbar-item').on('click', function() {
        const target = $(this).data('scroll');
        $('html, body').animate({
            scrollTop: $(target).offset().top
        }, 800); // Adjust the duration as needed
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
            if (elementTop < viewportBottom - 50) { // Adjust -50 for earlier visibility
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
