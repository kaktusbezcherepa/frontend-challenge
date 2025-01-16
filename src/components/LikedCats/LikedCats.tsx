import React from 'react'
import FileldHeart from "../../assets/FilledHeart.svg"
import './LikedCats.css';


interface Cat {
  id: string;
  url: string;
}

interface LikedCatsProps {
  likedCats: Cat[];
  onLikeCat: (cat: Cat) => void
}

const LikedCats: React.FC<LikedCatsProps> = ({ likedCats, onLikeCat }) => {
  return (
    <div className="cats-grid">
      {likedCats.length === 0 ? (
        <div className="no-cats">Нет избранных котиков</div>
      ) : (
        likedCats.map(cat => (
          <div key={cat.id} className="cat-card">
            <img src={cat.url} alt="cat" />
            <button 
              onClick={() => onLikeCat(cat)}
              className="liked"
            >
              <img src={FileldHeart} alt="like" />
            </button>
          </div>
        ))
      )}
    </div>
  )
}

export default LikedCats
