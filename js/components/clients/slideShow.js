document.addEventListener("DOMContentLoaded", function(event) {
let currentIndex = 0;
let numTestimonials = testimonialsData.length;

function slideshow() {
  hideAllTestimonials();
  showTestimonial(currentIndex);

  currentIndex = (currentIndex + 1) % numTestimonials;
  setTimeout(slideshow, 5000);
}

function hideAllTestimonials() {
  for (let i = 0; i < numTestimonials; i++) {
    hideTestimonial(i);
  }
}

function hideTestimonial(index) {
  getTestimonial(index).style.display = 'none';
}
function showTestimonial(index) {
  getTestimonial(index).style.display = 'block';
}

function getTestimonial(index) {
  let id = "test" + (index + 1);
  
  return document.getElementById(id);
  
}

slideshow();
})
