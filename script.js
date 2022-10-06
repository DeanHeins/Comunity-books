var back=
document.querySelector('button');

button.addEventListener('click',function(){
    if(confirm('Do you want to go back a page?')){
        window.open('https://google.com')
    }
})