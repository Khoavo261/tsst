import React from "react";
import TwoColumnSection from "@site/src/components/TwoColumnSection/TwoColumnSection";
import MediaPartners from "@site/src/components/MediaPartners/MediaPartners"; // Thêm component MediaPartners
import styles from "@site/src/components/TwoColumnSection/TwoColumnSection.module.css";

const partnersData = [
  { name: "Báo Mới", logo: "/img/logos/baomoi.png", link: "https://baomoi.com/" },
  { name: "VNExpress", logo: "/img/logos/vnexpress.png", link: "https://vnexpress.net/" },
  { name: "Tuổi Trẻ", logo: "/img/logos/tuoitre.png", link: "https://tuoitre.vn/" },
];

const App = () => {
  return (
    <div className={styles.founderSection}>
      {/* Tiêu đề chung */}
      <section className={styles.founderHeader}>
        <p className={styles.subtitle}>Über Deutsch.vn</p>
        <h1 className={styles.title}>Tại sao bọn mình ở đây!.</h1>
      </section>

      {/* Hàng 1 */}
      <TwoColumnSection
        image="/images/270.Tired_.png"
        altText="Illustration 1"
        heading="Mình đã từng học tiếng Đức tại nhiều trung tâm!"
        description="Nhưng 3 trong 4 trung tâm mình học đều có chất lượng kém. Thậm chí mình còn bị lừa bởi một thầy giáo dạy tiếng Đức."
      />

      {/* Hàng 2 */}
      <TwoColumnSection
        image="/images/12.png"
        altText="Illustration 2"
        heading="Mình hiểu cảm giác hoang mang của bạn."
        description="Tiếng Đức ở Việt Nam chỉ bùng nổ trong 5-7 năm qua. Vừa đi một, thị trường chưa có một đơn vị nào đủ uy tín để dẫn đầu. Người học phải tự mình mò mẫm, tự đánh giá chất lượng bằng... niềm tin."
      />

      {/* Hàng 3 */}
      <TwoColumnSection
        image="/images/364.Projecting.png"
        altText="Illustration 3"
        heading="Bọn mình muốn thay đổi điều đó. "
        description="Bọn mình không phải là một trung tâm tiếng Đức. 
        Cũng không phải là một công ty tư vấn du học.
        Deutsch.vn là cầu nối, là nơi bảo vệ quyền lợi cho cả người học và các đơn vị cung cấp dịch vụ uy tín."
      />

      {/* Hàng 4 */}
      <TwoColumnSection
        image="/images/274.Loading-Time.png"
        altText="Illustration 4"
        heading="Deutsch.vn có 3 giai đoạn chính:"
        description="Giai đoạn 1: Bọn mình xây dựng một nền tảng luyện tiếng Đức miễn phí nhưng thực sự hiệu quả. Dự trên những tài liệu mình có từ nước ngoài (cụ thể là Áo)
        Giai đoạn 2: Bọn mình sẽ giúp các đơn vị dạy tiếng Đức có tâm phát triển khóa học, đồng thời tạo ra một hệ thống đánh giá minh bạch từ chính học viên.
        Giai đoạn 3: Bọn mình trở thành một đơn vị kiểm định độc lập, giúp bảo vệ hồ sơ và tài chính của người học trước những rủi ro không đáng có."
      />

      {/* Hàng 5 */}
      <TwoColumnSection
        image="/images/489.Planting.png"
        altText="Illustration 5"
        heading="Hãy cùng nhau xây dựng môi thị trường!"
        description="Đây không chỉ là một nền tảng học tập. Đây là một phong trào, một cộng đồng. 
        Bọn mình tin rằng nếu mỗi người góp một chút—dù là thử nghiệm nền tảng, đóng góp ý kiến, hay chia sẻ trải nghiệm—chúng ta có thể tạo ra một thị trường học tiếng Đức minh bạch và công bằng hơn.
        Hãy cùng nhau làm mọi thứ đẹp nhé!"
      />

      {/* 🆕 Phần Đội Ngũ Sáng Lập */}
      <section className={styles.founderSection}>
        <h2 className={styles.founderTitle}>Đội ngũ sáng lập</h2>
        <p>
          Mình là <strong>Khoa Võ</strong>, người chịu trách nhiệm cho <strong>nội dung</strong>.
        </p>
        <p>
          <strong>Tuấn Anh Đỗ</strong>, người chịu trách nhiệm cho phần <strong>xây dựng hệ thống</strong>.
        </p>
        <p className={styles.readMore}>
          Đọc thêm về bọn mình. <a href="/about">Tại đây! 🔥</a>
        </p>
      </section>

      {/* 🆕 Phần Đối Tác Truyền Thông */}
      <MediaPartners partners={partnersData} />
    </div>
  );
};

export default App;
