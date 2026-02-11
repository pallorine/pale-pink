function selectOption(option) {
    if (option === 'yes') {
        flashRainbowColors(function () {
            document.getElementById('question').style.display = 'none';
            displayCatHeart();
        });
    } else if (option === 'no') {
        document.getElementById('no-button').innerText = 'You sure?';
        var yesButton = document.getElementById('yes-button');
        var currentFontSize = window.getComputedStyle(yesButton).getPropertyValue('font-size');
        var newSize = parseFloat(currentFontSize) * 2;
        yesButton.style.fontSize = newSize + 'px';
    } else {
        alert('Invalid option!');
    }
}

function flashRainbowColors(callback) {
  const colors = ['#ffd6e0', '#ffe7c7', '#fff6c9', '#d8ffe0', '#dbe7ff', '#efe2ff', '#ffd9f4'];
  let i = 0;

  let tint = document.getElementById('tint');
  if (!tint) {
    tint = document.createElement('div');
    tint.id = 'tint';
    document.body.appendChild(tint);
  }

  tint.style.opacity = '0.35';

  const interval = setInterval(() => {
    tint.style.backgroundColor = colors[i];
    i = (i + 1) % colors.length;
  }, 250);

  setTimeout(() => {
    clearInterval(interval);
    tint.style.opacity = '0';
    setTimeout(() => {
      tint.style.backgroundColor = 'transparent';
      if (callback) callback();
    }, 350);
  }, 1400);
}


function displayYoumuHeart() {
    var imageContainer = document.getElementById('image-container');
    var youmuHeartImage = new Image();
    youmuHeartImage.src = 'tirol.png';
    youmuHeartImage.alt = 'Youmu Heart';
    youmuHeartImage.onload = function () {
        imageContainer.appendChild(youmuHeartImage);
    };
}

function displayCatHeart() {
    document.getElementById('image-container').innerHTML = '';
    var imageContainer = document.getElementById('image-container');
    var catHeartImage = new Image();
    catHeartImage.src = 'cat-heart.gif';
    catHeartImage.alt = 'Cat Heart';
    catHeartImage.onload = function () {
        imageContainer.appendChild(catHeartImage);
        document.getElementById('options').style.display = 'none';

        var answerText = document.createElement('p');
        answerText.textContent = 'YAAAAAYYYYYY!!!!!';
        imageContainer.appendChild(answerText);
    };
}

displayYoumuHeart();

