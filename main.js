const welcomeContent = document.querySelector('.welcome-content')

const navList = document.querySelector('.navbar-list')
const navButton = document.querySelector('.navbar-button');
const aboutTitle = document.querySelector('.about-list-title');
const aboutStory = document.querySelector('.about-list-story');
const aboutLearn = document.querySelector('.about-list-learn');
const aboutObjectives = document.querySelector('.about-list-objectives');
const aboutImage = document.querySelector('.about-image')
const projectsImages = document.querySelectorAll('.projects-image');
const projectOne = document.getElementById('project-one');
const projectTwo = document.getElementById('project-two');
const projectThree = document.getElementById('project-three');


const modals = document.querySelectorAll('.modal-item');
const modalList = document.querySelector('.modal-list');
const overlay = document.getElementById('overlay');



function closeNavbar() {
    navList.classList.toggle('active');
}

navButton.addEventListener('click', () => {
    closeNavbar();
});



window.addEventListener('scroll', () => {
    const scrollY = window.scrollY;

    if (scrollY < 700) {
        welcomeContent.style.top = scrollY + 'px';
    }
    if (scrollY > 300) {
        aboutTitle.classList.add('active-about');
    } else {
        aboutTitle.classList.remove('active-about');
    }
    if (scrollY > 400) {
        aboutStory.classList.add('active-about');
    } else {
        aboutStory.classList.remove('active-about');
    }
    if (scrollY > 550) {
        aboutLearn.classList.add('active-about');
        aboutImage.classList.add('active-image');
    } else {
        aboutLearn.classList.remove('active-about');     
        aboutImage.classList.remove('active-image');
    }
    if (scrollY > 660) {
        aboutObjectives.classList.add('active-about');
    } else {
        aboutObjectives.classList.remove('active-about');
    }
    if (scrollY > 1200) {
        projectOne.classList.add('active-project')
    } else {
        projectOne.classList.remove('active-project')
    }
    if (scrollY > 1400) {
        projectTwo.classList.add('active-project')
    } else {
        projectTwo.classList.remove('active-project')
    }
    if (scrollY > 1600) {
        projectThree.classList.add('active-project')
    } else {
        projectThree.classList.remove('active-project')
    }
});

function displayModal(e) {
    const targetImage = e.target;
    const imageId = targetImage.getAttribute('data-id');
    const targetModal = [...modals][imageId];
    targetModal.classList.add('active-modal');
    overlay.classList.add('active-overlay');

}

// add function for project image
[...projectsImages].forEach(img => {
    img.addEventListener('click', (e) => displayModal(e))
})

overlay.addEventListener('click', () => {
    [...modals].forEach(modal => {
        modal.classList.remove('active-modal');
    });
    overlay.classList.remove('active-overlay');
})








