function toggleStyleSheet() {

    const styleElement = document.getElementById("freeStyleSheet");
    var fileName = styleElement.getAttribute("href");
    var newFileName = "free.css";

    if (fileName == "strict.css") {
        newFileName = "free.css";
    }
    else {
        newFileName = "strict.css";
    }

    styleElement.setAttribute("href", newFileName);
    localStorage.setItem("stylesheet", newFileName);

}

window.onload = function() {

    const styleSheetName = localStorage.getItem("stylesheet");
    const htmlStyleElement = document.getElementById("freeStyleSheet");
    htmlStyleElement.setAttribute("href", styleSheetName);

}