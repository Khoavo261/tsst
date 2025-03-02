// // Conversation: https://chatgpt.com/c/67238253-819c-8006-9c41-9c259aa4e496

// import React from 'react';
// import CustomHeader from '@site/src/components/CustomHeader/CustomHeader';
// import PureHero from '@site/src/components/PureHero/PureHero'; 
// import styles from './index.module.css';
// import FeatureCourses from '@site/src/components/LPComponents/FeaturesCourses/FeaturesCourses';
// import TwoColumnSection from '@site/src/components/TwoColumnSection/TwoColumnSection';
// import ImpressSlider from '@site/src/components/ImpressSlider/ImpressSlider';
// import FeaturedProducts from '@site/src/components/FeaturedProducts/FeaturedProducts';
// import ServiceHighlights from '@site/src/components/LPComponents/ServiceHighlights/ServiceHighlights';
// import StorySection from '@site/src/components/LPComponents/StorySection/StorySection';
// import SubscribeNewsletter from '@site/src/components/LPComponents/SubscribeNewsletter/SubscribeNewsletter';
// import HighlightCard from '@site/src/components/LPComponents/HighlightCard/HighlightCard';
// import WikiBox from '@site/src/components/LPComponents/WikiBox/WikiBox';

// // Custom Header Settings Start

// const menuItems = [
//   { label: "Python", link: "/kien-thuc/python" },
//   { label: "Obsidian", link: "/kien-thuc/obsidian" },
//   { label: "Blog", link: "/blog" },
// ];


// const handleMenuClick = () => {
//   console.log("Mobile menu clicked!");
// };

// const handleSearchClick = () => {
//   alert("Search button clicked!");
//   // or open a search modal
// };

// // Custom Header Settings End

// const slides = [
// {
//     title: "Developed to provide deep regeneration.",
//     description: "Explore our collection that offers deep regeneration for a lasting impact.",
//     buttonText: "Explore",
//     link: "#",
//     image: "https://images.unsplash.com/photo-1519229875649-6b8da16368fd?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", // Replace with actual image URL
// },
// {
//     title: "Empowering confidence in every drop.",
//     description: "Our products are designed to instill confidence and enhance your natural beauty.",
//     buttonText: "Discover",
//     link: "#",
//     image: "https://images.unsplash.com/photo-1520982184827-6950930eaf2b?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", // Replace with actual image URL
// },
// {
//     title: "Inspired by nature, powered by science.",
//     description: "Experience the perfect blend of natural ingredients and scientific innovation.",
//     buttonText: "Learn More",
//     link: "#",
//     image: "https://images.unsplash.com/photo-1663042297704-4c9051364f44?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", // Replace with actual image URL
// },
// ];

// const products = [
//   {
//     image: "https://images.unsplash.com/photo-1519289455504-3510c41b7cc3?q=80&w=1975&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fA%3D%3D",
//     title: "Docusaurus: Đơn giản hóa tài liệu",
//     description: "Tối ưu hóa quy trình tạo tài liệu với Docusaurus, một trình tạo trang tĩnh mạnh mẽ được xây dựng trên nền tảng React.",
//     buttonText: 'Thông tin & Đăng ký',
//     link: "#"
//   },
//   {
//     image: "https://images.unsplash.com/photo-1504519560822-bed2d817f87f?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fA%3D%3D",
//     title: "React: Framework UI cho trang web động",
//     description: "Tận dụng kiến trúc dựa trên thành phần của React để tạo các yếu tố giao diện tương tác và có thể tái sử dụng một cách dễ dàng.",
//   buttonText: 'Thông tin & Đăng ký',
//     link: "#"
//   },
//   {
//     image: "https://images.unsplash.com/photo-1605762566242-bd1c73c885b0?q=80&w=2042&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fA%3D%3D",
//     title: "Tùy chỉnh trang web bằng AI",
//     description: "Khám phá cách tích hợp AI để cá nhân hóa trang Docusaurus của bạn dựa trên sở thích và hành vi của người dùng.",
//     buttonText: 'Thông tin & Đăng ký',
//   link: "#"
//   },
//   {
//     image: "https://images.unsplash.com/photo-1643903096045-07741be1f245?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fA%3D%3D",
//     title: "Nâng cao trải nghiệm người dùng với AI",
//     description: "Thêm các tiện ích thông minh được hỗ trợ bởi AI để cải thiện điều hướng và tương tác người dùng trên trang web sử dụng React.",
//     buttonText: 'Thông tin & Đăng ký',
//     link: "#"
//   },
//   // Thêm sản phẩm khác nếu cần
// ];


// const DemoPage = () => {
//   return (
//     <div className={styles.container}>
      
