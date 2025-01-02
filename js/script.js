function scrollToEndOfPage() {
  getData();
}
function getData() {
  fetch(" https://akademia108.pl/api/ajax/get-users.php")
    .then((response) => response.json())
    .then((data) => {
      data.forEach((element) => {
        const addedElements = document.createElement("div");
        addedElements.innerHTML = `<p>User ID:${element.id}</p><p>User URL:${element.name}</p> <p>${element.website}<br />——–</p>`;
        document.querySelector("body").appendChild(addedElements);
      });
    });
}
window.addEventListener("scroll", scrollToEndOfPage);
