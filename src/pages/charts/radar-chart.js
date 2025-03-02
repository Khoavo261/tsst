import React from 'react';
import CustomHeader from '@site/src/components/CustomHeader/CustomHeader'; // nạp component thanh menu
import PureHero from '@site/src/components/PureHero/PureHero'; // nạp component Hero Banner
import RadarChart from '@site/src/components/Echarts/RadarChart'; // nạp Radar Chart Component

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

  const indicators = [
    { name: 'Độ chính xác', max: 100 },
    { name: 'Độ phủ dữ liệu', max: 100 },
    { name: 'Tốc độ & Hiệu quả', max: 100 },
    { name: 'Linh hoạt & tuỳ biến', max: 100 },
    { name: 'Chi phí tối ưu', max: 100 },
    { name: 'Hỗ trợ kỹ thuật', max: 100}
  ];

  const data = [
    {
      value: [90, 85, 85, 90, 95, 100], // Scores for VNStock
      name: 'VNStock',
    },
    {
      value: [100, 50, 90, 90, 95, 50], // Scores for Competitors
      name: 'API dữ liệu từ công ty CK',
    },
    {
      value: [90, 70, 90, 90, 20, 100], // Scores for Competitors
      name: 'Dịch vụ dữ liệu (trả phí)',
    },
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

    <RadarChart
      title="So sánh các giải pháp dữ liệu với Vnstock"
      subtitle="" // Vnstock là giải pháp mã nguồn mở, miễn phí với chất lượng cao
      legendData={['VNStock', 'API dữ liệu từ công ty CK', 'Dịch vụ dữ liệu (trả phí)']}
      radarIndicators={indicators}
      seriesData={data}
      colors={['#4caf50', '#6699ff', '#333']}
      figsize={{ width: '70%', height: '600px' }}
      legendPosition="bottom"
      legendSpacing="0px" // On bottom
      titleSpacing="0px" // On top
      tooltipFormatter="{b}: {c}"
    />

    </div>
  );
};

export default App;
