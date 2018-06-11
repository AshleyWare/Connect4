// javascript


//Player1 is active
var player = '1'
var player1color = 'red'
var player2color = 'black'
//Player 1 selects a column (1-7)
$('.column').onclick('click', function(){
	$(this).css('background','red');
  // if column has at least one empty cell 
  	 if(document.getElementByClassName('.cell').style.background == "grey"){
  	 	document.getElementByClassName('.cell').style.background = "red";
  	 }
 	 // get lowest empty cell location
 	 $('.cell')
	 // create chip with player color
 	 // place chip in location (1)
 	 //look at neighbor cells and get chip color and location an direction freom current chip
 	 	//if one neighbor matches color  (2)
 	    	//look at neighbor in same direction
 	     		//if next neighbor matches color 
 	      			//look at neighbor in same direction (3)
 	        			//if next neighbor matches color 
 	        				//look at neighbor in same direction (4)
 	       						//Game over player one wins
 	       				//else toggle to player 2
 	        	//else toggle to player 2
 	       //else toggle to player 2
 	    //else toggle to player 2
 	    player = '2'
  // else if the column has no empty cells
	 //emit message to player 1 that they need to pick again
	 //else if no available cells
	 //game over, cat game
});