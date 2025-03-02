import React from 'react';
import CustomHeader from '@site/src/components/CustomHeader/CustomHeader'; // nạp component thanh menu
import PureHero from '@site/src/components/PureHero/PureHero'; // nạp component Hero Banner
import LineRaceChart from '@site/src/components/Echarts/LineRaceChart';

const App = () => {
  // Bắt đầu thiết lập menu
  const headerMenuItems = [
    { label: "Tài liệu", link: "/docs/intro" },
    { label: "Blog", link: "/blog" },
    { label: "Demo", link: "/demo/cards" },
  ];

  const handleMenuClick = () => {
      console.log("Đã nhấn vào menu trên di động!");
  };

  const handleSearchClick = () => {
      alert("Đã nhấn vào nút tìm kiếm!");
  };

  // Kết thúc thiết lập menu

  // Bắt đầu Chart Data
  const countries = [
    'Finland',
    'France',
    'Germany',
    'Iceland',
    'Norway',
    'Poland',
    'Russia',
    'United Kingdom',
  ];

  const data = [
    ['Income', 'Life Expectancy', 'Population', 'Country', 'Year'],
    [1244, 36.57, 977662, 'Finland', 1950],
    [1803, 33.97, 29355111, 'France', 1950],
    [1639, 38.37, 22886919, 'Germany', 1950],
    [926, 42.85, 61428, 'Iceland', 1950],
    [1278, 37.91, 868570, 'Norway', 1950],
    [1213, 35.9, 9508747, 'Poland', 1950],
    [1430, 29.57, 31088398, 'Russia', 1950],
    [3431, 38.64, 12327466, 'United Kingdom', 1950],
    // Additional data for other years...
  ];

  // Kết thúc Chart Data

  return (
    <div>
    <CustomHeader 
      logo="https://docusaurus.io/img/docusaurus_keytar.svg" 
      menuItems={headerMenuItems} 
      textColor="#ffffff"
      onMenuClick={handleMenuClick}
      onSearchClick={handleSearchClick}
    />

    <PureHero 
      title="Minh hoạ Echarts" 
      subtitle="Biểu diễn dữ liệu trực quan trên Web" 
      backgroundImage="https://images.unsplash.com/photo-1639754390580-2e7437267698?q=80&w=2041&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
      buttonText="Khám phá"
      buttonLink="#" /* Thay link vào đây */
      contentWidth="60%"
      contentPosition="center"
      titleColor="#ffffff"
      subtitleColor="#f0f0f0"
      buttonColor="#ffffff"
      navColor="#ffffff"
    />

    <LineRaceChart
      title="Income of Select European Countries (1950+)"
      subtitle="Dynamic Race of Income Over Time"
      dataset={data}
      countries={countries}
      xAxisName="Year"
      yAxisName="Income"
      animationDuration={15000}
      figsize={{ width: '90%', height: '600px' }}
    />

    </div>
  );
};

export default App;
