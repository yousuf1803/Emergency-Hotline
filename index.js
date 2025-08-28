function getElement(id) {
  const count = Number(document.getElementById(id).innerText);
  return count;
}
function getProduct(id) {
  const element = document.getElementById(id);
  return element;
}

// Heart Icons Functionalities

const heartIcons = document.getElementsByClassName("heart-icon");
for (let heartIcon of heartIcons) {
  heartIcon.addEventListener("click", function () {
    let loveCount = getElement("love-count");
    let newLoveCount = loveCount + 1;
    document.getElementById("love-count").innerText = newLoveCount;
  });
}

