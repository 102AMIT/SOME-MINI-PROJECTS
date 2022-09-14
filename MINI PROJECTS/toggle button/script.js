// var btn=document.getElementById('toggle-button');
// var position=document.getElementsByClassName('toggle');
// btn.addEventListener('click',function(e){
//     var body=document.getElementByTag('body');
//     body.style.color='#fff';
//     var position=document.getElementsByClassName('click-position');
//     position.style.position="margin-left:120px";
// });



let mainContent = document.querySelector('#main_content');
let secondaryContent = document.querySelector('#secondary_content');

document.querySelector('.switch input').addEventListener('change', e => { 
  mainContent.style.display = e.target.checked ? 'block' : 'none';
  secondaryContent.style.display = e.target.checked ? 'none' : 'block';
  var body1=document.getElementsByTagName("body");
  body1.style.backgroundColor= e.target.checked ? "black" : 'white';


});
