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

setTimeout(function(){
    document.getElementById('img_q').src = "img/q1.png";
},1000);

setTimeout(function(){
    document.getElementById('img_q').src = "img/q2.png";
},2000);

setTimeout(function(){
    document.getElementById('img_q').src = "img/q3.png";
},3000);

setTimeout(function(){
    document.getElementById('img_q').src = "img/q4.png";
},4000);

setTimeout(function(){
    document.getElementById('img_q').src = "img/q5.png";
},5000);