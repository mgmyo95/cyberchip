let getnavbutton = document.querySelector('.navbuttons');
let getmynavlist = document.querySelector('.navlists ul');
let getnavlist = document.querySelector('.navlists');
getnavbutton.addEventListener('click',function(){
  getmynavlist.classList.toggle('active')
});