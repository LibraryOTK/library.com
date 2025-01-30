let scrollPosition = 0;

window.addEventListener('scroll', () => {
  scrollPosition = window.scrollY;

  // Adjust door placement dynamically
  const doors = document.querySelectorAll('.door');
  doors.forEach((door, index) => {
    const zOffset = 1200 + (index * 200) - (scrollPosition / 2);
    const yRotation = (index % 2 === 0 ? -15 : 15); // Alternate rotation for left and right
    door.style.transform = `translateZ(${zOffset}px) rotateY(${yRotation}deg)`;
  });
});
