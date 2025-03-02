import React, { useState } from "react";
import CustomHeader from "@site/src/components/CustomHeader/CustomHeader"; // Import header component
import PureHero from "@site/src/components/PureHero/PureHero"; // Import hero banner component
import { faStarOfLife, faCertificate, faHeart,  faMedal } from "@fortawesome/free-solid-svg-icons"; // faSeedling, faLeaf, faChessQueen, faCrown, 
import PricingTable from "@site/src/components/PricingTable/PricingTable"; // Import pricing table component
import PricingComparison from "@site/src/components/PricingComparison/PricingComparison";
import FAQSection from '@site/src/components/FAQSection/FAQSection'; // nạp component các câu hỏi thường gặp

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
  const [billingToggle, setBillingToggle] = useState("yearly");

const plans = [
  {
    name: "Gold Sponsor",
    buttonUrl: "https://github.com/sponsors/thinh-vu/sponsorships?sponsor=thinh-vu&amp;tier_id=364306",
    monthlyPrice: null, // Not available for monthly
    yearlyPrice: 50, // Yearly price
    description: "Tương đương 1.275,000đ",
    features: [
      "Tất cả quyền lợi gói Silver Sponsor",
      "Tham gia nhóm thành viên tài trợ",
      "Truy cập sớm các tính năng mới",
      "Tặng chương trình tải & xuất dữ liệu",
      "Ưu tiên hỗ trợ qua Messenger",
      "Hiện phù hiệu Sponsor",
    ],
    highlighted: true,
    icon: faHeart, // FontAwesome icon
    buttonColor: "#8C52FF", // Button and icon color
  },
  {
    name: "Silver Sponsor",
    buttonUrl: "https://github.com/sponsors/thinh-vu/sponsorships?sponsor=thinh-vu&amp;tier_id=340704",
    monthlyPrice: 5, // Monthly price
    yearlyPrice: null, // Not available for yearly
    description: "Tương đương 125,000đ",
    features: [
      "Tất cả quyền lợi gói Bronze Sponsor",
      "Tính chỉ báo kỹ thuật từ dữ liệu Vnstock3",
      "Biểu diễn Đồ thị kỹ thuật kèm chỉ báo",
      "Ưu tiên hỗ trợ qua Messenger",
      "Hiện phù hiệu Sponsor",
    ],
    highlighted: false,
    icon: faCertificate, // FontAwesome icon
    buttonColor: "#4CAF50", // Button and icon color
  },
  {
    name: "Bronze Sponsor",
    buttonUrl: "https://github.com/sponsors/thinh-vu/sponsorships?sponsor=thinh-vu&amp;tier_id=340239",
    monthlyPrice: 3, // Monthly price
    yearlyPrice: null, // Not available for yearly
    description: "Tương đương 75,000đ",
    features: [
      "Đặt lịch tải, xuất dữ liệu giao dịch thời gian thực",
      "Dữ liệu giao dịch & thị trường nâng cao",
      "Truy xuất dữ liệu nhanh hơn gói miễn phí",
      "Hỗ trợ trực tiếp qua Nhóm & Messenger",
      "Hiện phù hiệu Sponsor",
    ],
    highlighted: false,
    icon: faStarOfLife, // FontAwesome icon
    buttonColor: "#2196F3", // Button and icon color
  },
];

