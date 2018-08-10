(function() {
  function debounce(fn) {
    let timeout = null;
    return function() {
      window.clearTimeout(timeout);
      timeout = setTimeout(() => {
        fn();
      })
    }
  }
  let previousScrollY = 0;
  const sunriseContainer = document.getElementById('sunrise-container');
  const secondSection = document.getElementById('second-section');
  const sunriseContainerDimensions = sunriseContainer.getBoundingClientRect();
  const sunriseImage = document.getElementById('sunrise');
  const firstTout = document.getElementById('first-tout');
  const secondTout = document.getElementById('second-tout');
  let secondSectionDimensions = secondSection.getBoundingClientRect();
  if (secondSectionDimensions.bottom < 0) {
    firstTout.classList.add('active');
    secondTout.classList.add('active');
  }
  window.addEventListener('scroll', debounce(() => {
    secondSectionDimensions = secondSection.getBoundingClientRect();
    if (previousScrollY < window.scrollY) {
      sunriseImage.classList.remove('animate-down');
      sunriseImage.classList.add('animate-up');
    } else if (previousScrollY > window.scrollY && window.scrollY < sunriseContainerDimensions.height) {
      sunriseImage.classList.add('animate-down');
      sunriseImage.classList.remove('animate-up');
    }
    previousScrollY = window.scrollY;
    if (secondSectionDimensions.bottom >= 0) {
      firstTout.classList.add('active');
      secondTout.classList.add('active');
    }
  }));

})();
