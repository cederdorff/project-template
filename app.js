"use strict"; // Enable strict mode for better error checking

function sayHello() {
  const name = document.querySelector("input").value;

  const h3 = document.querySelector("h3");
  const text = "Hej " + name;

  h3.textContent = text;
}

document.querySelector("button").addEventListener("click", sayHello);
