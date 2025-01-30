let positionZ = -500; // Starting depth

document.addEventListener("wheel", (event) => {
    positionZ += event.deltaY * 0.5; // Move forward or backward
    document.querySelector(".corridor").style.transform = `translateZ(${positionZ}px)`;
});
