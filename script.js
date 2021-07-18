function testF() {
  const body = document.querySelector("body");
  body.classList.toggle("nav-off");

  const nav = document.querySelector("nav");
  nav.classList.toggle("hide");

  //   If the nav is turned off, we add the icon to the header
  if (body.classList.contains("nav-off")) {
    //   Here we make the bars icon
    const bars = document.createElement("i");
    const header = document.querySelector("header");
    header.appendChild(bars);

    // Now we set the attributes of the bars icon
    bars.setAttribute("onclick", "testF()");
    bars.setAttribute("class", "fas fa-bars");
    bars.setAttribute("id", "headerBars");
  }
  // if the nav is turned off, remove the icon
  else {
    const bars2 = document.getElementById("headerBars");
    bars2.remove();
  }
}
