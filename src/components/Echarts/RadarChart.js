import React, { useEffect, useRef } from 'react';
import { useColorMode } from '@docusaurus/theme-common';
import * as echarts from 'echarts';

const RadarChart = ({
  title = 'Radar Chart',
  subtitle = '',
  legendData = [],
  radarIndicators = [],
  seriesData = [],
  colors = ['#4caf50', '#6699ff', '#333'],
  figsize = { width: '80%', height: '500px' },
  legendPosition = 'bottom',
  tooltipFormatter = '{a}',
  splitLineColor = '#ccc',
  splitAreaColors = ['#f9f9f9', '#e8e8e8'],
  fontFamily = 'Lexend',
  titleSpacing = '20px',
  legendSpacing = '20px',
  marginTop = '20px', // NEW: Margin above the component
  marginBottom = '20px', // NEW: Margin below the component
}) => {
  const chartRef = useRef(null);

  let colorMode = 'light'; // Default to light mode
  try {
    const colorModeContext = useColorMode();
    colorMode = colorModeContext.colorMode; // Use Docusaurus context if available
  } catch (error) {
    console.warn('ColorModeProvider is not available. Defaulting to light mode.');
  }

  useEffect(() => {
    const chart = echarts.init(chartRef.current);

    const axisLabelColor = colorMode === 'dark' ? '#fff' : '#000';

    const radarOptions = {
      title: {
        text: title,
        subtext: subtitle,
        left: 'center',
        top: titleSpacing,
        textStyle: {
          fontFamily,
          color: colorMode === 'dark' ? '#ccc' : '#333',
          fontWeight: 'bold',
        },
        subtextStyle: {
          fontFamily,
          color: colorMode === 'dark' ? '#aaa' : '#555',
        },
      },
      tooltip: {
        trigger: 'item',
        formatter: tooltipFormatter,
        textStyle: {
          fontFamily,
          color: colorMode === 'dark' ? '#fff' : '#000',
        },
      },
      legend: {
        data: legendData,
        bottom: legendPosition === 'bottom' ? legendSpacing : null,
        top: legendPosition === 'top' ? legendSpacing : null,
        textStyle: {
          fontFamily,
          color: colorMode === 'dark' ? '#ccc' : '#333',
        },
        padding: [20, 10], // Additional padding for better spacing
        itemGap: 20, // Increase gap between legend items
      },
      color: colors,
      radar: {
        splitLine: {
          lineStyle: {
            color: splitLineColor,
            width: 0.5,
          },
        },
        splitArea: {
          areaStyle: {
            color: splitAreaColors,
          },
        },
        indicator: radarIndicators,
      },
      series: [
        {
          name: title,
          type: 'radar',
          data: seriesData,
        },
      ],
    };

    chart.setOption(radarOptions);

    return () => {
      chart.dispose(); // Dispose of the chart when the component unmounts
    };
  }, [
    title,
    subtitle,
    legendData,
    radarIndicators,
    seriesData,
    colors,
    figsize,
    legendPosition,
    tooltipFormatter,
    splitLineColor,
    splitAreaColors,
    fontFamily,
    titleSpacing,
    legendSpacing,
    colorMode,
  ]);

  return (
    <div
      style={{
        marginTop, // NEW: Apply top margin
        marginBottom, // NEW: Apply bottom margin
        display: 'flex', // Center-align chart container
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
      }}
    >
      <div
        ref={chartRef}
        style={{
          ...figsize,
          fontFamily, // Apply custom font
        }}
      />
    </div>
  );
};

export default RadarChart;
