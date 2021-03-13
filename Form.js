class Form{
    constructor(){
        this.input = createInput("name");
        this.button=createButton("play");
        this.greeting = createElement('h1');
    }
    display(){
        var title=createElement('h2');
        title.html("CAR RACING GAME");
        title.position(150,50);
        
        this.input.position(150,150);
        
        this.button.position(150,250);
        this.button.mousePressed(() => {
            this.input.hide();
            this.button.hide();
           
            player.name = this.input.value();
            this.greeting.html("Welcome "+player.name);
            playerCount+=1;
            player.index=playerCount;
            player.updateCount(playerCount);
            player.updateName();
        })
    }
    hide(){
        this.input.hide();
        this.button.hide();
        this.greeting.hide();
    }
}