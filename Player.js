class Player {
  constructor(){
    this.index = null;
    this.distance = 0;
    this.name = null
  }

  getCount(){
    var playerCountRef = database.ref('playerCount');
    playerCountRef.on("value",function(data){
      playerCount = data.val();
    })
  }

  updateCount(count){
    database.ref('/').update({
      playerCount: count
    });
  }

  update(){
    var playerIndex = "players/player" + this.index;
    database.ref(playerIndex).set({
      name:this.name,
      distance: this.distance
      
    });
  }
  //static funxtion can be called by the class themself rather than  by the objects of the class
  //this function will get all the player data and will store in in json in the database
  static getPlayerInfo(){
      var playerInfoRef = database.ref('players')
      playerInfoRef.on('value',(data)=>{
      allPlayers = data.val()//data.val will read the player info  in the database
      } )
  }
}
