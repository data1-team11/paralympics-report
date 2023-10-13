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

For the second category, continuity of boat traffic, we look towards hosting the event outside of ‘rush hours’ on the canals. <br> 
As can be seen in the figure below the busiest hours on the water usually start around 15:00. <br> 
For that reason the swimming event will be finished before 15:00. <br> 
As people swim about 8 km/h, each round of 5 km would take approximately 40 minutes. (Thornton, 2019) <br>
With maximum 120 swimmers per group it would take 25 waves to accommodate all 3000 swimmers. (British Triathlon, 2023)<br>
The first wave of the race starts at 7:00 am with a next wave going every 20 minutes, this way the last wave will be out of the water by 15:00. <br>

![image](https://github.com/data1-team11/paralympics-report/assets/146421346/bb17d756-be6b-41d0-8614-4533bb6f3572) <br><br>

## References ## <br>

British Triathlon. (2023). Open Water Swimming Safety Guide for Multi-Sport Events. British Triathlon.org.<br>
Jüttner, F., Backhaus, D., Matthias, U., Essers, U., Greiner, R., & Mahr, B. (1994). Emissions of two- and four-stroke outboard engines--II, impact on water quality. Zürich: Elsevier.<br>
Propel. (2022, June 20). https://propel.me/nl/article/why-amsterdam-is-a-perfect-example-of-cities-going-carbon-neutral/. Retrieved from www.propel.me: https://propel.me/nl/article/why-amsterdam-is-a-perfect-example-of-cities-going-carbon-neutral/<br>
Sterling, T. (2020, March 3). https://www.reuters.com/article/us-climate-change-netherlands-idUSKBN20Q1W7. Retrieved from www.reuters.com: https://www.reuters.com/article/us-climate-change-netherlands-idUSKBN20Q1W7<br>
Thornton, J. (2019, June 28). The speed of human swimming. Retrieved from Livestrong: https://www.livestrong.com/article/456880-the-speed-of-human-swimming/ <br>
TNO. (2013). Op de Amsterdamse grachten hebben wij nu de drukte in de hand. Rotterdam: TNO.<br>



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
