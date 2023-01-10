const buttons = document.querySelectorAll(".wish-list-btn");
var questionList = document.getElementById('question-list');
var screen = window.innerWidth;
var qustions = [
    { id: 1, title: 'صورت سوال اول اینجا نوشته میشه', description: 'لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد. ' },
    { id: 2, title: 'صورت سوال دوم اینجا نوشته میشه', description: 'لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد. ' },
    { id: 3, title: 'صورت سوال سوم اینجا نوشته میشه', description: 'لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد. کتابهای زیادی در شصت و سه درصد گذشته، حال و آینده شناخت فراوان جامعه و متخصصان را می طلبد تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی و فرهنگ پیشرو در زبان فارسی ایجاد کرد.' }
]


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

qustions.forEach(question => {
    // create question
    var questionContainer = document.createElement('div');

    //create counter
    var questionCounter = document.createElement('div');
    var counter = document.createElement('span');
    counter.innerHTML = question.id;
    questionCounter.appendChild(counter);
    questionContainer.appendChild(questionCounter)

    // //show question
    var questionTitle = document.createElement('h2');
    questionTitle.innerHTML = question.title;
    questionContainer.appendChild(questionTitle);

    // //show answer
    var answer = document.createElement('div');
    answer.innerHTML = `<p>${question.description}</p>`;
    questionContainer.appendChild(answer);


    questionList.appendChild(questionContainer);
    questionContainer.classList.add('question')
    questionCounter.classList.add('question-counter')
    questionTitle.classList.add('question-title')
    answer.classList.add('description')
})


for (let button of buttons) {
    button.addEventListener("click", ShowItemsHandler)
    //add no-hover style for first wish-list-btn (before any click)
    if (button.classList.contains("active-btn")) {
        button.classList.add("no-hover")
    }
}
