document.addEventListener('DOMContentLoaded', function () {
    Highcharts.chart('container', {

        chart: {
            type: 'boxplot'
        },

        title: {
            text: 'Low-Income Study Time Box Plot'
        },

        legend: {
            enabled: false
        },

        xAxis: {
            categories: ['Pre-Covid', 'Covid'],
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
                    align: 'center',
                    style: {
                        color: 'gray'
                    }
                }
            }]
        },

        series: [{
            name: 'Observations',
            // data:
            //     [
            //         [4.3, 3.6, 3.6, 4.9, 3.0, 2.6, 4.0, 6.7, 2.4, 3.4, 3.9, 3.6, 4.4, 3.8, 5.3, 4.2, 5.6, 2.1, 1.7, 4.0, 4.3, 4.1, 3.1, 4.1, 6.5, 3.1, 2.5,2.8, 6.0, 3.0, 3.5, 4.0, 3.6, 4.5],
            //         [4.4,4.6,4.7,4.6]
            //     ],
            // tooltip: {
            //     headerFormat: '<em>Experiment No {point.key}</em><br/>'
            // }
        },{
            name: 'Student',
            color: Highcharts.getOptions().colors[0],
            type: 'scatter',
            data: [ // x, y positions where 0 is the first category
                [0, 5.8], [0, 4.5], [0, 5.3], [0, 4.9], [0, 3.5], [0, 3.1], [0, 4.2], [0, 6.9], [0, 2.8], [0, 4.9],
                [0, 4.7], [0, 5.4], [0, 6.0], [0, 3.9], [0, 7.7], [0, 4.7], [0, 8.4], [0, 3.8], [0, 2.9], [0, 4.9],
                [0, 5.3], [0, 5.8], [0, 3.9], [0, 4.6], [0, 6.5], [0, 3.9], [0, 3.2], [0, 3.5], [0, 6.4], [0, 3.4],
                [0, 3.9], [0, 4.2], [0, 4.5], [0, 5.7], [0, 4.8], [0, 8.0], [0, 5.6], [0, 7.0], [0, 7.0], [0, 4.1],
                [0, 3.7], [0, 4.6], [0, 7.1], [0, 3.0], [0, 6.4], [0, 5.3], [0, 6.6], [0, 8.1], [0, 4.6], [0, 7.8],
                [0, 4.9], [0, 12.3], [0, 5.7], [0, 4.0], [0, 5.2], [0, 6.2], [0, 7.2], [0, 5.8], [0, 5.8], [0, 6.9],
                [0, 4.8], [0, 3.9], [0, 4.5], [0, 7.1], [0, 4.5], [0, 4.6], [0, 4.6], [0, 7.0], [0, 8.1],
                [1, 4.5], [1, 5.4], [1, 4.9], [1, 4.9], [1, 5.5], [1, 6.6], [1, 6.0], [1, 6.4]
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