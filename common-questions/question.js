var qustions = [
    {id: 1 , title:'صورت سوال اول اینجا نوشته میشه' , description:'لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد. '},
    {id: 2 , title:'صورت سوال دوم اینجا نوشته میشه' , description:'لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد. '},
    {id: 3 , title:'صورت سوال سوم اینجا نوشته میشه' , description:'لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد. کتابهای زیادی در شصت و سه درصد گذشته، حال و آینده شناخت فراوان جامعه و متخصصان را می طلبد تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی و فرهنگ پیشرو در زبان فارسی ایجاد کرد.'}
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

