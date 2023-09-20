//Players
let player1 = 0;
let player2 = 0;

let x = document.querySelector('.x');
let o = document.querySelector('.o');
let winner = null;
let boxes = document.querySelectorAll('.box');
let buttons = document.querySelectorAll('#buttonsAlign button');
let messageCont = document.querySelector('#message');
let messageText = document.querySelector('#message p');
let secondPlayer;

//Add OnClick event in all boxes

for (let i = 0; i < boxes.length; i++) {
  //Click in box
  boxes[i].addEventListener('click', function () {
    //Who is playing?
    let el = checkElement(player1, player2);
    //Verify if have another element in the box
    if (this.childNodes.length == 0) {
      //Add element inside box
      //Make a clone of element (x or o)
      let cloneEl = el.cloneNode(true);

      //Use function to insert an element to list
      this.appendChild(cloneEl);

      //Change player
      if (player1 == player2) {
        player1++;
      } else {
        player2++;
      }
      checkWinner()
    }
  });
}

function checkElement(player1, player2) {
    //Define who starts
    if (player1 == player2) {
      el = x;
    } else {
      el = o;
    }

    return el;
}



function themeChange() {
  let checker = document.getElementById('themeSwitch');
  if(checker.checked) {
    document.body.className = 'dark'
  } else {
    document.body.removeAttribute('class')
  }
}

