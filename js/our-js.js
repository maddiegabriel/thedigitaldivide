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

Highcharts.chart('chart-container-math', {

    chart: {
        type: 'boxplot'
    },

    title: {
        text: 'Average NAEP mathematics scale score of 4th and 8th-graders,<br>by whether student has access to the Internet at home (2019).'
    },

    legend: {
        enabled: true
    },

    xAxis: {
        categories: ['4th Graders', '8th Graders'],
        title: {
            text: 'Student Group'
        }
    },

    yAxis: {
        title: {
            text: 'Observations'
        },
        plotLines: [{
            value: 932,
            color: 'red',
            width: 1,
            label: {
                text: 'Theoretical mean: 932',
                align: 'center',
                style: {
                    color: 'gray'
                }
            }
        }]
    },

    series: [
    {
        name: 'Observation',
        data: [
            [760, 801, 848, 895, 965],
            [733, 853, 939, 980, 1080]
        ],
        tooltip: {
            headerFormat: '<em>{point.key}</em><br/>'
        }
    },
    {
        name: 'Outliers',
        color: Highcharts.getOptions().colors[0],
        type: 'scatter',
        data: [ // x, y positions where 0 is the first category
            [0, 644],
        ],
        marker: {
            fillColor: 'white',
            lineWidth: 1,
            lineColor: Highcharts.getOptions().colors[0]
        },
        tooltip: {
            pointFormat: 'Observation: {point.y}'
        }
    }]

});

Highcharts.chart('chart-container-reading', {

    chart: {
        type: 'boxplot'
    },

    title: {
        text: 'Average NAEP mathematics scale score of 4th and 8th-graders,<br>by whether student has access to the Internet at home (2019).'
    },

    legend: {
        enabled: true
    },

    xAxis: {
        categories: ['4th Graders', '8th Graders'],
        title: {
            text: 'Student Group'
        }
    },

    yAxis: {
        title: {
            text: 'Observations'
        },
        plotLines: [{
            value: 932,
            color: 'red',
            width: 1,
            label: {
                text: 'Theoretical mean: 932',
                align: 'center',
                style: {
                    color: 'gray'
                }
            }
        }]
    },

    series: [
    {
        name: 'Observation',
        data: [
            [760, 801, 848, 895, 965],
            [733, 853, 939, 980, 1080]
        ],
        tooltip: {
            headerFormat: '<em>{point.key}</em><br/>'
        }
    },
    {
        name: 'Outliers',
        color: Highcharts.getOptions().colors[1],
        type: 'scatter',
        data: [ // x, y positions where 0 is the first category
            [0, 644],
        ],
        marker: {
            fillColor: 'white',
            lineWidth: 1,
            lineColor: Highcharts.getOptions().colors[0]
        },
        tooltip: {
            pointFormat: 'Observation: {point.y}'
        }
    }]

});