document.addEventListener('DOMContentLoaded', () => {
    const themeToggle = document.getElementById('theme-toggle');
    const body = document.body;
    const universityImage = document.getElementById('university-img');

    const applyTheme = (theme) => {
        body.classList.toggle('dark-mode', theme === 'dark-mode');
        themeToggle.textContent = theme === 'dark-mode' ? '☀️' : '🌙';
        if (universityImage) {
            universityImage.src = theme === 'dark-mode' ? 'icons/utfpr-dark.png' : 'icons/utfpr.png';
        }
    };

    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
        applyTheme(savedTheme);
    }

    themeToggle.addEventListener('click', () => {
        const newTheme = body.classList.contains('dark-mode') ? '' : 'dark-mode';
        applyTheme(newTheme);
        localStorage.setItem('theme', newTheme);
    });
});