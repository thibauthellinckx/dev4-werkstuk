const games = [{
    name: "Donkey Kong",
    rating: 4,
    genre: "adventure"
}, {
    name: "Zombie Raid",
    rating: 5,
    genre: "horror"
}, {
    name: "After Burner",
    rating: 1,
    genre: "horror"
}, {
    name: "Pac man",
    rating: 1,
    genre: "adventure"
}, {
    name: "Space Invaders",
    rating: 3,
    genre: "adventure"
}, {
    name: "Street Fighter",
    rating: 2,
    genre: "horror"
}, {
    name: "Super mario ball",
    rating: 5,
    genre: "adventure"
}, {
    name: "Tetris",
    rating: 5,
    genre: "adventure"
}];

function Iterator(start, end, step, game) {
    let nextIndex = start;
    let iterationCount = 0;

    const gameIterator = {
        next: function () {
            let result;

            if (nextIndex < end) {
                result = {
                    name: game[nextIndex].name,
                    rating: game[nextIndex].rating,
                    genre: game[nextIndex].genre,
                    done: false
                };
                nextIndex += step;
                iterationCount++;
                return result;
            }
            return {
                value: iterationCount,
                done: true
            };
        }
    };
    return gameIterator;
}

function ViewAllGames() {
    const AllGames = Iterator(0, games.length, 1, games);
    let TotalGames = [];
    let result = AllGames.next();


    while (!result.done) {

    
        TotalGames.push(result);
        

        result = AllGames.next();
    }
    console.log("all games:", TotalGames);
}

function AdvonutreArray() {
    const AllGames = Iterator(0, games.length, 1, games);
    let TotalAdvontureGames = [];
    let result = AllGames.next();


    while (!result.done) {

        if (result.genre == "adventure") {
            TotalAdvontureGames.push(result);
        }

        result = AllGames.next();
    }

    console.log("all adventure games:", TotalAdvontureGames);


}

function HorrorArray() {
    const AllGames = Iterator(0, games.length, 1, games);
    let TotalHorrorGames = [];
    let result = AllGames.next();


    while (!result.done) {

        if (result.genre == "horror") {
            TotalHorrorGames.push(result);
        }

        result = AllGames.next();
    }

    console.log("all Horror games:", TotalHorrorGames);
}

function selectGame(researchedGame) {
    const List = Iterator(0, 8, 1, games);
    let result = List.next();
    let searchGame;
    let selectedGame = researchedGame;


    while (!result.done) {
        if (result.name == selectedGame) {
            searchGame = result;
            console.log(`Selected Game:`, searchGame);
        } else if (searchGame == null) {
            console.log("no game found");

        }

        result = List.next();
    }

}


function CallFunctions(){
    ViewAllGames();
    AdvonutreArray();
    HorrorArray();
    selectGame("Zombie Raid");
}

CallFunctions();