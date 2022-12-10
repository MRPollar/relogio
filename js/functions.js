const body = document.querySelector('body');
const dark = document.getElementById('dark');
const btnTroca = document.getElementById('btnTroca');
const digital = document.getElementById('digital');
const analogic = document.getElementById('analogic');

const digitHour = document.getElementById('digitHour');
const digitMinu = document.getElementById('digitMinu');
const digitSecon = document.getElementById('digitSecon');

const analogicHour = document.getElementById('analogic_hr');
const analogicMinu = document.getElementById('analogic_min');
const analogicSecon = document.getElementById('analogic_sec');
const analogicPeriod = document.getElementById('analogic_period');

btnTroca.addEventListener("click", () => {
   if(btnTroca.innerText === 'Analógico'){
      digital.style.display = 'none';
      analogic.style.display = 'flex';
      btnTroca.innerText = 'Digital';
   } else {
      digital.style.display = 'flex';
      analogic.style.display = 'none';
      btnTroca.innerText = 'Analógico';
   }
})

setInterval(() => {
   const data = new Date();
   const hour = data.getHours();
   const minu = data.getMinutes();
   const second = data.getSeconds();

   let hr = hour < 10 ? '0'+hour : hour;
   let mn = minu < 10 ? '0'+minu : minu;
   let sc = second < 10 ? '0'+second : second;

   digitHour.innerText = hr;
   digitMinu.innerText = mn;
   digitSecon.innerHTML = `${sc}<span id="period"></span>`;
   const period = document.getElementById('period');
   period.innerText = hour > 12 ? 'PM': 'AM';

   analogicHour.style.rotate = `${360/12 * hour}deg`;
   analogicMinu.style.rotate = `${360/60 * minu}deg`;
   analogicSecon.style.rotate = `${360/60 * second}deg`;
   analogicPeriod.innerText = hour > 12 ? 'PM': 'AM';
})
dark.addEventListener('click', (e) => {
   if(e.target.innerHTML === "Dark Mode: off"){
      e.target.innerText = "Dark Mode: on";
      body.classList.toggle('active');
   } else {
      e.target.innerText = "Dark Mode: off";
      body.classList.toggle('active');
   }
})


