
var canvas = document.getElementById("canvasGame");
var ctx = canvas.getContext("2d");
canvas.width = 512;
canvas.height = 480;
ctx.fillRect(0, 0, 512, 480);

var bgReady = false;
var bgImage = new Image();
bgImage.onload = function () {
    bgReady = true;
};
bgImage.src = "images/background.png";
var heroReady = false;
var heroImage = new Image();
heroImage.onload = function () {
    heroReady = true;
};
heroImage.src = "images/hero.png";
var monsterReady = false;
var monsterImage = new Image();
monsterImage.onload = function () {
    monsterReady = true;
};
monsterImage.src = "images/monster.png";
var hero = {
    speed: 256
};
var monster = {};
var monstersCaught = 0;
var keysDown = {};
addEventListener("keydown", function (key) {
    keysDown[key.keyCode] = true;
    switch(key.keyCode){
        case 37: case 39: case 38:  case 40:
        case 32: key.preventDefault(); break;
        default: break;
    }
}, false);
addEventListener("keyup", function (key) {
    delete keysDown[key.keyCode];

}, false);
var reset = function () {
    hero.x = canvas.width / 2;
    hero.y = canvas.height / 2;
    monster.x = 32 + (Math.random() * (canvas.width - 64));
    monster.y = 32 + (Math.random() * (canvas.height - 64));
};
var update = function (modifier) {
    if (38 in keysDown) {
        hero.y -= hero.speed * modifier;
    }
    if (40 in keysDown) {
        hero.y += hero.speed * modifier;
    }
    if (37 in keysDown) {
        hero.x -= hero.speed * modifier;
    }
    if (39 in keysDown) {
        hero.x += hero.speed * modifier;
    }
    if (
        hero.x <= (monster.x + 32)
        && monster.x <= (hero.x + 32)
        && hero.y <= (monster.y + 32)
        && monster.y <= (hero.y + 32)
    ) {
        ++monstersCaught;
        reset();
    }
};
var render = function () {
    if (bgReady) {
        ctx.drawImage(bgImage, 0, 0);
    }
    if (heroReady) {
        ctx.drawImage(heroImage, hero.x, hero.y);
    }
    if (monsterReady) {
        ctx.drawImage(monsterImage, monster.x, monster.y);
    }
    ctx.fillStyle = "rgb(250, 250, 250)";
    ctx.font = "24px Helvetica";
    ctx.textAlign = "left";
    ctx.textBaseline = "top";
    ctx.fillText("Kills: " + monstersCaught, 20, 20);
    ctx.fillText("Time: " + count, 20, 50);
    if(finished==true){
        ctx.fillText("Game over!", 200, 220);
    }

};
function getRandomArbitrary() {
    return Math.random() * (2000 - 1) + 1;
}

var moveMonster = function(){
    if(getRandomArbitrary() < 500){
        if(monster.x < canvas.width - 64){
            monster.x = monster.x+5;
            monster.x = monster.x+5;
            monster.x = monster.x+3;
            monster.x = monster.x+2;
            monster.x = monster.x+1;
        }else{
            monster.x = monster.x-5;
            monster.x = monster.x-5;
            monster.x = monster.x-3;
            monster.x = monster.x-2;
            monster.x = monster.x-1;
        }
    }else if(getRandomArbitrary() < 1000 && getRandomArbitrary() > 500){
        if(monster.y < canvas.height - 64){
            monster.y = monster.y+5;
            monster.y = monster.y+5;
            monster.y = monster.y+3;
            monster.y = monster.y+2;
            monster.y = monster.y+1;
        }else{
            monster.y = monster.y-5;
            monster.y = monster.y-5;
            monster.y = monster.y-3;
            monster.y = monster.y-2;
            monster.y = monster.y-1;
        }
    }else if(getRandomArbitrary() < 1500 && getRandomArbitrary() > 1000) {
        if(monster.y > 0){
            monster.y = monster.y-5;
            monster.y = monster.y-5;
            monster.y = monster.y-3;
            monster.y = monster.y-2;
            monster.y = monster.y-1;
        }else{
            monster.y = monster.y+5;
            monster.y = monster.y+5;
            monster.y = monster.y+3;
            monster.y = monster.y+2;
            monster.y = monster.y+1;
        }
    }else if(getRandomArbitrary() < 2000 && getRandomArbitrary() > 1500){
        if(monster.x > 0){
            monster.x = monster.x-5;
            monster.x = monster.x-5;
            monster.x = monster.x-3;
            monster.x = monster.x-2;
            monster.x = monster.x-1;
        }else{
            monster.x = monster.x+5;
            monster.x = monster.x+5;
            monster.x = monster.x+3;
            monster.x = monster.x+2;
            monster.x = monster.x+1;
        }
    }
}
var count = 30;
var finished = false;
var counter =function(){
    count=count-1;
    if (count <= 0)
    {
        clearInterval(counter);
        finished = true;
        count=0;
        monsterReady=false;
        heroReady=false;
    }
}

setInterval(moveMonster, 100);
var main = function () {
    update(0.02);
    render();
    requestAnimationFrame(main);
};
requestAnimationFrame = window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.msRequestAnimationFrame || window.mozRequestAnimationFrame;
reset();

function startGame(){
    main();
    setInterval(counter, 1000);
    document.getElementById("start").style.display="none";
}

function restartGame(){
    count = 30;
    finished = false;
    monsterReady=true;
    heroReady=true;
    monstersCaught = 0;
    reset();
}