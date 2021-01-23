
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

const unityProjects = [
    {
        name: 'Pong',
        link: 'https://www.youtube.com/embed/tgDkNt6arHk',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam'
    },
    {
        name: 'Tiles',
        link: 'https://www.youtube.com/embed/YYioxWIHQH4',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam'
    },
    {
        name: 'Pacman',
        link: 'https://www.youtube.com/embed/lGXWXLBXL6I',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam'
    },
    {
        name: 'Breakout 2D',
        link: 'https://www.youtube.com/embed/BO7QrD5WcBM',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam'
    },
    {
        name: 'Space Shooter',
        link: 'https://www.youtube.com/embed/c98sCaZ7xjI',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam'
    },
    {
        name: 'Chase AI Demo',
        link: 'https://www.youtube.com/embed/6sxACsSMkZY',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam'
    },
    {
        name: 'Solitaire',
        link: 'https://www.youtube.com/embed/inJz1SdHpWk',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam'
    },
    {
        name: 'RPG Inventory Management System',
        link: 'https://www.youtube.com/embed/bGhsJM3eRkc',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam'
    },
    {
        name: 'AR Character Animation',
        link: 'https://www.youtube.com/embed/ig9zHyFY118',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam'
    },
    {
        name: 'VR Walking Simulator',
        link: 'https://www.youtube.com/embed/cgNrCjw6Udg',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam'
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

function renderUnityProjects() {
    var projectGrid = document.getElementById('project-grid-unity');
    unityProjects.forEach((project) => {
        var columnElement = document.createElement('div');
        columnElement.classList.add('col-sm-12', 'col-md-6', 'col-lg-4');
        var projectLink = document.createElement('iframe');
        projectLink.src = project.link;
        projectLink.classList.add('yt-frame');
        var projectName = document.createElement('span');
        projectName.innerText = project.name;
        projectName.classList.add('unity-project-name');
        var projectDesc = document.createElement('p');
        projectDesc.innerText = project.description;
        projectDesc.classList.add('unity-project-desc');
        columnElement.setAttribute("data-aos", "fade-up");
        columnElement.appendChild(projectLink);
        columnElement.appendChild(projectName);
        columnElement.appendChild(projectDesc)
        projectGrid.appendChild(columnElement);
    });
}

renderHtml5Projects();
renderUnityProjects();

/**
 * <iframe width="320" height="240" src="https://www.youtube.com/embed/bGhsJM3eRkc" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
 */