class Player {

    constructor(name, symbol, winner, point) {
        this.name = name;
        this.symbol = symbol;
        this.winner = winner;
        this.point = point;
    }

    getSymbol() {
        return this.symbol;
    }
    getName() {
        return this.name;
    }
    setWinner(y) {
        this.winner = y;
    }
    getWinner() {
        return this.winner;
    }
    addPoint() {
        this.point++;
    }
    getPoint() {
        return this.point;
    }


}


var tab = [];
tab[0] = [$('#a'), $('#b'), $('#c')];
tab[1] = [$('#a2'), $('#b2'), $('#c2')];
tab[2] = [$('#a3'), $('#b3'), $('#c3')];

var turn = 0;

var playerX = new Player("Adrian", "X", false, 0);
var playerO = new Player("Adam", "O", false, 0);


function check(symbol) { //Funkcja wykonuje 2 rzeczy! ZLE!
    if (tab[0][0].text() === `${symbol}` && tab[0][1].text() === `${symbol}` && tab[0][2].text() === `${symbol}`) {
        tab[0][0].css("background", "yellow");
        tab[0][1].css("background", "yellow");
        tab[0][2].css("background", "yellow");
        return true;

    } else if (tab[1][0].text() === `${symbol}` && tab[1][1].text() === `${symbol}` && tab[1][2].text() === `${symbol}`) {
        tab[1][0].css("background", "yellow");
        tab[1][1].css("background", "yellow");
        tab[1][2].css("background", "yellow");
        return true;

    } else if (tab[2][0].text() === `${symbol}` && tab[2][1].text() === `${symbol}` && tab[2][2].text() === `${symbol}`) {
        tab[2][0].css("background", "yellow");
        tab[2][1].css("background", "yellow");
        tab[2][2].css("background", "yellow");
        return true;

    } else if (tab[0][0].text() === `${symbol}` && tab[1][1].text() === `${symbol}` && tab[2][2].text() === `${symbol}`) {
        tab[0][0].css("background", "yellow");
        tab[1][1].css("background", "yellow");
        tab[2][2].css("background", "yellow");
        return true;

    } else if (tab[0][2].text() === `${symbol}` && tab[1][1].text() === `${symbol}` && tab[2][0].text() === `${symbol}`) {
        tab[0][2].css("background", "yellow");
        tab[1][1].css("background", "yellow");
        tab[2][0].css("background", "yellow");
        return true;

    } else if (tab[0][0].text() === `${symbol}` && tab[1][0].text() === `${symbol}` && tab[2][0].text() === `${symbol}`) {
        tab[0][0].css("background", "yellow");
        tab[1][0].css("background", "yellow");
        tab[2][0].css("background", "yellow");
        return true;

    } else if (tab[0][1].text() === `${symbol}` && tab[1][1].text() === `${symbol}` && tab[2][1].text() === `${symbol}`) {
        tab[0][1].css("background", "yellow");
        tab[1][1].css("background", "yellow");
        tab[2][1].css("background", "yellow");
        return true;

    } else if (tab[0][2].text() === `${symbol}` && tab[1][2].text() === `${symbol}` && tab[2][2].text() === `${symbol}`) {
        tab[0][2].css("background", "yellow");
        tab[1][2].css("background", "yellow");
        tab[2][2].css("background", "yellow");
        return true;
    }
}

function begin() {
    for (let i = 0; i < 3; i++)
        for (let k = 0; k < 3; k++) {
            tab[i][k].css("background", "#e8e8e8");
        }
}
//******  KONIEC ** SEKCJI ** FUNCKJI  ************************************************

$('td').on('click', function (e) {
    console.log($(this).index())
    $(this).css("background-image", "linear-gradient(to bottom right, white, #aaaaaa)");



    if ($(this).text() === "X" || $(this).text() === "O") {
        $(this).css("background", "red");
    } else if (turn % 2 === 0) {
        $(this).text(playerX.getSymbol()); //Ustawianie znaku w polu na X
        if (check(playerX.symbol) === true) { //sprawdza czy dany gracz wygral
            playerX.setWinner(true);
            playerX.addPoint();
            console.log(`Winner X`);
        }

        $('.turn').text(`Kolej gracza ${playerO.getSymbol()}`)
        turn++;
    } else if (turn % 2 !== 0) {
        $(this).text(playerO.getSymbol());
        if (check(playerO.symbol) === true) {
            playerO.setWinner(true);
            playerO.addPoint();
            console.log(`Winner O`);
        }

        $('.turn').text(`Kolej gracza ${playerX.getSymbol()}`)
        turn++;
        console.log("kolej O");
    }

    $('.points').text(`X = ${playerX.getPoint()} Y = ${playerO.getPoint()}`);
    if (playerX.getWinner() === true || playerO.getWinner() === true) {
        playerX.setWinner(false);
        playerO.setWinner(false);
        $('.turn').text("");
        setTimeout(function () {
            $('td').text(" ");
            $('.turn').text("Zaczyna X");
            turn = 0;
            begin();
        }, 1000);

    }

    //    console.log(playerX.getSymbol());
    //    console.log(`turn ${turn}`);

    console.log("ooooooooooooooooooooooooooooooooooooooooooooo")
});
