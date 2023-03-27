icon.onclick = function() {
    document.body.classList.toggle("dark-mode")
    if(document.body.classList.contains("dark-mode")){
        document.getElementById("icon").src = "sun.png";
    }
    else {
        document.getElementById("icon").src = "moon.png";
    }
   }
