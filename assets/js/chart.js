$( document ).ready(function() {
  setTimeout(function(){
    var ctx = $('#chartincome');
    var myChart = new Chart(ctx, {
      type: 'bar',
      data: {
        labels: ['10/08', '1108', '1208', '1308', '14/08', '15/08'],
        datasets: [{
          fill: false,
          data: [2000, 4000, 6000, 3000, 400, 4000],
          backgroundColor: [
            '#0076DA',
            '#0076DA',
            '#0076DA',
            '#0076DA',
            '#0076DA',
            '#0076DA'
          ],
          borderColor: [
            '#0076DA',
            '#0076DA',
            '#0076DA',
            '#0076DA',
            '#0076DA',
            '#0076DA'
          ],
          borderWidth: 1
        }]
      },
      options: {
        responsive: true,
        legend: {
            position: 'bottom',
        },
        hover: {
            mode: 'label'
        },
        scales: {
          yAxes: [{
            ticks: {
              display: false,
              beginAtZero: true,
              max: 10000
            }
          }],
          xAxes: [{
            barPercentage: 0.4
          }]
        }
      }
    });

    var ctregistrations = $('#chartregistrations');
    var ChartRegistrations = new Chart(ctregistrations, {
      type: 'bar',
      data: {
        labels: ['10/08', '1108', '1208', '1308', '14/08', '15/08'],
        datasets: [{
          fill: false,
          data: [2, 4, 6, 3, 0.5, 4],
          backgroundColor: [
            '#0076DA',
            '#0076DA',
            '#0076DA',
            '#0076DA',
            '#0076DA',
            '#0076DA'
          ],
          borderColor: [
            '#0076DA',
            '#0076DA',
            '#0076DA',
            '#0076DA',
            '#0076DA',
            '#0076DA'
          ],
          borderWidth: 1
        }]
      },
      options: {
        responsive: true,
        legend: {
            position: 'bottom',
        },
        hover: {
            mode: 'label'
        },
        scales: {
          yAxes: [{
            ticks: {
              display: false,
              beginAtZero: true,
              max: 10
            }
          }],
          xAxes: [{
            barPercentage: 0.4
          }]
        },
        title: {
          display: false,
          align: 'start',
          Position: 'left',
          text: '10 Reg.'
        }
      }
    });

    var ctrstatistics = $('#statisticschart');
    var ChartStatistics = new Chart(ctrstatistics, {
      type: 'bar',
      data: {
        labels: ['Jan', 'Feb', 'Mar', 
                 'Apr', 'May', 'Jun', 
                 'Jul', 'Aug', 'Sep', 
                 'Oct', 'Nov', 'Dec'],
        datasets: [{
          fill: false,
          data: [50, 150, 100, -20, 50, 70, 150, 190, 90, 130, 60, 160],
          backgroundColor: [
            '#0076DA',
            '#0076DA',
            '#0076DA',
            '#9E9E9E',
            '#0076DA',
            '#0076DA',
            '#0076DA',
            '#0076DA',
            '#0076DA',
            '#0076DA',
            '#0076DA',
            '#0076DA'
          ],
          borderColor: [
            '#0076DA',
            '#0076DA',
            '#0076DA',
            '#9E9E9E',
            '#0076DA',
            '#0076DA',
            '#0076DA',
            '#0076DA',
            '#0076DA',
            '#0076DA',
            '#0076DA',
            '#0076DA'
          ],
          borderWidth: 1
        }]
      },
      options: {
        responsive: true,
        legend: {
            position: 'bottom',
        },
        hover: {
            mode: 'label'
        },
        scales: {
          yAxes: [{
            ticks: {
              display: false,
              beginAtZero: true,
              max: 200,
              min: -200
            }
          }],
          xAxes: [{
            barPercentage: 0.4
          }]
        },
        title: {
          display: false,
          align: 'start',
          Position: 'left',
          text: '10 Reg.'
        }
      }
    });
  }, 200);
});