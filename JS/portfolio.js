// ---------------------------
// 1. GLightbox Initialization
// ---------------------------
function initLightbox() {
  const lightbox = GLightbox({
    selector: '.glightbox'
  });
}

// ---------------------------
// 2. Portfolio Slider Functionality
// ---------------------------
function initSliders() {
  document.querySelectorAll('.slider-wrapper').forEach(wrapper => {
    const slider = wrapper.querySelector('.portfolio-slider');
    const leftArrow = wrapper.querySelector('.slider-arrow.left');
    const rightArrow = wrapper.querySelector('.slider-arrow.right');

    // Function to get scroll amount (item width + gap)
    const scrollAmount = () => {
      const firstItem = slider.querySelector('.portfolio-item');
      const gapValue = parseFloat(window.getComputedStyle(slider).gap) || 0;
      return firstItem.offsetWidth + gapValue;
    };

    leftArrow.addEventListener('click', () => {
      slider.scrollBy({ left: -scrollAmount(), behavior: 'smooth' });
    });

    rightArrow.addEventListener('click', () => {
      slider.scrollBy({ left: scrollAmount(), behavior: 'smooth' });
    });
  });
}

// ---------------------------
// 3. Book Now Modal Functionality
// ---------------------------
function initBookModal() {
  const modal = document.getElementById("bookModal");
  const closeBtn = modal.querySelector(".close");
  const bookButtons = document.querySelectorAll(".book-btn");
  const form = document.getElementById("bookForm");

  // Open modal function
  const openModal = () => {
    modal.classList.add("show");
    modal.scrollIntoView({ behavior: "smooth", block: "center" });
  };

  // Attach click event to all Book Now buttons
  bookButtons.forEach(btn => btn.addEventListener('click', openModal));

  // Close modal on "x" click
  closeBtn.addEventListener('click', () => modal.classList.remove("show"));

  // Close modal if clicking outside modal content
  window.addEventListener('click', (e) => {
    if (e.target === modal) modal.classList.remove("show");
  });

  // Handle form submission
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    alert("Thank you! Your booking request has been sent.");
    form.reset();
    modal.classList.remove("show");

    // TODO: Send form data to server via fetch/ajax here
  });
}

// ---------------------------
// 4. Initialize All Functions
// ---------------------------
function initWebsiteFeatures() {
  initLightbox();
  initSliders();
  initBookModal();
}

// Run initialization after DOM is loaded
document.addEventListener('DOMContentLoaded', initWebsiteFeatures);








