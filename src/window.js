class Window {

    constructor(windowID) {
        this.windowID = windowID;
        this.windowTitle = document.querySelector(`#${this.windowID} .window-title`);
        this.windowContent = document.querySelector(`#${this.windowID} .window-content`);
    }
    
    setWindowTitle(title) {
        if (this.windowTitle) {
            this.windowTitle.innerText = title;
        } else {
            console.error(`DOM element "#${this.windowID} .window-title" not found`);
        }
    }

    setWindowContent(content) {
        if (this.windowContent) {
            this.windowContent.innerHTML = content;
        } else {
            console.error(`DOM element "#${this.windowID} .window-content" not found`);
        }
    }

}

export { Window };