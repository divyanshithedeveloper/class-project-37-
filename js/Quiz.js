class Quiz {
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

  async start(){
    if(gameState === 0){
      contestant = new Contestant();
      var contestantCountRef = await database.ref('contestantCount').once("value");
      if(contestantCountRef.exists()){
        contestantCount = contestantCountRef.val();
        contestant.getCount();
      }
      question = new Question()
      question.display();
    }
  }

  play(){
    //write code here to hide question elements
    question.hide();
    //write code to change the background color here
    background("yellow")
    //write code to show a heading for showing the result of Quiz
      text("RESULT!!!",100,200)
    //call getContestantInfo( ) here
    Contestant.getPlayerInfo()

    //write condition to check if contestantInfor is not undefined
    if(allContestants!==undefined){
      var y=300;
      for(var i in allContestants){
        if(allContestants[i].answer==="2"){
          fill("green")
        }else{
          fill("red");
        }
        text(allContestants[i].name,100,y)
        text(allContestants[i].answer,100,y+10)
        y=y+50
        
      }
}
    //write code to add a note here

    //write code to highlight contest who answered correctly
    
  }

}
