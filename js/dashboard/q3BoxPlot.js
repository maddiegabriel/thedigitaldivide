document.addEventListener('DOMContentLoaded', function () {
    Highcharts.chart('container', {

        chart: {
            type: 'boxplot'
        },

        title: {
            text: ""
        },

        legend: {
            enabled: false
        },

        xAxis: {
            categories: ['Pre-Covid', 'During Covid'],
            title: {
                text: 'Covid Status'
            }
        },

        yAxis: {
            title: {
                text: 'Study Hours'
            },
            plotLines: [{
                value: 10,
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

        series: [{
            name: 'Student',
            color: Highcharts.getOptions().colors[0],
            type: 'scatter',
            data: [ // x, y positions where 0 is the first category
                [0, 4.3],
                [0, 3.6],
                [0, 3.6],
                [0, 4.9],
                [0, 3.0],
                [0, 2.6],
                [0, 4.0],
                [0, 6.7],
                [0, 2.4],
                [0, 3.4],
                [0, 3.9],
                [0, 3.6],
                [0, 4.4],
                [0, 3.8],
                [0, 5.3],
                [0, 4.2],
                [0, 5.6],
                [0, 2.1],
                [0, 1.7],
                [0, 4.0],
                [0, 4.3],
                [0, 4.1],
                [0, 3.1],
                [0, 4.1],
                [0, 6.5],
                [0, 3.1],
                [0, 2.5],
                [0, 2.8],
                [0, 6.0],
                [0, 3.0],
                [0, 3.5],
                [0, 4.0],
                [0, 3.6],
                [0, 4.5],
                [1, 4.4],
                [1, 4.6],
                [1, 4.7],
                [1, 4.6]
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
});