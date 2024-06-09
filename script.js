let openEl = document.querySelector('.closebtn');
let projectOpen = document.getElementById('svg');
let projectclose = document.getElementById('close-svg');
let projectElement = document.querySelector('.project-details')
function openNav(){
  document.getElementById("mySidenav").style.width = "100%";
  openEl.style.opacity = "1";

}


function closeNav(){
  document.getElementById("mySidenav").style.width = "0";
  openEl.style.opacity = "0";
}

for (let i = 1; i < projectOpen.length; i++){
  projectOpen[i].addEventListener("click", function(){
    alert("hi")
  })
}
