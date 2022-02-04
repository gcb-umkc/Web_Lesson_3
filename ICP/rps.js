

//Defining static arrays
let BUTTONS = ["paper", "rock", "scissors"];
let plays = ["paper.png", "rock.png", "scissors.png"];

//Changes the UI to result a user win, loss, or tie
function displayResults(selection, win){
    if(win == 1){
        document.getElementById("announce").innerHTML = "You win!";
        document.getElementById(BUTTONS[selection]).style.backgroundColor = "yellow";
    }
    if(win == 0){
        document.getElementById("announce").innerHTML = "You lose!";
        document.getElementById(BUTTONS[selection]).style.backgroundColor = "red";
    }
    if(win == 2){
        document.getElementById("announce").innerHTML = "You tie!";
    }
}

//Random play generator
function getRandomPlay(){
    return Math.floor(Math.random() * 3);
}

//Resets the game display
function resetDisplay(){
    for(let i = 0; i < 3; i++){
        document.getElementById(BUTTONS[i]).style.backgroundColor = "white";
    }
}

//Determines, given the player selection and the computer play
//If the game is a loss, a win, or a tie for the player
//Returning 0, 1, or 2 for the corresponding result
function getIfWin(selection, computerPlay){
    let win = 0;

    //Win or loss
    switch (selection){
        case 0:
            //Paper
            if(computerPlay == 1){ win = 1; }
            break;
        case 1:
            //Rock
            if(computerPlay == 2){ win = 1; }
            break;
        case 2:
            //Scissors
            if(computerPlay == 0){ win = 1; }
            break;
        default:
            break;
    }
    //Tie
    if(selection == computerPlay){
        win = 2;
    }
    return win;
}

//Replaces the announcement with the play
function choosePlay(selection){
    //Resets Game
    resetDisplay();

    //Generates computer play
    let computerPlay = getRandomPlay();
    document.getElementById("response").src = plays[computerPlay];

    //Returns result of game and displays it
    let win = getIfWin(selection, computerPlay);
    displayResults(selection, win);
}

//Detects user input for each play selection
document.getElementById("paper").onclick =
    function(){choosePlay(0)};

document.getElementById("rock").onclick =
    function(){choosePlay(1)};

document.getElementById("scissors").onclick =
    function(){choosePlay(2)};

