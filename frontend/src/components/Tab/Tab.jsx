import React from "react";
import "./Tab.css";

const Tab = ({tabs = [], activeTab, onTabChange}) => {

  return (
    <div className="c-tab">
      {tabs.map((tab, index) => {
        return (
          <button
            // style={{'--tab-length': tabs.length}}
            className={`c-tab__tab-btn ${
              activeTab.value === tab.value && "c-tab__tab-btn--active"
            }`}
            onClick={() => onTabChange(tab.value, index)}
            key={tab.value}
          >
            {tab.label}
          </button>
        );
      })}
    </div>
  );
};

export default Tab;
