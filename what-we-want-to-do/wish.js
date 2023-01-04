const buttons = document.querySelectorAll(".wish-list-btn");


function removeItemsHandler(element) {
    const firstSiblingNode = element.parentNode.nextElementSibling;
    const thirdSiblingNode = element.parentNode.previousElementSibling;
    firstSiblingNode.classList.add("hideElement");
    thirdSiblingNode.classList.add("hideElement");
    element.classList.remove("active-btn");
}
function ShowItemsHandler(e) {
    for (let element of buttons) {
        removeItemsHandler(element)
    }
    const firstSiblingNode = e.target.parentNode.nextElementSibling;
    const thirdSiblingNode = e.target.parentNode.previousElementSibling;
    firstSiblingNode.classList.remove("hideElement");
    thirdSiblingNode.classList.remove("hideElement");
    firstSiblingNode.classList.add("fadeInRight");
    thirdSiblingNode.classList.add("fadeInLeft");
    e.target.classList.add("active-btn");
}



for (let button of buttons) {
    button.addEventListener("click", ShowItemsHandler)
}