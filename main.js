let activePanel
// make the home panel visible; all others invisible by default
window.addEventListener("load", event => {
    document.querySelector("nav").style.display = "flex"
    makeVisible("home")
    activePanel = "home"
})

const buttons = document.querySelectorAll("nav > button")
for (let button of buttons) {
    button.addEventListener("click", event => {
        // reveal the corresponding content when its button is clicked
        let panelName = button.innerHTML.toLowerCase()

        makeInvisible(activePanel)
        makeVisible(panelName)

        activePanel = panelName
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

    panelContent.style.display = "flex"
    panelButton.style.display = "none"
}

function makeInvisible(panelName){
    /**
     * Reverse the effects of `makeVisible`, i.e.,
     * make a panel _invisible_ by settin its content's display to `none`
     * and revealing its button.
     */
    const panelContent = document.querySelector(`main.${panelName}`)
    const panelButton = document.querySelector(`button.${panelName}`)

    panelContent.style.removeProperty("display") // reset to default of "none"
    panelButton.style.removeProperty("display") // reset to default of visible (in a flex display)
}