'use strict';

// console.log(document.querySelector('.message').textContent);

// document.querySelector('.number').textContent=13;


// document.querySelector('.guess').value=23;
// console.log(document.querySelector('.guess').value);

let secretNumber=Math.trunc(Math.random()*20)+1;


let count=Number(document.querySelector('.score').textContent);


document.querySelector('.check').addEventListener('click'
,function(){
    
    const num=Number(document.querySelector('.guess').value);
        // console.log(num);
             

     if(!num)
     {
         document.querySelector('.message').textContent='❌ Number toh daal le bhosdike';
         
     }
     else if(secretNumber===num)
     {
          document.querySelector('.message').textContent='💥 Correct number';
          document.querySelector('body').style.backgroundColor = '#60b347';

          document.querySelector('.number').textContent=secretNumber;
          
           document.querySelector('.number').style.width='30rem';
           

          let highcalue=Number( document.querySelector('.highscore').textContent);
            if(count>highcalue)
             {
                document.querySelector('.highscore').textContent=count;
             }
          

     }
     else if(num>secretNumber)
      {   if(count>1)
        {
          document.querySelector('.message').textContent='📈 Too high!!';
          document.querySelector('.score').textContent=(--count);   
        }
        else
        {
            document.querySelector('.message').textContent='👎You lost the game!';
            document.querySelector('.score').textContent=(count-1);
        }
      }
      else
      {
           if(count>1)
           {
        document.querySelector('.message').textContent='📉 Too Low!!';
        document.querySelector('.score').textContent=(--count);   
           }
           else
           {
            document.querySelector('.message').textContent='👎You lost the game!';
            document.querySelector('.score').textContent=(count-1);
           }  
    }

         
});


//When user try to play setting the values to default 
document.querySelector('.again').addEventListener('click',function()
{

     document.querySelector('body').style.backgroundColor='#222';
     document.querySelector('.score').textContent=20;
     count=20;
     document.querySelector('.message').textContent='Start guessing...';
     document.querySelector('.number').textContent='?';
     document.querySelector('.number').style.width='15rem';

     //To select to tha value of an input type and set it to null
     document.querySelector('.guess').value=" ";
     
     secretNumber=Math.trunc(Math.random()*20)+1;

     
});


