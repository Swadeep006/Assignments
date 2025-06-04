let score = JSON.parse(localStorage.getItem("score")) || {
  win: 0,
  lose: 0,
  tie: 0,
};
updateScoreElem();

let isAutoPlaying = false;
let intervalId;

function autoPlay() {
  if (!isAutoPlaying) {
    intervalId = setInterval(() => {
      const playermove = computermove();
      UpdateScore(playermove);
    }, 1000);
    isAutoPlaying = true;
  } else {
    clearInterval(intervalId);
    isAutoPlaying = false;
  }
}

document.querySelector(".js-rock-button").addEventListener("click", () => {
  UpdateScore("rock");
});
document.querySelector(".js-paper-button").addEventListener("click", () => {
  UpdateScore("paper");
});
document.querySelector(".js-scissors-button").addEventListener("click", () => {
  UpdateScore("scissors");
});
document.querySelector(".reset-score-button").addEventListener("click", () => {
  score.lose = 0;
  score.win = 0;
  score.tie = 0;
  updateScoreElem();
  localStorage.removeItem("score");
});
document.querySelector(".auto-play-button").addEventListener("click", () => {
  autoPlay();
  document.querySelector(".auto-play-button").innerHTML = "Stop Playing";
  isAutoPlaying = true;
});
document.querySelector(".auto-play-button").addEventListener("click", () => {
  autoPlay();
  document.querySelector(".auto-play-button").innerHTML = "Auto Play";
  isAutoPlaying = false;
});

document.body.addEventListener("keydown", (event) => {
  if (event.key === "r") {
    UpdateScore("rock");
  }
  if (event.key === "p") {
    UpdateScore("paper");
  }
  if (event.key === "s") {
    UpdateScore("scissors");
  }
  if (event.key === "a") {
    autoPlay();
  }
  if (event.key === "0") {
    score.lose = 0;
    score.win = 0;
    score.tie = 0;
    updateScoreElem();
    localStorage.removeItem("score");
  }
});

function UpdateScore(string) {
  let playermove = string;
  const computer_move = computermove();
  let result = "";
  if (playermove === "rock") {
    if (computer_move === "rock") {
      result = "You Tie.";
    } else if (computer_move === "paper") {
      result = "You lose.";
    } else if (computer_move === "scissors") {
      result = "You win.";
    }
  }
  if (playermove === "paper") {
    if (computer_move === "rock") {
      result = "You win.";
    } else if (computer_move === "paper") {
      result = "You Tie.";
    } else if (computer_move === "scissors") {
      result = "You lose.";
    }
  }
  if (playermove === "scissors") {
    if (computer_move === "rock") {
      result = "You lose.";
    } else if (computer_move === "paper") {
      result = "You win.";
    } else if (computer_move === "scissors") {
      result = "You Tie.";
    }
  }
  if (result === "You win.") {
    score.win += 1;
  } else if (result === "You lose.") {
    score.lose += 1;
  } else if (result === "You Tie.") {
    score.tie += 1;
  }
  localStorage.setItem("score", JSON.stringify(score));

  document.querySelector(".js-result").innerHTML = `${result}`;
  document.querySelector(".js-moves").innerHTML = ` You
  <img src="images/${playermove}-emoji.png" alt="rock-emoji" class="move-icon" />
  <img src="images/${computer_move}-emoji.png" alt="scissors" class="move-icon" />
  Computer`;

  updateScoreElem();

  // alert(` You chose ${playermove}.computer chose ${computer_move}, so ${result}
  // Wins : ${score.win} Lost : ${score.lose} Tie : ${score.tie}`);
}
function computermove() {
  const result = Math.random();
  let answer = "";
  if (result >= 0 && result < 1 / 3) {
    answer = "rock";
  } else if (result >= 1 / 3 && result < 2 / 3) {
    answer = "paper";
  } else if (result >= 2 / 3 && result <= 3) {
    answer = "scissors";
  }
  return answer;
}
function updateScoreElem() {
  document.querySelector(
    ".js-score"
  ).innerHTML = `Wins : ${score.win} Lost : ${score.lose} Tie : ${score.tie}`;
}
