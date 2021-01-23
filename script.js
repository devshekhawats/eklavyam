
var typed = new Typed('#typed', {
    stringsElement: '#hero-text',
    typeSpeed: 70,
    backSpeed: 40,
    loop: true,
    loopCount: Infinity,
    showCursor: true,
    cursorChar: '_',
    autoInsertCss: true,
});

const html5Projects = [
    {
        name: 'Bubble Wars',
        image: './images/bubble_wars.png',
        link: 'https://eklavyam.github.io/html5/bubble_wars/index.html'
    },
    {
        name: 'Dangerous Dave',
        image: './images/dangerous_dave.png',
        link: 'https://eklavyam.github.io/html5/fractals/index.html'
    },
    {
        name: 'Fractals',
        image: './images/fractals.png',
        link: 'https://eklavyam.github.io/html5/dangerous_dave/index.html'
    },
    {
        name: 'Snake',
        image: './images/snake.png',
        link: 'https://eklavyam.github.io/html5/snake/index.html'
    },
    {
        name: 'Space Invaders',
        image: './images/space_invaders.png',
        link: 'https://eklavyam.github.io/html5/space_invaders/index.html'
    },
    {
        name: 'Tiles',
        image: './images/tiles.png',
        link: 'https://eklavyam.github.io/html5/tiles/index.html'
    }
]

function renderHtml5Projects() {
    var projectGrid = document.getElementById('project-grid');
    html5Projects.forEach((project) => {
        var columnElement = document.createElement('div');
        columnElement.classList.add('col-sm-12', 'col-md-6', 'col-lg-4');
        var projectLink = document.createElement('a');
        projectLink.classList.add('project-link');
        projectLink.style.backgroundImage = `url(${project.image})`;
        columnElement.setAttribute("data-aos", "fade-up");
        projectLink.target = '_blank';
        projectLink.href = project.link;
        var projectName = document.createElement('span');
        projectName.innerText = project.name;
        projectName.classList.add('project-name');
        projectLink.appendChild(projectName);
        columnElement.appendChild(projectLink);
        projectGrid.appendChild(columnElement);
    });
}

renderHtml5Projects();