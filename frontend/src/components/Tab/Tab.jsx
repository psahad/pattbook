import React, {useState} from "react";
import "./Tab.css";

const Tab = ({tabs = [], defaultTab, onTabChange}) => {
  const [activeTab, setActiveTab] = useState(defaultTab);
  const handleChange = (selectedTab) => {
    setActiveTab(selectedTab);
    onTabChange(selectedTab)
  };

  return (
    <div className="c-tab">
      {tabs.map((tab) => {
        return (
          <button
            // style={{'--tab-length': tabs.length}}
            className={`c-tab__tab-btn ${
              activeTab === tab.value && "c-tab__tab-btn--active"
            }`}
            onClick={() => handleChange(tab.value)}
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
