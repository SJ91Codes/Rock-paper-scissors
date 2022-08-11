function getUser(){
  let hand = prompt("Rock, paper or scissors? ")
  hand = hand.toLowerCase()
  fHand = hand.slice(0,1).toUpperCase()
  hand = fHand + hand.slice(1)
  if (hand !== "Rock" && hand!== "Paper" && hand!== "Scissors"){
    alert("Invalid entry!")
    getUser()
  }else {
    console.log(hand)
    return hand
  }
}

function compHand(){
  let cHand = Math.floor(Math.random() * 3)
  let playHand
  if (cHand === 0){
     playHand = "Rock"
  }else if (cHand === 1){
     playHand = "Paper"
  }else {
     playHand = "Scissors"
  }
  console.log(playHand)
  return playHand
}

function compare(user, comp){
  let winner
  if (user === "Rock"){
    if (comp ==="Rock"){
      winner = "Draw"
    }else if (comp === "Paper"){
      winner = "Computer"
    } else{
      winner = "Player"
    }
  }
  if (user === "Paper"){
    if (comp ==="Rock"){
      winner = "Player"
    }else if (comp === "Paper"){
      winner = "Draw"
    } else{
      winner = "Computer"
    }
  }
  if (user === "Scissors"){
    if (comp ==="Rock"){
      winner = "Computer"
    }else if (comp === "Paper"){
      winner = "Player"
    } else{
      winner = "Draw"
    }
  }
  return winner    
  
}

function game(rounds){
  let winner
  let compScore=0
  let playScore=0
  while(rounds > 0){
    winner = compare(getUser(), compHand())
    if (winner === "Player"){
      playScore +=1
    } else if (winner === "Computer"){
      compScore+=1
    }
    console.log("The winner is: " + winner)
    rounds-=1
  }
  console.log("Final score- Player: " + playScore + " Computer: " + compScore)
}

let rounds = prompt("Rounds?")
game(rounds)