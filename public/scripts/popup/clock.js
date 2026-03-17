async function getCityTime(timeZone) {
    const now = new Date();
    const options = { timeZone, hour: '2-digit', minute: '2-digit', second: '2-digit', hour12: false };
    const timeFormatter = new Intl.DateTimeFormat([], options);
    const timeString = timeFormatter.format(now);
    return timeString.toString();
}

async function updateClock(elementId, timeZone) {
    const clockElement = document.getElementById(elementId);
    const timeString = await getCityTime(timeZone);
    clockElement.innerHTML = timeString;
}

function withoutSeconds(time) {
    return time.substring(0, time.length - 3);
}

setInterval(() => { 
    updateClock('clock-Turkey', 'Europe/Istanbul');
    updateClock('clock-NewYork', 'America/New_York');
    updateClock('clock-London', 'Europe/London');
    updateClock('clock-Berlin', 'Europe/Berlin');
    updateClock('clock-Moscow', 'Europe/Moscow');
    updateClock('clock-Toronto', 'America/Toronto');
    updateClock('clock-Tokyo', 'Asia/Tokyo');
    updateClock('clock-Brazil', 'America/Sao_Paulo');
}, 1000);

const countryBoxes = document.querySelectorAll(".countryBox");

countryBoxes.forEach(function(box) {
    box.addEventListener("click", function() {
        var country = box.querySelector(".clock-country").innerText;
        var city = box.querySelector(".clock-city").innerText;
        var clock = withoutSeconds(box.querySelector(".clock-time").innerText);

        clockBox(country,city,clock);
    });
});

async function clockBox(country,city,clock)
{
    event.stopPropagation();

    var text = `${country} ・ ${city} Saati: ${clock}`;

    navigator.clipboard.writeText(text)
    .then(function() {
       talert("success",`${city}・${country} Saati Kopyalandı`);
    })
    .catch(function(error) {
        talert("danger",`${country}/${city} Saati Kopyalanırken bir hata oluştu`, null, "Destek", null, null, "/support");
    });
}