<script src="https://cdnjs.cloudflare.com/ajax/libs/Chart.js/3.7.1/chart.min.js"></script>
<frontmatter>
  title: Canal Traffic
</frontmatter>

<br>

# Canal Traffic

> This is a placeholder page that uses an external javascript library.

<div style="width:400px;height:400px;">
  <canvas id="myChart"></canvas>
</div>

Hello.

<script>
// Get the 2d context of the canvas (of where we want to draw the chart)
const ctx = document.getElementById('myChart').getContext('2d');
// Instantiate the Chart class with the data for the pie chart
const myChart = new Chart(ctx, {
    type: 'pie',
    data: {
        labels: ['Red', 'Blue', 'Yellow'],
        datasets: [{
            label: '# of Votes',
            data: [12, 19, 3],
            backgroundColor: [
              'rgb(255, 99, 132)',
              'rgb(54, 162, 235)',
              'rgb(255, 205, 86)'
            ]
        }]
    }
});
</script>
