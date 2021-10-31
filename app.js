const collection = document.getElementsByClassName('accordion');

function toggleClass(){
   this.nextSibling.nextSibling.classList.toggle('show');

}

[...collection].forEach((el) => {
    el.addEventListener('click', toggleClass)
})

