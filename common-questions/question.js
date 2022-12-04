var qustions = [
    {id: 1 , title:'صورت سوال اول اینجا نوشته میشه' , description:'جواب سوال اول اینجا نوشته میشه جواب سوال اول اینجا نوشته میشه جواب سوال اول اینجا نوشته میشه جواب سوال اول اینجا نوشته میشه جواب سوال اول اینجا نوشته میشه'},
    {id: 2 , title:'صورت سوال دوم اینجا نوشته میشه' , description:'جواب سوال دوم اینجا نوشته میشه جواب سوال دوم اینجا نوشته میشه جواب سوال دوم اینجا نوشته میشه جواب سوال دوم اینجا نوشته میشه جواب سوال دوم اینجا نوشته میشه جواب سوال دوم اینجا نوشته میشه جواب سوال دوم اینجا نوشته میشه جواب سوال دوم اینجا نوشته میشه جواب سوال دوم اینجا نوشته میشه جواب سوال دوم اینجا نوشته میشه'},
    {id: 3 , title:'صورت سوال سوم اینجا نوشته میشه' , description:'جواب سوال سوم اینجا نوشته میشه جواب سوال سوم اینجا نوشته میشه جواب سوال سوم اینجا نوشته میشه جواب سوال سوم اینجا نوشته میشه جواب سوال سوم اینجا نوشته میشه جواب سوال سوم اینجا نوشته میشه جواب سوال سوم اینجا نوشته میشه جواب سوال سوم اینجا نوشته میشه جواب سوال سوم اینجا نوشته میشه جواب سوال سوم اینجا نوشته میشه جواب سوال سوم اینجا نوشته میشه جواب سوال سوم اینجا نوشته میشه جواب سوال سوم اینجا نوشته میشه جواب سوال سوم اینجا نوشته میشه جواب سوال سوم اینجا نوشته میشه جواب سوال دوم اینجا نوشته میشه جواب سوال سوم اینجا نوشته میشه جواب سوال سوم اینجا نوشته میشه جواب سوال سوم اینجا نوشته میشه جواب سوال سوم اینجا نوشته میشه'}
]

var questionList = document.getElementById('question-list');

qustions.forEach(question =>{
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

