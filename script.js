let playerScore = 0;
let COMScore = 0;

const rockButton = document.querySelector('button[data-move="rock"]');
const paperButton = document.querySelector('button[data-move="paper"]');
const scissorsButton = document.querySelector('button[data-move="scissors"]');

const playerImg = document.querySelector('.display[data-player="player"] img');
const COMImg = document.querySelector('.display[data-player="COM"] img');

const playerScoreElement = document.querySelector('.score[data-player="player"]')
const COMScoreElement = document.querySelector('.score[data-player="COM"]')

const moveToImage = {
    "rock": "rock.svg",
    "paper": "paper.svg",
    "scissors": "scissors.svg"
};

rockButton.addEventListener('click', function () { makeMove(this.dataset.move) });
paperButton.addEventListener('click', function () { makeMove(this.dataset.move) });
scissorsButton.addEventListener('click', function () { makeMove(this.dataset.move) });

function restart() {
    playerImg.src = "question.svg";
    COMImg.src = "question.svg";

    playerScore = 0;
    COMScore = 0;

    playerScoreElement.textContent = playerScore;
    COMScoreElement.textContent = COMScore;
}

function makeMove(move) {


    const moves = ['rock', 'paper', 'scissors']
    let COMMove = moves[Math.floor(Math.random() * moves.length)];

    playerImg.src = moveToImage[move];
    COMImg.src = moveToImage[COMMove];




    // draw
    if (move == COMMove) {
        return;
    }

    // player wins
    if (move == "rock" && COMMove == "scissors" ||
        move == "scissors" && COMMove == "paper" ||
        move == "paper" && COMMove == "rock"
    ) {
        playerScore += 1;
    } else {
        COMScore += 1;
    }

    playerScoreElement.textContent = playerScore;
    COMScoreElement.textContent = COMScore;

    setTimeout(() => {
        if (playerScore == 5) {
            alert("You win!");
            restart();
        }
        if (COMScore == 5) {
            alert("You lose...");
            restart();
        }
    }, 100);

}