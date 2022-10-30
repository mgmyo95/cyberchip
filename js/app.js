//Jquery Area
//message
$(document).ready(function(){
let maxnumber = 2;
let x = 1; 
let phonebox = $(".phoneboxs");
let addbtn = $(".addbtn");
let phoneel ;

$(addbtn).click(function(){
  if(x < maxnumber){
    x++;
    phoneel = `<div class="form-group d-flex justify-content-center align-items-center">
    <input type="text" name="phone" id="phone${x}" class="form-control" placeholder="Phone" autocomplete="off" />
    <a href="javascript:void(0);" class="ms-2 removebtn"><i class="fas fa-trash"></i></a>
  </div>`;
  phonebox.append(phoneel);
  }else{
    $(this).addClass('disabled');
  }
});

$(phonebox).on('click',".removebtn",function(){
  $(this).parent().remove();
  x--;
});

});

//Jquery Area


//javascript Area
let getnavbutton = document.querySelector('.navbuttons');
let getmynavlist = document.querySelector('.navlists ul');
let getnavlist = document.querySelector('.navlists');
getnavbutton.addEventListener('click',function(){
  getmynavlist.classList.toggle('active')
});

//dolars
let getdolar = document.querySelector('#dolar');
let pgh = 'Dolor sit amet consectetur adipisicing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.';
let i = 0;
let j = pgh.length;
// console.log(i,j)

function startwriting(){
  getdolar.textContent += pgh[i];
  i++;

  if(i === j){
    clearInterval(stopwriting);
  }
}

let stopwriting = setInterval(startwriting,20);

//Start Security Services Section
//countervalues
let getcountervalues = document.querySelectorAll('#countervalue');
getcountervalues.forEach(getcountervalue=>{
  getcountervalue.textContent = 0 ;

  function updatecounter(){
    let gettarget = +getcountervalue.getAttribute('data-target');
    // console.log(typeof gettarget);
    let getvalues = +getcountervalue.textContent;
    // console.log(typeof getvalues)
    let incnumber = Math.floor(gettarget / 50);
    // console.log(incnumber);

    if(getvalues < gettarget){
      getcountervalue.textContent = getvalues + incnumber ;
      setTimeout(updatecounter,10);
    }
  }

  updatecounter();
});
// End Security Services Section

//footer
let utcyear = new Date().getUTCFullYear();
document.querySelector('#year').textContent = utcyear;
//javascript Area