const faqData = [
  {
    question: "Tại sao gọi là gói tài trợ?",
    answer: "Tài trợ không chỉ đơn thuần là một khoản phí mà là sự đồng hành cùng dự án. Khoản tài trợ của bạn giúp mình duy trì, phát triển các dự án mã nguồn mở và cung cấp dữ liệu, công cụ hữu ích cho cộng đồng. Đổi lại, bạn sẽ nhận được các quyền lợi đặc biệt như quyền truy cập sớm, hỗ trợ ưu tiên, và các chương trình khuyến mãi độc quyền, giúp bạn trở thành một phần quan trọng trong sự phát triển của dự án."
  },
  {
    question: "Vì sao tôi nên tài trợ?",
    answer: "Khi tài trợ, bạn không chỉ nhận được các quyền lợi sử dụng sản phẩm mà còn góp phần xây dựng cộng đồng mạnh mẽ hơn. Tài trợ của bạn là động lực để Vnstock nghiên cứu và phát triển những tính năng mới, các công cụ mạnh mẽ hơn. Hơn thế, bạn sẽ là người tiên phong trải nghiệm các cải tiến, tính năng mới và nhận được sự hỗ trợ ưu tiên – điều mà không phải ai cũng có."
  },
  {
    question: "Tài trợ & dùng sản phẩm khác gì mua dịch vụ?",
    answer: "Tài trợ là một hình thức đồng hành. Bạn không chỉ nhận được sản phẩm và hỗ trợ tương tự như khi mua dịch vụ mà còn góp phần phát triển các dự án mở, nâng tầm giá trị của cộng đồng. Trong khi mua dịch vụ thường chỉ tập trung vào quyền lợi sử dụng, tài trợ cho thấy bạn là người ủng hộ các sáng kiến mới, chưa thương mại hoá, và đóng góp vào việc hoàn thiện các công cụ hữu ích cho nhiều người hơn."
  },
  {
    question: "Tôi có thể tài trợ ẩn danh không?",
    answer: "Github Sponsors cho phép tài trợ trong chế độ riêng tư nếu bạn không tiện chia sẻ thông tin công khai. Nếu bạn cần hỗ trợ, đừng ngại nhắn tin cho mình để được hướng dẫn cụ thể và hỗ trợ tốt nhất."
  },
  {
    question: "Tôi có thể tài trợ như thế nào?",
    answer: "Bạn có thể tài trợ thông qua nền tảng Github Sponsors, đây là cách thuận tiện và tự động phân quyền truy cập cho bạn ngay sau khi tài trợ. Thông tin tài trợ của bạn cũng được công khai để lan toả giá trị và thu hút thêm sự ủng hộ từ cộng đồng. Nếu không sử dụng thẻ VISA/MasterCard, bạn cũng có thể tài trợ qua chuyển khoản ngân hàng và nhận sự hỗ trợ trực tiếp từ Vnstock."
  },
  {
    question: "Tôi nhận được gì khi tài trợ?",
    answer: "Bạn sẽ được sử dụng đầy đủ các tính năng và công cụ theo gói tài trợ đã chọn. Ngoài ra, bạn sẽ trở thành thành viên thân thiết của Vnstock, được truy cập sớm vào các dự án mới, nhận hỗ trợ ưu tiên, tham gia các chương trình giao lưu, chia sẻ kiến thức và các sự kiện độc quyền dành riêng cho cộng đồng tài trợ."
  },
  {
    question: "Tôi không quen sử dụng Github, có thể tài trợ như thế nào?",
    answer: "Nếu bạn chưa quen sử dụng Github, bạn có thể xem qua hướng dẫn tài trợ tại đây hoặc nhắn tin với Thịnh để được hỗ trợ: https://vnstocks.com/docs/insiders-program/huong-dan-tai-tro-github-sponsor"
  },
  {question: "Tôi đã tài trợ, làm thế nào để sử dụng sản phẩm?",
   answer: "Sau khi thực hiện tài trợ thành công, bạn sẽ nhận được email xác nhận từ Github Sponsors và thông tin hướng dẫn sử dụng sản phẩm cùng các hỗ trợ kèm theo. Để xem chi tiết hướng dẫn cách cài đặt và sử dụng sản phẩm, vui lòng truy cập: https://vnstocks.com/docs/insiders-program/huong-dan-thanh-vien"
  },
  {
    question: "Số tiền tài trợ được tính như thế nào?",
    answer: "Số tiền tài trợ phụ thuộc vào gói tài trợ mà bạn chọn, với các lựa chọn linh hoạt như hàng tháng hoặc hàng năm. Tài trợ hàng tháng sẽ tự động gia hạn qua nền tảng Github Sponsors. Nếu bạn thanh toán từ tài khoản VND, ngân hàng của bạn có thể áp dụng phí chuyển đổi ngoại tệ sang USD theo chính sách của họ. Chi phí rõ ràng, minh bạch và không có chi phí ẩn nào khác."
  },
  {
    question: "Tôi có thể hủy tài trợ khi nào?",
    answer: "Bạn có toàn quyền hủy tài trợ bất cứ lúc nào. Việc này có thể thực hiện dễ dàng qua trang quản lý Github Sponsors hoặc thông qua liên hệ trực tiếp với mình. Mình cam kết hỗ trợ bạn trong suốt quá trình này và giải đáp mọi câu hỏi liên quan, để bạn luôn cảm thấy thoải mái khi đồng hành cùng Vnstock."
  },
  {
    question: "Điều gì xảy ra khi tài trợ hết hạn?",
    answer: "Khi gói tài trợ hết hạn, bạn sẽ không còn quyền lợi sử dụng sản phẩm và hỗ trợ từ Vnstock. Bạn vẫn có thể truy cập nhóm cộng đồng các nhà tài trợ của Vnstock để giao lưu và cập nhật thông tin. Bạn có thể chọn gia hạn tài trợ hoặc chuyển sang gói tài trợ khác để tiếp tục nhận quyền lợi và hỗ trợ từ mình."
  },
  {
    question: "Có chính sách hoàn tiền không?",
    answer: "Các gói tài trợ được xem như sự hỗ trợ tự nguyện cho dự án, nên thông thường sẽ không có chính sách hoàn tiền. Tuy nhiên, nếu bạn gặp vấn đề hoặc nhầm lẫn trong quá trình tài trợ, mình sẽ hỗ trợ bạn để đảm bảo mọi vấn đề được giải quyết một cách thoả đáng."
  },
  {
    question: "Gói tài trợ có thể được nâng cấp hoặc hạ cấp không?",
    answer: "Hoàn toàn có thể! Bạn có thể nâng cấp lên gói tài trợ cao hơn hoặc hạ cấp gói tài trợ hiện tại bất kỳ lúc nào thông qua trang quản lý Github Sponsors hoặc liên hệ trực tiếp với mình để được hỗ trợ thay đổi gói."
  },
  {
    question: "Làm thế nào để lan toả dự án sau khi tài trợ?",
    answer: "Sau khi tài trợ, bạn có thể chia sẻ thông tin dự án và lý do bạn ủng hộ trên mạng xã hội hoặc trong các cộng đồng bạn tham gia. Việc lan tỏa sẽ giúp dự án nhận được sự quan tâm nhiều hơn, thu hút thêm nguồn lực để phát triển các sản phẩm mới và cải thiện dịch vụ."
  },
  {
    question: "Tài trợ có giúp ích gì cho cộng đồng?",
    answer: "Tài trợ của bạn giúp mình duy trì dự án, cải thiện và phát triển thêm các công cụ mới. Những đóng góp này không chỉ mang lại lợi ích cho riêng bạn mà còn mở rộng phạm vi phục vụ, giúp cộng đồng có thêm nhiều nguồn tài nguyên hữu ích. Mỗi tài trợ của bạn đều góp phần xây dựng một cộng đồng mạnh mẽ, sáng tạo và cùng phát triển."
  }
];


  
  <PricingTable
    title="Chọn Gói Thành Viên Vnstock Insider"
    highlightWords={["Gói", "Thành Viên"]}
    filterLabels={{ all: "Tất cả", monthly: "Tháng", yearly: "Năm" }}
    saveText="Tiết kiệm 17%"
    plans={plans}
    highlightColor="#6a1b9a"
    backgroundColor="#f5f5f5"
    textColor="#222"
  />;
  
  

  const toggleBilling = () => {
    setBillingToggle((prev) => (prev === "monthly" ? "yearly" : "monthly"));
  };

  const options = [
    {
      name: "Golden",
      color: "#8C52FF",
      buttonUrl: "https://github.com/sponsors/thinh-vu/sponsorships?sponsor=thinh-vu&amp;tier_id=364306",
      sections: [
        {
          title: "Tính năng cốt lõi",
          features: [
            {
              name: "Dữ liệu nâng cao",
              icon: <i className="fas fa-database" />,
              available: true,
              tooltip: "Truy cập dữ liệu API nâng cao đa dạng cho phân tích & giao dịch.",
              textColor: "#000000",
              iconColor: "#8C52FF",
            },
            {
              name: "Đặt lịch tải, xuất dữ liệu",
              icon: <i className="fas fa-link" />,
              available: true,
              tooltip: "Lên lịch tải tự động và xuất ra các định dạng: Amibroker, Excel, GSheets hoặc các loại cơ sở dữ liệu như SQLite, Huggingface Datasets, Duckdb, vv",
              textColor: "#000000",
              iconColor: "#8C52FF",
            },
          ],
        },
        {
          title: "Phân tích",
          features: [
            {
              name: "Chỉ báo kỹ thuật",
              icon: <i className="fas fa-chart-line" />,
              available: true,
              tooltip: "Tính toán các chỉ báo kỹ thuật chuyên sâu.",
              textColor: "#000000",
              iconColor: "#8C52FF",
            },
            // {
            //   name: "Mô hình cơ bản",
            //   icon: <i className="fas fa-chart-bar" />,
            //   available: true,
            //   tooltip: "Phân tích báo cáo tài chính với các mô hình chi tiết.",
            //   textColor: "#000000",
            //   iconColor: "#4caf50",
            // },
          ],
        },
        {
          title: "Báo cáo",
          features: [
            {
              name: "Biểu đồ Nâng cao",
              icon: <i className="fas fa-chart-pie" />,
              available: true,
              tooltip: "Sử dụng gói phần mềm nâng cao được Vnstock phát triển cho nhu cầu biểu diễn dữ liệu trực quan, chuyên nghiệp",
              textColor: "#000000",
              iconColor: "#8C52FF",
            },
            {
              name: "App Huggingface mẫu",
              icon: <i className="fas fa-cloud" />,
              available: true,
              tooltip: "Mẫu App minh hoạ cách triển khai Vnstock lên nền tảng web app hiệu quả.",
              textColor: "#000000",
              iconColor: "#8C52FF",
            },
          ],
        },
        {
          title: "Cập nhật kiến thức",
          features: [
            {
              name: "Video hướng dẫn",
              icon: <i className="fas fa-video" />,
              available: true,
              tooltip: "Video chia sẻ bí quyết sử dụng công cụ & cập nhật công nghệ hỗ trợ phân tích dữ liệu hiệu quả mỗi tháng.",
              textColor: "#000000",
              iconColor: "#4caf50",
            },
            {
              name: "Bản tin định kỳ",
              icon: <i className="fas fa-envelope" />,
              available: true,
              tooltip: "Bản tin cập nhật từ Vnstock 2 tuần/lần về bí quyết sử dụng, giới thiệu công nghệ hữu ích cho phân tích.",
              textColor: "#000000",
              iconColor: "#4caf50",
            },
          ],
        },
        {
          title: "Ưu đãi độc quyền",
          features: [
            {
              name: "Đề xuất tính năng mong muốn",
              icon: <i className="fas fa-lightbulb" />,
              available: true,
              tooltip: "Trao đổi & ưu tiên đề xuất tính năng mới trên bộ phần mêm hiện có",
              textColor: "#000000",
              iconColor: "#4caf50",
            },
            {
              name: "Hỗ trợ ưu tiên",
              icon: <i className="fas fa-headset" />,
              available: true,
              tooltip: "Được ưu tiên xử lý yêu cầu hỗ trợ & phản hồi nhanh.",
              textColor: "#000000",
              iconColor: "#4caf50",
            },
          ],
        },
      ],
    },
    {
      name: "Silver",
      color: "#4CAF50",
      buttonUrl: "https://github.com/sponsors/thinh-vu/sponsorships?sponsor=thinh-vu&amp;tier_id=340704",
      sections: [
        {
          title: "Tính năng cốt lõi",
          features: [
            {
              name: "Dữ liệu nâng cao",
              icon: <i className="fas fa-database" />,
              available: true,
              tooltip: "Truy cập dữ liệu API nâng cao đa dạng cho phân tích & giao dịch.",
              textColor: "#000000",
              iconColor: "#4caf50",
            },
            {
              name: "Đặt lịch tải, xuất dữ liệu",
              icon: <i className="fas fa-link" />,
              available: true,
              tooltip: "Lên lịch tải tự động và xuất ra các định dạng: Amibroker, Excel, GSheets hoặc các loại cơ sở dữ liệu như SQLite, Huggingface Datasets, Duckdb, vv",
              textColor: "#000000",
              iconColor: "#4caf50",
            },
          ],
        },
        {
          title: "Phân tích",
          features: [
            {
              name: "Chỉ báo kỹ thuật",
              icon: <i className="fas fa-chart-line" />,
              available: true,
              tooltip: "Tính toán các chỉ báo kỹ thuật chuyên sâu.",
              textColor: "#000000",
              iconColor: "#4caf50",
            },
            // {
            //   name: "Mô hình cơ bản",
            //   icon: <i className="fas fa-chart-bar" />,
            //   available: true,
            //   tooltip: "Phân tích báo cáo tài chính với các mô hình chi tiết.",
            //   textColor: "#000000",
            //   iconColor: "#4caf50",
            // },
          ],
        },
        {
          title: "Báo cáo",
          features: [
            {
              name: "Biểu đồ Nâng cao",
              icon: <i className="fas fa-chart-pie" />,
              available: false,
              tooltip: "Sử dụng gói phần mềm nâng cao được Vnstock phát triển cho nhu cầu biểu diễn dữ liệu trực quan, chuyên nghiệp",
              textColor: "#000000",
              iconColor: "#4caf50",
            },
            {
              name: "App Huggingface mẫu",
              icon: <i className="fas fa-cloud" />,
              available: false,
              tooltip: "Mẫu App minh hoạ cách triển khai Vnstock lên nền tảng web app hiệu quả.",
              textColor: "#000000",
              iconColor: "#4caf50",
            },
          ],
        },
        {
          title: "Cập nhật kiến thức",
          features: [
            {
              name: "Video hướng dẫn",
              icon: <i className="fas fa-video" />,
              available: true,
              tooltip: "Video chia sẻ bí quyết sử dụng công cụ & cập nhật công nghệ hỗ trợ phân tích dữ liệu hiệu quả mỗi tháng.",
              textColor: "#000000",
              iconColor: "#4caf50",
            },
            {
              name: "Bản tin định kỳ",
              icon: <i className="fas fa-envelope" />,
              available: true,
              tooltip: "Bản tin cập nhật từ Vnstock 2 tuần/lần về bí quyết sử dụng, giới thiệu công nghệ hữu ích cho phân tích.",
              textColor: "#000000",
              iconColor: "#4caf50",
            },
          ],
        },
        {
          title: "Ưu đãi độc quyền",
          features: [
            {
              name: "Đề xuất tính năng mong muốn",
              icon: <i className="fas fa-lightbulb" />,
              available: true,
              tooltip: "Trao đổi & ưu tiên đề xuất tính năng mới trên bộ phần mêm hiện có",
              textColor: "#000000",
              iconColor: "#4caf50",
            },
            {
              name: "Hỗ trợ ưu tiên",
              icon: <i className="fas fa-headset" />,
              available: true,
              tooltip: "Được ưu tiên xử lý yêu cầu hỗ trợ & phản hồi nhanh.",
              textColor: "#000000",
              iconColor: "#4caf50",
            },
          ],
        },
      ],
    },
    {
      name: "Bronze",
      color: "#007BFF",
      buttonUrl: "https://github.com/sponsors/thinh-vu/sponsorships?sponsor=thinh-vu&amp;tier_id=340239",
      sections: [
        {
          title: "Tính năng cốt lõi",
          features: [
            {
              name: "Dữ liệu nâng cao",
              icon: <i className="fas fa-database" />,
              available: true,
              tooltip: "Truy cập dữ liệu API nâng cao đa dạng cho phân tích & giao dịch.",
              textColor: "#000000",
              iconColor: "#4caf50",
            },
            {
              name: "Đặt lịch tải, xuất dữ liệu",
              icon: <i className="fas fa-link" />,
              available: false,
              tooltip: "Lên lịch tải tự động và xuất ra các định dạng: Amibroker, Excel, GSheets hoặc các loại cơ sở dữ liệu như SQLite, Huggingface Datasets, Duckdb, vv",
              textColor: "#000000",
              iconColor: "#4caf50",
            },
          ],
        },
        {
          title: "Phân tích",
          features: [
            {
              name: "Chỉ báo kỹ thuật",
              icon: <i className="fas fa-chart-line" />,
              available: false,
              tooltip: "Tính toán các chỉ báo kỹ thuật chuyên sâu.",
              textColor: "#000000",
              iconColor: "#4caf50",
            },
            // {
            //   name: "Mô hình cơ bản",
            //   icon: <i className="fas fa-chart-bar" />,
            //   available: false,
            //   tooltip: "Phân tích báo cáo tài chính với các mô hình chi tiết.",
            //   textColor: "#000000",
            //   iconColor: "#4caf50",
            // },
          ],
        },
        {
          title: "Báo cáo",
          features: [
            {
              name: "Biểu đồ Nâng cao",
              icon: <i className="fas fa-chart-pie" />,
              available: false,
              tooltip: "Sử dụng gói phần mềm nâng cao được Vnstock phát triển cho nhu cầu biểu diễn dữ liệu trực quan, chuyên nghiệp",
              textColor: "#000000",
              iconColor: "#4caf50",
            },
            {
              name: "App Huggingface mẫu",
              icon: <i className="fas fa-cloud" />,
              available: false,
              tooltip: "Mẫu App minh hoạ cách triển khai Vnstock lên nền tảng web app hiệu quả.",
              textColor: "#000000",
              iconColor: "#4caf50",
            },
          ],
        },
        {
          title: "Cập nhật kiến thức",
          features: [
            {
              name: "Video hướng dẫn",
              icon: <i className="fas fa-video" />,
              available: true,
              tooltip: "Video chia sẻ bí quyết sử dụng công cụ & cập nhật công nghệ hỗ trợ phân tích dữ liệu hiệu quả mỗi tháng.",
              textColor: "#000000",
              iconColor: "#4caf50",
            },
            {
              name: "Bản tin định kỳ",
              icon: <i className="fas fa-envelope" />,
              available: true,
              tooltip: "Bản tin cập nhật từ Vnstock 2 tuần/lần về bí quyết sử dụng, giới thiệu công nghệ hữu ích cho phân tích.",
              textColor: "#000000",
              iconColor: "#4caf50",
            },
          ],
        },
        {
          title: "Ưu đãi độc quyền",
          features: [
            {
              name: "Đề xuất tính năng mong muốn",
              icon: <i className="fas fa-lightbulb" />,
              available: true,
              tooltip: "Trao đổi & ưu tiên đề xuất tính năng mới trên bộ phần mêm hiện có",
              textColor: "#000000",
              iconColor: "#4caf50",
            },
            {
              name: "Hỗ trợ ưu tiên",
              icon: <i className="fas fa-headset" />,
              available: true,
              tooltip: "Được ưu tiên xử lý yêu cầu hỗ trợ & phản hồi nhanh.",
              textColor: "#000000",
              iconColor: "#4caf50",
            },
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
        title="Tại trợ dự án Vnstock"
        subtitle="Tham gia gói thành viên để nhận quyền lợi sản phẩm và hỗ trợ đồng thời ủng hộ dự án phát triển sản phẩm chất lượng"
        backgroundImage="https://images.unsplash.com/photo-1647507490306-3411f230a750?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
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
      title="Tài trợ Vnstock theo cách của bạn"
      highlightWords={["cách", "của", "bạn"]}
      filterLabels={{ all: "Tất cả", monthly: "Tháng", yearly: "Năm" }}
      saveText="" //Tiết kiệm 25%
      plans={plans}
      highlightColor="#4CAF50" // Green color for active states
      buttonText="Lựa chọn" // Default text for all buttons
      backgroundColor="#ffffff" // White background for the component
      textColor="#333" // Text color
      currencySymbol="$" // Display price with this symbol
      currencyPosition="before" // Position of currency symbol
      priceUnits={{ monthly: "/tháng", yearly: "/năm" }}
      linearBackgroundColor="rgba(237, 247, 238, 0.1)" // Custom highlight background color
    />

    <PricingComparison
      title="So sánh quyền lợi các gói tài trợ"
      description="Lựa chọn gói tài trợ phù hợp với nhu cầu và mục tiêu của bạn đồng thời ủng hộ dự án Vnstock phát triển sản phẩm chất lượng."
      criteriaTextColor="#333" // Darker gray for criteria text
      iconColor="#007bff" // Blue for all icons
      options={options}
      highlightPlan="Golden"
    />
    
    {/* FAQ Component - Câu hỏi thường gặp */}
    <FAQSection faqs={faqData} />
    </div>
  );
};

export default App;
