function diceHandler() {
  const getNumber1 = Math.floor(Math.random() * 6 + 1);
  const getNumber2 = Math.floor(Math.random() * 6 + 1);
  document
    .querySelector("img.img1")
    .setAttribute("src", "/images/dice" + getNumber1 + ".png");
  document
    .querySelector("img.img2")
    .setAttribute("src", "/images/dice" + getNumber2 + ".png");

  if (getNumber1 > getNumber2) {
    document.querySelector("h1").textContent = "🎉Player 1 is win !!";
  } else if (getNumber1 < getNumber2) {
    document.querySelector("h1").textContent = "Player 2 is win!!🎉";
  } else {
    document.querySelector("h1").textContent =
      "You guys are drow, try it again.";
  }
}
