function enlargeImage(size) {
    var image = document.querySelector('.image');
    var currentTransform = window.getComputedStyle(image).getPropertyValue('transform');

    var scale = 1.0;

    if (size === 'S') {
        scale = 0.8;
    } else if (size === 'M') {
        scale = 1.0;
    } else if (size === 'L') {
        scale = 1.2;
    }
    image.style.transform = 'scale(' + scale + ')';
}


function showPiece(pieceId, pizzaName, rupees,) {
    var piece = document.getElementById(pieceId);
    var pizzaImg = document.getElementById('pizzaImg');

    pizzaImg.src = piece.src;

    increaseRupees(rupees);
    hideLogos();
    updatePizzaTitle(pizzaName);
}

function increaseRupees(price) {
    document.getElementById('rupees').innerText = 'Rs' + price.toFixed(2);
}



function updatePizzaTitle(title) {
    document.getElementById('pizzaTitle').innerText = title;
}

function hideLogos() {
    console.log('Hiding logos');
}


document.addEventListener('DOMContentLoaded', function () {
    var heartIcon = document.querySelector('.heart i');
    document.querySelector('.heart').addEventListener('click', function () {
        heartIcon.classList.toggle('clicked');
    });
});


