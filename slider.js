// ===== IMAGE SLIDER JAVASCRIPT =====

var currentSlide = 0;
var slides = document.querySelectorAll('.slide');
var dots   = document.querySelectorAll('.dot');
var timer;

// Show a specific slide
function goToSlide(n) {
  // Remove active from current
  slides[currentSlide].classList.remove('active');
  dots[currentSlide].classList.remove('active');

  // Set new index (wrap around)
  currentSlide = (n + slides.length) % slides.length;

  // Add active to new slide
  slides[currentSlide].classList.add('active');
  dots[currentSlide].classList.add('active');

  // Restart auto-play timer
  resetTimer();
}

// Move by +1 or -1
function changeSlide(direction) {
  goToSlide(currentSlide + direction);
}

// Auto-advance every 4 seconds
function resetTimer() {
  clearInterval(timer);
  timer = setInterval(function () {
    changeSlide(1);
  }, 4000);
}

// Start auto-play on page load
resetTimer();
