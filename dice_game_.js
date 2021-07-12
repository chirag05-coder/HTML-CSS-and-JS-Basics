'use strict';
const player0El=document.querySelector('.player--0');

const player1El=document.querySelector('.player--1');
const score0El=document.querySelector('#score--0');
const score1El=document.querySelector('#score--1');
const current0El=document.querySelector('#current--0');
const current1El=document.querySelector('#current--1');
const mainscore=document.querySelector('.score');
const diceEl=document.querySelector('.dice');
const btnNew=document.querySelector('.btn--new');
const btnRoll=document.querySelector('.btn--roll');
const btnHold=document.querySelector('.btn--hold');

score0El.textContent=0;
score1El.textContent=0;
diceEl.classList.add('hidden');

let currentScore=0;
let activePlayer=0;
let scores=[0,0];
let playing=true;


document.querySelector('.btn--roll').addEventListener('click',function(){
      
      if(playing)
      {
       let num=Math.trunc((Math.random()*6))+1;
       diceEl.classList.remove('hidden');

       diceEl.src=`dice-${num}.png`;

       if(num!==1)
       {
           currentScore+=num;
           document.querySelector(`#current--${activePlayer}`).textContent=currentScore;
           
       }
       else
       { document.querySelector(`#current--${activePlayer}`).textContent=0;
      
         currentScore=0;
         activePlayer=activePlayer===0?1:0;

         player0El.classList.toggle('player--active');
         player1El.classList.toggle('player--active');
      

       }
      }
    
});

btnHold.addEventListener('click',function()
{     if(playing)
  {
      scores[activePlayer]+=currentScore;
      document.querySelector(`#score--${activePlayer}`).textContent=scores[activePlayer];
      
      
      
      if(scores[activePlayer]>=20)
      {  playing=false;
        diceEl.classList.add('hidden');

        document.querySelector(`.player--${activePlayer}`).classList.add('player--winner');
        document.querySelector(`.player--${activePlayer}`).classList.remove('player--active');

      }
      
     else
      {
      document.querySelector(`#current--${activePlayer}`).textContent=0;
         currentScore=0;
         activePlayer=activePlayer===0?1:0;

      player0El.classList.toggle('player--active');
      player1El.classList.toggle('player--active');
      }

  }


});


btnNew.addEventListener('click',function()
{   playing=true;
  

  document.querySelector(`.player--${activePlayer}`).classList.remove('player--winner');
  activePlayer=0;
  document.querySelector(`.player--${activePlayer}`).classList.add('player--active');
  document.querySelector(`.player--1`).classList.remove('player--active');
  
  
  scores[0]=0;
  scores[1]=0;
  score0El.textContent=0;
  score1El.textContent=0;
  current0El.textContent=0;
  current1El.textContent=0;


    


});
