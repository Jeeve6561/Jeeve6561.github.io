window.onload = () => {
  setTimeout(() => {
    window.scroll({ top: 100, behavior: "smooth" });
    setTimeout(() => {
      window.scroll({ top: 0, behavior: "smooth" });
    }, 850);
  }, 500);
};

let card1 = document.getElementById("card-1");
let card1Loaded = false;
let card2 = document.getElementById("card-2");
let card2Loaded = false;
let card3 = document.getElementById("card-3");
let card3Loaded = false;
let card4 = document.getElementById("card-4");
let card4Loaded = false;
let card5 = document.getElementById("card-5");
let card5Loaded = false;
let card6 = document.getElementById("card-6");
let card6Loaded = false;

function CheckIsInView(element) {
  let rect = element.getBoundingClientRect();
  if (rect.top < window.innerHeight && rect.bottom >= 0) {
    return true;
  }
  return false;
}

document.addEventListener("scroll", () => {
  if (CheckIsInView(card1) && !card1Loaded) {
    card1Loaded = true;
    card1.classList.add("fade-in-card");
  }
  if (CheckIsInView(card2) && !card2Loaded) {
    card2Loaded = true;
    card2.classList.add("fade-in-card");
  }
  if (CheckIsInView(card3) && !card3Loaded) {
    card3Loaded = true;
    card3.classList.add("fade-in-card");
  }
  if (CheckIsInView(card4) && !card4Loaded) {
    card4Loaded = true;
    card4.classList.add("fade-in-card");
  }
  if (CheckIsInView(card5) && !card5Loaded) {
    card5Loaded = true;
    card5.classList.add("fade-in-card");
  }
  if (CheckIsInView(card6) && !card6Loaded) {
    card6Loaded = true;
    card6.classList.add("fade-in-card");
  }
});
