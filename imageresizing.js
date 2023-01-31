function resizeImage(img) {

    if (img.height == "64px") { // make larger
        img.style.width = "80px";
        img.style.height = "80px";
    }

    else { // make smaller
        img.style.width = "64px";
        img.style.height = "64px";
    }
}