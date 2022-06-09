let time;
let timeZone;
const timeRegex = /(?<=T)\d{2}:\d{2}/g;
let conWidgetTime = document.getElementById("con-widget-time");
let timeWidgetFooter = document.getElementById("time-widget-footer");
let feelsLikeTime = document.getElementById("feels-like-time");
let pressure = document.getElementById("pressure");
let visibility = document.getElementById("visibility");

let hour = (Math.floor(Math.random() * 23) + 1).toString();
let minute = Math.floor(Math.random() * 59) + 0;
let percentage = Math.floor(Math.random() * 100) + 1;

async function getTime() {
    const res = await axios.get("http://worldtimeapi.org/api/ip");
    console.log(res.data);
    time = res.data.datetime.match(timeRegex)[0];
    timeZone = res.data.abbreviation;
}

function updateTime() {
    console.log("Updating time...");
    getTime().then(
        () => {
            conWidgetTime.innerText = time;
            timeWidgetFooter.innerText = timeZone;
            feelsLikeTime.innerText = hour.concat(`:`, minute);
        },
        () => {
            console.log("FAILURE.");
        }
    );
}

updateTime();
setInterval(updateTime, 60000);

// Hour // Minute

// Math.floor(Math.random() * 100) + 1 // Peer Pressure
// Math.floor(Math.random() * 100) + 1 // Visibility
// Math.floor(Math.random() * 100) + 1 // Leave Early %
