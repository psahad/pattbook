import {useEffect, useState} from "react";
import {Tab} from "../../components";
import useTranslation from "../../hooks/useTranslation";
import useSwipeDetection from "../../hooks/useSwipeDetection";
import FormLendAdd from "../../containers/FormLendAdd";
import FormBorrowAdd from "../../containers/FormBorrowAdd";
import "./Add.css";

const Add = () => {
  const {t} = useTranslation();
  const {swipeDirection, swipeChangeTracker} = useSwipeDetection();
  const [activeTab, setActiveTab] = useState({
    tabIndex: 0,
    value: "lending",
  });
  const listTabs = [
    {
      label: t("add.tab.lending.label"),
      value: "lending",
    },
    {
      label: t("add.tab.borrowing.label"),
      value: "borrowing",
    },
  ];

  const onTabSwipe = (tabList, direction, activeTab, cb) => {
    if (
      (activeTab.tabIndex + 1 === tabList.length && direction === "left") ||
      (activeTab.tabIndex === 0 && direction === "right")
    )
      return;

    const nextIndex = activeTab.tabIndex + (direction === "right" ? -1 : 1);
    const nextTab = tabList[nextIndex].value;

    onTabChange(nextTab, nextIndex);
  };

  useEffect(() => {
    if (!(swipeDirection === "right" || swipeDirection === "left")) return;
    onTabSwipe(listTabs, swipeDirection, activeTab);
    // eslint-disable-next-line
  }, [swipeDirection, swipeChangeTracker]);
  const onTabChange = (activeTab, activeTabIndex) => {
    setActiveTab({
      tabIndex: activeTabIndex,
      value: activeTab,
    });
  };

  return (
    <div className="page p-add">
      <Tab tabs={listTabs} activeTab={activeTab} onTabChange={onTabChange} />
      <section className="page-section p-add__section">
        <div className="p-add__header">
          {/* <span className="p-add__header__icon-container">
            {activeTab.value === "lending" ? 
              <svg viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg" fill="none" stroke="#000000" transform="rotate(180)matrix(-1, 0, 0, 1, 0, 0)"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"><polyline points="8 36 16 36 16 52 8 52"></polyline><path d="M16 38h8a4 4 0 0 1 4 4h9a3 3 0 0 1 3 3 3 3 0 0 1-3 3H26"></path><path d="m40 44.8 6.63-4a5.82 5.82 0 0 1 3-.82 5.78 5.78 0 0 1 4.09 1.69L56 44 38.07 54.76A8.75 8.75 0 0 1 33.58 56a8.68 8.68 0 0 1-3.06-.56L16 50"></path><circle cx="38" cy="22" r="14"></circle><path d="M36.33 22a3.34 3.34 0 0 1 0-6.67"></path><path d="M39.67 22a3.34 3.34 0 0 1 0 6.67"></path><line x1="38" y1="12" x2="38" y2="15.33"></line><line x1="38" y1="28.67" x2="38" y2="32"></line><line x1="36.33" y1="22" x2="39.67" y2="22"></line><path d="M43 17s-1.67-1.67-3.33-1.67h-3.34"></path><path d="M33 27s1.67 1.67 3.33 1.67h3.34"></path></g></svg>
              : <svg viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg" fill="none" stroke="#000000" transform="rotate(0)matrix(1, 0, 0, 1, 0, 0)"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"><polyline points="8 36 16 36 16 52 8 52"></polyline><path d="M16 38h8a4 4 0 0 1 4 4h9a3 3 0 0 1 3 3 3 3 0 0 1-3 3H26"></path><path d="m40 44.8 6.63-4a5.82 5.82 0 0 1 3-.82 5.78 5.78 0 0 1 4.09 1.69L56 44 38.07 54.76A8.75 8.75 0 0 1 33.58 56a8.68 8.68 0 0 1-3.06-.56L16 50"></path><circle cx="38" cy="22" r="14"></circle><path d="M36.33 22a3.34 3.34 0 0 1 0-6.67"></path><path d="M39.67 22a3.34 3.34 0 0 1 0 6.67"></path><line x1="38" y1="12" x2="38" y2="15.33"></line><line x1="38" y1="28.67" x2="38" y2="32"></line><line x1="36.33" y1="22" x2="39.67" y2="22"></line><path d="M43 17s-1.67-1.67-3.33-1.67h-3.34"></path><path d="M33 27s1.67 1.67 3.33 1.67h3.34"></path></g></svg>               
            }
          </span> */}
          <h3 className="title-page title-page--lg">
            {activeTab.value === "lending"
              ? t("add.tab.lending.title")
              : t("add.tab.borrowing.title")}
          </h3>
        </div>
        {activeTab.value === "lending"
          ? <FormLendAdd />
          : <FormBorrowAdd />}
        
      </section>
    </div>
  );
};

export default Add;
