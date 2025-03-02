// Display social sharing plugin at the end of the blog post

import React from 'react';
import OriginalBlogPostItem from '@theme-original/BlogPostItem';
import SocialSharing from '@site/src/components/SocialSharing/SocialSharing';

export default function BlogPostItem(props) {
  const frontMatter = props?.frontMatter || {};
  const metadata = props?.metadata || {};

  const postTitle = frontMatter.title || 'Untitled Post';
  const permalink = metadata.permalink || '#';

  const pageUrl = `${window?.location?.origin || ''}${permalink}`;

  return (
    <>
      {/* Render the original blog post */}
      <OriginalBlogPostItem {...props} />

      {/* Add Social Sharing section */}
      <SocialSharing
        title="Chia sẻ bài viết với cộng đồng của bạn!"
        iconColor="var(--ifm-color-emphasis-800)"
        iconSize="1.8rem"
        pageUrl={pageUrl}
        postTitle={postTitle}
      />
    </>
  );
}
