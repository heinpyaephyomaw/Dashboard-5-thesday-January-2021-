
//For Order & Viewer Data

let dateArr = ['Jul 21','Jul 20','Jul 19','Jul 18','Jul 17','Jul 16','Jul 15','Jul 14','Jul 13','Jul 12','Jul 11'];
let orderCountArr = [7,5,6,4,6,4,8,6,8,9,6];
let viewerCountArr = [13,12,15,14,20,17,19,16,23,33,16];

let ct = document.getElementById('firstChart').getContext('2d');
let fChart = new Chart(ct, {
    type: 'line',
    data: {
        labels: dateArr,
        datasets: [{
            label: 'Order',
            data: orderCountArr,
            backgroundColor: [
                'rgba(169,200,246,0.44)'
            ],
            borderColor: [
                'rgb(55,132,248)'
            ],
            borderWidth: 1,
            tension: 0
        },{
            label: 'Viewer',
            data: viewerCountArr,
            backgroundColor: [
                'rgba(243,143,143,0.47)'
            ],
            borderColor: [
                'rgb(255,0,0)'
            ],
            borderWidth: 1,
            tension: 0
        }]
    },
    options: {
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero: true,
                }
            }],
            xAxes: [{
                    gridLines:[
                        {
                            display:false
                        }
                    ]

            }]
        },
        legend: {
            position : "bottom",
            labels : {
                usePointStyle : true
            }
        }
    }
});

//For Pie Chart Data

let orderFronmPlace = [5,15,4,9,7];
let place = ["YGN","MDY","NPT","SHAN","MDY"];
let piechart = document.getElementById('pie');

let myChart = new Chart(piechart, {
    type: 'doughnut',
    data: {
        labels: place,
        datasets: [{
            label: '# of Votes',
            data: orderFronmPlace,
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(255, 159, 64, 0.2)'
            ],
            borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)'
            ],
            borderWidth: 1
        }]
    },
    options: {
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero: true
                }
            }]
        },
        legend: {
            position : "bottom",
            labels : {
                usePointStyle : true
            }
        }
    }

});



