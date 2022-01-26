const user = {
  id: 1,
  name: "test",
  currentRoom: "mainStage",
  prevRoom: "로비",
};

const zip = pako.deflate(JSON.stringify(user), { to: "string", level: 1 });

let compressedZip = "";
for (let i = 0; i < zip.byteLength; i++) {
  compressedZip += String.fromCharCode(zip[i]);
}

// 압축되기 전의 테스트
const prevText = document.querySelector("#prev-text");
const userRaw = JSON.stringify(user);
prevText.textContent = userRaw;
let detail = prevText.previousElementSibling.firstElementChild;
detail.textContent = userRaw.length;
detail.style.color = "#ff0000";

// 압축된 텍스트
const afterText = document.querySelector("#after-text");
afterText.textContent = compressedZip;
detail = afterText.previousElementSibling.firstElementChild;
detail.textContent = compressedZip.length;
detail.style.color = "#ff0000";
