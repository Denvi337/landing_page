document.addEventListener('DOMContentLoaded', function() {
    const sliders = document.querySelectorAll('.range-slider');
    const outputs = document.querySelectorAll('output');
  
    sliders.forEach((slider, index) => {
      slider.addEventListener('input', function() {
        outputs[index].textContent = slider.value;
      });
    });
  });

document.getElementById('offer-plan-slider').addEventListener('input', function() {
  const currentValue = parseInt(this.value);
  const spans = document.querySelectorAll('.slider-values span');

  spans.forEach(span => {
    const dataValue = parseInt(span.getAttribute('data-value'));
    if (dataValue === currentValue) {
      span.classList.add('active');
    } else {
      span.classList.remove('active');
    }
  });
});

/*
document.addEventListener('DOMContentLoaded', function() {
  const slider = document.getElementById('amount');
  
  slider.addEventListener('input', function() {
    const percent = (100 * (slider.value - slider.min)) / (slider.max - slider.min);
    slider.style.background = `linear-gradient(to right, #61c499 0%, #01b869 ${percent}%, #fcfcfc ${percent}%, #fcfcfc 100%)`;
  });
});

document.addEventListener('DOMContentLoaded', function() {
    const slider = document.getElementById('length');
    
    slider.addEventListener('input', function() {
      const percent = (100 * (slider.value - slider.min)) / (slider.max - slider.min);
      slider.style.background = `linear-gradient(to right, #ffbf00 0%, #01b869 ${percent}%, #fcfcfc ${percent}%, #fcfcfc 100%)`;
    });
  });
*/



