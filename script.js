var settingsmenu = document.querySelector(".settings-menu") //querySelector need the dot + name
var darkBtn = document.getElementById("dark-btn")
//-------------Changes menu height to open and close it---------------------------
function settingsMenuToggle(){
    settingsmenu.classList.toggle("settings-menu-height"); //classList is only the class name no dot
}

//----------------------------saves and loads if sie is in dark/light mode on load-----------------
 darkBtn.onclick = function(){
    darkBtn.classList.toggle("dark-btn-on");
     document.body.classList.toggle("dark-theme");

    if(localStorage.getItem("theme") == "light"){
        localStorage.setItem("theme", "dark");
    }
    else{
        localStorage.setItem("theme", "light");
    }
 }
//----------------------------switches between light and dark mode-----------------

if(localStorage.getItem("theme") == "light"){
    darkBtn.classList.remove("dark-btn-on");  //make dark button apear off
    document.body.classList.remove("dark-theme"); //removes dark theme on page
}
else if(localStorage.getItem("theme") == "dark"){
    darkBtn.classList.add("dark-btn-on");  //make dark button apear on
    document.body.classList.add("dark-theme"); //turns on dark theme on page
}
else{
    localStorage.setItem("theme", "light"); //sets theme to light if no theme is set on site
}
 
//-------------------------------------------------------------------


