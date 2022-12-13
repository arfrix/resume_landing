var wishes = [
    {item:"اشتباهات" , instances:["تست۱" , "تست۱"]},
    {item:"انتخاب فرمت" , instances:["تست۲" , "تست۲" , "تست۲" , "تست۲"]},
    {item:"تکمیل هدر" , instances:["تست۳" , "تست۳" , "تست۳"]},
    {item:"نوشتن سامری" , instances:["تست۴" , "تست۴" , "تست۴" , "تست۴" , "تست۴"]},
    {item:"تکمیل تجارب" , instances:["تست۵" , "تست۵" , "تست۵"]},
    {item:"بخش مهارت" , instances:["تست۶" , "تست۶" , "تست۶"]},
    {item:"تحصیلات" , instances:["تست۷" , "تست۷"]}

]

var list = document.getElementById('wish-list');
wishes.forEach(wish => {
    var listItem = document.createElement('li');
    var itemButton = document.createElement('button');
    itemButton.innerHTML = wish.item;
    listItem.appendChild(itemButton);

    list.appendChild(listItem);

})
