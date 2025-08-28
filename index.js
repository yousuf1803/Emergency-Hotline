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
// Call Buttons Functionalities

const callButtons = document.getElementsByClassName("btn-call");
for (let callButton of callButtons) {
  callButton.addEventListener("click", function () {
    const serviceName = callButton.parentNode.parentNode.children[1].innerText;
    const serviceNumber =
      callButton.parentNode.parentNode.children[3].innerText;
    let currentTime = new Date().toLocaleTimeString();

    const coins = getElement("coin-count");
    if (coins < 20) {
      alert(
        `📞You don't have enough coins.You need at least 20 coins to make a call.`
      );
      return;
    }
    alert(`📞Calling ${serviceName} ${serviceNumber}`);
    const newCoins = coins - 20;
    document.getElementById("coin-count").innerText = newCoins;
    const historyContainer = document.getElementById("call-history-container");
    const callHistory = document.createElement("div");
    callHistory.innerHTML = `
						<div class="flex justify-between items-center  p-2 bg-gray-100 mx-4 rounded-lg ">
              <div>
                <p class="font-madurai text-lg font-medium text-black">${serviceName}</p>
                <p class="text-lg text-[#5C5C5C]">${serviceNumber}</p>
              </div>
              <div>
                <p class="text-sm">${currentTime}</p>
              </div>
            </div>
					`;
    historyContainer.appendChild(callHistory);
  });
}
// Call History Section Functionalities

const clearButton = getProduct("btn-clear");
clearButton.addEventListener("click", function () {
  const historyContainer = document.getElementById("call-history-container");
  historyContainer.innerHTML = "";
});
// Copy Buttons Functionalities

const copyButtons = document.getElementsByClassName("btn-copy");
for (let copyButton of copyButtons) {
  copyButton.addEventListener("click", function () {
    const hotlineNumber =
      copyButton.parentNode.parentNode.children[3].innerText;
    alert(`©Helpline number copied.`);
    const copyCount = getElement("copy-count");
    const newCopyCount = copyCount + 1;
    document.getElementById("copy-count").innerText = newCopyCount;
    navigator.clipboard.writeText(hotlineNumber);
  });
}




