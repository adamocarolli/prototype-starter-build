import { each } from "lodash-es";
import template from "./contact-list.html";
import "./contact-list.scss";

export function renderContactList() {
  const contactList = document.createElement("div");

  contactList.className = "contact-list";

  import("./data.json").then((value) => {
    const contacts = value.default;

    each(contacts, (entry) => {
      const element = document.createElement("div");
      element.className = "contact";

      element.innerHTML = template;
      element.querySelector(".name").innerHTML = entry.name;
      element.querySelector(".phone").innerHTML = entry.phone;

      contactList.appendChild(element);
    });
  });

  document.body.appendChild(contactList);
}
