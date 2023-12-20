function toggleText() {
    const textContainer = document.querySelector('.text-container');
    textContainer.classList.toggle('show');
  
    const arrow = document.querySelector('.arrow');
    arrow.style.transform = textContainer.classList.contains('show') ? 'rotate(180deg)' : 'rotate(0deg)';
  }




  document.addEventListener('DOMContentLoaded', function() {
    const elements = document.querySelectorAll('.litecoin_middle, .second_market, .first_market,.third_market');

    function handleScroll() {
      const scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
      const windowHeight = window.innerHeight;

      elements.forEach(function(element) {
        const elementTop = element.offsetTop;
        const elementHeight = element.offsetHeight;

        if (elementTop < scrollTop + windowHeight - elementHeight / 2) {
          element.classList.add('visible');
        }
      });
    }

    window.addEventListener('scroll', handleScroll);
    handleScroll();
  });