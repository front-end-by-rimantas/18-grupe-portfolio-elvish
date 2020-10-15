function fixingHeader(){

  console.log('hello');

  const header = document.querySelector('header')
  console.log(header);
  const headerLinks = document.querySelector('.headerLinks')
  console.log(headerLinks);

  window.onscroll = function(){
      const top = window.scrollY;
      console.log(top);
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