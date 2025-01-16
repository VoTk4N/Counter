
//ELEMENTI
const header = document.createElement('header');
const logo = document.createElement('logo');
const btnreset = document.createElement('button');
const container = document.createElement('div');
const display = document.createElement('div');
const container2 = document.createElement('div');
const btnplus = document.createElement('button');
const btnless = document.createElement('button');


//CLASSI
header.classList.add('header');
container.classList.add('container');
display.classList.add('display');
container2.classList.add('container2');
btnplus.classList.add('btn');
btnplus.classList.add('plus');
btnless.classList.add('btn');
btnless.classList.add('less');
btnreset.classList.add('btn');
btnreset.classList.add('reset');


document.body.insertBefore(header, document.body.firstChild);
header.appendChild(logo);
logo.textContent = 'Counter';

header.appendChild(btnreset);
btnreset.textContent = 'Reset';


header.insertAdjacentElement('afterend', container);


container.appendChild(display);
display.textContent = '0';

container.appendChild(container2);

container2.appendChild(btnplus);
btnplus.textContent = '+';
btnplus.setAttribute('title', 'Premi (P)');


container2.appendChild(btnless);
btnless.textContent = '-';
btnless.setAttribute('title', 'Premi (L)');























//COUNTER


let score = JSON.parse(localStorage.getItem('score')) || { 
  count: 0};
  document.querySelector('.display').innerHTML = score.count;
  btnplus.addEventListener('click', counterPlus);

  btnless.addEventListener('click', counterLess);
  btnreset.addEventListener('click', counterReset);

  let currentAction = null;
 display.innerHTML = score.count;
 let interval;


 function counterPlus() { 
  score.count++; 
  document.documentElement.style.setProperty('--color-default--', '#ffa500');

  localStorage.setItem('score', JSON.stringify(score));
   display.innerHTML = score.count; 
  }
   
   function counterLess() { if (score.count > 0) { 
    score.count--;
    document.documentElement.style.setProperty('--color-default--', '#0696bb');
     localStorage.setItem('score', JSON.stringify(score));
      display.innerHTML = score.count; } 

    }
   
   function startCounter(action) { 
    currentAction = action;
     interval = setInterval(() => { if (currentAction === 'plus') { 
      counterPlus(); } 
      else if (currentAction === 'less') { 
        counterLess(); } }, 300);
       }




function stopCounter() { 
  clearInterval(interval); 
  currentAction = null; }

  function returnYellow(){
    setTimeout(() => {
      document.documentElement.style.setProperty('--color-default--', '#ffff00');

  }, 300);
  }

  document.addEventListener('keyup', returnYellow );

  btnplus.addEventListener('mouseleave', returnYellow); 
  btnplus.addEventListener('mouseup', returnYellow); 
  btnplus.addEventListener('touchend', returnYellow);
 

  btnless.addEventListener('mouseleave', returnYellow); 
  btnless.addEventListener('mouseup', returnYellow); 
  btnless.addEventListener('touchend', returnYellow); 





btnplus.addEventListener('mousedown', () => startCounter('plus')); 
btnplus.addEventListener('mouseup', stopCounter); 
btnplus.addEventListener('mouseleave', stopCounter); 
btnplus.addEventListener('touchstart', () => startCounter('plus')); 
btnplus.addEventListener('touchend', stopCounter); 

btnless.addEventListener('mousedown', () => startCounter('less')); 
btnless.addEventListener('mouseup', stopCounter); 
btnless.addEventListener('mouseleave', stopCounter); 
btnless.addEventListener('touchstart', () => startCounter('less')); 
btnless.addEventListener('touchend', stopCounter);



document.addEventListener('keydown', function(event) { 
  if (event.key === 'p' || event.key === 'P') {  
   counterPlus();
   } 
 });
 document.addEventListener('keydown', function(event) { 
   if (event.key === 'l' || event.key === 'L') {  
    counterLess();
  }});


function counterReset() {
  // Cambia il colore di default a rosso
  document.documentElement.style.setProperty('--color-default--', 'red');


  // Utilizza setTimeout per dare tempo al browser di applicare lo stile
  setTimeout(() => {
      // Chiedi conferma all'utente
      const userResponse = confirm('Vuoi procedere con il reset?');
      
      if (userResponse) {
          // Resetta il punteggio
          score.count = 0;
          localStorage.removeItem('score');
          document.querySelector('.display').innerHTML = score.count;
      }

      // Cambia il colore di default a giallo dopo che l'utente ha risposto
      document.documentElement.style.setProperty('--color-default--', 'yellow');
  }, 0);
}

