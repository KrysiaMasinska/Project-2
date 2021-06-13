const item1 = document.querySelector('.item1');
const btnArrow = document.querySelector('.arrow');
const arrowIcon = document.querySelector('.fas');

btnArrow.addEventListener('click', function(){
    item1.classList.toggle('hide');
    if(item1.classList.contains('hide')){
        arrowIcon.style.transform = 'rotate(180deg)';
    }
    else{
        arrowIcon.style.transform = 'rotate(0)';
    }
});