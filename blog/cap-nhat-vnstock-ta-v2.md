---
title: Ra mắt Vnstock TA version 2.0
description: Phát hành thư viện phân tích kỹ thuật vnstock_ta phiên bản 2.0 và các tính năng nổi bật.
category: Thông báo
authors: thinh-vu
tags:  
- releases
- technical Analysis
- vnstock_ta
- vnstock_insiders
- sponsored_package
image: https://vnstocks.com/assets/images/vnstock_ta_2.0_release_2024-06-30-099d5069382eca2ba4fe5f4ac21d8fc3.png
---

# Phát hành thư viện chỉ báo kỹ thuật vnstock_ta 2.0 

![](https://vnstocks.com/assets/images/vnstock_ta_2.0_release_2024-06-30-099d5069382eca2ba4fe5f4ac21d8fc3.png)Chào các bạn, 

30-06-2024, Vnstock vui mừng giới thiệu bản phát hành chính thức của thư viện vnstock_ta 2.0 cung cấp các tính năng nâng cao cho phân tích kỹ thuật và biểu diễn đồ thị trading trong Python. 

Thư viện này cung cấp 21 loại chỉ báo kỹ thuật được sử dụng phổ biến với trải nghiệm sử dụng đơn giản, tiện lợi và trực quan. 

<!--truncate-->

```python
# Nạp thư viện và tải dữ liệu
from vnstock_ta import DataSource, Indicator, Plotter
ta = Indicator(data) # Class tính chỉ báo
chart = Plotter(data, theme='dark', watermark=True, display=True) # Class vẽ đồ thị

data = DataSource(symbol='VCI', start='2023-01-02', end='2024-06-10', interval='1D').get_data()
```

```python
Tính toán chỉ báo kỹ thuật
ta.rsi(length=14)
```

Kết quả trả về:

```shell
time
2023-01-03          NaN
2023-01-04          NaN
2023-01-05          NaN
2023-01-06          NaN
2023-01-09          NaN
                ...    
2024-06-04    52.565116
2024-06-05    50.727906
2024-06-06    48.386306
2024-06-07    48.669824
2024-06-10    50.144457
Name: RSI_14, Length: 355, dtype: float64
```

Bạn cũng có thể biểu diễn đồ thị tương tác cho chỉ báo bất kỳ với cú pháp đơn giản:

```python
ta.macd(fast=12, slow=26, signal=9)
```

![](https://vnstocks.com/assets/images/macd_vnstock_ta_chart-256de9c76ead74e614627a776525c1e6.png)

<div style={{display: 'flex', justifyContent: 'center', gap: '20px'}}>
  <a href="https://colab.research.google.com/gist/thinh-vu/b318c2356d51acba096ae4263220d786/vnstock_ta-quick-start-guide.ipynb">
    <button class="buttonPrimary" type="button">Demo vnstock_ta</button>
  </a>
</div>

<br></br>

vnstock_ta đem đến trải nghiệm thư viện đồ thị trong Python với đầy đủ khả năng tương tác hiện đại và đẹp mắt phục vụ cho việc làm dashboard (trang tổng quan) và báo cáo phân tích trên bất kỳ nền tảng thiết bị nào. 

Tính năng chính: 
1. Tính chỉ báo kỹ thuật thuộc 4 nhóm: Xu hướng, Động lượng, Dao động và Khối lượng. 
2. Biểu diễn biểu đồ kỹ thuật kèm chỉ báo 
3. Xuất biểu đồ thành hình ảnh và dữ liệu chỉ báo thành file. 
4. Hoạt động đa nền tảng từ cloud cho đến môi trường cục bộ với bất kỳ dữ liệu OHLCV tiêu chuẩn nào. 

<div className="video-container">
  <iframe
    width="914"
    height="514"
    src="https://www.youtube.com/embed/_ywyHeRd_V0?si=cpLVruAsULMsJRrZ"
    title="YouTube video player"
    frameBorder="0"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
    allowFullScreen
  ></iframe>
</div>

<br></br>

Vnstock tin rằng đây là mảnh ghép còn thiếu trong Python mà bạn tìm kiếm lâu nay dành cho việc thiết kế bot, tạo chương trình phân tích một cách tự động hoá. Chúc các bạn có thể mở ra nhiều khả năng không giời hạn từ gói nâng cấp này! 

---
HƯỚNG DẪN SỬ DỤNG 
1. Nâng cấp gói thành viên thông qua tài trợ dự án 5$/tháng bằng thẻ visa hoặc chuyển khoản trực tiếp 125K qua [Gói thành viên](https://vnstocks.com/insiders-program)
2. Sử dụng bộ cài đặt từ [trang hướng dẫn](https://vnstocks.com/docs/insiders-program/huong-dan-cai-dat-phan-mem) 
---


import ImageModal from '@site/src/components/ImageModal/ImageModal';

KẾT NỐI VỚI VNSTOCK
1. Theo dõi Vnstock qua Facebook: https://www.facebook.com/vnstock.official
2. Dự án LEarn Anything: https://www.facebook.com/learn.anything.az
3. Follow Thịnh: https://www.facebook.com/mr.thinh.ueh/