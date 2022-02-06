/*
 * sketch_03
 * ep_03 -> more trigonometry
 * https://www.youtube.com/watch?v=-ayh6oEtjbA
 */

window.onload = function() {
  const canvas = document.getElementById("canvas"),
    context = canvas.getContext("2d"),
    width = canvas.width = window.innerWidth,
    height = canvas.height = window.innerHeight;

  let centerX = width * .5,
    centerY = height * .5,
    // baseRadius = 100,
    baseAlpha = 0.5,
    // offset = 50,
    offset = 0.5,
    speed = 0.1,
    angle = 0;

  render();

  function render() {
    // let radius = baseRadius + Math.sin(angle) * offset;
    let alpha = baseAlpha + Math.sin(angle) * offset;

    context.fillStyle = "rgba(0, 0, 0, " + alpha + ")";
    context.clearRect(0, 0, width, height);
    context.beginPath();
    context.arc(centerX, centerY, 100, 0, Math.PI * 2, false);
    context.fill();
    angle += speed;

    requestAnimationFrame(render);
  };
};
