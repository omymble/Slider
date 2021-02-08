let images = ['images/img0.jpg', 'images/img1.jpg', 'images/img2.jpg']
numOfImg = images.length;
let navigation = document.body.getElementsByClassName('projects__navigation_item')
let navigationLink = []
for (let i = 0; i < navigation.length; i++) {
    navigationLink[i] = navigation[i].children;
}

let rounds = document.body.getElementsByClassName('projects__pointer')
let arrows = document.body.getElementsByClassName('projects__button')
let arrowsMobile = document.body.getElementsByClassName('projects__round')

let image = document.body.getElementsByClassName('projects__img')[0]
let imageMobile = document.body.getElementsByClassName('img_mobile')[0]

let currentIndex = 0
const setEntity = (index) => {
    for (let i = 0; i < numOfImg; i++) {
        if (i === index) {
            navigationLink[i][0].style.color = '#E3B873';
            rounds[i].style.background = '#FFFFFF';
        } else {
            navigationLink[i][0].style.color = 'rgba(255, 255, 255, 0.3)';
            rounds[i].style.background = 'rgba(255, 255, 255, 0.3)';
        }
    }
    image.src = images[index];
    imageMobile.src = images[index];
}

function prevPicture() {
    if (currentIndex === 1 || currentIndex === 2) {
        currentIndex--;
    } else if (currentIndex === 0) {
        currentIndex = 2;
    }
    setEntity(currentIndex);
}

function nextPicture() {
    currentIndex = (currentIndex + 1) % 3;
    setEntity(currentIndex);
}


//arrows navigation
arrows[0].addEventListener('click', prevPicture)
arrows[1].addEventListener('click', nextPicture)
arrowsMobile[0].addEventListener('click', prevPicture)
arrowsMobile[1].addEventListener('click', nextPicture)

//navigation by rounds
for (let i = 0; i < navigation.length; i++) {
    navigationLink[i][0].addEventListener('click', () => {
        setEntity(i);
        currentIndex = i;
    })
}

//navigation by links
for (let i = 0; i < numOfImg; i++) {
    rounds[i].addEventListener('click', () => {
        setEntity(i);
        currentIndex = i;
    })
}