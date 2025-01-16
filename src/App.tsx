import { useEffect, useState } from 'react';
import Header from './components/Header/Header'
import AllCats from './components/AllCats/AllCats'
import LikedCats from './components/LikedCats/LikedCats'
import './App.css'


type Tab = 'all' | 'liked';


interface Cat {
  id: string;
  url: string;
}


function App() {
  const [activeTab, setActiveTab] = useState<Tab>('all');
  const [cats, setCats] = useState<Cat[]>([]);
  const [likedCats, setLikedCats] = useState<Cat[]>(() => {
    const saved = localStorage.getItem('likedCats');
    return saved ? JSON.parse(saved) : [];
  });

  useEffect(() => {
    const fetchCats = async () => {
      try {
        const response = await fetch('https://api.thecatapi.com/v1/images/search?limit=20')
        const data = await response.json()
        setCats(data)
      } catch(error) {
        console.error('Котики не загрузились', error)
      }
    }
    fetchCats()
  }, [])


  const handleLikeCat = (cat: Cat) => {
    if (likedCats.find(likedCat => likedCat.id === cat.id)) {
      setLikedCats(prev => prev.filter(likedCat => likedCat.id !== cat.id));
    } else {
      setLikedCats(prev => [...prev, cat]);
    }
  };

  useEffect(() => {
    localStorage.setItem('likedCats', JSON.stringify(likedCats));
  }, [likedCats]);

  return (
    <>
      <Header activeTab={activeTab} onTabChange={setActiveTab}/>
      {activeTab === 'all' ? <AllCats 
      cats={cats}
      likedCats={likedCats}
      onLikeCat={handleLikeCat}
      /> : <LikedCats likedCats={likedCats} onLikeCat={handleLikeCat}
       />}
    </>
  )
}

export default App
