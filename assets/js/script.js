const figures = { 

  0: "Spock", 
  
  1: "Rock", 
  
  2: "Scissors", 
  
  3: "Paper", 
  
  4: "Lizard" 
  
  } 
  
  
  const wins = { 
  
  0: [1,2], 
  
  1: [2,4], 
  
  2: [3,4], 
  
  3: [0,1], 
  
  4: [0,3] 
  
  } 
  
  
  const icons = { 
  
  0: "fa-solid fa-hand-spock", 
  
  1: "fa-regular fa-hand-back-fist", 
  
  2: "fa-solid fa-hand-scissors", 
  
  3: "fa-solid fa-toilet-paper", 
  
  4: "fa-solid fa-hand-lizard" 
  
  } 
  
  
  //Rule for who has win over whom 
  
  const rule = { 
  
  Lizard: ["Spock", "Paper"], 
  
  
  Paper: ["Rock", "Spock"], 
  
  
  Rock: ["Lizard", "Scissor"], 
  
  
  Scissor: ["Paper", "Lizard"], 
  
  
  Spock: ["Scissor", "Rock"], 
  
  }; 
  
  
  //Folder in which images are stored 
  
  const imageFolderPath = "assets/images"; 
  
  
  let playerPoints = 0; 
  
  let computerPoints = 0; 
  
  
  function getComputerIndex() { 
  
  return Math.floor(Math.random() * 5); 
  
  } 
  
  
  function updatePoints(){ 
  
  playerScoreSpan.innerHTML = playerPoints; 
  
  computerScoreSpan.innerHTML = computerPoints; 
  
  } 
  
  
  const playerIcon = document.getElementById("player-icon"); 
  
  const computerIcon = document.getElementById("computer-icon"); 
  
  const playerIconMobile = document.getElementById("player-icon-mobile"); 
  
  const computerIconMobile = document.getElementById("computer-icon-mobile"); 
  
  
  const playerScoreSpan = document.getElementById("player-score"); 
  
  const computerScoreSpan = document.getElementById("computer-score"); 
  
  
  const resetBtn = document.getElementById("reset-btn"); 
  
  
  
  document.addEventListener('DOMContentLoaded',() => { 
  
  
  resetBtn.addEventListener("click",() => { 
  
  computerIcon.className = ""; 
  
  playerIcon.className = ""; 
  
  playerPoints = 0; 
  
  computerPoints = 0; 
  
  updatePoints(); 
  
  }) 
  
  
  let options = document.getElementsByClassName("option"); 
  
  
  Array.from(options).forEach(el => { 
  
  el.addEventListener('click', e => { 
  
  console.log(el); 
  
  let opt = parseInt(el.dataset.index); 
  
  
  if(opt > -1){ 
  
  playerIcon.className = icons[opt]; 
  
  playerIconMobile.className = icons[opt]; 
  
  
  let copt = getComputerIndex(); 
  
  computerIcon.className = icons[copt]; 
  
  computerIconMobile.className = icons[copt]; 
  
  
  if(wins[opt].indexOf(copt) > -1){ 
  
  playerPoints++; 
  
  } 
  
  else if(wins[copt].indexOf(opt) > -1){ 
  
  computerPoints++; 
  
  } 
  
  
  updatePoints(); 
  
  } 
  
  }); 
  
  }); 
  
  }); 
  