import { useEffect, useState } from "react"
import { Header } from "./components/Header"
import { RecetteList } from "./components/RecetteList"
import { GlobalStyle } from "./styles/global"
import { FavoriteList } from "./components/FavoriteList"


function App() {
  const favoriteLocalStorage = localStorage.getItem("@favorite")
  const [recipeList, setRecipeList] = useState([])
  const [favoriteList, setFavoriteList] = useState( favoriteLocalStorage ? JSON.parse(favoriteLocalStorage) : [])

  useEffect(() => {
    localStorage.setItem("@favorite", JSON.stringify(favoriteList))
  }, [favoriteList])

  const addRecipeToFavoriteList = (recipe) => {
    if(!favoriteList.some(favorite => favorite.id === recipe.id)){
      const newFavoriteList = [...favoriteList, recipe]
    setFavoriteList(newFavoriteList)
  } else{
    console.log("this item is already in the favoritelist")
}
    
  }

  const deleteToFavoriteList = (id) => {
    const deleteFavorite = favoriteList.filter((fav) => {
      return fav.id !== id
    })

    setFavoriteList(deleteFavorite)

  }

  useEffect(() => {
  const loadRecipe = async () => {
    try {
      const response = await fetch("https://recipe-fake-api.onrender.com/recipes")
      const json = await response.json()
      setRecipeList(json)
     
    } catch (error) {
      console.log(error)
    }
  }

  loadRecipe()
}, [])

console.log(recipeList)

  return (
    <div className="App">
      <GlobalStyle />
      <Header />
      <RecetteList recipeList={recipeList} addRecipeToFavoriteList={addRecipeToFavoriteList} />
      <FavoriteList favoriteList={favoriteList} deleteToFavoriteList={deleteToFavoriteList} />
    </div>
  )
}

export default App
