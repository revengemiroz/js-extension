const holder = document.querySelector("a");

function containsSpecificText(node) {
  const targetText = "namedrop.io/mirozdevkota";
  return node.textContent.includes(targetText);
}

function addButton(nextNode) {
  // Check if nextNode is null or undefined
  console.log({ nextNode });
  if (!nextNode) {
    console.error("nextNode is null or undefined");
    return;
  }

  const button = document.createElement("button");
  button.textContent = "Play";
  button.onclick = () => {
    // Add your logic for what happens when the button is clicked
    chrome.runtime.sendMessage({
      type: "play",
      play: {
        source:
          "https://s3.eu-west-1.amazonaws.com/data.namedrop.io/audio/mirozdevkota.mp3",
        volume: 1,
      },
    });
    console.log("Button clicked!");
  };

  // Check if nextNode has a parentNode before inserting the button
  if (nextNode.parentNode) {
    nextNode.parentNode.insertBefore(button, nextNode.nextSibling);
  } else {
    console.error("nextNode does not have a parentNode");
  }
}

function addButtonsToSpecificText() {
  //   const allNodes = document.body.querySelectorAll("p, span, div, a");
  const targetText = "namedrop.io/mirozdevkota";
  const elementsWithText = document.querySelectorAll("*");
  console.log({ elementsWithText });
  elementsWithText.forEach((node) => {
    if (node.textContent.includes("namedrop")) {
      addButton(node.nextSibling);
    }
  });
}

const runScript = () => {
  addButtonsToSpecificText();
};

if (document.readyState === "loading") {
  // If the document is still loading, wait for the DOMContentLoaded event
  document.addEventListener("DOMContentLoaded", runScript);
} else {
  // If the document has already finished loading, call the function immediately
  runScript();
}

if (typeof window !== "undefined") {
  // window.addEventListener("load", () => console.log("LOADED"));
  document.addEventListener("DOMContentLoaded", () => runScript());
}
