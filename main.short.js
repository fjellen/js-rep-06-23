const popupContainer = document.getElementById("popup-container"); // popupContainer

const createElement = (name, props) => {
  const el = document.createElement(name);

  Object.keys(props).filter(k => k !== "children").forEach(key => {
    el.setAttribute(key, props[key]);
    el[key] = props[key];
  });

  (props.children || []).forEach(child => el.appendChild(child));

  return el;
}

function createPopup(title, description) {
  const close = (popup) => {
    popupContainer.removeChild(popup);
    popupContainer.removeAttribute("data-active");
  }

  const popup = createElement(
    "div",
    {
      className: "popup",
      children: [
        createElement("h3", { innerText: title }),
        createElement("p", { innerText: description }),
        createElement("button", { className: "popup-close", innerText: "OK", onclick: event => close(event.target.parentNode) })
      ]
    }
  );

  return popup;
}

function showPopup(title, description) {
  popupContainer.setAttribute("data-active", true);
  popupContainer.appendChild(createPopup(title, description));
}

document.getElementById("show-popup").addEventListener("click", () => showPopup("Good job!", "All is good and nice and sweet!"));