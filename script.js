const dino = document.getElementById('dino');
const obstacle = document.getElementById('obstacle');
const jumpBtn = document.getElementById('jumpBtn');

jumpBtn.addEventListener('click', () => {
  jump();
});

document.addEventListener('keydown', function (e) {
  if (e.code === 'Space') {
    jump();
  }
});

function jump() {
  if (!dino.classList.contains('jump')) {
    dino.classList.add('jump');

    setTimeout(function () {
      dino.classList.remove('jump');
    }, 300);
  }
}

obstacle.style.animation = "obstacleMove 2s infinite linear";

setInterval(function () {
  let obstacleLeft = obstacle.getBoundingClientRect().left;
  let dinoBottom = parseInt(window.getComputedStyle(dino).bottom);

  if (obstacleLeft < 100 && obstacleLeft > 0 && dinoBottom < 50) {
    alert("Game Over!");
    window.location.reload();
  }
}, 10);
