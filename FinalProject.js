function toggleMobileMenu () {
    document.getElementById("mobileMenu").classList.toggle("hidden");
    document.getElementById("mobileMenu").classList.toggle("flex");

    document.getElementById("mobileMenuOverlay").classList.toggle("hidden");
    document.getElementById("mobileMenuOverlay").classList.toggle("block");
}


function toggleTextOutline (e) {
  e.classList.toggle("text-outline-white");
  document.getElementById("text2").classList.toggle("text-accent-700");

  let text1ClassList = document.getElementById("text1").classList;
  text1ClassList.toggle("text-accent-700");
  text1ClassList.toggle("text-transparent");
  text1ClassList.toggle("text-outline-accent");

  let text1OutlineClassList = document.getElementById("text1Outline").classList;
  text1OutlineClassList.toggle("text-outline-white");
  text1OutlineClassList.toggle("text-outline-none");
}

document.addEventListener('mousemove', mouseMoveFunc);
function mouseMoveFunc(e) {
  const depth = 15;
  const moveX = ((e.pageX)-(window.innerWidth/2))/depth;
  const moveY = ((e.pageY)-(window.innerHeight/2))/depth;
  gsap.to("#avatar", {
    duration: 0.2,
    x: moveX,
    y: moveY,
    ease: "slow",
    stagger: 0.008,
    overwrite: true
  });
}

function toggleButton (e) {
  e.classList.toggle("text-outline-none");
  document.getElementById("button2").classList.toggle("bg-accent-500");

  let text1ClassList = document.getElementById("button1").classList;
  text1ClassList.toggle("bg-accent-500");
}