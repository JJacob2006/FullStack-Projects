function fun(){
    let input = document.getElementById('textbox');
    let str= input.value;
    if(str.length>150){
        input.value = '';
        updateCounter(0);
    } else {
        updateCounter(str.length);
    }
}

function updateCounter(len){
    let cntr = document.getElementById('count');
    cntr.textContent = len;
}
