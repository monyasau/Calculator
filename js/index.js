btn1 = document.getElementById(button1);
btn2 = document.getElementById(button2);
btn3 = document.getElementById(button3);
btn4 = document.getElementById(button4);
btn5 = document.getElementById(button5);
btn6 = document.getElementById(button6);
btn7 = document.getElementById(button7);
btn8 = document.getElementById(button8);
btn9 = document.getElementById(button9);
btnc = document.getElementById(buttonc);
btnx = document.getElementById(buttonx);
btndiv = document.getElementById(buttondiv);
btnc.onclick = cleared();
// btn1 = document.getElementById(button1);
// btn1 = document.getElementById(button1);
// btn1 = document.getElementById(button1);
// btn1 = document.getElementById(button1);
// btn1 = document.getElementById(button1);
// btn1 = document.getElementById(button1);
// btn1 = document.getElementById(button1);
      // window.onscroll = function () {
      //   resizeHeader();
      // };
      // function resizeHeader() {
      //   if (
      //     document.body.scrollTop > 80 ||
      //     document.documentElement.scrollTop > 80
      //   ) {
      //     document.querySelector(".main-header").classList.add("resized");
      //   } else {
      //     document.querySelector(".main-header").classList.remove("resized");
      //   }
      // }
      // Register service worker to control making site work offline
if ("serviceWorker" in navigator) {
  navigator.serviceWorker.register("sw.js").then(() => {
    console.log("Service Worker Registered");
  });
}
// Code to handle install prompt on desktop
let deferredPrompt;
const addBtn = document.querySelector(".add-button");
addBtn.style.display = "none";
window.addEventListener("beforeinstallprompt", (e) => {
  // Prevent Chrome 67 and earlier from automatically showing the prompt
  e.preventDefault();
  // Stash the event so it can be triggered later.
  deferredPrompt = e;
  // Update UI to notify the user they can add to home screen
  addBtn.style.display = "block";
  addBtn.addEventListener("click", () => {
    // hide our user interface that shows our A2HS button
    addBtn.style.display = "none";
    // Show the prompt
    deferredPrompt.prompt();
    // Wait for the user to respond to the prompt
    deferredPrompt.userChoice.then((choiceResult) => {
      if (choiceResult.outcome === "accepted") {
        console.log("User accepted the A2HS prompt");
      } else {
        console.log("User dismissed the A2HS prompt");
      }
      deferredPrompt = null;
    });
  });
});
