setInterval(() => {
  let instant = new Date();
  let time = document.getElementById("now-time");
  let event = document.getElementById("now-event");
  let schedule = document.getElementById("schedule");
  time.innerHTML = `${instant.getHours()}時${instant.getMinutes()}分${instant.getSeconds()}秒`;
  event.innerHTML = now_event();
  schedule.innerHTML = "";
  for (let i = 0; i < past_event().length; i++) {
    schedule.innerHTML += `<li class="${
      past_event()[i][0]
    }"><span class="event-time">${past_event()[i][2]}<br></span>${
      past_event()[i][1]
    }</li>`;
  }
}, 500);

window.addEventListener("load", () => {
  let time = new Date();
  let kiuchi = document.getElementById("kiuchi").style;
  if (time >= new Date("2023/12/29 20:00:00")) {
    kiuchi.display = "block";
  }
});
