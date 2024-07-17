$(document).ready(function() {
    function isElementInViewport(el) {
        var rect = el.getBoundingClientRect();
        return (
            rect.top >= 0 &&
            rect.left >= 0 &&
            rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
            rect.right <= (window.innerWidth || document.documentElement.clientWidth)
        );
    }

    function checkTimeline() {
        $('.timeline-item').each(function() {
            if (isElementInViewport(this)) {
                $(this).addClass('in-view');
            }
        });
    }

    checkTimeline();
    $(window).on('scroll resize', checkTimeline);

    $('.faq-item h3').on('click', function() {
        $(this).parent('.faq-item').toggleClass('active');
        $(this).siblings('p').slideToggle();
    });

    let observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('show');
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.1 });

    document.querySelectorAll('.animate').forEach(element => {
        observer.observe(element);
    });
});
