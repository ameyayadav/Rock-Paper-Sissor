let count = 0;
let win = 0;

function game(buttonvalue) {
    /////Player 1 
    //Takes function parameter =(buttonvalue) to decide which path to be selected /////

    let player1Path = "";

    if (buttonvalue == 1) {
        player1Path = "./image/rock.png";
    } else if (buttonvalue == 2) {
        player1Path = "./image/paper.jfif";

    } else if (buttonvalue == 3) {
        player1Path = "./image/sissor.jfif";

    }

    // Change the image of player 1//
    document.getElementById("player1").setAttribute("src", player1Path);


    //Player 2///////

    // Generate a random number 1-3. based on this number select a image path//
    var player2Num = Math.floor(Math.random() * 3) + 1;
    var player2Path = "";
    if (player2Num == 1) {
        player2Path = "./image/rock.png";
    } else if (player2Num == 2) {
        player2Path = "./image/paper.jfif";

    } else if (player2Num == 3) {
        player2Path = "./image/sissor.jfif";

    }

    // Change the image of player 2//
    document.getElementById("player2").setAttribute("src", player2Path);

    //cal the result of the game//
    var result = "";
    //buttonvalue corresponds to player1 and player2Num corresponds to player2
    if (buttonvalue == 1 && player2Num == 2) {
        result = "Player 2 wins";
        count++;
    } else if (buttonvalue == 2 && player2Num == 3) {
        result = "player2 wins";
        count++;
    } else if (buttonvalue == 3 && player2Num == 1) {
        result = "Player 2 wins";
        count++;
    } else if (buttonvalue == 2 && player2Num == 1) {
        result = "Player 1 wins";
        win++;
    } else if (buttonvalue == 3 && player2Num == 2) {
        result = "Player 1 wins";
        win++;
    } else if (buttonvalue == 1 && player2Num == 3) {
        result = "Player 1 wins";
        win++;
    } else if (buttonvalue == player2Num) {
        result = " It's a Draw";

    }
    document.getElementById("demo").innerHTML = result;
    document.getElementById("winner").innerHTML = count;
    document.getElementById("chicken dinner").innerHTML = win;

}