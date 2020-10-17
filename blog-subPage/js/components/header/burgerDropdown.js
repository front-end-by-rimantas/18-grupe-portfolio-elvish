/* When the user clicks on the button,
toggle between hiding and showing the dropdown content */

function burgerDropdpwn() {
    // const dropdownDOM = document.getElementById("myDropdown");
    // console.log(dropdownDOM);
    const dropdownContentDOM = document.querySelector(".dropdown-content");
    // console.log(dropdownContentDOM);

    const burger = document.getElementById("burger");
    // console.log(burger);

    burger.addEventListener('click', () => {
        dropdownContentDOM.classList.add('show');
        // console.log(dropdownContentDOM);
  })
}



  // Close the dropdown menu if the user clicks outside of it
  window.onclick = function(event) {
    if (!event.target.matches('#burger')) {
      var dropdowns = document.getElementsByClassName("dropdown-content");
      var i;
      for (i = 0; i < dropdowns.length; i++) {
        var openDropdown = dropdowns[i];
        if (openDropdown.classList.contains('show')) {
          openDropdown.classList.remove('show');
        }
      }
    }
  }

  export {burgerDropdpwn}