let gameSeq = [];
let userSeq = [];
let btns = ["red", "yellow", "green", "purple"];
let started = false;
let level = 0;
let highestScore = 0;
let gameCount = 0;

let h2 = document.querySelector("h2")
document.addEventListener("keypress", function () {
    if (!started) {
        console.log("Game is started");
        started = true;
        LevelUp();
    }
});

// Flash background for game sequence
function gameFlash(btn) {
    btn.classList.add("flash");
    setTimeout(function () {
        btn.classList.remove("flash");
    }, 250);
}

function btnFlash(btn) {
    btn.classList.add("userflash");
    setTimeout(function () {
        btn.classList.remove("userflash");
    }, 250);
}

// Level up function
function LevelUp() {
    userSeq = []; // Clear user sequence
    level++;
    h2.innerText = `Level ${level}`;
    let randIdx = Math.floor(Math.random() * 4);
    let randColor = btns[randIdx];
    let randbtn = document.querySelector(`.${randColor}`);
    gameSeq.push(randColor);
    console.log(gameSeq);

    gameFlash(randbtn);
}

// Check user answer
function checkAns(idx) {
    if (userSeq[idx] == gameSeq[idx]) {
        if (userSeq.length == gameSeq.length) {
            setTimeout(LevelUp, 1000);
        }
    } else {
        // Update highest score if current score (level) is greater
        if (level > highestScore) {
            highestScore = level;
        }
        gameCount++; // Increment game count

        h2.innerHTML = `Game over! Your score is <b>${level}</b>. <br> Please press any key to start again`;
        
        // Display highest score after 3 or more games
        if (gameCount >= 3) {
            h2.innerHTML += `<br>Highest score: <b>${highestScore}</b>`;
        }
        
        document.querySelector("body").style.backgroundColor = "red";
        setTimeout(() => {
            document.querySelector("body").style.backgroundColor = "white";
        }, 250);
        
        reset();
    }
}

// Button press handler
function btnPress() {
    console.log(this);
    let btn = this;
    btnFlash(btn);
    let userColor = btn.getAttribute("id");
    userSeq.push(userColor);

    checkAns(userSeq.length - 1);
}

let allBtns = document.querySelectorAll(".btn");
for (let btn of allBtns) {
    btn.addEventListener("click", btnPress);
}

// Reset game function
function reset() {
    started = false;
    gameSeq = [];
    userSeq = [];
    level = 0;
}
