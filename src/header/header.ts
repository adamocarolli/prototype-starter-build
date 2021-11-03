import template from "./header.html";
import logo from "./logo.png";
import add from "./add.png";
import "./header.scss";

export function renderHeader() {
  const header = document.createElement("div");
  header.className = "header";

  header.innerHTML = template;

  header.querySelector(".app-logo").setAttribute("src", logo);
  header.querySelector(".add-icon").setAttribute("src", add);

  document.body.appendChild(header);
}
