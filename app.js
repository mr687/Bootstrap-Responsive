let isMobile = window.matchMedia("only screen and (max-width: 760px)").matches;

$(document).ready(function() {

    if(isMobile) {
        $('#navbarSupportedContent').toggleClass('mobile');
    }

  Highcharts.chart('chart-stat', {
    title: {
      text: 'Angka Partisipasi Sekolah SD/MI/Sederajat'
    },    
    subtitle: {
        text: ''
    },
    yAxis: {
        title: {
            text: 'Jumlah'
        }
    },
    xAxis: {
        title: {
            text: 'Tahun'
        },

        categories: [2015,2016,2017,2018,2019]
    },
    legend: {
        layout: 'vertical',
        align: 'right',
        verticalAlign: 'middle'
    },

    plotOptions: {
        series: {allowPointSelect: true}
    },

    series: [{
        name: ' ',
        data: [107.03,104.06,99.26,925.01,910.38],
        showInLegend: false
    }],

    responsive: {
        rules: [{
            condition: {
                maxWidth: 500
            },
            chartOptions: {
                legend: {
                    layout: 'horizontal',
                    align: 'center',
                    verticalAlign: 'bottom'
                }
            }
        }]
    }

  })

})