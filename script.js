
projectOpen.forEach((item)=>{
let openEl = document.querySelector('.closebtn');
let projectOpen = document.getElementById('svg');
let projectclose = document.getElementById('close-svg');
let projectElement = document.querySelector('.project-details')

  projectOpen[item].addEventListener('click', ()=>{
  alert('hi')
  })
})



const img = document.querySelector('.profileImg')
const header = document.querySelector('.header');
const openNavBtn = document.querySelector('.openbtn');
openNavBtn.addEventListener('click', openNav);

const closeNavBtn = document.querySelector('.closebtn');
closeNavBtn.addEventListener('click', closeNav);

function onScroll (){
  if (scrollY > 144 ){
    header.style.display = 'none'
  }else {
    header.style.display = 'flex'
  }

}

function openNav(){
  document.getElementById("mySidenav").style.width = "100%";
  closeNavBtn.style.opacity = "1";
}


function closeNav(){
  document.getElementById("mySidenav").style.width = "0";
  closeNavBtn.style.opacity = '0';
}
window.addEventListener('scroll', onScroll)