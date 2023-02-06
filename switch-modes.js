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
    localStorage.setItem("stylesheet", newFileName);
    
}

window.onload = function() {

    const styleSheetName = localStorage.getItem("stylesheet");
    const htmlStyleElement = document.getElementById("freeStyleSheet");
    htmlStyleElement.setAttribute("href", styleSheetName);

}