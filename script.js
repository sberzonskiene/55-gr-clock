const dateEl = document.getElementsByClassName("date")[0];
const timeEl = document.getElementsByClassName("time")[0];
const hourEl = document.getElementsByClassName("hours")[0];
const minsEl = document.getElementsByClassName("minutes")[0];
const secsEl = document.getElementsByClassName("seconds")[0];

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