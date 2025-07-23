const btn_left = document.getElementById("btn_left");
const btn_right = document.getElementById("btn_right");
const btn_up = document.getElementById("btn_up");
const btn_down = document.getElementById("btn_down");
const btn_reset = document.getElementById("btn_reset");

const ball = document.getElementById("ball");

let ball_X = 0;
let ball_Y = 0;
let moveSpd = 5;
function Reset_Pos() {
    ball_X = ball_Y = 0;
    ball.style.top = ball_Y + "px";
    ball.style.left = ball_X + "px";
    ball.innerText = ball_X + ", " + ball_Y;
    }

function Move_Pos(left_inc, top_inc) {
    ball_X += left_inc;
    ball_Y += top_inc;
    ball.style.left = ball_X + "px";
    ball.style.top = ball_Y + "px";
    ball.innerText = ball_X + ", " + ball_Y;
}

btn_left.addEventListener("click", function() {
    if (ball_X >= 5 && ball_X <= 870) {
        Move_Pos(-moveSpd, 0);
    }
});
btn_right.addEventListener("click", function() {
    if (ball_X >= 0 && ball_X <= 865) {
        Move_Pos(moveSpd, 0);
    }
});
btn_up.addEventListener("click", function() {
    if (ball_Y >= 5 && ball_Y <= 870) {
        Move_Pos(0, -moveSpd);
    }
});
btn_down.addEventListener("click", function() {
    if (ball_Y >= 0 && ball_Y <= 865) {
        Move_Pos(0, moveSpd);
    }
});
btn_reset.addEventListener("click", function() {
    Reset_Pos();
});

document.addEventListener("keydown", function(key_event) {
    console.log(key_event);
    switch (key_event.code) {
        case "KeyA": 
            if (ball_X >= 5 && ball_X <= 870) {
                Move_Pos(-moveSpd, 0);
            }
            break;
        case "KeyD":
            if (ball_X >= 0 && ball_X <= 865) {
                Move_Pos(moveSpd, 0);
            }
            break;
        case "KeyW":
            if (ball_Y >= 5 && ball_Y <= 870) {
                Move_Pos(0, -moveSpd);
            }
            break;
        case "KeyS":
            if (ball_Y >= 0 && ball_Y <= 865) {
                Move_Pos(0, moveSpd);
            }
            break;
        case "KeyR": 
            Reset_Pos();
            break;
    }
});

const img_pineapple = document.getElementById("img_pineapple");
const score_count = document.getElementById("score_count");
const POP_audio = new Audio("audio/RibhavAgrawal_Pixabay-WATER_SPLASH.mp3");

function get_random(min, max) {
    return Math.round(Math.random() * (max - min)) + min;
    /****************************************************************************************************\ 
    | Math is a liabary, 
    |   random() is a function in that libary, which gives a value of '0' to "0.999...".
    |   round() is a function in that libary, which rounds the value down to a whole number.
    \****************************************************************************************************/
}
function move_pineapple() {
    img_pineapple.style.display = "block";
    img_pineapple.classList.remove("differ_click");
    img_pineapple.classList.add("rotA");
    img_pineapple.style.top = get_random(12, 48) + "vw";
    img_pineapple.style.left = get_random(12, 48) + "vw";
}
let score = 0;
function WhackIt() {
    score++;
    POP_audio.play();
    img_pineapple.classList.add("differ_click");
    img_pineapple.classList.remove("rotA");
    score_count.innerHTML = "Whack-It Count: " + score;
    console.log("Count | " + score);
}

setInterval(move_pineapple, 1550);
img_pineapple.addEventListener("click", WhackIt);