import { StyledButton } from "../../../styles/button"
import { StyleRecetteCard } from "./style"


export const RecetteCard = ({recipe, addRecipeToFavoriteList}) => {
  return (
    <StyleRecetteCard card_style={recipe.category}>
        <img src={recipe.image} alt={recipe.title} />
        <h3>{recipe.category}</h3>
        <h3>{recipe.title}</h3>
        <p>{recipe.description}</p>
        <StyledButton button_size="sm" onClick={() => addRecipeToFavoriteList(recipe)}>Favorite</StyledButton>
    </StyleRecetteCard>
  )
}

