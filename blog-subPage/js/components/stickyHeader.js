function fixingHeader(){

  const header = document.querySelector('header')
  const headerLinks = document.querySelector('.headerLinks')

  window.onscroll = function(){
      const top = window.scrollY;
      if (top >= 10){
        header.classList.add('active')
        headerLinks.classList.add('active')
      } 
      else {
        header.classList.remove('active')
        headerLinks.classList.remove('active')

      }
  }
}

export { fixingHeader };