// Toggle the side navigation
$("#sidebarToggle, #sidebarToggleTop").on('click', function(e) {
    $("body").toggleClass("sidebar-toggled");
    $(".sidebar").toggleClass("toggled");
    let loc = window.location.pathname.toString();
    let bits = loc.split("/")
    let img_path = "";
    if(bits[6] == "dashboard") img_path = "../"

    if ($(".sidebar").hasClass("toggled")) {
        $('.sidebar .collapse').collapse('hide');
        img_path += "img/our-logo-collapsed.png"
        document.getElementById("our-logo").src = img_path;
        document.getElementById("our-logo").style.maxWidth = "3rem";
    } else {
        img_path += "img/our-logo.png"
        document.getElementById("our-logo").src = img_path;
        document.getElementById("our-logo").style.maxWidth = "14rem";
    }
});