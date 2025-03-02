import React, { useState } from 'react';
import Layout from '@theme/Layout';
import BlogCard from '../BlogCard';
import BlogHeader from '../BlogHeader';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown, faChevronUp } from '@fortawesome/free-solid-svg-icons';
import styles from './styles.module.css';

function BlogListPage({ items }) {
  const [activeCategory, setActiveCategory] = useState('Tất cả');
  const [activeTag, setActiveTag] = useState('Tất cả');
  const [activeAuthor, setActiveAuthor] = useState('Tất cả');
  const [isAdvancedFilter, setIsAdvancedFilter] = useState(false);

  // Normalize categories, tags, and authors
  const standardizedCategories = items.map(({ content: { frontMatter } }) =>
    (frontMatter.category || 'Chưa phân loại').toLowerCase()
  );
  const standardizedTags = items.flatMap(({ content: { frontMatter } }) =>
    (frontMatter.tags || []).map((tag) => tag.toLowerCase())
  );
  const standardizedAuthors = items.map(({ content: { frontMatter } }) =>
    (frontMatter.author || 'Không rõ').toLowerCase()
  );

  // Unique categories, tags, and authors
  const categories = [
    'Tất cả',
    ...new Set(
      standardizedCategories.map((category) =>
        category.charAt(0).toUpperCase() + category.slice(1)
      )
    ),
  ];
  const tags = [
    'Tất cả',
    ...new Set(
      standardizedTags.map((tag) =>
        tag.charAt(0).toUpperCase() + tag.slice(1)
      )
    ),
  ];
  const authors = [
    'Tất cả',
    ...new Set(
      standardizedAuthors.map((author) =>
        author.charAt(0).toUpperCase() + author.slice(1)
      )
    ),
  ];

  // Filtered items based on active filters
  const filteredItems = items.filter(({ content: { frontMatter } }) => {
    const itemCategory = (frontMatter.category || 'Chưa phân loại').toLowerCase();
    const itemTags = (frontMatter.tags || []).map((tag) => tag.toLowerCase());
    const itemAuthor = (frontMatter.author || 'Không rõ').toLowerCase();

    const matchesCategory =
      activeCategory === 'Tất cả' || itemCategory === activeCategory.toLowerCase();
    const matchesTag =
      activeTag === 'Tất cả' || itemTags.includes(activeTag.toLowerCase());
    const matchesAuthor =
      activeAuthor === 'Tất cả' || itemAuthor === activeAuthor.toLowerCase();

    return matchesCategory && (!isAdvancedFilter || (matchesTag && matchesAuthor));
  });

  return (
    <Layout title="Blog" description="Các bài viết mới nhất">
      {/* Blog Header */}
      <BlogHeader />

      {/* Simple Filter */}
      <div className={styles.filterBar}>
        <div className={styles.filterGroup}>
          <h4 className={styles.filterTitle}>Danh mục</h4>
          <div className={styles.filterOptions}>
            {categories.map((category) => (
              <button
                key={category}
                className={`${styles.filterButton} ${
                  activeCategory === category ? styles.activeButton : ''
                }`}
                onClick={() => setActiveCategory(category)}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        {/* Toggle Advanced Filter with FontAwesome */}
        <button
        className={`${styles.toggleFilterIcon} ${
          isAdvancedFilter ? styles.iconExpanded : ''
        }`}
        onClick={() => setIsAdvancedFilter(!isAdvancedFilter)}
        aria-label={isAdvancedFilter ? 'Ẩn bộ lọc nâng cao' : 'Hiện bộ lọc nâng cao'}
      >
        <FontAwesomeIcon icon={faChevronDown} />
      </button>
      </div>

      {/* Advanced Filters */}
      {isAdvancedFilter && (
        <div className={styles.advancedFilterBar}>
          {/* Tag Filter */}
          <div className={styles.filterGroup}>
            <h4 className={styles.filterTitle}>Thẻ</h4>
            <div className={styles.filterOptions}>
              {tags.map((tag) => (
                <button
                  key={tag}
                  className={`${styles.filterButton} ${
                    activeTag === tag ? styles.activeButton : ''
                  }`}
                  onClick={() => setActiveTag(tag)}
                >
                  {tag}
                </button>
              ))}
            </div>
          </div>

          {/* Author Filter */}
          <div className={styles.filterGroup}>
            <h4 className={styles.filterTitle}>Tác giả</h4>
            <div className={styles.filterOptions}>
              {authors.map((author) => (
                <button
                  key={author}
                  className={`${styles.filterButton} ${
                    activeAuthor === author ? styles.activeButton : ''
                  }`}
                  onClick={() => setActiveAuthor(author)}
                >
                  {author}
                </button>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* Blog Cards Grid */}
      <div className={styles.blogGrid}>
        {filteredItems.map(({ content: BlogPostContent }) => {
          const { frontMatter = {}, metadata = {} } = BlogPostContent;
          return (
          <BlogCard
            key={metadata.permalink}
            image={frontMatter.image || '/default-image.jpg'}
            title={frontMatter.title || 'No Title'}
            description={frontMatter.description || 'No description available.'}
            date={new Date(metadata.date || Date.now()).toLocaleDateString('vi-VN')}
            category={frontMatter.category || 'Uncategorized'}
            readingTime={metadata.readingTime} // Pass readingTime here
            link={metadata.permalink}
          />
          );
        })}
      </div>
    </Layout>
  );
}

export default BlogListPage;
