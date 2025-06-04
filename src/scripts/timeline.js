document.addEventListener('DOMContentLoaded', () => {
  const timelineYears = document.querySelectorAll('.timeline-year');

  timelineYears.forEach(year => {
    year.addEventListener('click', (e) => {
      e.preventDefault();
      const targetId = year.getAttribute('href').substring(1);
      const targetElement = document.getElementById(targetId);

      if (targetElement) {
        targetElement.scrollIntoView({
          behavior: 'smooth'
        });
      }
    });
  });
});