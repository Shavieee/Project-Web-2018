//Bron:Kishan Jayant

// watch star ratings
var stars = document.getElementsByClassName('star');
for (var i = 0; i < stars.length; i++){
    stars[i].addEventListener("click", function(ev){
        doRating(ev);
    });
}

// deze doet rating
function doRating(ev, star){
    var star = ev.path[0];
    var parent = ev.path[1];

    // remove active from siblings
    var children = parent.querySelectorAll('.star');
    for (var i = 0; i < children.length; i++){
        console.log(children[i]);
        children[i].classList.remove('active');
    }

    // add active to shelf
    star.classList.add('active');
}


//Bron: Joost Faber
//Code: https://codepen.io/joostf/pen/bwrryR
/* 1. selecteer elementen met document.querySelector */
var article = document.querySelector('article'); // first section element
var button = document.querySelector('button');

var fadeout = function () {
  /* 3. toggle een class op een element, dit triggert een CSS Transition (zie CSS: section.dance) */
    article.classList.toggle('fade')
}

/* 2. voeg een event toe aan een element */
button.addEventListener('click', fadeout);

