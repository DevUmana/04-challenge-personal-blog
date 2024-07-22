// TODO: Create logic to toggle the light/dark mode styles for the page and circle. The mode should be saved to local storage.
// Access toggle switch HTML element
const toggleEl = document.querySelector("#toggle");
const containerEl = document.querySelector(".container");

// Set default mode to dark
localStorage.setItem("mode", "light");

toggleEl.setAttribute(
  "style",
  "background-image: url(https://img.icons8.com/?size=100&id=8LM7-CYX4BPD&format=png&color=000000); background-size: 100%;"
);

// Listen for a click event on toggle switch
toggleEl.addEventListener("click", function () {
  let mode = localStorage.getItem("mode");
  // If mode is dark, apply light background
  if (mode === "dark") {
    localStorage.setItem("mode", "light");
    containerEl.setAttribute("class", "light");
    toggleEl.setAttribute(
      "style",
      "background-image: url(https://img.icons8.com/?size=100&id=8LM7-CYX4BPD&format=png&color=000000); background-size: 100%;"
    );
    document.documentElement.style.setProperty("--circle-color", "#ffb100");
  }
  // If mode is light, apply dark background
  else {
    localStorage.setItem("mode", "dark");
    containerEl.setAttribute("class", "dark");
    toggleEl.setAttribute(
      "style",
      "background-image: url(https://img.icons8.com/?size=100&id=6DXM8bs2tFSU&format=png&color=000000); background-size: 100%;"
    );
    document.documentElement.style.setProperty("--circle-color", "#563d7c");
  }
});

// TODO: Create a function called `readLocalStorage` that reads from local storage and returns the data. If no data exists, return an empty array.
function readLocalStorage() {
  const storedData = JSON.parse(localStorage.getItem("blogData"));
  if (!storedData) {
    return [];
  } else {
    return storedData;
  }
}

// TODO: Create a function called `storeLocalStorage` that takes a given object and saves the new data to the existing blog data in local storage.
function storeLocalStorage(post) {
  let tempData = [];
  tempData = JSON.parse(localStorage.getItem("blogData")) || tempData;

  // push the new data to the array
  if (post) {
    tempData.push({
      username: post.username,
      title: post.title,
      content: post.content,
    });
  }
  console.log(tempData);
  localStorage.setItem("blogData", JSON.stringify(tempData));
}

// ! Use the following function whenever you need to redirect to a different page
let redirectURL = "";

const redirectPage = function (url) {
  redirectURL = url;
  location.assign(url);
};
