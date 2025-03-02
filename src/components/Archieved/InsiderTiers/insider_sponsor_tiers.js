import React from 'react';
import './insider_sponsor_tiers.css';

const InsiderSponsorTiers = () => (
  <section className="pricing-section">
    <div className="pricing-header">
      <h2>Chọn Gói Thành Viên Vnstock Insider</h2>
    </div>
    <div className="pricing-container">
      <div className="pricing-option">
        <h3 className="pricing-option-title">Gold Sponsor</h3>
        <div className="pricing-option-price">
          <span>50$</span>
          <p>/năm</p>
        </div>
        <p className="price-equivalent">Tương đương 1.275.000 VND</p>
        <ul className="pricing-option-list">
          <li>&#8226; Tất cả quyền lợi gói Indicator & Data trong 1 năm</li>
          <li>&#8226; Tham gia nhóm người dùng thân thiết trên Facebook.</li>
          <li>&#8226; Truy cập sớm tính năng mới chưa công khai.</li>
          <li>&#8226; Tặng chương trình cập nhật dữ liệu hàng ngày tự động.</li>
          <li>&#8226; Hỗ trợ trực tiếp qua Nhóm thành viên và Messenger.</li>
          <li>&#8226; Hiện phù hiệu Sponsor.</li>
        </ul>
        <a href="https://github.com/sponsors/thinh-vu/sponsorships?sponsor=thinh-vu&tier_id=364306" className="pricing-button-gold">Tài trợ ngay</a>
      </div>
      <div className="pricing-option recommended">
        <h3 className="pricing-option-title">Indicators & Data</h3>
        <div className="pricing-option-price">
          <span>5$</span>
          <p>/tháng</p>
        </div>
        <p className="price-equivalent">Tương đương 125.000 VND</p>
        <ul className="pricing-option-list">
          <li>&#8226; Tích hợp tính chỉ báo với dữ liệu từ Vnstock3</li>
          <li>&#8226; <a href="http://vnstocks.com/blog/2024/06/30/ra-mat-vnstock-ta-2">Đồ thị kỹ thuật kèm chỉ báo</a></li>
          <li>&#8226; <strong>Bao gồm quyền lợi của gói Data Explorer.</strong></li>
          <li>&#8226; Hỗ trợ trực tiếp qua Nhóm thành viên và Messenger.</li>
          <li>&#8226; Hiện phù hiệu Sponsor.</li>
          <br/>
          <br/>
          <br/>
          <br/>
        </ul>
        <a href="https://github.com/sponsors/thinh-vu/sponsorships?sponsor=thinh-vu&tier_id=340704" className="pricing-button-recommended">Tài trợ ngay</a>
        {/* <div className="recommended-label">Khuyến nghị</div> */}
      </div>
      <div className="pricing-option">
        <h3 className="pricing-option-title">Data Explorer</h3>
        <div className="pricing-option-price">
          <span>3$</span>
          <p>/tháng</p>
        </div>
        <p className="price-equivalent">Tương đương 75.000 VND</p>
        <ul className="pricing-option-list">
          <li>&#8226; Bộ kết nối dữ liệu thời gian thực tới SSI Fast Connect Data.</li>
          <li>&#8226; Dữ liệu giao dịch & thị trường</li>
          <li>&#8226; Truy xuất dữ liệu nhanh hơn gói miễn phí</li>
          <li>&#8226; Hỗ trợ trực tiếp qua Nhóm thành viên và Messenger.</li>
          <li>&#8226; Hiện phù hiệu Sponsor.</li>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        </ul>
        <a href="https://github.com/sponsors/thinh-vu/sponsorships?sponsor=thinh-vu&tier_id=340239" className="pricing-button">Tài trợ ngay</a>
      </div>
    </div>
  </section>
);

export default InsiderSponsorTiers;