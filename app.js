function currentTime() {
    let date = new Date();
    let hours = date.getHours();
    let minutes = date.getMinutes();
    let seconds = date.getSeconds();
    let mid = hours >= 12 ? "PM" : "AM";
    hours = hours == 0 ? 12 : hours > 12 ? hours - 12 : hours;

    hours = updateTime(hours);
    minutes = updateTime(minutes);
    seconds = updateTime(seconds);

    document.querySelector("#time").innerHTML = `${hours}:${minutes}`;
    document.querySelector("#sec").innerHTML = `${seconds}`;
    document.querySelector("#mid").innerHTML = `${mid}`;

    let curr_date = date.getDate();
    let day = date.getDay();
    let month = date.getMonth();
    let year = date.getFullYear();
    let month_name = [
        "January", "February", "March", "April", "May",
        "June", "July", "August", "September", "October", "November", "December"
    ];
    let showDay = document.querySelectorAll(".day-wrapper span");

    document.querySelector("#showDate").innerHTML = `${month_name[month]} ${curr_date}, ${year}`;
    showDay.forEach((day, index) => {
        day.style.opacity = index === date.getDay() ? "1" : "0.3";
    });
}

function updateTime(e) {
    return e < 10 ? "0" + e : e;
}

setInterval(currentTime, 1000);
currentTime();
