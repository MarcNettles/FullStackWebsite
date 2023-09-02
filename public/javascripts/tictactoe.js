// Marc Nettles 06/27/2022
//
// The intent of this project is to set up my own private
// web server which will host my public website containing
// my coding and webdev projects.
//
//
// Things I want to use: Back-end/Front-end separation, Bootstrap, NodeJS, ExpressJS, EJS, maybe try some reactJS


/* tictactoe.js handles the javascript for the rules of the game, determining a winner, and resetting the board */








/* Marc Nettles*/
/* CSCI 3308 */


// Moved inline calls to functions through <button onclick="function()"> into this javascript file by adding the eventListeners.
document.addEventListener('DOMContentLoaded', function (){

	// Creating buttons so we can add listeners to them to see if they've been clicked.
	const beginPlayButton = document.getElementById('beginPlayButton');
	const resetPlayButton = document.getElementById('resetPlayButton');
	const playButton = document.getElementById('playButton');
	const moveEnterInput = document.getElementById('moveInput')


	// Setup variables for game
	var table_ids = ["A1", "A2", "A3", "B1", "B2", "B3", "C1", "C2", "C3"]


	var board_state = [-1,-1,-1,-1,-1,-1,-1,-1,-1]



	var started = false


	var turn = 1 

	// Add listeners to the buttons
	beginPlayButton.addEventListener('click', begin_play);
	resetPlayButton.addEventListener('click', reset_play);
	playButton.addEventListener('click', play);
	moveEnterInput.addEventListener('onkeydown', moveEnter);

	// Helper functions
	function isEmpty(_str) 
	{
		return (!_str || 0 === _str.length)
	}


	function whose_move()
	{
		return this.turn
	}


	function toggle_move() 
	{
		this.turn = !this.turn
	}


	function game_started()
	{
		return this.started
	}

	// Start the game
	function begin_play()
	{
		if(started == false)
		{
			turn = 1;
					
			if((document.getElementById("player1_id").value == "") || (document.getElementById("player2_id").value == ""))
			{
				alert("Two player game, both the fields are mandatory.");
				return;
			}

			started = true;
			document.getElementById("player1_id").disabled = true;
			document.getElementById("player2_id").disabled = true;
			
			document.getElementById("player1_id").value += "  (X)";
			document.getElementById("player2_id").value += "  (O)";
			
			if(turn==1)
			{
				document.getElementById("turn_info").innerHTML = "Turn for: <b>X</b>";
			}
			else
			{
				document.getElementById("turn_info").innerHTML = "Turn for: <b>O</b>";
			}
			
		}
		else
		{
			alert("Already started. Please Reset Play to start again.");
		}
	}

	// Reset the gamee
	function reset_play()
	{
		if(started==false)
		{
			
		}
		else
		{
			document.getElementById("turn_info").innerHTML = "Game has not begun";
			
			document.getElementById("player1_id").value = "";
			document.getElementById("player1_id").disabled = false;
			
			document.getElementById("player2_id").value = "";
			document.getElementById("player2_id").disabled = false;
			
			document.getElementById("move_text_id").value = "";
			
			started = false;
			
			/* Reset the Board*/
			document.getElementById("A1").innerHTML = "A1";
			document.getElementById("A2").innerHTML = "A2";
			document.getElementById("A3").innerHTML = "A3";
			document.getElementById("B1").innerHTML = "B1";
			document.getElementById("B2").innerHTML = "B2";
			document.getElementById("B3").innerHTML = "B3";
			document.getElementById("C1").innerHTML = "C1";
			document.getElementById("C2").innerHTML = "C2";
			document.getElementById("C3").innerHTML = "C3";

			turn = 1;
			
			board_state = [-1,-1,-1,-1,-1,-1,-1,-1,-1];
			
		}
	}

	// Play a move
	function play() 
	{
		
		if(started == false)
		{
			alert("The game has not started.");
		}
		else
		{
			
			if(document.getElementById("move_text_id").value.match(/^(A1|A2|A3|B1|B2|B3|C1|C2|C3|a1|a2|a3|b1|b2|b3|c1|c2|c3)$/g))
			{
				
				/*  Check to make sure players can't override each others' moves*/
				if(document.getElementById(document.getElementById("move_text_id").value.toUpperCase()).innerHTML == "X" || document.getElementById(document.getElementById("move_text_id").value.toUpperCase()).innerHTML == "O")
				{
					alert("Invalid Move, Please Select an Empty Square.");
					return;
					
				}
				
				
				if(turn == 1)
				{
					
					
					switch(document.getElementById("move_text_id").value.toUpperCase())
					{
						case "A1":
							document.getElementById("A1").innerHTML = "X";
							board_state[0] = 1;
							break;
						
						case "A2":
							document.getElementById("A2").innerHTML = "X";
							board_state[1] = 1;
							break;
						
						case "A3":
							document.getElementById("A3").innerHTML = "X";
							board_state[2] = 1;
							break;
						
						case "B1":
							document.getElementById("B1").innerHTML = "X";
							board_state[3] = 1;
							break;
						
						case "B2":
							document.getElementById("B2").innerHTML = "X";
							board_state[4] = 1;
							break;
							
						case "B3":
							document.getElementById("B3").innerHTML = "X";
							board_state[5] = 1;
							break;
							
						case "C1":
							document.getElementById("C1").innerHTML = "X";
							board_state[6] = 1;
							break;
						
						case "C2":
							document.getElementById("C2").innerHTML = "X";
							board_state[7] = 1;
							break;
							
						case "C3":
							document.getElementById("C3").innerHTML = "X";
							board_state[8] = 1;
							break;
							
						default:
							break;
					}
					/*
					
					document.getElementById(document.getElementById("move_text_id").value).innerHTML = "X";
					*/
					
					
					turn = 0;
					document.getElementById("turn_info").innerHTML = "Turn for: <b>O</b>"
				}
				else
				{	
					
					
					switch(document.getElementById("move_text_id").value.toUpperCase())
					{
						case "A1":
							document.getElementById("A1").innerHTML = "O";
							board_state[0] = 0;
							break;
						
						case "A2":
							document.getElementById("A2").innerHTML = "O";
							board_state[1] = 0;
							break;
						
						case "A3":
							document.getElementById("A3").innerHTML = "O";
							board_state[2] = 0;
							break;
						
						case "B1":
							document.getElementById("B1").innerHTML = "O";
							board_state[3] = 0;
							break;
						
						case "B2":
							document.getElementById("B2").innerHTML = "O";
							board_state[4] = 0;
							break;
							
						case "B3":
							document.getElementById("B3").innerHTML = "O";
							board_state[5] = 0;
							break;
							
						case "C1":
							document.getElementById("C1").innerHTML = "O";
							board_state[6] = 0;
							break;
						
						case "C2":
							document.getElementById("C2").innerHTML = "O";
							board_state[7] = 0;
							break;
							
						case "C3":
							document.getElementById("C3").innerHTML = "O";
							board_state[8] = 0;
							break;
							
						default:
							break;
					}
					/*
					document.getElementById(document.getElementById("move_text_id").value).innerHTML = "O";
					*/
					turn = 1;
					document.getElementById("turn_info").innerHTML = "Turn for: <b>X</b>"
				}
				
				
				
				
				
				
				/* Add Code for Checking Game State: X wins*/
				if((board_state[0] == 1) && (board_state[1] == 1) && (board_state[2] == 1))
				{
					/* X wins */
					alert("Winner is: X");
					reset_play();
				}
				if((board_state[3] == 1) && (board_state[4] == 1) && (board_state[5] == 1))
				{
					/* X wins */
					alert("Winner is: X");
					reset_play();
				}
				if((board_state[6] == 1) && (board_state[7] == 1) && (board_state[8] == 1))
				{
					/* X wins */
					alert("Winner is: X");
					reset_play();
				}
				if((board_state[0] == 1) && (board_state[3] == 1) && (board_state[6] == 1))
				{
					/* X wins */
					alert("Winner is: X");
					reset_play();
				}
				if((board_state[1] == 1) && (board_state[4] == 1) && (board_state[7] == 1))
				{
					/* X wins */
					alert("Winner is: X");
					reset_play();
				}
				if((board_state[2] == 1) && (board_state[5] == 1) && (board_state[8] == 1))
				{
					/* X wins */
					alert("Winner is: X");
					reset_play();
				}
				if((board_state[0] == 1) && (board_state[4] == 1) && (board_state[8] == 1))
				{
					/* X wins */
					alert("Winner is: X");
					reset_play();
				}
				if((board_state[2] == 1) && (board_state[4] == 1) && (board_state[6] == 1))
				{
					/* X wins */
					alert("Winner is: X");
					reset_play();
				}
				
				
				
				
				/* Add Code for Checking Game State: O wins*/
				if((board_state[0] == 0) && (board_state[1] == 0) && (board_state[2] == 0))
				{
					/* O wins */
					alert("Winner is: O");
					reset_play();
				}
				if((board_state[3] == 0) && (board_state[4] == 0) && (board_state[5] == 0))
				{
					/* O wins */
					alert("Winner is: O");
					reset_play();
				}
				if((board_state[6] == 0) && (board_state[7] == 0) && (board_state[8] == 0))
				{
					/* O wins */
					alert("Winner is: O");
					reset_play();
				}
				if((board_state[0] == 0) && (board_state[3] == 0) && (board_state[6] == 0))
				{
					/* O wins */
					alert("Winner is: O");
					reset_play();
				}
				if((board_state[1] == 0) && (board_state[4] == 0) && (board_state[7] == 0))
				{
					/* O wins */
					alert("Winner is: O");
					reset_play();
				}
				if((board_state[2] == 0) && (board_state[5] == 0) && (board_state[8] == 0))
				{
					/* O wins */
					alert("Winner is: O");
					reset_play();
				}
				if((board_state[0] == 0) && (board_state[4] == 0) && (board_state[8] == 0))
				{
					/* O wins */
					alert("Winner is: O");
					reset_play();
				}
				if((board_state[2] == 0) && (board_state[4] == 0) && (board_state[6] == 0))
				{
					/* O wins */
					alert("Winner is: O");
					reset_play();
				}
			}
			else
			{
				alert("Invalid Move. Please select either A1, A2, A3, B1, B2, B3, C1, C2, or C3.");
			}
			document.getElementById('move_text_id').value ='';
			document.getElementById("move_text_id").focus();
		}
		
		
		
		
	}

	// Allows move to be played by pressing enter instead of clicking the Play button.
	function moveEnter(event) 
	{		
		if(event.keyCode == 13) {
			event.preventDefault()
			play()
		}

	}
});