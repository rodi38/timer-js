let relogio = document.querySelector('.relogio');

const start = document.querySelector('.iniciar');
const speedUp = document.querySelector('.acelerar');
const pause = document.querySelector('.pausar');
const zero = document.querySelector('.zerar');
let segundos = 0;
let timer;

function getTimeSeconds(sec){
    const data = new Date(sec * 1000);
    return data.toLocaleTimeString('pt-BR',{
        timeZone: 'UTC'
    });
}
function startTimer(sec){
    timer = setInterval(function(){
        segundos++
        relogio.innerHTML = getTimeSeconds(segundos);
    }, sec)
}

start.addEventListener('click', (e)=>{
    clearInterval(timer);
    startTimer(1000);
    relogio.style.color = '#000';
});

pause.addEventListener('click', (e)=>{
    clearInterval(timer);
    relogio.style.color = 'red';
});

speedUp.addEventListener('click', (e)=>{
    clearInterval(timer);
    startTimer(500);
    relogio.style.color = '#000';
})
zero.addEventListener('click', (e)=>{
    clearInterval(timer)
    segundos = 0;
    relogio.style.color = '#000';
    relogio.innerHTML = getTimeSeconds(segundos);
    
});