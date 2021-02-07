class Game {
  constructor(){}
  
  getState(){
    var gameStateRef  = database.ref('gameState');
    gameStateRef.on("value",function(data){
       gameState = data.val();
    })
   
  }

  update(state){
    database.ref('/').update({
      gameState: state
    });
  }
   
  
  start(){
    if(gameState === 0){
      player = new Player();
      player.getCount();
      form = new Form()
      form.display();
    }
  }

  play(){
    form.hide()
    textSize(30)
    text("gameStart" , 120 , 100)
    Player.getPlayerInfo()
    if(allPlayers!==undefinied){

      var displayPosition = 130
      // looping through an arry
      for(var plr in allPlayers ){
        if(plr==="player"+player.index){
          fill("red")
        else
          fill("black");
      
       displayPosition += 20
       textSize(15)
       text(allPlayers[plr].name + ": " + allPlayers[plr].distance, 120,display_position)
      }
    }
   if(keyDowm (UP_ARROW)&& player.index!==null){
     player.distance+=50
     player.update()
   }
  }
}
