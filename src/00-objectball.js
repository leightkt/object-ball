const game = gameObject()
console.log(game)

function gameObject() {
    const game = {
        home: {
            teamName:  "Brooklyn Nets",
            colors: ["Black", "White"],
            players: {
                "Alan Anderson": {
                    number: 0,
                    shoe: 16,
                    points: 22,
                    rebounds: 12,
                    assists: 12,
                    steals: 3,
                    blocks: 1,
                    slamDunks: 1
                },
                "Reggie Evans": {
                    number: 30,
                    shoe: 14,
                    points: 12,
                    rebounds: 12,
                    assists: 12,
                    steals: 12,
                    blocks: 12,
                    slamDunks: 7
                },
                "Brook Lopez": {
                    number: 11,
                    shoe: 17,
                    points: 17,
                    rebounds: 19,
                    assists: 10,
                    steals: 3,
                    blocks: 1,
                    slamDunks: 15
                },
                "Mason Plumlee": {
                    number: 1,
                    shoe: 19,
                    points: 26,
                    rebounds: 12,
                    assists: 6,
                    steals: 3,
                    blocks: 8,
                    slamDunks: 5
                },
                "Jason Terry": {
                    number: 31,
                    shoe: 15,
                    points: 19,
                    rebounds: 2,
                    assists: 2,
                    steals: 4,
                    blocks: 11,
                    slamDunks: 1
                }
            }
        },
        away: {
            teamName:  "Charlotte Hornets",
            colors: ["Turquoise", "Purple"],
            players: {
                "Jeff Adrien": {
                    number: 4,
                    shoe: 18,
                    points: 10,
                    rebounds: 1,
                    assists: 1,
                    steals: 2,
                    blocks: 7,
                    slamDunks: 2
                },
                "Bismak Biyombo": {
                    number: 0,
                    shoe: 16,
                    points: 12,
                    rebounds: 4,
                    assists: 7,
                    steals: 7,
                    blocks: 15,
                    slamDunks: 10
                },
                "DaSagna Diop": {
                    number: 2,
                    shoe: 14,
                    points: 24,
                    rebounds: 12,
                    assists: 12,
                    steals: 4,
                    blocks: 5,
                    slamDunks: 5
                },
                "Ben Gordon": {
                    number: 8,
                    shoe: 15,
                    points: 33,
                    rebounds: 3,
                    assists: 2,
                    steals: 1,
                    blocks: 1,
                    slamDunks: 0
                },
                "Brendan Haywood": {
                    number: 33,
                    shoe: 15,
                    points: 6,
                    rebounds: 12,
                    assists: 12,
                    steals: 22,
                    blocks: 5,
                    slamDunks: 12
                }
            }
        }
    }
    return game
}

function numPointsScored(name) {
    for (let gameKey in game) {
        let teamObj = game[gameKey]
        for (let teamKey in teamObj) {
            let players = teamObj.players
            for (let key in players){
                if (key === name) {
                    let pointsScored = players[key].points
                    return pointsScored
                }
            }
        }
    }
}

function shoeSize(name) {
    for (let gameKey in game) {
        let teamObj = game[gameKey]
        for (let teamKey in teamObj) {
            let players = teamObj.players
            for (let key in players){
                if (key === name) {
                    return players[key].shoe
                }
            }
        }
    }
}

function teamColors(team) {
    for (let gameKey in game) {
        let teamObj = game[gameKey]
        let teamName = teamObj.teamName
            if (teamName === team) {
                return teamObj.colors
            }
    }
}

function teamNames() {
    let teams = []
    for (let gameKey in game) {
        let teamObj = game[gameKey]
            teams.push(teamObj.teamName)
    }
    return teams
}

function playerNumbers(team) {
    let numbers = []
    for (let gameKey in game) {
        let teamObj = game[gameKey]
            if (teamObj.teamName === team) {
                let players = teamObj.players
                for (let key in players) {
                    numbers.push(players[key].number)
                }
            }
    }
    return numbers
}

function playerStats(name) {
    for (let gameKey in game) {
        let teamObj = game[gameKey]
        for (let teamKey in teamObj) {
            let players = teamObj.players
            for (let key in players){
                if (key === name) {
                    return players[key]
                }
            }
        }
    }
}

function bigShoeRebounds() {
    let biggestShoe = null
    let rebounds = null
    for (let gameKey in game) {
        let teamObj = game[gameKey]
        for (let teamKey in teamObj) {
            let players = teamObj.players
            for (let key in players){
                let playerData = players[key]
                if (playerData.shoe > biggestShoe) {
                    biggestShoe = playerData.shoe
                    rebounds = players[key].rebounds
                }
            }
        }
    }
    return rebounds
}




console.log(numPointsScored("Jason Terry"))
console.log(shoeSize("Jeff Adrien"))
console.log(teamColors("Charlotte Hornets"))
console.log(teamNames())
console.log(playerNumbers("Charlotte Hornets"))
console.log(playerStats("Ben Gordon"))
console.log(bigShoeRebounds())