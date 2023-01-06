const buttons = document.querySelectorAll(".wish-list-btn");
var screen = window.innerWidth;


function removeItemsHandler(element) {
    const firstSiblingNode = element.parentNode.nextElementSibling;
    const thirdSiblingNode = element.parentNode.previousElementSibling;
    firstSiblingNode.classList.add("hideElement");
    thirdSiblingNode.classList.add("hideElement");
    element.classList.remove("active-btn", "no-hover");
}
function ShowItemsHandler(e) {
    for (let element of buttons) {
        removeItemsHandler(element)
    }
    const firstSiblingNode = e.target.parentNode.nextElementSibling;
    const thirdSiblingNode = e.target.parentNode.previousElementSibling;
    firstSiblingNode.classList.remove("hideElement");
    thirdSiblingNode.classList.remove("hideElement");
    //add animations
    if (screen > 700) {
        thirdSiblingNode.classList.add("fadeInLeft");
        firstSiblingNode.classList.add("fadeInRight");
    } else {
        thirdSiblingNode.classList.add("fadeInDown");
        firstSiblingNode.classList.add("fadeInDown");
    }
    e.target.classList.add("active-btn", "no-hover");
}



for (let button of buttons) {
    button.addEventListener("click", ShowItemsHandler)
    //add no-hover style for first wish-list-btn (before any click)
    if (button.classList.contains("active-btn")) {
        button.classList.add("no-hover")
    }
}
