var boxModel = document.getElementsByClassName('box')[0];
var count = 0;
boxModel.addEventListener('click', function() {
    count++;
    console.log('count');
    counters.innerText = " " + count + " ";
    another.innerText = " " + count;
});
var counter = document.getElementById('counter');