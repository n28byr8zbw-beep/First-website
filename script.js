// ============================================================
// This file is JavaScript — the BEHAVIOR of your website.
// (House analogy: the electricity that makes things switch on.)
//
// In JavaScript, anything after // is a comment for humans.
//
// This whole file does ONE thing: it makes the Like button work.
// Read it top to bottom — it's shorter than it looks.
// ============================================================


// ------------------------------------------------------------
// STEP 1 · Find the pieces of the page we want to control.
// Remember the id="..." name tags in index.html? This is how
// JavaScript looks them up.
// ------------------------------------------------------------
const button = document.getElementById("like-button");
const heart = document.getElementById("heart");
const label = document.getElementById("like-label");
const countDisplay = document.getElementById("like-count");


// ------------------------------------------------------------
// STEP 2 · Remember some facts. These are "variables" — boxes
// that hold a value we can change later.
// ------------------------------------------------------------
let liked = false; // has the button been liked? starts as no
let count = 0;     // how many likes so far


// ------------------------------------------------------------
// STEP 3 · Say what should happen when the button is clicked.
// "addEventListener" means: hey browser, when this gets clicked,
// run the code between the { curly braces }.
// ------------------------------------------------------------
button.addEventListener("click", () => {

  // Flip it: liked becomes un-liked, un-liked becomes liked.
  liked = !liked;

  if (liked) {
    // ---- turning the like ON ----
    count = count + 1;            // one more like
    heart.textContent = "♥";      // filled heart
    label.textContent = "Liked";  // TRY THIS: change to "You liked this!"
    button.classList.add("liked");      // tells CSS to use the red style
  } else {
    // ---- turning the like OFF ----
    count = count - 1;            // take the like back
    heart.textContent = "♡";      // empty heart
    label.textContent = "Like";
    button.classList.remove("liked");   // back to the normal style
  }

  // Either way, update the number under the button.
  countDisplay.textContent = count;
});


// ------------------------------------------------------------
// That's it. That's JavaScript: find things, remember things,
// and react when the user does something.
//
// TRY THIS (slightly bolder): add this line inside the
// "turning the like ON" part above —
//
//     document.title = "Thanks for the like!";
//
// …then save, refresh, click Like, and look at the browser tab.
// ------------------------------------------------------------
