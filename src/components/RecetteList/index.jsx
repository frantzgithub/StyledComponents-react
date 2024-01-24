import { RecetteCard } from "./RecetteCard";
import { StyleRecipeList } from "./style";

export const RecetteList = ({recipeList, addRecipeToFavoriteList}) => {
  return (
    <>
      <h1>Liste de Recette</h1>
      <StyleRecipeList>
        {
          recipeList.map((recipe) => {
            return (
              <RecetteCard key={recipe.id}
              recipe={recipe}
              addRecipeToFavoriteList={addRecipeToFavoriteList}
            />
            )

          })
        }
      </StyleRecipeList>
    </>
  );
};
