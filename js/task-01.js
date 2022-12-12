const categoriesEl = document.querySelector("#categories");
console.log("Number of categories:", categoriesEl.children.length);

function getCategoryInfo() {
  const titleArray = document.querySelectorAll("h2");
  const categoryArray = document.querySelectorAll("#categories li ul");

  for (let i = 0; i <= titleArray.length; i += 1) {
    console.log("Category:", titleArray[i].textContent);
    console.log("Elements:", categoryArray[i].children.length);
  }
}
getCategoryInfo();
