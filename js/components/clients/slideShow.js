document.addEventListener("DOMContentLoaded", function(event) {
let currentIndex = 0;
let numTestimonials = testimonialsData.length;

function slideshow() {
  hideAllTestimonials();
  showTestimonial(currentIndex);

  currentIndex = (currentIndex + 1) % numTestimonials;
  setTimeout(slideshow, 3000);
}

function hideAllTestimonials() {
  for (var i = 0; i < numTestimonials; i++) {
    hideTestimonial(i);
  }
}

function hideTestimonial(index) {
    document.querySelector('.testimonials-carousel').style.display = 'none';
}
function showTestimonial(index) {
    document.querySelector('.testimonials-carousel').style.display = 'block';
}

function getTestimonial (index) {
//   let id = "test" + (index + 1);
  return document.getElementById(id);
}

slideshow();
})

export { slideshow };