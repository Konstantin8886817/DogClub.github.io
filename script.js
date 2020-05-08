var cards = document.querySelectorAll('#news .card');
var height = getMaxHeight(cards);

setHeight(cards,height);

cards = document.querySelectorAll('#articles .card');
height = getMaxHeight(cards);
setHeight(cards,height);

function setHeight(arr, height){
    for(var i = 0; i < arr.length; i++){
        arr[i].style.height = height + 20 + 'px';
    }
}

function getMaxHeight(arr){
    var maxHeight = 0;
    for(var i = 1; i < arr.length; i++){
        if(arr[i].clientHeight > arr[maxHeight].clientHeight){
            maxHeight = i;
        }
    }
    return arr[maxHeight].clientHeight;
}

var images = document.querySelectorAll('#gallery img.images');
var prevBtn = document.querySelector('#gallery .prevBtn');
var nextBtn = document.querySelector('#gallery .nextBtn');
var currIndex = 0;
images[0].style.display = 'block';

prevBtn.onclick = function(){
    images[currIndex].style.display='none';
    currIndex = currIndex - 1;
    if(currIndex < 0){
        currIndex = images.length - 1;
    }
    images[currIndex].style.display = 'block';
}

nextBtn.onclick = next;

function next(){
    images[currIndex].style.display='none';
    currIndex = currIndex + 1;
    if(currIndex === images.length){
        currIndex = 0;
    }
    images[currIndex].style.display = 'block';
}

setInterval(next,2000);