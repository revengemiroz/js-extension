document.querySelector(".play").addEventListener("click", () => {
  chrome.runtime.sendMessage({
    type: "play",
    play: {
      source:
        "https://s3.eu-west-1.amazonaws.com/data.namedrop.io/audio/mirozdevkota.mp3",
      volume: 1,
    },
  });
});

document.querySelector(".pause").addEventListener("click", () => {
  chrome.runtime.sendMessage({ type: "pause" });
});
