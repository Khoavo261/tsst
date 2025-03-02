import React, { useEffect, useRef } from 'react';
import * as echarts from 'echarts';

const BarRaceChart = ({
  title = 'Bar Race Chart',
  subtitle = '',
  dataset = [],
  fontFamily = 'Lexend',
  figsize = { width: '100%', height: '600px' },
  marginTop = '20px',
  marginBottom = '20px',
  animationDuration = 2000,
  barColorMap = {
    Norway: '#ef2b2d',
    'United Kingdom': '#00247d',
    France: '#ed2939',
    Germany: '#000',
    Iceland: '#003897',
    Finland: '#003580',
    Russia: '#d52b1e',
    Poland: '#dc143c',
  },
}) => {
  const chartRef = useRef(null);

  useEffect(() => {
    const chart = echarts.init(chartRef.current);

    // Extract unique years from the dataset
    const years = [...new Set(dataset.map((row) => row[4]))].sort((a, b) => a - b);
    const startYear = years[0]; // Initial year
    let yearIndex = 0;

    // Configure the chart
    const options = {
      grid: {
        top: 60, // Increased to make space for the title
        bottom: 40, // Adjusted for better spacing
        left: 150,
        right: 80,
      },
      title: {
        text: title,
        subtext: subtitle,
        left: 'center',
        textStyle: {
          fontFamily,
          fontWeight: 'bold',
          fontSize: 20, // Title font size
        },
        subtextStyle: {
          fontFamily,
          fontSize: 14, // Subtitle font size
          color: '#666', // Subtitle color
        },
        top: 10, // Position title above the chart
      },
      xAxis: {
        max: 'dataMax',
        axisLabel: {
          fontFamily,
          formatter: (n) => Math.round(n).toString(),
        },
      },
      yAxis: {
        type: 'category',
        inverse: true,
        max: 10, // Maximum visible rows
        axisLabel: {
          show: true,
          fontSize: 14,
          formatter: (value) => `${value}`,
        },
      },
      dataset: {
        source: dataset.filter((row) => row[4] === startYear),
      },
      series: [
        {
          realtimeSort: true,
          seriesLayoutBy: 'column',
          type: 'bar',
          itemStyle: {
            color: (param) => barColorMap[param.value[3]] || '#5470c6',
          },
          encode: {
            x: 0, // Income (first column in dataset)
            y: 3, // Country (fourth column in dataset)
          },
          label: {
            show: true,
            precision: 1,
            position: 'right',
            valueAnimation: true,
            fontFamily,
          },
        },
      ],
      animationDuration: 0,
      animationDurationUpdate: animationDuration,
      animationEasing: 'linear',
      animationEasingUpdate: 'linear',
      graphic: {
        elements: [
          {
            type: 'text',
            right: 160,
            bottom: 60,
            style: {
              text: startYear,
              font: `bolder 80px ${fontFamily}`,
              fill: 'rgba(100, 100, 100, 0.25)',
            },
            z: 100,
          },
        ],
      },
    };

    chart.setOption(options);

    // Function to update the chart for each year
    const updateYear = (year) => {
      const source = dataset.filter((row) => row[4] === year);
      options.dataset.source = source;
      options.graphic.elements[0].style.text = year;
      chart.setOption(options);
    };

    // Start the bar race animation
    const interval = setInterval(() => {
      yearIndex = (yearIndex + 1) % years.length;
      updateYear(years[yearIndex]);
    }, animationDuration);

    return () => {
      clearInterval(interval); // Cleanup interval on unmount
      chart.dispose();
    };
  }, [dataset, title, subtitle, fontFamily, figsize, animationDuration, barColorMap]);

  return (
    <div
      style={{
        marginTop,
        marginBottom,
        width: figsize.width,
        height: figsize.height,
      }}
    >
      <div
        ref={chartRef}
        style={{
          width: '100%',
          height: '100%',
        }}
      />
    </div>
  );
};

export default BarRaceChart;
