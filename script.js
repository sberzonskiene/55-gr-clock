const dateEl = document.getElementsByClassName("date")[0];
const timeEl = document.getElementsByClassName("time")[0];
const hourEl = document.getElementsByClassName("hours")[0];
const minsEl = document.getElementsByClassName("minutes")[0];
const secsEl = document.getElementsByClassName("seconds")[0];
const sliderEl = document.getElementsByClassName("slider")[0];
const pomoBgEl = document.getElementsByClassName("pomo-bg")[0];

const months = ['Sausio', 'Vasario', 'Kovo', 'Balandžio', 'Gegužės', 'Birželio',
    'Liepos', 'Rugpjūčio', 'Rugsėjo', 'Spalio', 'Lapkričio', 'Gruodžio'];
const weekdays = ['Sekmadienis', 'Pirmadienis', 'Antradienis', 'Trečiadienis',
    'Ketvirtadienis', 'Penktadienis', 'Šeštadienis'];

function clock() {
    const now = new Date();

    let h = now.getHours()
    let m = now.getMinutes();
    let s = now.getSeconds();
    h = addZero(h);
    m = addZero(m);
    s = addZero(s);

    let year = now.getFullYear();
    let month = now.getMonth();
    let weekday = now.getDay();
    let day = now.getDate();

    timeEl.textContent = h + ':' + m + ':' + s;
    dateEl.textContent = weekdays[weekday] + ', ' + months[month] + ' ' + day + ' d.';

    hourEl.style.transform = 'rotate(' + h * 30 + 'deg)';
    minsEl.style.transform = 'rotate(' + m * 6 + 'deg)';
    secsEl.style.transform = 'rotate(' + s * 6 + 'deg)';

    setTimeout(clock, 1000);
}

function addZero(t) {
    if ( t < 10 ) {
        t = '0' + t;
    }
    return t;
}
clock();

// Pomodoro funkcija
let isPomodoro = false;

sliderEl.addEventListener('click', () => {
    isPomodoro ? isPomodoro = false : isPomodoro = true;
    sliderEl.classList.toggle('active');
    show(false);
    pomoBgEl.classList.add('show');
    isPomodoro ? work() : stop();
});

function chill() {
    timeEl.classList.remove('work');
    timeEl.classList.add('chill');
    show(true);
    isPomodoro ? setTimeout(work, 5 * 60 *1000) : stop();
}

function work() {
    timeEl.classList.remove('chill');
    timeEl.classList.add('work');
    isPomodoro ? setTimeout(chill, 25 * 60 * 1000) : stop();
}   

function stop() {
    timeEl.classList.remove('work');
    timeEl.classList.remove('chill');
    pomoBgEl.classList.remove('show'); 
}

function show(afterFive) {
    const now = new Date();
    let min = now.getMinutes(); 
    afterFive ? min +=5 : min;
    min > 59 ? min -= 60: min;
    const deg = min * 6 + 90;
    pomoBgEl.style.transform = 'rotate(' + deg + 'deg)';
}