// Set new default font family and font color to mimic Bootstrap's default styling
Chart.defaults.global.defaultFontFamily = 'Nunito', '-apple-system,system-ui,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif';
Chart.defaults.global.defaultFontColor = '#858796';

// Bar Chart QUESTION 4
var ctx = document.getElementById("q5BarChart");
var myBarChart = new Chart(ctx, {
    type: 'bar',
    data: {
        labels: ["Low-Income", "Non Low-Income"],
        datasets: [
            {
                label: "Before COVID-19",
                backgroundColor: "#36b9cc",
                data: [3.888, 5.361]
            },
            {
                label: "During COVID-19",
                backgroundColor: "#4e73df",
                data: [4.575, 5.525]
            }
        ]
    },
    options: {
        maintainAspectRatio: false,
        layout: {
            padding: {
                left: 10,
                right: 25,
                top: 25,
                bottom: 0
            }
        },
        scales: {
            xAxes: [{
                scaleLabel: {
                    display: true,
                    labelString: "Income Class"
                },
                time: {
                    unit: 'month'
                },
                gridLines: {
                    display: false,
                    drawBorder: false
                },
                ticks: {
                    maxTicksLimit: 6
                },
                maxBarThickness: 180,
            }],
            yAxes: [{
                scaleLabel: {
                    display: true,
                    labelString: "Hours spent studying per week"
                },
                ticks: {
                    min: 0,
                    max: 6,
                    maxTicksLimit: 10,
                    padding: 10,
                },
                gridLines: {
                    color: "rgb(234, 236, 244)",
                    zeroLineColor: "rgb(234, 236, 244)",
                    drawBorder: false,
                    borderDash: [2],
                    zeroLineBorderDash: [2]
                }
            }],
        },
        legend: {
            display: true
        },
        tooltips: {
            titleMarginBottom: 10,
            titleFontColor: '#6e707e',
            titleFontSize: 14,
            backgroundColor: "rgb(255,255,255)",
            bodyFontColor: "#858796",
            borderColor: '#dddfeb',
            borderWidth: 1,
            xPadding: 15,
            yPadding: 15,
            displayColors: false,
            caretPadding: 10,
            callbacks: {
                label: function(tooltipItem) {
                    return tooltipItem.yLabel + ' study hours';
                }
            }
        },
    }
});