let getnavbutton = document.querySelector('.navbuttons');
let getmynavlist = document.querySelector('.navlists ul');
let getnavlist = document.querySelector('.navlists');
getnavbutton.addEventListener('click',function(){
  getmynavlist.classList.toggle('active')
});

//security boxs;

let boxs = document.querySelectorAll('.security-boxs');
let tabpanes = document.querySelectorAll('.tab-pane');
let tabimg1 = document.querySelector('.tab-img1');
let tabimg2 = document.querySelector('.tab-img2');
let tabimg3 = document.querySelector('.tab-img3');
let tabimg4 = document.querySelector('.tab-img4');

function gettab(evn,tablink){
    // console.log(evn.target)
    // console.log(tablink)

    tabpanes.forEach(function(tabpane){
        tabpane.style.display = "none";
    });

    for(var i = 0 ; i < boxs.length ; i++){
        boxs[i].className = boxs[i].className.replace(" active","");
    }

    document.getElementById(tablink).style.display = "block";
    evn.currentTarget.className += " active";
}

document.getElementById('autoclick').click();

