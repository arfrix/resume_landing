var wishes = [
    {item:"اشتباهات" , cases:["تست۱" , "تست۱" , "تست۱ طولانی ترش کنم ببینم چی میشه" ,"تست۱" , "تست۱" ,"تست۱" , "تست۱حالا اینو یکم طولانی کنم"]},
    {item:"انتخاب فرمت" , cases:["تست۲" , "تست۲" , "تست۲" , "تست۲"]},
    {item:"تکمیل هدر" , cases:["تست۳" , "تست۳" , "تست۳" , "تست۳" , "تست۳" , "تست۳"]},
    {item:"نوشتن سامری" , cases:["تست۴" , "تست۴" , "تست۴" , "تست۴" , "تست۴"]},
    {item:"تکمیل تجارب" , cases:["تست۵" , "تست۵" , "تست۵" , "تست۵" , "تست۵" , "تست۵" , "تست۵"]},
    {item:"بخش مهارت" , cases:["تست۶" , "تست۶" , "تست۶"]},
    {item:"تحصیلات" , cases:["تست۷" , "تست۷" , "تست۷" , "تست۷" , "تست۷" , "تست۷"]}

]
var section = document.getElementsByClassName('wish-list-section');
var list = document.getElementById('wish-list');
var parent = document.getElementById('cases-parent');

wishes.forEach(wish => {
    var listItem = document.createElement('li');
    var itemButton = document.createElement('button');
    itemButton.innerHTML = wish.item;
    listItem.appendChild(itemButton);

    const showCases = () =>{
        //delete previous cases
        parent.innerHTML = '';

        //create each case and show in specific position
        let increaseLeft = 30 ;
        let increaseRight = 30 ;
        wish.cases.forEach( (itemCase , index) =>{
            var instance = document.createElement('p');
            instance.innerHTML = itemCase;
            instance.style.position = "absolute";
            //i want to show the cases in two parts(left and right side of the list)
            if(index < Math.floor(wish.cases.length/2)){
                instance.style.left = 150+'px';
                instance.style.top = (50 + increaseLeft)+'px';
                increaseLeft += 80;
            }else{
                instance.style.right = 150+'px';
                instance.style.top = (50 + increaseRight)+'px';
                increaseRight += 80;
            }

            parent.appendChild(instance);
        })
    }

    list.appendChild(listItem);
    itemButton.addEventListener("click" , showCases);
})
