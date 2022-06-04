
console.log("hello there! wanna play?");

alert("Welcome to Paper, Rock, Scissors game! \n instructions:\nFirst 'open' the developers tools\nIf you are using windows/Linux/chromeOS type: CTRL+SHIFT+J\nIf you are using Mac type: Command + 'Option' + J\nThen you start the 'game' by choosing a number from 1 to 3 each representing a move:\n1-Rock\n2-Paper\n3-Scissors");

const selections =["Rock","Paper","Scissors"]; //declaration of our input options
let palyersScore = 0,
    comScore = 0;

function game(){
    //to make a game go on for 5 laps
    for(let i = 0; i<=5; i++){
        player= playerSelection(); 
        comp = compSelection();
        result = playGround(player, comp);
        console.log(`Your score: ${palyersScore}`);
        console.log(`Computer's score: ${comScore}`);
        alert(`your score: ${palyersScore}, computer's score: ${comScore}`)
        if (i <5){ 
            console.log(`>>>>>>>>>>>>> round ${i+1}:`)
        }else{ 
            console.log(">>>>>>>>>>>>> Results:")
        }
    }
    winner(palyersScore,comScore);
}

function compSelection(){ 
    let selectionidx = Math.floor(Math.random() * selections.length);

    console.log(`Computer\'s selection is: ${selections[selectionidx]}`)
    alert(`Computer\'s selection is: ${selections[selectionidx]}`);
    return (selectionidx);
}

function playerSelection(){
    let yourSelection =window.prompt("Choose a number: 1-Rock 2-Paper 3-Scissors?");
    //user input validation
    while (validate(yourSelection) == false || yourSelection.length>1 ){
        yourSelection =window.prompt("Please enter a valid number from 1 to 3: 1-Rock 2-Paper 3-Scissors?");     
    }
    yourSelection-- // decrease user input by 1 to align with the array indicies
    console.log(`your selection is: ${selections[yourSelection]}`);
    return(yourSelection);
}

function playGround(Pidx, Cidx){
    // compare user and cmoputer selections based on the index from the selections array
    if (Pidx == 0) { //0=>rocks
        if (Cidx == 0) {
            return "Draw!";
        } else if (Cidx == 1) { //1=> papper
            comScore++
            return "Computer wins!";
        } else if (Cidx == 2){  //2=>scissors
            palyersScore++
            return "User wins!";
        }
    } else if (Pidx == 1) {
        if (Cidx == 0) {
            palyersScore++
            return "User wins!";
        } else if (Cidx == 1) {
            return "Draw!";
        } else if (Cidx == 2) {
            comScore++
            return "Computer wins!";
        }
    } else if (Pidx == 2)  {
        if (Cidx == 0) {
            comScore++
            return "Computer wins!";
        } else if (Cidx == 1) {
            palyersScore++
            return "User wins!";
        } else if (Cidx == 2) {
            return "Draw!";
        }
    }
    
    }

function winner(palyersScore,comScore){
    if (palyersScore>comScore){
        console.log("AND THE WINNNNER IS ......**DRUMS**....");
        console.log("YOUU!!!")
        alert("Congraaats You just WON against JavaScript Math.random() method!!!!");
    }else if (palyersScore==comScore){
        console.log("DRAW!!");
        alert("Draw!! try again by refreshing the page :)");

    }else{
        console.log("LoOoOOoOoOoSSSEEERRRRRRR");
        alert("LoOoOOoOoOoSSSEEERRRRRRR!, try your luck again by refreshing the page");
    }
}
    
function validate(yourSelection){
    let regex= /[1-3]/g; //to check if the user input is only a number between 1 and 3 inclusive
    let result = regex.test(yourSelection); //returns true or false
    return(result);
}

game(); //to initialaize the game
