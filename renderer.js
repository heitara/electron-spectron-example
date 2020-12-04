// This file is required by the index.html file and will
// be executed in the renderer process for that window.
// No Node.js APIs are available in this process because
// `nodeIntegration` is turned off. Use `preload.js` to
// selectively enable features needed in the rendering
// process.

//NB: nodeIntegration is set to true, because Spectron needs it!
function addLog(text) {
    let logger = document.getElementById("logger")
    logger.innerText += text
}

//init
function init() {
    let btn = document.getElementById("red")
    btn.addEventListener("click", function (event) {
        addLog('Red button was clicked.')
    })

    btn.addEventListener("dblclick", function (event) {
        addLog('Red button was dblclicked.')
    })
}


init()