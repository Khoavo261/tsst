import React, { useEffect, useRef } from 'react';
import * as echarts from 'echarts';

const LineRaceChart = ({
  title = 'Line Race Chart',
  subtitle = '',
  dataset = [],
  countries = [],
  xAxisName = 'Year',
  yAxisName = 'Income',
  animationDuration = 10000,
  colors = ['#4caf50', '#6699ff', '#ff5722', '#333', '#9c27b0', '#03a9f4'],
  fontFamily = 'Lexend',
  figsize = { width: '100%', height: '600px' },
  marginTop = '40px', // New prop for top margin
  marginBottom = '40px', // New prop for bottom margin
}) => {
  const chartRef = useRef(null);

  useEffect(() => {
    const chart = echarts.init(chartRef.current);

    // Dataset Filters and Series Configuration
    const datasetWithFilters = [];
    const seriesList = [];
    countries.forEach((country, index) => {
      const datasetId = `dataset_${country}`;
      datasetWithFilters.push({
        id: datasetId,
        fromDatasetId: 'dataset_raw',
        transform: {
          type: 'filter',
          config: {
            and: [
              { dimension: 'Year', gte: 1950 },
              { dimension: 'Country', '=': country },
            ],
          },
        },
      });
      seriesList.push({
        type: 'line',
        datasetId: datasetId,
        showSymbol: false,
        name: country,
        endLabel: {
          show: true,
          formatter: (params) => `${params.value[3]}: ${params.value[0]}`,
        },
        labelLayout: {
          moveOverlap: 'shiftY',
        },
        emphasis: {
          focus: 'series',
        },
        encode: {
          x: 'Year',
          y: yAxisName,
          label: ['Country', yAxisName],
          itemName: 'Year',
          tooltip: [yAxisName],
        },
        color: colors[index % colors.length],
      });
    });

    // ECharts Configuration
    const options = {
      animationDuration,
      dataset: [
        {
          id: 'dataset_raw',
          source: dataset,
        },
        ...datasetWithFilters,
      ],
      title: {
        text: title,
        subtext: subtitle,
        left: 'center',
        textStyle: {
          fontFamily,
          fontWeight: 'bold',
        },
      },
      tooltip: {
        trigger: 'axis',
        order: 'valueDesc',
        textStyle: {
          fontFamily,
        },
      },
      xAxis: {
        type: 'category',
        name: xAxisName,
        nameLocation: 'middle',
        nameGap: 25,
        axisLabel: {
          fontFamily,
        },
      },
      yAxis: {
        name: yAxisName,
        axisLabel: {
          fontFamily,
        },
      },
      grid: {
        right: 140,
        top: 80,
        bottom: 80,
      },
      series: seriesList,
    };

    chart.setOption(options);

    return () => {
      chart.dispose(); // Clean up the chart instance
    };
  }, [
    title,
    subtitle,
    dataset,
    countries,
    xAxisName,
    yAxisName,
    animationDuration,
    colors,
    fontFamily,
    figsize,
  ]);

  return (
    <div
      style={{
        marginTop, // Apply top margin
        marginBottom, // Apply bottom margin
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

export default LineRaceChart;
