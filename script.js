
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if(entry.isIntersecting){
          entry.target.classList.add('visible');
        }
      });
    }, { threshold: 0.1 });

    document.querySelectorAll('.fade-slide').forEach(el => {
      observer.observe(el);
    });


    const steps = document.querySelectorAll('.step');

    function revealSteps() {
      const triggerBottom = window.innerHeight * 0.9;

      steps.forEach(step => {
        const stepTop = step.getBoundingClientRect().top;

        if (stepTop < triggerBottom) {
          step.classList.remove('opacity-0', 'translate-y-8');
          step.classList.add('opacity-100', 'translate-y-0');
        }
      });
    }

    window.addEventListener('scroll', revealSteps);
    window.addEventListener('load', revealSteps);
  