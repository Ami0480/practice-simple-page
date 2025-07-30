function contactName() {
  let name = prompt("What's your name?");

  alert(
    "Hi " + name + ", let's learn about oats. Meanwhile, eat a lot of oats🥣"
  );
}

let contactButton = document.querySelector("button");

contactButton.addEventListener("click", contactName);
