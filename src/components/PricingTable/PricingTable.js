import React, { useState } from "react";
import styles from "./PricingTable.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheckCircle } from "@fortawesome/free-solid-svg-icons";

const PricingTable = ({
  title = "Tailored pricing plans designed for you",
  highlightWords = ["Tailored", "designed", "you"],
  filterLabels = { all: "All", monthly: "Monthly", yearly: "Yearly" },
  saveText = "Save 25%",
  plans,
  highlightColor = "#f97316",
  buttonText = "Get Started",
  backgroundColor = "#f9f9f9",
  textColor = "#333",
  currencySymbol = "$",
  currencyPosition = "before",
  priceUnits = { monthly: "/month", yearly: "/year" }, // Dynamic unit text
  linearBackgroundColor,
}) => {
  const [activeFilter, setActiveFilter] = useState("all");

  // Filter plans based on the active filter
  const filteredPlans =
    activeFilter === "all"
      ? plans
      : plans.filter((plan) =>
          activeFilter === "monthly" ? plan.monthlyPrice : plan.yearlyPrice
        );

  // Helper to render the title with highlighted words
  const renderHighlightedTitle = () => {
    return title.split(" ").map((word, idx) => {
      if (highlightWords.includes(word)) {
        return (
          <span key={idx} style={{ color: highlightColor }}>
            {" " + word}
          </span>
        );
      }
      return " " + word;
    });
  };

  // Helper to render price with currency and unit text
  const renderPrice = (plan) => {
    let price, unit;

    if (activeFilter === "all") {
      if (plan.monthlyPrice && !plan.yearlyPrice) {
        price = plan.monthlyPrice;
        unit = priceUnits.monthly;
      } else if (!plan.monthlyPrice && plan.yearlyPrice) {
        price = plan.yearlyPrice;
        unit = priceUnits.yearly;
      } else {
        price = plan.monthlyPrice;
        unit = priceUnits.monthly;
      }
    } else {
      price = activeFilter === "monthly" ? plan.monthlyPrice : plan.yearlyPrice;
      unit = activeFilter === "monthly" ? priceUnits.monthly : priceUnits.yearly;
    }

    if (!price) return "N/A";

    return (
      <>
        {currencyPosition === "before"
          ? `${currencySymbol}${price}`
          : `${price}${currencySymbol}`}
        <span className={styles.priceUnit}>{unit}</span>
      </>
    );
  };

  return (
    <div
      className={styles.pricingTableContainer}
      style={{ backgroundColor: backgroundColor }}
    >
      {/* Title */}
      <h2 className={styles.pricingTitle} style={{ color: textColor }}>
        {renderHighlightedTitle()}
      </h2>

      {/* Filter Toggle */}
      <div className={styles.filterToggleWrapper}>
        {Object.entries(filterLabels).map(([key, label]) => (
          <div
            key={key}
            className={`${styles.toggleOption} ${
              activeFilter === key ? styles.activeToggle : ""
            }`}
            onClick={() => setActiveFilter(key)}
            style={{
              "--highlight-color": highlightColor,
            }}
          >
            {label}
          </div>
        ))}
      </div>

      {/* Save Badge */}
      <span className={styles.saveBadge} style={{ color: highlightColor }}>
        {saveText}
      </span>

      {/* Plans Grid */}
      <div
        className={styles.plansGrid}
        style={{
          gap: filteredPlans.length <= 2 ? "0.75rem" : "1.5rem",
        }}
      >
        {filteredPlans.map((plan, index) => {
          const isHighlighted = plan.highlighted;

          return (
            <div
              className={`${styles.planCard} ${
                isHighlighted ? styles.highlightedOutline : ""
              }`}
              key={index}
              style={{
                border: isHighlighted
                  ? `2px solid ${plan.buttonColor}`
                  : "1px solid #e5e7eb",
                minWidth: "360px",
              }}
            >
              {/* Plan Header */}
              <div className={styles.planHeader}>
                <FontAwesomeIcon
                  icon={plan.icon}
                  className={styles.planIcon}
                  style={{ color: plan.buttonColor }}
                />
                <h3 className={styles.planName} style={{ color: textColor }}>
                  {plan.name}
                </h3>
                <p className={styles.planPrice} style={{ color: textColor }}>
                  {renderPrice(plan)}
                </p>
                <p className={styles.planDescription}>
                  {plan.description || ""}
                </p>
              </div>

              {/* Plan Features */}
              <ul className={styles.featuresList}>
                {plan.features.map((feature, idx) => (
                  <li key={idx}>
                    <FontAwesomeIcon
                      icon={faCheckCircle}
                      className={styles.checkIcon}
                      style={{
                        color: plan.buttonColor || "#4CAF50",
                      }}
                    />
                    {feature}
                  </li>
                ))}
              </ul>

              {/* Get Started Button */}
              <div className={styles.buttonWrapper}>
                <a
                  href={plan.buttonUrl || "#"}
                  className={`${styles.getStartedBtn} ${
                    !isHighlighted ? styles.outlineButton : styles.filledButton
                  }`}
                  style={{
                    backgroundColor: isHighlighted
                      ? plan.buttonColor
                      : "transparent",
                    color: isHighlighted ? "#ffffff" : plan.buttonColor,
                    border: `2px solid ${plan.buttonColor}`,
                    textDecoration: "none",
                  }}
                >
                  {plan.buttonText || buttonText}
                </a>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default PricingTable;
