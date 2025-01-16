import { useState } from 'react';
import Header from './components/Header/Header'
import AllCats from './components/AllCats/AllCats'
import LikedCats from './components/LikedCats/LikedCats'
import './App.css'


type Tab = 'all' | 'liked';



function App() {
  const [activeTab, setActiveTab] = useState<Tab>('all');

  return (
    <>
      <Header activeTab={activeTab} onTabChange={setActiveTab}/>
      {activeTab === 'all' ? <AllCats /> : <LikedCats />}
    </>
  )
}

export default App