//       <CustomHeader 
//         logo="https://docusaurus.io/img/docusaurus_keytar.svg"
//         menuItems={menuItems}
//         textColor="#FFFFFF"
//         onMenuClick={handleMenuClick}
//       />

//       {/* PureHero component */}
//       <PureHero 
//       title="React Component đơn giản" 
//       subtitle="Tùy biến website của bạn với hỗ trợ từ AI trong tầm tay" 
//       backgroundImage="https://images.unsplash.com/uploads/1411400493228e06a6315/ad711a20?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
//       buttonText="Khám phá"
//       buttonLink="#" /* Thay link vào đây */
//       contentWidth="60%"
//       contentPosition="center"
//       titleColor="#ffffff"
//       subtitleColor="#f0f0f0"
//       buttonColor="#ffffff"
//       navColor="#ffffff"
//     />

//     <TwoColumnSection 
//       title="Expertly crafted serums for all skin types"
//       description="Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts."
//       buttonText="Shop Serums"
//       buttonLink="#"
//       titleColor="#1A1A1A"
//       descriptionColor="#4D4D4D"
//       buttonColor="#1A1A1A"
//       imageSrc="https://images.unsplash.com/photo-1663042341830-654693952ec1?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" // replace with your desired image
//       imageAlt="Serum Product"
//       imagePosition="right" // 'left' or 'right'
//       columnRatio={1.5} // Adjusts the width ratio of text to image (default 2:1)
//     />

//       <TwoColumnSection 
//       title="Expertly crafted serums for all skin types"
//       description="Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts."
//       buttonText="Shop Serums"
//       buttonLink="#"
//       titleColor="#1A1A1A"
//       descriptionColor="#4D4D4D"
//       buttonColor="#1A1A1A"
//       imageSrc="https://images.unsplash.com/photo-1663042341830-654693952ec1?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" // replace with your desired image
//       imageAlt="Serum Product"
//       imagePosition="left" // 'left' or 'right'
//       columnRatio={1.5} // Adjusts the width ratio of text to image (default 2:1)
//     />

//     <ImpressSlider 
//       slides={slides} 
//       width="80%" 
//       height="600px" 
//       borderRadius="20px" 
//       textPosition="center" // Control text alignment (left, right, center)
//       contentWidth="800px" // Set a custom width for the text area
//     />

//     <FeaturedProducts 
//         products={products}
//         title="Featured Products"
//         subtitle="Quality ingredients. Real results."
//         titleFontSize="2rem"
//         subtitleFontSize="1rem"
//         titleColor="#000000"
//         subtitleColor="#333333"
//         productFontSize="1rem"
//         productTextColor="#333333"
//         imageBorderRadius="10px"
//         imageOrientation="landscape" // 'portrait' or 'landscape'
//         itemsInView={3} // Number of items visible at once
//       />

//     <ServiceHighlights
//         title="Our company mission is to exceed expectations"
//         subtitle="Quality ingredients. Real results."
//         bulletPoints={[
//           "275+ premium section templates to mix and match",
//           "Page builder with front-end and back-end editing",
//           "Massive element library with extensive options",
//           "Updated frequently with new features"
//         ]}
//         buttonText="Meet The Team"
//         buttonLink="#"
//         iconMode={true}
//         iconClass="fas fa-check-circle"
//         image="https://images.unsplash.com/photo-1569832856136-5f42d6a3ed67?q=80&w=1973&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" // Custom image
//         position="left" // Position image on the left
//         textColor="#333333" // Custom text color
//         subtitleColor="#666666" // Custom subtitle color
//         textImageRatio={1} // Set text:image ratio to 3:1
//       />

//         {/* Substack Subscription */}
//         <SubscribeNewsletter
//         backgroundColor="transparent"
//         headingColor="#002E5D"
//         descriptionColor="#66CCCC"
//         buttonBackgroundColor="#008080"
//         buttonTextColor="#FFFFFF"
//         // enableShadow={true}
//         heading="Nhận bản tin hàng tuần" // Không hiển thị nếu trống
//         description="Hãy là người đầu tiên nhận những bài viết mới và thông tin bổ ích từ Learn Anything." // Không hiển thị nếu trống
//         buttonText="Đăng ký"
//         />


//     <StorySection
//         title="We can take your business to the next level"
//         description="Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean."
//         image="https://images.unsplash.com/photo-1569832856136-5f42d6a3ed67?q=80&w=1973&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
//         imagePosition="left"
//         linkText="View Services"
//         linkUrl="#"
//         quote="I had a great experience with Salient from start to finish."
//         authorName="Phil Martinez"
//         authorTitle="Designer, Owl Eyes"
//         authorImage="https://vnstocks.com/assets/images/thinhvu_avatar_square.jpg" // Custom author image
//         textColor="#333"
//         linkColor="#ff7f50"
//       />

//     </div>
//   );
// };

// export default DemoPage;
