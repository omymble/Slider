let images = ['images/img0.jpg', 'images/img1.jpg', 'images/img2.jpg']
let numOfImg = images.length;
// let navigation = document.body.getElementsByClassName('projects__navigation_item')
let navigationLink = document.querySelectorAll('.projects__navigation_item a')

let rounds = document.body.getElementsByClassName('projects__pointer')
let arrows = document.body.getElementsByClassName('projects__button')
let arrowsMobile = document.body.getElementsByClassName('projects__round')

let image = document.body.getElementsByClassName('projects__img')[0]
let imageMobile = document.body.getElementsByClassName('img_mobile')[0]

let text = document.querySelectorAll('.projects__menu span')

let newText = [
    {
        city: 'Rostov-on-Don<br>LCD admiral',
        time: '3.5 months',
        area: '81 m2',
        cost: 'Upon request'
    },
    {
        city: 'Sochi<br>Thieves',
        time: '4 months',
        area: '105 m2',
        cost: 'Upon request'
    },
    {
        city: 'Rostov-on-Don<br>Patriotic',
        time: '3 months',
        area: '93 m2',
        cost: 'Upon request'
    }
]

let currentIndex = 0
const setEntity = (index) => {
    for (let i = 0; i < numOfImg; i++) {
        if (i === index) {
            navigationLink[i].style.color = '#E3B873';
            rounds[i].style.background = '#FFFFFF';
            let a = Object.values(newText[i]);
            for (let i = 0; i < text.length; i++) {
                text[i].innerHTML = a[i];
            }
        } else {
            navigationLink[i].style.color = 'rgba(255, 255, 255, 0.3)';
            rounds[i].style.background = 'rgba(255, 255, 255, 0.3)';
        }
    }
    image.src = images[index];
    imageMobile.src = images[index];
}

function prevPicture() {
    if (currentIndex === 0) {
        currentIndex = numOfImg - 1;
    } else {
        currentIndex--;
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
for (let i = 0; i < navigationLink.length; i++) {
    navigationLink[i].addEventListener('click', () => {
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