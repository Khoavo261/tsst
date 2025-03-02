// Basic swizzling which make the TOC appear on the left side of the blog post content, not a perfect styles and desired layout yet.

import React from 'react';
import OriginalBlogPostPage from '@theme-original/BlogPostPage';
import TOC from '@theme/TOC'; // Import the swizzled TOC component
import styles from './styles.module.css';

export default function BlogPostPageWrapper(props) {
  const { content } = props;

  return (
    <div className={styles.blogPageLayout}>
      {/* TOC on the left */}
      {content.toc && (
        <aside className={styles.tocContainer}>
          <TOC toc={content.toc} />
        </aside>
      )}
      
      {/* Blog post content */}
      <main className={styles.contentContainer}>
        <OriginalBlogPostPage {...props} />
      </main>
    </div>
  );
}
