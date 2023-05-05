import React, { useState } from "react";
import {FlatCard, Tab} from "../../components";
import useTranslation from "../../hooks/useTranslation";
import {all, lend, borrow} from '../../dummyData/list';
import "./List.css";

const List = () => {
  const {t} = useTranslation();
  const [transactionItems, setTransactItems] = useState(all)
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
  const dummyTransactItems = {all, lend, borrow}

  const onTabChange= (activeTab) => {
    console.log('activeTab', activeTab);
    setTransactItems(dummyTransactItems[activeTab])
  }
  return (
    <div className="page p-list">
      <Tab tabs={listTabs} defaultTab="all" onTabChange={onTabChange} />
      <section className="p-list__flatcard-container page-section">
        {transactionItems.map(item => {
          return <FlatCard item={item} key={item.id}/>
        })}
      </section>
    </div>
  );
};

export default List;
