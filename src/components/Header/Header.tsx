import React, { useState } from "react";
import "./Header.css";

interface HeaderProps {
  defaultTab: "allCats" | "likedCats";
}

const Header: React.FC<HeaderProps> = ({ defaultTab }) => {
  const [activeTab, setActiveTab] = useState(defaultTab);

  const handleTabChange = (tab: "allCats" | "likedCats") => {
    setActiveTab(tab);
  };

  return (
    <header className="header">
      <nav>
        <ul className="tabs">
          <li
            className={`tab ${activeTab === "allCats" ? "active" : ""}`}
            onClick={() => handleTabChange("allCats")}
          >
            Все котики
          </li>
          <li
            className={`tab ${activeTab === "likedCats" ? "active" : ""}`}
            onClick={() => handleTabChange("likedCats")}
          >
            Любимые котики
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
