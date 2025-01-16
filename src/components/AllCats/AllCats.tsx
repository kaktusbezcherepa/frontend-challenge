import React from 'react'
import FileldHeart from "../../assets/FilledHeart.svg"
import NotFileldHeart from "../../assets/notFilledHeart.svg"
import "./AllCats.css"


interface Cat {
  id: string;
  url: string;
}

interface AllCatsProps {
  cats: Cat[];
  likedCats: Cat[];
  onLikeCat: (cat: Cat) => void
}

const AllCats : React.FC<AllCatsProps> = ({ cats, likedCats, onLikeCat}) => {
  return (
    <div className='cats__grid'>
        {cats.map((cat) => (
          <div key={cat.id} className="cat__card">
            <img src={cat.url} alt="cat" />
            <button
            onClick={() => onLikeCat(cat)}
            className={likedCats.find(likedCat => likedCat.id === cat.id) ? 'liked' : ''}
            >
              {likedCats.find(likedCat => likedCat.id === cat.id) ? <img src={FileldHeart} alt="" /> : <img src={NotFileldHeart} alt="" />}
            </button>
          </div>
        ))}
    </div>
  )
}

export default AllCats
