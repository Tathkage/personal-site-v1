function toggleStyleSheet() {

    const styleElement = document.getElementById("freeStyleSheet");
    var fileName = styleElement.getAttribute("href");
    var newFileName = "strict.css";

    if (fileName == "free.css") {
        newFileName = "strict.css";
    }

    else {
        newFileName = "free.css";
    }

    styleElement.setAttribute("href", newFileName);

    // TASK 2
    // 2 (d) For persistence when page is refreshed. save new stylesheet name to localStorage
    // hint: localStorage.setItem(name, value)
    localStorage.setItem("stylesheet", newFileName);
}

window.onload = function() {
    // 2 (a) get stylesheet name from local storage hint: localStorage.getItem(name)
    const styleSheetName = localStorage.getItem("stylesheet");

    // 2 (b) get html style element by ID
    const htmlStyleElement = document.getElementById("freeStyleSheet");

    // 2 (c) replace href attribute of html element.
    htmlStyleElement.setAttribute("href", styleSheetName);
}