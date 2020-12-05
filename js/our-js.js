// Toggle the side navigation
$("#sidebarToggle, #sidebarToggleTop").on('click', function(e) {
$("body").toggleClass("sidebar-toggled");
$(".sidebar").toggleClass("toggled");
if ($(".sidebar").hasClass("toggled")) {
    $('.sidebar .collapse').collapse('hide');
    document.getElementById("our-logo").src = "img/our-logo-collapsed.png";
    document.getElementById("our-logo").style.maxWidth = "3rem";
} else {
    document.getElementById("our-logo").src = "img/our-logo.png";
    document.getElementById("our-logo").style.maxWidth = "14rem";
}
});