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
}

function toggleImage(click) {
    click.parentElement.classList.toggle('hidden');
}