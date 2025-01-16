import React, { useEffect, useState} from 'react'

interface Cat {
    id: string;
    url: string;
}

interface AllCatsProps {
    likedCats: string[];
    onFavoriteToggle: (catId: string) => void;
}


const AllCats: React.FC<AllCatsProps> = ({ likedCats, onFavoriteToggle}) => {

    const [allCats, setAllCats] = useState<Cat[]>([])
    const [loading, setLoading] = useState<boolean>(true)

    useEffect(() => {
        fetch("https://api.thecatapi.com/v1/images/search?limit=20")
            .then((response) => response.json())
            .then((data) => {
                setAllCats(data)
                setLoading(false)
            })
            .catch((error) => {
                console.error("ошибка при загрузке котиков", error)
                setLoading(false)
            })
    }, [])


  return (
    <div className='all__cats'>
      {loading ? (
        <p>Загружаем котиков...</p>
      ) : (
        allCats.map((cat) => (
            <div key={cat.id} className="cat__card">
                <img src={cat.url} alt="cat" />
                <button onClick={() => onFavoriteToggle(cat.id)}>
                {likedCats.includes(cat.id) ? "Удалить из любимых" : "Добавить в любимые"}
                </button>
            </div>
        ))
      )}
    </div>
  )
}

export default AllCats
