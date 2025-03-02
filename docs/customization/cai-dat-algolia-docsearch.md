# Cài đặt Algolia Docsearch

## Xin cấp quyền truy cập

- Điền mẫu [đơn đăng ký](https://docsearch.algolia.com/apply/) sử dụng Algolia Docsearch, sẽ được duyệt khá nhanh khi thỏa mãn điều kiện
- Sau khi nhận được mail phản hồi từ Algolia chấp nhận đơn đăng ký đồng thời sẽ có thông tin của app được tạo để sử dụng

![email từ algolia](/images/algolia-docsearch-application-response.png)

Bạn sẽ copy các thông tin `appId`, `apiKey`, `indexName` để sử dụng trong bước sau.

## Cài package

```shell
npm install @docsearch/react@3
```

## Thiết lập docusaurus.config.js

```jsx title='docusaurus.config.js'
// Các câu lệnh import mặc định
import {themes as prismThemes} from 'prism-react-renderer';
import remarkMath from 'remark-math';
import rehypeKatex from 'rehype-katex';

//highlight-start
// Chèn đoạn này trên đầu trang là được để nhận diện môi trường chạy website
const isDev = process.env.NODE_ENV === 'development';

const isDeployPreview =
  !!process.env.NETLIFY && process.env.CONTEXT === 'deploy-preview';
//highlight-end

// Các đoạn code khác

```

Tiếp theo, paste đoạn mã dưới đây vào mục `themeConfig`

```jsx title='docusaurus.config.js'
  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Replace with your project's social card
      image: 'images/learn-anything-social-card-journey.jpg',

    // higlight-start        
      algolia: {
        appId: 'IR9N3CNQ80',
        apiKey: '5315d63de9be6f42eca80ecb1cf0f25e',
        indexName: 'learn-anything',
        // Optional: see doc section below
        contextualSearch: true,
        // Optional: Replace parts of the item URLs from Algolia. Useful when using the same search index for multiple deployments using a different baseUrl. You can use regexp or string in the `from` param. For example: localhost:3000 vs myCompany.com/docs
        replaceSearchResultPathname:
          isDev || isDeployPreview
            ? {
                from: /^\/docs\/next/g.source,
                to: '/docs',
              }
            : undefined,
        // Optional: Algolia search parameters
        searchParameters: {},
      },

    // highlight-end
      // Các đoạn mã khác
```

Sau khi thực hiện xong bước thiết lập này, có thể chạy thử website với `npm start` để nhìn thấy kết quả

![](/images/algolia-docsearch-preview.png)

## Nguồn tham khảo

- Hướng dẫn từ Docusaurus: [tại đây](https://docusaurus.io/docs/search#using-algolia-docsearch)
- Xem file thực tế `docusaurus.config.js` của Docusaurus:[tại đây](https://github.com/facebook/docusaurus/blob/main/website/docusaurus.config.ts)
- Hướng dẫn từ Algolia (không giống hoàn toàn cho Docusaurus): [tại đây](https://docsearch.algolia.com/docs/docsearch-v3)