// template_5a9fb5j
// service_jv8u7qq
// OIAcwsHQrAdncjmB6

let isModalOpen = false;
let isDarkTheme = false;
let allProjects = []

function contact(event) {
    event.preventDefault()

    const loading = document.querySelector('.modal__overlay--loading')
    const success = document.querySelector('.modal__overlay--success')

    loading.classList += ' modal__overlay--visible'

    emailjs.sendForm(
        'service_jv8u7qq',
        'template_5a9fb5j',
        event.target,
        'OIAcwsHQrAdncjmB6'
    ).then(() => {
        loading.classList.remove('modal__overlay--visible')
        success.classList += ' modal__overlay--visible'
        console.log('it worked')
    }).catch(() => {
        loading.classList.remove('modal__overlay--visible')
        alert(
            "The email service is temporarily unavailible, please contact me directly at eliwhuffman@gmail.com"
        )
    })
}

function toggleModal() {
    isModalOpen = !isModalOpen

    if (isModalOpen) {
        document.body.classList += " modal--open"
    }
    else {
        document.body.classList.remove('modal--open')
    }
}

function toggleContrast() {
    isDarkTheme = !isDarkTheme

    if (isDarkTheme) {
        document.body.classList += " dark-theme"
    }
    else {
        document.body.classList.remove('dark-theme')
    }
}

function moveBackground(event) {
    const shapes = document.querySelectorAll(".shape")
    const x = event.clientX * scaleFactor
    const y = event.clientY * scaleFactor

    for (let i = 0; i < shapes.length; i++) {
        const isOdd = i % 2 === 0
        const boolInt = isOdd ? -1 : 1
        shapes[i].style.transform = `translate(${x * boolInt}px,${y * boolInt}px)`
    }
}

async function fetchProjects() {
    try {
        const response = await fetch("./projects.json")
        const projects = await response.json()
        allProjects = projects
        buildProjects("websites")
    } catch (e) {
        console.error("ran into a problem" + e)
        return []
    }
}

function buildProjects(type = "",index=0) {

    const container = document.querySelector('.projects')

    // Remove all projects
    container.innerHTML = ""

    // Highlight Selector
    const selectors = document.body.querySelectorAll(".view__selection")

    for (const i of selectors) {
        i.classList.remove("primary")
    }

    selectors[index].classList.add("primary")

    let elements = []

    if (type === "websites") {
        elements = allProjects.websites
    }
    else {
        elements = allProjects.games
    }

    const projectsHTML =  elements.map((elem) => {
        return `
            <li class="project fade-in">
                <div class="project__wrapper">
                    <img src="./assets/projects/${elem.image}.png" class="project__img">
                    <div class="project__wrapper--bg"></div>
                    <div class="project__desc">
                        <h3 class="project__desc--title">
                            ${elem.name}
                        </h3>
                        <h4 class="project__desc--sub-title">
                            ${elem.skills}
                        </h4>
                        <p class="project__desc--para">
                            ${elem.desc}
                        </p>
                        <div class="project__desc--links">
                            ${type === "websites" ? (
                                `<a href="${elem.git}" target="_blank" class="project__desc--link">
                                    <i class="fab fa-github"></i>
                                </a>`) : ("")
                            }
                            <a href="${elem.web}" target="_blank" class="project__desc--link">
                                <i class="fas fa-link"></i>
                            </a>
                        </div>
                    </div>
                </div>
            </li>
        `
    }).join("")

    container?.insertAdjacentHTML('beforeend', projectsHTML);
}

fetchProjects()