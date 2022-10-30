let getnavbutton = document.querySelector('.navbuttons');
let getmynavlist = document.querySelector('.navlists ul');
let getnavlist = document.querySelector('.navlists');
getnavbutton.addEventListener('click',function(){
  getmynavlist.classList.toggle('active')
});

//project section
//countervalues

let getcountervalues = document.querySelectorAll('#countervalues');
getcountervalues.forEach(function(getcountervalue){
    getcountervalue.textContent = 0;

    function updatecounter(){
      let gettarget = +getcountervalue.getAttribute('data-target');
    //   console.log(typeof gettarget);
    let getcontent = +getcountervalue.textContent;
    // console.log(typeof getcontent)

    let incnumber = Math.floor(gettarget / 100);
    console.log(incnumber);

    if(getcontent < gettarget){
        getcountervalue.textContent = getcontent + incnumber;
        setTimeout(updatecounter,20);
    }
    }

    updatecounter();
});