import { StyledButton } from "../../styles/button"

export const FavoriteList = ({favoriteList, deleteToFavoriteList}) => {
    return (
        <ul>
            {
                favoriteList && favoriteList.map((favorite) => {
                    return (
                        <li key={favorite.id}>
                            <h3>{favorite.title}</h3>
                            <StyledButton onClick={() => deleteToFavoriteList(favorite.id)} button_size="md">Unfavorite</StyledButton>
                        </li>
                    )
                })
            }
        </ul>
    )
}