function disable() {
    document.getElementById("rock").disabled = true;
    document.getElementById("paper").disabled = true;
    document.getElementById("scissor").disabled = true;
    console.log("Game Buttons disabled");
}


function StartGame() {
    document.getElementById("rock").disabled = false;
    document.getElementById("paper").disabled = false;
    document.getElementById("scissor").disabled = false;
    console.log("Game buttons enabled");
}

function UserWin() {
    $('#result').append(
        `<table class="table">
          <tr>
            <th>win</th>
            <th></th>
          </tr>
        </table>`
    )

}

function ComputerWin() {
    $('#result').append(
        `<table class="table">
          <tr>
            <th></th>
            <th>win</th>
          </tr>
        </table>`
    )
}

function compare(computerchecked, userentry) {

    switch (userentry) {

        case 'rock':
            if (computerchecked === 'scissor') {
                alert("User Wins")
                UserWin();
            } else if (computerchecked === 'rock') {
                alert("It's a draw")
            } else {
                alert("Computer Wins");
                ComputerWin();
            }
            break;

        case 'paper':
            if (computerchecked === 'rock') {
                alert("User Wins")
                UserWin();
            } else if (computerchecked === 'paper') {
                alert("It's a draw");
            } else {
                alert("Computer Wins");
                ComputerWin();
            }
            break;

        case 'scissor':
            if (computerchecked === 'paper') {
                alert("User Wins");
                UserWin();
            } else if (computerchecked === 'scissor') {
                alert("It's a draw")
            } else {
                alert("Computer Wins")
                ComputerWin();
            }
            break;
    }

}

function SelectItem() {
    var option = Math.floor((Math.random() * 3) + 1);
    if (option === 1)
        console.log("Rock")
    else if (option === 2)
        console.log("Paper")
    else
        console.log("Scissors")
    return option;
}

$('.btngame').click(function () {
    var opt = SelectItem();
    var computerchecked = ""

    if (opt == 1)
        computerchecked = "rock";
    else if (opt == 2)
        computerchecked = "paper";
    else
        computerchecked = "scissor"

    compare(computerchecked, this.id)

});

$('#singleP').on('click', function () {
    StartGame();
    $('#result').append(
        `<table class="table">
          <tr>
            <th>Player Score</th>
            <th>Computer Score</th>
          </tr>
        </table>`
    )

})

$('#multyP').on('click', function () {
    StartGame();
})