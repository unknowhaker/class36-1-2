class Player{
    constructor(){
        this.index=null;
        this.distance=0;
        this.name=null;
    }
    
    getCount(){
        var playerCountREF=database.ref('playerCount')
        playerCountREF.on("value",(data) => {
            playerCount = data.val();
        });
    }

    updateCount(count){
        database.ref('/').update({
            playerCount:count
        });
    }
    updateName(){
        var playerIndex = "players/player"+this.index;
        database.ref(playerIndex).set({
            name:this.name,
            distance:this.distance
        });
    }
    static getPlayerInfo(){
        var playerNameref=database.ref('players')
        playerNameref.on("value",(data) => {
            allPlayers= data.val();
        })
    }
}




