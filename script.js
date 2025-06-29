const dino = document.getElementById('dino');
const obstacle = document.getElementById('obstacle');

document.addEventListener('keydown', function (e) {
  if (e.code === 'Space') {
    jump();
  }
});

function jump() {
  if (dino.classList != 'jump') {
    dino.classList.add('jump');

    setTimeout(function () {
      dino.classList.remove('jump');
    }, 300);
  }
}

setInterval(function () {
  let obstacleLeft = parseInt(window.getComputedStyle(obstacle).getPropertyValue("left"));
  let dinoTop = parseInt(window.getComputedStyle(dino).getPropertyValue("top"));

  if (obstacleLeft < 80 && obstacleLeft > 0 && dinoTop >= 150) {
    alert("Game Over!");
  }
}, 10);

// animate obstacle
obstacle.style.animation = "obstacleMove 2s infinite linear";
