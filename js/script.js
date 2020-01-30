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
/* When the user clicks on the menu div, 
toggle between hiding and showing the dropdown content */
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