//Define who wins
function checkWinner(){
  let b1 = document.getElementById('block-1')
  let b2 = document.getElementById('block-2')
  let b3 = document.getElementById('block-3')
  let b4 = document.getElementById('block-4')
  let b5 = document.getElementById('block-5')
  let b6 = document.getElementById('block-6')
  let b7 = document.getElementById('block-7')
  let b8 = document.getElementById('block-8')
  let b9 = document.getElementById('block-9')

  //horizontal
  if(b1.childNodes.length > 0 && b2.childNodes.length > 0 && b3.childNodes.length > 0) {
   let b1Child = b1.childNodes[0].className;
   let b2Child = b2.childNodes[0].className;
   let b3Child = b3.childNodes[0].className;
   
   //Verify the first line
   if(b1Child == 'x' && b2Child == 'x' && b3Child == 'x'){
   
     declareWinner('x')
     
     
   } else if(b1Child == 'o' && b2Child == 'o' && b3Child == 'o') {
    declareWinner('o')
     
     
     
   }
  }
  if(b4.childNodes.length > 0 && b5.childNodes.length > 0 && b6.childNodes.length > 0) {
   let b4Child = b4.childNodes[0].className;
   let b5Child = b5.childNodes[0].className;
   let b6Child = b6.childNodes[0].className;
   
   //Verify the second line
   if(b4Child == 'x' && b5Child == 'x' && b6Child == 'x'){
    
    declareWinner('x')
     
     
   } else if(b4Child == 'o' && b5Child == 'o' && b6Child == 'o') {
    declareWinner('o')
     
     
     
   }
  }

  if(b7.childNodes.length > 0 && b8.childNodes.length > 0 && b9.childNodes.length > 0) {
   let b7Child = b7.childNodes[0].className;
   let b8Child = b8.childNodes[0].className;
   let b9Child = b9.childNodes[0].className;
   
   //Verify the third line
   if(b7Child == 'x' && b8Child == 'x' && b9Child == 'x'){
    
    declareWinner('x')
     
     
   } else if(b7Child == 'o' && b8Child == 'o' && b9Child == 'o') {
    declareWinner('o')
     
     
     
   }
  }
  
  //Vertical
  if(b1.childNodes.length > 0 && b4.childNodes.length > 0 && b7.childNodes.length > 0) {
    let b1Child = b1.childNodes[0].className;
    let b4Child = b4.childNodes[0].className;
    let b7Child = b7.childNodes[0].className;
    
    //Verify the first line
    if(b1Child == 'x' && b4Child == 'x' && b7Child == 'x'){
      
      declareWinner('x')
      
      
    } else if(b1Child == 'o' && b4Child == 'o' && b7Child == 'o') {
      declareWinner('o')
     
     
     
    }
   }
   if(b2.childNodes.length > 0 && b5.childNodes.length > 0 && b8.childNodes.length > 0) {
    let b2Child = b2.childNodes[0].className;
    let b5Child = b5.childNodes[0].className;
    let b8Child = b8.childNodes[0].className;
    
    //Verify the second line
    if(b2Child == 'x' && b5Child == 'x' && b8Child == 'x'){
      
      declareWinner('x')
      
      
    } else if(b2Child == 'o' && b5Child == 'o' && b8Child == 'o') {
      declareWinner('o')
     
     
     
    }
   }

   if(b3.childNodes.length > 0 && b6.childNodes.length > 0 && b9.childNodes.length > 0) {
    let b3Child = b3.childNodes[0].className;
    let b6Child = b6.childNodes[0].className;
    let b9Child = b9.childNodes[0].className;
    
    //Verify the third line
    if(b3Child == 'x' && b6Child == 'x' && b9Child == 'x'){
      
      declareWinner('x')
      
      
    } else if(b3Child == 'o' && b6Child == 'o' && b9Child == 'o') {
      declareWinner('o')
     
     
     
    }
   }

  //Diagonal
  if(b1.childNodes.length > 0 && b5.childNodes.length > 0 && b9.childNodes.length > 0) {
   let b1Child = b1.childNodes[0].className;
   let b5Child = b5.childNodes[0].className;
   let b9Child = b9.childNodes[0].className;
   
   //Verify the first case
   if(b1Child == 'x' && b5Child == 'x' && b9Child == 'x'){
    
    declareWinner('x')
     
     
   } else if(b1Child == 'o' && b5Child == 'o' && b9Child == 'o') {
    declareWinner('o')
     
     
     
   }
  }

  if(b3.childNodes.length > 0 && b5.childNodes.length > 0 && b7.childNodes.length > 0) {
   let b3Child = b3.childNodes[0].className;
   let b5Child = b5.childNodes[0].className;
   let b7Child = b7.childNodes[0].className;
   
   //Verify the second case
   if(b3Child == 'x' && b5Child == 'x' && b7Child == 'x'){
    
    declareWinner('x')
     
     
   } else if(b3Child == 'o' && b5Child == 'o' && b7Child == 'o') {
    declareWinner('o')
     
     
     
   }
  }
  
  //Velha

  let counter = 0
  for(let i = 0; i < boxes.length; i++) {
    if(boxes[i].childNodes[0] != undefined) {
      counter++
    }
  }

  //Elements
  if (counter == 9) {
    declareWinner('Deu velha')
  }
}


function declareWinner(winner) {
let scoreboardX = document.querySelector('#scoreboard-1')
let scoreboardO = document.querySelector('#scoreboard-2')
let msg = "";

if(winner == 'x') {
  scoreboardX.textContent  = parseInt(scoreboardX.textContent) + 1;
  msg = 'O jogador 1 (X) ganhou'
} else if(winner == 'o') {
  scoreboardO.textContent  = parseInt(scoreboardO.textContent) + 1;
  msg = 'O jogador 2 (O) ganhou'
} else {
  msg = 'Deu velha!'
}

messageText.innerHTML = msg
messageCont.classList.remove("hide")

setTimeout(function(){
  messageCont.classList.add('hide');
  for (let i = 0; i < boxesToRemove.length; i++) {
    boxesToRemove[i].parentNode.removeChild(boxesToRemove[i])
  }
}, 3000)

let boxesToRemove = document.querySelectorAll('.box div')



document.getElementById('resetPlacar').addEventListener('click', function() {
  scoreboardX.textContent = parseInt(scoreboardX.textContent) - parseInt(scoreboardX.textContent)
  scoreboardO.textContent = parseInt(scoreboardO.textContent) - parseInt(scoreboardO.textContent)
  player1 = 0
  player2 = 0
})
}
