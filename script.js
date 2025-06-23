document.addEventListener('DOMContentLoaded', () => {
  const image = document.getElementById('movingImage');
  let x = 0;
  let y = 0;
  let dx = 2;
  let dy = 2;

  function animate() {
    const screenWidth = window.innerWidth;
    const screenHeight = window.innerHeight;
    const imageWidth = image.clientWidth;
    const imageHeight = image.clientHeight;

    x += dx;
    y += dy;

    if (x + imageWidth > screenWidth || x < 0) {
      dx = -dx;
    }

    if (y + imageHeight > screenHeight || y < 0) {
      dy = -dy;
    }

    image.style.left = `${x}px`;
    image.style.top = `${y}px`;

    requestAnimationFrame(animate);
  }

  animate();
});
