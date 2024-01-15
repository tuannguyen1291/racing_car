let start_btn = document.getElementById('start-game')
start_btn.addEventListener('click', initializeGame)

let reset_btn = document.getElementById('restart-game')
reset_btn.addEventListener('click', resetGame)

let red_car = document.getElementById('red-car')
let yellow_car = document.getElementById('yellow-car')

var red_pos = 0
var yellow_pos = 0

function initializeGame() {
    // Traffic light countdown
    let countdown_3 = document.getElementById('light-1')
    let countdown_2 = document.getElementById('light-2')
    let countdown_1 = document.getElementById('light-3')

    countdown_3.style.backgroundColor = 'red'
    setTimeout(function () {
        countdown_2.style.backgroundColor = 'yellow'
        setTimeout(function () {
            countdown_1.style.backgroundColor = 'green'
        }, 1000)
    }, 1000)
}

// Credit to Stack Overflow

document.addEventListener("keydown", (e) => {
    const key = e.key;
    if (key == 'd' && yellow_pos < 1170) {
        yellow_car.style.left = yellow_pos + 5 + 'px';
        yellow_pos += 5
    }
    if (key == 'ArrowRight' && red_pos < 1170) {
        red_car.style.left = red_pos + 5 + 'px';
        red_pos += 5
    }
});

function resetGame() {
    // Traffic light back to white (rhyme)
    let traffic_light = document.getElementsByClassName('light')
    for (var i = 0, len = traffic_light.length; i < len; i++) {
        traffic_light[i].style["background-color"] = 'white';
    }

    yellow_car.style.left = '0px'
    red_car.style.left = '0px'
    
    yellow_pos = 0
    red_pos = 0
}

// Xe rung
// Xăng giảm