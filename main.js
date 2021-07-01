const button = document.getElementById("show-popup");
const popupContainer = document.getElementById("popup-container"); // popupContainer


function createPopup(title, description) {
  const div = document.createElement("div"); // popup diven
  div.className += "popup";

  const h3 = document.createElement("h3");
  h3.innerText = title;

  const p = document.createElement("p");
  p.innerText = description;

  const closeButton = document.createElement("button");
  closeButton.className += "popup-close";
  closeButton.innerText = "OK";


  closeButton.addEventListener("click", function(event) {
    popupContainer.removeChild(div); // popup diven (ta bort)
    popupContainer.removeAttribute("data-active");
  });

  div.appendChild(h3);
  div.appendChild(p);
  div.appendChild(closeButton);

  return div;
}

function showPopup(title, description) {
  popupContainer.setAttribute("data-active", true);

  const popup = createPopup(title, description);

  popupContainer.appendChild(popup);
}


button.addEventListener("click", function(event){
  button.setAttribute("data-loading", true);

  setTimeout(function(){
    showPopup("Good job!", "All is good and nice and sweet!");
    button.removeAttribute("data-loading");
  }, 1000);
});