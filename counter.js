let count = 0;

const value = document.querySelector('#value');
const btns = document.querySelectorAll('.btn');

btns.forEach(function (item) {
    item.addEventListener('click', function(e){
        const sign = e.currentTarget.classList;
        if(sign.contains('decrease')) {
            count--;
        }
        else if(sign.contains('increase')){
            count++;
        }
        else{
            count = 0;
        }
        if(count > 0){
            value.style.color = 'green';
        }
        if(count < 0){
            value.style.color = 'red';
        }
        if(count == 0){
            value.style.color = 'black'
        }
        value.textContent = count;
    });
});