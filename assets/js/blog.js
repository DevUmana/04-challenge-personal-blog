// TODO: Create a variable that selects the main element, and a variable that selects the back button element
const mainEl = document.querySelector("main");
const backEl = document.querySelector("#back");

// TODO: Create a function that builds an element and appends it to the DOM
function submission(renderData) {
  if (renderData) {
    renderData.forEach((data) => {
      const article = document.createElement("article");
      const h2 = document.createElement("h2");
      const blockquote = document.createElement("blockquote");
      const p = document.createElement("p");

      h2.textContent = data.title;
      blockquote.textContent = data.content;
      p.textContent = `Posted by: ${data.username}`;

      mainEl.appendChild(article);
      article.appendChild(h2);
      article.appendChild(blockquote);
      blockquote.appendChild(p);
    });
  }
}

// TODO: Create a function that handles the case where there are no blog posts to display
function noPosts() {
  const h2El = document.createElement("h2");
  h2El.textContent = "No Blog posts yet...";
  mainEl.appendChild(h2El);
}

// TODO: Create a function called `renderBlogList` that renders the list of blog posts if they exist. If not, call the no posts function.
function renderBlogList() {
  let renderData = readLocalStorage();
  if (renderData.length === 0) {
    noPosts();
    return;
  } else {
    submission(renderData);
  }
}

// TODO: Call the `renderBlogList` function
renderBlogList();

// TODO: Redirect to the home page using the `redirectPage` function found in logic.js when the back button is clicked
backEl.addEventListener("click", function () {
  redirectPage("./index.html");
});
