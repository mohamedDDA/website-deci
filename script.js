window.onload = function() {
    setTimeout(function() {
        document.body.style.height = "auto";
        document.body.style.overflowY = "visible";
        document.querySelector(".loading").style.display = "none";
    }, 3000);
};