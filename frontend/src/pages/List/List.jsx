import React, {useEffect, useState} from "react";
import {FlatCard, Tab} from "../../components";
import useTranslation from "../../hooks/useTranslation";
import useSwipeDetection from "../../hooks/useSwipeDetection";
import { useLocalStorage } from "../../hooks/useStorage";
import { filterArray } from "../../utils/sortFilter";
import "./List.css";

const List = () => {
  const {t} = useTranslation();
  const [logs] = useLocalStorage("logs", "[]");
  const parsedLogs = logs ? JSON.parse(logs).reverse() : [];

  const {swipeDirection, swipeChangeTracker} = useSwipeDetection();
  const [transactionItems, setTransactItems] = useState(parsedLogs);
  const [activeTab, setActiveTab] = useState({
    tabIndex: 0,
    value: "all"
  });
  const listTabs = [
    {
      label: t("list.tab.all"),
      value: "all",
    },
    {
      label: t("list.tab.lender"),
      value: "lend",
    },
    {
      label: t("list.tab.borrower"),
      value: "borrow",
    },
  ];
  
  const onTabChange = (activeTab, activeTabIndex) => {
    setActiveTab({
      tabIndex: activeTabIndex,
      value: activeTab
    })
    if (activeTab === "all") {
      setTransactItems(parsedLogs)
    } else {
      setTransactItems(filterArray(parsedLogs, "type", activeTab))
    }
  };

  const onTabSwipe = (tabList, direction, activeTab, cb) => {
    if ( (((activeTab.tabIndex + 1) === tabList.length) && (direction === "left")) || ((activeTab.tabIndex === 0) &&  (direction === "right")) ) return

    const nextIndex = activeTab.tabIndex + (direction === "right" ? -1 : 1);
    const nextTab = tabList[nextIndex].value

    onTabChange(nextTab, nextIndex)
  }

  useEffect(() => {
    if (!(swipeDirection === 'right' || swipeDirection === 'left')) return
    onTabSwipe(listTabs, swipeDirection, activeTab)
    // eslint-disable-next-line
  }, [swipeDirection, swipeChangeTracker]);

  return (
    <div className="page p-list">
      <Tab tabs={listTabs} activeTab={activeTab} onTabChange={onTabChange} />
      <section className="p-list__flatcard-container page-section">
        {transactionItems.map((item) => {
          return <FlatCard item={item} key={item.id} />;
        })}
      </section>
    </div>
  );
};

export default List;
