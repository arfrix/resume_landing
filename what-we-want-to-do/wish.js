var buttons = document.getElementsByClassName('wish-list-btn');
var item1 = document.getElementById('item-1');
var item2 = document.getElementById('item-2');
var item3 = document.getElementById('item-3');
var item4 = document.getElementById('item-4');
var screen = window.innerWidth;


function fillItems(first,second,third,fourth){
    item1.innerHTML = first;
    item2.innerHTML = second;
    item3.innerHTML = third;
    item4.innerHTML = fourth;
}
function insertAfter(newNode, existingNode) {
    existingNode.parentNode.insertBefore(newNode, existingNode.nextSibling);
}

function clicked(i){
    //show active button with a specific style
    for(let j=0 ; j<buttons.length ; j++){
        if(buttons[j] !== buttons[i]){
            buttons[j].classList.remove('active-btn' ,'no-hover');
        }else{
            buttons[i].classList.add('active-btn' ,'no-hover');
        }
    }
    //to Fill items
    switch(i){
        case 0:
            fillItems("آیتم شماره ۱ طولانی ترش کنم" , "آیتم شماره ۱" , "آیتم شماره ۱" , "آیتم شماره ۱ طولانی تر")
            break;
        case 1:
            fillItems("آیتم شماره ۲ طولانی کنم ببینم چی میشه " , "آیتم شماره ۲" , "آیتم شماره ۲" , "آیتم شماره ۲")
            break;
        case 2:
            fillItems("آیتم شماره ۳" , "آیتم شماره ۳" , "آیتم شماره ۳" , "آیتم شماره ۳")
            break;  
        case 3:
            fillItems("آیتم شماره ۴" , "آیتم شماره ۴" , "آیتم شماره ۴" , "آیتم شماره ۴")
            break;
        case 4:
            fillItems("آیتم شماره ۵" , "آیتم شماره ۵" , "آیتم شماره ۵" , "آیتم شماره ۵")
            break;
        case 5:
            fillItems("آیتم شماره ۶" , "آیتم شماره ۶" , "آیتم شماره ۶" , "آیتم شماره ۶")
            break;  
        case 6:
            fillItems("آیتم شماره ۷" , "آیتم شماره ۷" , "آیتم شماره ۷" , "آیتم شماره ۷")
            break;
        case 7:
            fillItems("آیتم شماره ۸" , "آیتم شماره ۸" , "آیتم شماره ۸" , "آیتم شماره ۸")
            break;
    }

    //show items under buttons

    if(screen <950 ){
        const leftItems = document.getElementById("left-items");
        const rightItems = document.getElementById("right-items");
        const eachLi= document.getElementsByClassName("wish-list-item");
        insertAfter(leftItems , eachLi[i])
        insertAfter(rightItems , leftItems)
    }

}

for(let i=0 ; i<buttons.length ; i++){
    buttons[i].addEventListener('click' , () => clicked(i))
}

