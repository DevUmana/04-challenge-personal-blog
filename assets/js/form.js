// TODO: Create a variable that selects the form element
const form = document.querySelector("form");
const errorEL = document.querySelector("#error");

// TODO: Create a function that handles the form submission. Grab the form data and store it in local storage, then redirect to the blog page
// using the `redirectPage` function. If the form is submitted with missing data, display an error message to the user.

function handlePost() {
  const usernameIn = form.elements.username.value;
  const titleIn = form.elements.title.value;
  const contentIn = form.elements.content.value;

  if (!usernameIn || !titleIn || !contentIn) {
    errorEL.textContent = "Please complete the form.";
    return;
  }

  let post = {
    username: usernameIn,
    title: titleIn,
    content: contentIn,
  };

  storeLocalStorage(post);
  redirectPage("blog.html");
}

// TODO: Add an event listener to the form on submit. Call the function to handle the form submission.
form.addEventListener("submit", function (event) {
  event.preventDefault();
  handlePost();
});
