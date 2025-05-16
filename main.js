let activePanel

// make the home panel visible; all others invisible by default
window.addEventListener("load", event => {
    document.querySelector("nav").classList.remove("unloaded")
    makeVisible("home")
})

const buttons = document.querySelectorAll("nav > button")
for (let button of buttons) {
    button.addEventListener("click", event => {
        // switch visibility from active panel to
        // the panel `button` represents

        let panelName = button.innerHTML.toLowerCase()
        makeInvisible(activePanel)
        makeVisible(panelName)
    })
}

function makeVisible(panelName){
    /**
     * Make a panel on the site visible, namely,
     * by making its content visible and hiding its
     * equivalent button in the navbar.
     * 
     * @param {string} panelName - A string representing a panel name, corresponding to an HTML class
     * (e.g., "home", "skills", etc)
     */
    const panelContent = document.querySelector(`main.${panelName}`)
    const panelButton = document.querySelector(`button.${panelName}`)

    panelContent.classList.add("active")
    panelButton.classList.add("active")

    // set the activePanel to be this panel
    activePanel = panelName
}

function makeInvisible(panelName){
    /**
     * Reverse the effects of `makeVisible`, i.e.,
     * make a panel _invisible_ by setting its content's display to `none`
     * and revealing its button.
     * 
     * @param {string} panelName - A string representing a panel name, corresponding to an HTML class
     * (e.g., "home", "skills", etc)
     */
    const panelContent = document.querySelector(`main.${panelName}`)
    const panelButton = document.querySelector(`button.${panelName}`)

    panelContent.classList.remove("active")
    panelButton.classList.remove("active")
}
