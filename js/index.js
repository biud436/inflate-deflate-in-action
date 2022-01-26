const entry = {
  start() {
    const text = String(document.querySelector("#normal-text").value);
    const zip = pako.deflate(text, { to: "string", level: 1 });
    let compressedZip = "";
    for (let i = 0; i < zip.byteLength; i++) {
      compressedZip += String.fromCharCode(zip[i]);
    }
    this.clear();
    this.updatePrevText(text);
    this.updateAfterText(compressedZip);
  },

  clear() {
    const prevText = document.querySelector("#prev-text");
    prevText.textContent = "";
    let detail = prevText.previousElementSibling.firstElementChild;
    detail.textContent = "";

    const afterText = document.querySelector("#after-text");
    afterText.textContent = "compressedZip";
    detail = afterText.previousElementSibling.firstElementChild;
    detail.textContent = "";
  },

  /**
   * 압축되기 전의 텍스트
   */
  updatePrevText(user) {
    const prevText = document.querySelector("#prev-text");
    const userRaw = JSON.stringify(user);
    prevText.textContent = userRaw;
    let detail = prevText.previousElementSibling.firstElementChild;
    detail.textContent = userRaw.length;
    detail.style.color = "#ff0000";
  },

  /**
   * 업축된 후의 텍스트
   */
  updateAfterText(compressedZip) {
    const afterText = document.querySelector("#after-text");
    afterText.textContent = compressedZip;
    detail = afterText.previousElementSibling.firstElementChild;
    detail.textContent = compressedZip.length;
    detail.style.color = "#ff0000";
  },

  updateFrame() {
    window.requestAnimationFrame(updateFrame);
  },
};

const connector = {
  connect() {
    const submit = document.querySelector("#compress-btn");
    submit.onclick = () => {
      entry.start();
    };
  },
};

connector.connect();
