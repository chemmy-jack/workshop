// navbar reaction and close menu dropdown whe sliding
var prevScrollpos = window.pageYOffset;
    window.onscroll = function() {
        var currentScrollPos = window.pageYOffset;
            if (prevScrollpos > currentScrollPos) {
                document.getElementById("navbar").style.top = "0";
            } 
            else {
                document.getElementById("navbar").style.top = "-50px";
            }
        prevScrollpos = currentScrollPos;
        var dropdowns = document.getElementById("menuid");
            if (dropdowns.classList.contains('showmenu')) {
                    dropdowns.classList.remove('showmenu');
                }
    }

// When the user clicks on the menu div, toggle between hiding and showing the dropdown content 
function toggleshowmenufunc() {
    document.getElementById("menuid").classList.toggle("showmenu");
}

// Close the dropdown if the user clicks outside of it
window.onclick = function(event) {
    if (!event.target.matches('.menuicon')) {
        var dropdowns = document.getElementById("menuid");
        if (dropdowns.classList.contains('showmenu')) {
                dropdowns.classList.remove('showmenu');
            }
/*                var i;
        for (i = 0; i < dropdowns.length; i++) {
            var openDropdown = dropdowns[i];
            if (openDropdown.classList.contains('showmenu')) {
                openDropdown.classList.remove('showmenu');
            }
        }*/
    }
} 

// show home and hide currentpage 
function showhome() {
    currentpage = document.getElementsByClassName("current")[0]
    home = document.getElementById("home");
    if (!home.classList.contains("current")){
        currentpage.classList.remove("current"),
        currentpage = document.getElementById("home"),
        currentpage.classList.add("current")
    }
}

// show about and hide currentpage 
function showabout() {
    currentpage = document.getElementsByClassName("current")[0]
    about = document.getElementById("about");
    if (!about.classList.contains("current")){
        currentpage.classList.remove("current"),
        currentpage = document.getElementById("about"),
        currentpage.classList.add("current")
    }
}

// show committee and hide currentpage 
function showcommittee() {
    currentpage = document.getElementsByClassName("current")[0]
    committee = document.getElementById("committee");
    if (!committee.classList.contains("current")){
        currentpage.classList.remove("current"),
        currentpage = document.getElementById("committee"),
        currentpage.classList.add("current")
    }
}

// show registration and hide currentpage 
function showregistration() {
    currentpage = document.getElementsByClassName("current")[0]
    registration = document.getElementById("registration");
    if (!registration.classList.contains("current")){
        currentpage.classList.remove("current"),
        currentpage = document.getElementById("registration"),
        currentpage.classList.add("current")
    }
}

// show sponsership and hide currentpage 
function showsponsership() {
    currentpage = document.getElementsByClassName("current")[0]
    sponsership = document.getElementById("sponsership");
    if (!sponsership.classList.contains("current")){
        currentpage.classList.remove("current"),
        currentpage = document.getElementById("sponsership"),
        currentpage.classList.add("current")
    }
}