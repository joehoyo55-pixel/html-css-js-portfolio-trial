//Copied to clipboard
function copyEmail(event) {
  const email = "joehoyo55@gmail.com";
  const message = document.getElementById("copy-message");

  navigator.clipboard.writeText(email).then(() => {
    const x = event.clientX;
    const y = event.clientY;
    message.style.left = `${x}px`;
    message.style.top = `${y - 20}px`;
    message.style.opacity = "1";

    setTimeout(() => {
        message.style.opacity = "0";
    }, 2000);
  }).catch(err => {
    console.error("Failed to copy text: ", err);
  });
}

//Videos Load in batches of 6
document.addEventListener("DOMContentLoaded", () => {
  const items = document.querySelectorAll(".video-item");
  let visible = 6; // Show first 6
  const batchSize = 6;

  // Hide everything beyond the first batch
  items.forEach((item, i) => {
    if (i >= visible) item.style.display = "none";
  });

  // Add a sentinel (invisible trigger element)
  const sentinel = document.createElement("div");
  document.querySelector(".video-grid").after(sentinel);

  const observer = new IntersectionObserver((entries) => {
    if (entries[0].isIntersecting) {
      const nextVisible = visible + batchSize;

      for (let i = visible; i < nextVisible && i < items.length; i++) {
        const item = items[i];
        item.style.display = "block";
        item.classList.add("fade-in");

        // Clean up after animation
        setTimeout(() => item.classList.remove("fade-in"), 500);
      }

      visible = nextVisible;
      if (visible >= items.length) observer.disconnect();
    }
  });

  observer.observe(sentinel);
});

// Back To Top Button Fade-in
      const backToTopButton = document.querySelector(".backtotop-button");

      // Listen for scroll events on the window
      window.addEventListener("scroll", () => {
        
        // Check if the user has scrolled more than 100px
        if (window.scrollY > 100) {
          // If yes, add the 'show' class to fade it in
          backToTopButton.classList.add("show");
        } else {
          // If no (at the top), remove the 'show' class to hide it
          backToTopButton.classList.remove("show");
        }
      });

//GIF restarts every time cursor hovers
  const container = document.querySelector('.section__pic-container-1');
  const gif = container.querySelector('.title-gif');

  container.addEventListener('mouseenter', () => {
    const src = gif.getAttribute('src');
    gif.setAttribute('src', '');
    gif.offsetHeight;
    gif.setAttribute('src', src);
  });
