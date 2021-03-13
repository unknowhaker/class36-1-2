   class Game{
    constructor(){

    }

    getState(){
        var gameStateREF=database.ref('gameState');
        gameStateREF.on("value",function(data){
            gameState = data.val();            
        });
    }

    update(state){
        database.ref('/').update({
            gameState:state
        });
    }

    async start(){
        if(gameState===0){
            player = new Player();
            var playerCountREF=await database.ref('playerCount').once("value");
            if (playerCountREF.exists()) {
                playerCount=playerCountREF.val();
                player.getCount();
            }
            form=new Form();
            form.display();
        }      
    }
    play(){
        form.hide();
        textSize(50);
        text("the game is about to start",150,100);
        Player.getPlayerInfo();
        if (allPlayers!==undefined) {
            let posy=150;
            for(var p in allPlayers){
                textSize (15);
                text(allPlayers[p].name+":"+allPlayers[p].distance,120,posy);
                posy+=20
            }                
            
        }
        if (keyDown(UP_ARROW)&&player.index!==null) {
            player.distance+=10;
            player.updateName()
        }
    }
}