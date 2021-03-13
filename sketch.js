var database;
let gameState=0;
let playerCount,form,player,gamea,allPlayers;


function setup(){
    createCanvas(400,400);
    database=firebase.database();
    game=new Game();
    game.getState();
    game.start();

}

function draw(){
  
    if (playerCount===4) {
    game.update(1);
    console.log(gameState);
    }
    if (gameState===1) {
        clear();
        game.play();
    }
}

