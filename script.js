document.addEventListener('DOMContentLoaded', () => {
    const hamburger = document.querySelector('.hamburger-menu');
    const nav = document.querySelector('header nav');

    if (hamburger && nav) {
        hamburger.addEventListener('click', () => {
            nav.classList.toggle('active');
            hamburger.classList.toggle('active');
        });

        // Close menu when clicking a link
        nav.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', () => {
                nav.classList.remove('active');
                hamburger.classList.remove('active');
            });
        });
    }

    // Team section toggle
    const teamSection = document.getElementById('tym');
    if (teamSection) {
        const toggleArrow = teamSection.querySelector('.toggle-arrow');
        if (toggleArrow) {
            toggleArrow.addEventListener('click', () => {
                teamSection.classList.toggle('active');
            });
        }
    }
});
