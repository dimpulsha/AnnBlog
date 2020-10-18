let likeMe = document.querySelector('.like-me');
let likeCounter = document.querySelector('.like-counter');
let counter =  Number(likeCounter.textContent);

likeMe.onclick = function () {
    if (likeMe.classList.contains('unliked')) {
counter ++;
likeCounter.textContent = counter;
likeMe.classList.remove('unliked');
    } else {
        counter -= 1;
        likeCounter.textContent = counter;
        likeMe.classList.add('unliked');
    }
};

// console.log(like);
// console.log(likeCounter);
// console.log(likeCounter.textContent);