const game = gameObject()

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

function getTeams(){
    const teams = []
    for (let gameKey in game) {
        let teamObj = game[gameKey]
        teams.push(teamObj)
    }
    return teams
}

function getPlayers(){
    const allPlayers = []
    for (let gameKey in game) {
        let teamObj = game[gameKey]
        let players = teamObj.players
        for (key in players) {
            players[key].name = key
            allPlayers.push(players[key])
        }
    }
    return allPlayers
}

function numPointsScored(name) {
    const stats = playerStats(name)
    return stats.points
}

function shoeSize(name) {
    const stats = playerStats(name)
    return stats.shoe
}

function teamColors(team) {
    const teams = getTeams()
    found_team = teams.find((teamHash) => teamHash.teamName == team)
    return found_team.colors
}

function teamNames() {
    const teams = getTeams()
    const teamsArray = []
    teams.forEach((teamHash) => teamsArray.push(teamHash.teamName))
    return teamsArray
}

function playerNumbers(team) {
    const numbers = []
    const teams = getTeams()
    found_team = teams.find((teamHash) => teamHash.teamName == team)
    const players = found_team.players
    for (key in players){
        numbers.push(players[key].number)
    }
    return numbers
}

function playerStats(name) {
    const players = getPlayers()
    return players.find(player => player.name === name)
}

function bigShoeRebounds() {
    const players = getPlayers()
    let rebounds = null
    players.reduce((shoe, player) => {
        player.shoe > shoe ? player.shoe : shoe; rebounds = player.rebounds
    }, players[0].shoe)
    return rebounds
}





console.log(numPointsScored("Jason Terry"))
console.log(shoeSize("Jeff Adrien"))
console.log(teamColors("Charlotte Hornets"))
console.log(teamNames())
console.log(playerNumbers("Charlotte Hornets"))
console.log(playerStats("Ben Gordon"))
console.log(bigShoeRebounds())
console.log(getPlayers())