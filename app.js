var boxgift = document.querySelector('.box-gift')
var Close = document.querySelector('.fa-xmark')
var boxContent = document.querySelector('.box-content')
var content =document.querySelector('.content')

boxgift.onclick = function(){
    boxgift.classList.toggle('active')
    // boxContent.classList.add('active')
}
content.onclick = function(){
    boxContent.classList.add('active')
}
Close.onclick = function(){
    boxContent.classList.remove('active')
}
var isChrome = /Chrome/.test(navigator.userAgent) && /Google Inc/.test(navigator.vendor);
if (!isChrome){
    $('#iframeAudio').remove()
}
else {
    $('#playAudio').remove() // just to make sure that it will not have 2x audio in the background 
}