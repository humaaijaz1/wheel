const febHolidays = [
    "Dear Amaan,",
    "First of all, I love you❤️",
    "You've become someone really special to me",
    "You are amazing",
    "You are so sweet",
    "❤️❤️❤️",
    "I love your personality",
    "I just love everything about you",
    "❤️❤️❤️",
    "I will always be there for you",
    "No matter how far we are🥰",
    "You're the cutest, funniest,",
    "sweetest boy alive.",
    "In one word, you're just perfect.😍",
    "I'm so grateful I met you❤️",
    "I know it's only been a few days",
    "Idk how but you've become the most special person in my life🥰",
    "I don't want to lose you",
    "And trust me I dont want anyone else",
    "I feel like there's no one better than you❤️",
    "You're the best Amaan!",
    "I just want us to be together forever ",
    "Ik it's not easy to trust someone in such a short span of time",
    "I know there will be some hardships",
    "But I believe that we can overcome them",
    "You've just become the most important person in my life❤️",
    "I really can't help but feel a special connection with you",
    "I love talking to you, i literally love everything about you!",
    "I just wanted to be honest with you about my feelings",
    "Take your time to process everything",
    "and lastly I just want to say that",
    "I Love You So much❤️",
  ];
  const ulEl = document.querySelector("ul");
  const d = new Date();
  let daynumber = d.getMonth() == 1 ? d.getDate() - 1 : 0;
  let activeIndex = daynumber;
  const rotate = -360 / febHolidays.length;
  init();
  function init() {
    febHolidays.forEach((holiday, idx) => {
      const liEl = document.createElement("li");
      liEl.style.setProperty("--day_idx", idx);
      liEl.innerHTML = `<time datetime="2022-02-${idx + 1}">${
        idx + 1
      }</time><span>${holiday}</span>`;
      ulEl.append(liEl);
    });
    ulEl.style.setProperty("--rotateDegrees", rotate);
    adjustDay(0);
  }
  function adjustDay(nr) {
    daynumber += nr;
    ulEl.style.setProperty("--currentDay", daynumber);
    const activeEl = document.querySelector("li.active");
    if (activeEl) activeEl.classList.remove("active");
    activeIndex = (activeIndex + nr + febHolidays.length) % febHolidays.length;
    const newActiveEl = document.querySelector(
      `li:nth-child(${activeIndex + 1})`
    );
    document.body.style.backgroundColor = window.getComputedStyle(
      newActiveEl
    ).backgroundColor;
    newActiveEl.classList.add("active");
  }
  window.addEventListener("keydown", (e) => {
    switch (e.key) {
      case "ArrowUp":
        adjustDay(-1);
        break;
      case "ArrowDown":
        adjustDay(1);
        break;
      default:
        return;
    }
  });
  