<template>
  <div style="margin-top:20px">
    <apexchart height="350" class="flot-chart-six" type="area" :options="options" :series="series"></apexchart>
  </div>
</template>

<script>

export default {
  name: 'barChart',
  data: function () {
    return {
      options: {
        chart: {
          type: 'area',
          height: 350,
          toolbar: {
            show: false,
          },
        },
        yaxis: {
          show: false,
          min: 0,
          max: 100,
          color: 'rgba(255,255,255,0)'
        },
        xaxis: {
          categories: ['Jan', 'Feb', 'March', 'Apr', 'May', 'Jun', 'July', 'Aug', 'Sept', 'Oct', 'Nov', 'Dec'],
          color: 'rgba(80,110,216,.02)'
        },
        fill: {
          opacity: 1
        },
        dataLabels: {
          enabled: false,
        },

      },



      series: [
        {
          name: 'Sales',
          data: [44, 55, 41, 67, 22, 43, 21, 49, 33, 29, 44, 38],
          color: '#000',
          lines: {
            lineWidth: 9.8,
            fill: true,
            fillColor: {colors: [{opacity: 0}, {opacity: 0.75}]}
          }
        }]
    }
  }
}
</script>


