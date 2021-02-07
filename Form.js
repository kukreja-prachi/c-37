class Form {
  constructor()
   {
    this.input = createInpute("name")
    this.button = createButton('play')
    this.greeting = createElement('h2')    
    
  }
   hide() {
     this.greeting.hide()
     this.button.hide()
     this.input.hide()

   }
  
  display(){
    var title = createElement('h2')
    title.html("Car Racing Game");
    title.position(130, 0);
    
 
    
    this.input.position(130, 160);
    this.button.position(250, 200);
     // => is called as arrow function which ensures that 'this' remains bound to the form object
     // arrow function bind the function to the original object which calls it
     this.button.mousePressed(()=>{
      this.input.hide();
      this.button.hide();


      player.name = input.value();
      
      playerCount+=1;
      player.index = playerCount
      player.update(name)
      player.updateCount(playerCount);
      
      this.greeting.html("Hello " + player.name )
      this.greeting.position(130, 160)
    });

  }
}
