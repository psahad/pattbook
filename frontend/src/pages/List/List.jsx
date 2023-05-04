import React from "react";
import {Tab} from "../../components";
import useTranslation from "../../hooks/useTranslation";
import "./List.css";

const List = () => {
  const {t} = useTranslation();
  const listTabs = [
    {
      label: t("list.tab.all"),
      value: "all",
    },
    {
      label: t("list.tab.lender"),
      value: "lender",
    },
    {
      label: t("list.tab.borrower"),
      value: "borrower",
    },
  ];

  const onTabChange= (activeTab) => {
    console.log('activeTab', activeTab);
  }
  return (
    <div className="page p-list">
      <Tab tabs={listTabs} defaultTab="all" onTabChange={onTabChange} />
      List
    </div>
  );
};

export default List;
