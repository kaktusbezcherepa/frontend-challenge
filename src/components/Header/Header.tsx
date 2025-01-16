import React from 'react'
import "./Header.css"
type Tab = "all" | "liked"

interface HeaderProps {
  activeTab: Tab;
  onTabChange: (tab: Tab) => void;
}

const Header: React.FC <HeaderProps> = ({activeTab, onTabChange}) => {
  return (
    <header className='header'>
      <div className="tabs">
        <div className={`tab ${activeTab === 'all' ? 'active' : ''}`}
        onClick={() => onTabChange('all')}
        >
          Все котики
        </div>
        <div className={`tab ${activeTab === 'liked' ? 'active' : ''}`}
        onClick={() => onTabChange('liked')}
        >
          Любимые котики
        </div>

      </div>
    </header>
  )
}

export default Header
