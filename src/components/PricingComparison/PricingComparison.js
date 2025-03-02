import React, { useRef, useEffect, useState } from "react";
import PropTypes from "prop-types";
import styles from "./PricingComparison.module.css";

const PricingComparison = ({
  title,
  description,
  options = [],
  criteriaTextColor = "#1a1a1a",
  iconColor = "#ccc",
  highlightPlan = "", // Specify the highlighted plan
}) => {
  if (!Array.isArray(options) || options.length === 0) {
    return <p>No options available for comparison. Please check your input.</p>;
  }

  const tableRef = useRef(null);
  const [isSticky, setIsSticky] = useState(false);

  // Consolidate all groups and features dynamically
  const allSections = options.reduce((acc, option) => {
    option.sections.forEach((section) => {
      if (!acc[section.title]) {
        acc[section.title] = {};
      }
      section.features.forEach((feature) => {
        if (!acc[section.title][feature.name]) {
          acc[section.title][feature.name] = feature;
        }
      });
    });
    return acc;
  }, {});

  useEffect(() => {
    const handleScroll = () => {
      const tableTop = tableRef.current.offsetTop;
      const tableHeight = tableRef.current.offsetHeight;
      const headerHeight = document.querySelector("header")?.offsetHeight || 0;
      const scrollPosition = window.scrollY + headerHeight;

      if (
        scrollPosition >= tableTop &&
        scrollPosition <= tableTop + tableHeight - headerHeight
      ) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const renderIcon = (feature) => (
    <span
      className={styles.icon}
      style={{ color: feature.iconColor || iconColor }}
    >
      {feature?.icon || <i className="fas fa-info-circle" />}
    </span>
  );

  const renderCheckmark = (available) => (
    <span className={available ? styles.check : styles.cross}>
      {available ? <i className="fas fa-check-circle" /> : <i className="fas fa-times-circle" />}
    </span>
  );

  const renderFeatureName = (feature) => (
    <span
      className={styles.featureName}
      style={{ color: feature.textColor || criteriaTextColor }}
    >
      {feature.name}
      {feature.tooltip && (
        <span className={styles.tooltipContainer}>
          <i className={`fas fa-info-circle ${styles.infoIcon}`} />
          <span className={styles.tooltip}>{feature.tooltip}</span>
        </span>
      )}
    </span>
  );

  return (
    <div className={styles.pricingComparison}>
      {/* Heading Section */}
      <div className={styles.header}>
        <h2 className={styles.title}>{title || "Compare Plans"}</h2>
        <p className={styles.description}>
          {description || "Compare all available features across different plans."}
        </p>
      </div>

      {/* Desktop Table */}
      <div className={styles.tableWrapper} ref={tableRef}>
        {/* Sticky Header */}
        <div
          className={`${styles.row} ${styles.headerRow} ${
            isSticky ? styles.sticky : ""
          }`}
        >
          <div className={styles.featureColumn}></div> 
          {options.map((option, index) => (
            <div
              key={index}
              className={styles.planColumn}
              style={{
                "--highlight-color": option.name === highlightPlan ? option.color : "#333",
              }}
            >
              <h3
                className={`${styles.planTitle} ${
                  option.name === highlightPlan ? styles.highlightedTitle : ""
                }`}
                style={{
                  color: option.color || "#007bff",
                }}
              >
                {option.name}
              </h3>
              <a
                href={option.buttonUrl} // Dynamically use the buttonUrl
                target="_blank"
                rel="noopener noreferrer"
                className={`${styles.ctaButton} ${
                  option.name === highlightPlan
                    ? styles.highlightedButton
                    : styles.outlineButton
                }`}
                style={
                  option.name === highlightPlan
                    ? {
                        backgroundColor: option.color || "#007bff",
                        color: "#fff",
                      }
                    : {
                        borderColor: option.color || "#007bff",
                        color: option.color || "#007bff",
                      }
                }
              >
                Lựa chọn
              </a>
            </div>
          ))}
        </div>

        {/* Table Rows */}
        {Object.entries(
          options
            .flatMap((option) => option.sections)
            .reduce((allGroups, section) => {
              if (!allGroups[section.title]) {
                allGroups[section.title] = section.features;
              } else {
                section.features.forEach((feature) => {
                  if (
                    !allGroups[section.title].find((f) => f.name === feature.name)
                  ) {
                    allGroups[section.title].push(feature);
                  }
                });
              }
              return allGroups;
            }, {})
        ).map(([groupName, features], sectionIndex) => (
          <React.Fragment key={sectionIndex}>
            <div className={styles.rowGroupHeader}>
              <div className={styles.groupName}>{groupName}</div>
            </div>
            {features.map((feature, featureIndex) => (
              <div key={featureIndex} className={styles.row}>
                <div className={styles.featureColumn}>
                  {renderIcon(feature)}
                  {renderFeatureName(feature)}
                </div>
                {options.map((option, optionIndex) => {
                  const group = option.sections.find(
                    (sec) => sec.title === groupName
                  );
                  const availableFeature = group?.features.find(
                    (f) => f.name === feature.name
                  );

                  return (
                    <div key={optionIndex} className={styles.planColumn}>
                      {renderCheckmark(availableFeature?.available)}
                    </div>
                  );
                })}
              </div>
            ))}
          </React.Fragment>
        ))}
      </div>

      {/* Mobile View */}
      <div className={styles.planScrollContainer}>
        {options.map((option, optionIndex) => (
          <div key={optionIndex} className={styles.mobilePlan}>
            <h3 className={styles.mobilePlanTitle}>{option.name}</h3>
            {option.sections.map((section, sectionIndex) => (
              <div key={sectionIndex}>
                <div className={styles.mobileGroupHeader}>{section.title}</div>
                {section.features.map((feature, featureIndex) => (
                  <div key={featureIndex} className={styles.mobileFeatureRow}>
                    <div className={styles.featureColumn}>
                      {renderIcon(feature)}
                      {renderFeatureName(feature)}
                    </div>
                    <div className={styles.mobilePlanColumn}>
                      {renderCheckmark(feature.available)}
                    </div>
                  </div>
                ))}
              </div>
            ))}
            <a
              href={option.buttonUrl} // Dynamically use the buttonUrl
              target="_blank"
              rel="noopener noreferrer"
              className={styles.ctaButton}
              style={{
                backgroundColor: option.color || "#007bff",
                color: "#fff",
              }}
            >
              Lựa chọn
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

PricingComparison.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  options: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      color: PropTypes.string, // Plan's color
      buttonUrl: PropTypes.string.isRequired, // URL for the button
      sections: PropTypes.arrayOf(
        PropTypes.shape({
          title: PropTypes.string.isRequired,
          features: PropTypes.arrayOf(
            PropTypes.shape({
              name: PropTypes.string.isRequired,
              icon: PropTypes.element,
              available: PropTypes.bool.isRequired,
              tooltip: PropTypes.string,
              textColor: PropTypes.string,
              iconColor: PropTypes.string,
            })
          ).isRequired,
        })
      ).isRequired,
    })
  ).isRequired,
  criteriaTextColor: PropTypes.string,
  iconColor: PropTypes.string,
  highlightPlan: PropTypes.string, // Specify the highlighted plan
};

export default PricingComparison;
