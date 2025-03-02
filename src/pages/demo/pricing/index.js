import React, { useState } from "react";
import CustomHeader from "@site/src/components/CustomHeader/CustomHeader"; // Import header component
import PureHero from "@site/src/components/PureHero/PureHero"; // Import hero banner component
import PricingTable from "@site/src/components/PricingTable/PricingTable"; // Import pricing table component
import PricingComparison from "@site/src/components/PricingComparison/PricingComparison";

const App = () => {
  // Configure the header menu
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

  // Configure the pricing table data
  const [billingToggle, setBillingToggle] = useState("monthly");

  const plans = [
    {
      name: "Basic",
      monthlyPrice: "Free",
      yearlyPrice: "Free",
      features: [
        "Live chat widget",
        "Email marketing",
        "Custom forms",
        "Traffic analytics",
      ],
      highlighted: false,
    },
    {
      name: "Premium",
      monthlyPrice: 29,
      yearlyPrice: 21.75, // 25% discount for yearly billing
      features: [
        "Everything in basic",
        "Marketing automation",
        "Advanced chatbot",
        "Campaign management",
        "Collaboration tools",
      ],
      highlighted: true,
    },
    {
      name: "Platinum",
      monthlyPrice: 59,
      yearlyPrice: 44.25, // 25% discount for yearly billing
      features: [
        "Everything in premium",
        "A/B testing sandbox",
        "Custom permissions",
        "Social media automation",
        "Sales automation tools",
      ],
      highlighted: false,
    },
  ];

  const toggleBilling = () => {
    setBillingToggle((prev) => (prev === "monthly" ? "yearly" : "monthly"));
  };

  const options = [
    {
      name: "Free",
      sections: [
        {
          title: "Core Features",
          features: [
            { name: "Drafts", icon: <i className="fas fa-edit" />, available: true, textColor: "#000000", iconColor: "#4caf50" },
            { name: "Publishing", icon: <i className="fas fa-upload" />, available: false, tooltip: "Publish content to supported platforms.", textColor: "#888888", iconColor: "#f44336" },
            { name: "Scheduling", icon: <i className="fas fa-calendar-alt" />, available: false, tooltip: "Schedule your posts in advance.", textColor: "#666666", iconColor: "#f44336" },
          ],
        },
        {
          title: "Platforms",
          features: [
            { name: "Twitter", icon: <i className="fab fa-twitter" />, available: true, textColor: "#1da1f2", iconColor: "#1da1f2" },
            { name: "LinkedIn", icon: <i className="fab fa-linkedin" />, available: false, tooltip: "Post updates to LinkedIn.", textColor: "#888888", iconColor: "#0077b5" },
            { name: "Instagram", icon: <i className="fab fa-instagram" />, available: false, tooltip: "Manage Instagram posts and stories.", textColor: "#888888", iconColor: "#e4405f" },
          ],
        },
        {
          title: "Analytics",
          features: [
            { name: "Basic Insights", icon: <i className="fas fa-chart-line" />, available: true, tooltip: "View basic metrics like views and clicks.", textColor: "#000000", iconColor: "#4caf50" },
            { name: "Advanced Analytics", icon: <i className="fas fa-chart-pie" />, available: false, tooltip: "Get detailed engagement reports.", textColor: "#888888", iconColor: "#f44336" },
          ],
        },
      ],
    },
    {
      name: "Premium",
      sections: [
        {
          title: "Core Features",
          features: [
            { name: "Drafts", icon: <i className="fas fa-edit" />, available: true, textColor: "#000000", iconColor: "#4caf50" },
            { name: "Publishing", icon: <i className="fas fa-upload" />, available: true, tooltip: "Publish content to supported platforms.", textColor: "#000000", iconColor: "#4caf50" },
            { name: "Scheduling", icon: <i className="fas fa-calendar-alt" />, available: true, tooltip: "Schedule your posts in advance.", textColor: "#000000", iconColor: "#4caf50" },
          ],
        },
        {
          title: "Platforms",
          features: [
            { name: "Twitter", icon: <i className="fab fa-twitter" />, available: true, textColor: "#1da1f2", iconColor: "#1da1f2" },
            { name: "LinkedIn", icon: <i className="fab fa-linkedin" />, available: true, tooltip: "Post updates to LinkedIn.", textColor: "#000000", iconColor: "#0077b5" },
            { name: "Instagram", icon: <i className="fab fa-instagram" />, available: true, tooltip: "Manage Instagram posts and stories.", textColor: "#000000", iconColor: "#e4405f" },
          ],
        },
        {
          title: "Analytics",
          features: [
            { name: "Basic Insights", icon: <i className="fas fa-chart-line" />, available: true, tooltip: "View basic metrics like views and clicks.", textColor: "#000000", iconColor: "#4caf50" },
            { name: "Advanced Analytics", icon: <i className="fas fa-chart-pie" />, available: true, tooltip: "Get detailed engagement reports.", textColor: "#000000", iconColor: "#4caf50" },
          ],
        },
      ],
    },
    {
      name: "Agency",
      sections: [
        {
          title: "Core Features",
          features: [
            { name: "Drafts", icon: <i className="fas fa-edit" />, available: true, textColor: "#000000", iconColor: "#4caf50" },
            { name: "Publishing", icon: <i className="fas fa-upload" />, available: true, tooltip: "Publish content to supported platforms.", textColor: "#000000", iconColor: "#4caf50" },
            { name: "Scheduling", icon: <i className="fas fa-calendar-alt" />, available: true, tooltip: "Schedule your posts in advance.", textColor: "#000000", iconColor: "#ff0000" },
          ],
        },
        {
          title: "Platforms",
          features: [
            { name: "Twitter", icon: <i className="fab fa-twitter" />, available: true, textColor: "#1da1f2", iconColor: "#1da1f2" },
            { name: "LinkedIn", icon: <i className="fab fa-linkedin" />, available: true, tooltip: "Post updates to LinkedIn.", textColor: "#000000", iconColor: "#0077b5" },
            { name: "Instagram", icon: <i className="fab fa-instagram" />, available: true, tooltip: "Manage Instagram posts and stories.", textColor: "#000000", iconColor: "#e4405f" },
            { name: "TikTok", icon: <i className="fab fa-tiktok" />, available: true, tooltip: "Schedule and post TikTok videos.", textColor: "#000000", iconColor: "#000000" },
          ],
        },
        {
          title: "Analytics",
          features: [
            { name: "Basic Insights", icon: <i className="fas fa-chart-line" />, available: true, tooltip: "View basic metrics like views and clicks.", textColor: "#000000", iconColor: "#4caf50" },
            { name: "Advanced Analytics", icon: <i className="fas fa-chart-pie" />, available: true, tooltip: "Get detailed engagement reports.", textColor: "#000000", iconColor: "#4caf50" },
            { name: "Custom Reports", icon: <i className="fas fa-file-alt" />, available: true, tooltip: "Generate custom reports for your clients.", textColor: "#000000", iconColor: "#4caf50" },
          ],
        },
      ],
    },
  ];
 
  

  return (
    <div>
      {/* Header Section */}
      <CustomHeader
        logo="https://docusaurus.io/img/docusaurus_keytar.svg"
        menuItems={headerMenuItems}
        textColor="#ffffff"
        onMenuClick={handleMenuClick}
        onSearchClick={handleSearchClick}
      />

      {/* Hero Section */}
      <PureHero
        title="Minh hoạ Featured Products Component"
        subtitle="Trả lời câu hỏi thường gặp"
        backgroundImage="https://images.unsplash.com/uploads/1411400493228e06a6315/ad711a20?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        buttonText="Khám phá"
        buttonLink="#" // Add the target link here
        contentWidth="60%"
        contentPosition="center"
        titleColor="#ffffff"
        subtitleColor="#f0f0f0"
        buttonColor="#ffffff"
        navColor="#ffffff"
      />

      {/* Pricing Table Section */}
    <PricingTable
      title="Choose the best plan designed for your needs"
      highlightWords={["designed"]} // Danh sách các từ sẽ được highlight, ngăn cách bởi dấu phẩy
      toggleLabels={{ monthly: "Monthly", yearly: "Yearly" }}
      saveText="Get 25% Off!"
      plans={plans}
      billingToggle={billingToggle}
      onBillingChange={toggleBilling}
      highlightColor="#ff5722"
      backgroundColor="#f5f5f5"
      textColor="#222"
    />

    <PricingComparison
      title="Plan Comparison"
      description="Compare the features of our Free, Premium, and Agency plans to find the best fit for your needs."
      criteriaTextColor="#333" // Darker gray for criteria text
      iconColor="#007bff" // Blue for all icons
      options={options}
    />
    
    </div>
  );
};

export default App;
