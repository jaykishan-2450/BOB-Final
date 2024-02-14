import { Grid, GridColumn, GridRow } from "semantic-ui-react"
import Recipes from "./recipes"

const RecipeList = ({Recipes}) =>{ 
    return (
        <Grid container stackable columns={3}>
            <GridRow>
            {Recipes.map((Recipe)=> 
            <GridColumn className="grid-column">
                <Notes 
                    RecipeName={Recipe.RecipeName}
                    dishtype={Recipe.dishtype} 
                    description={Recipe.description}
                />
            </GridColumn>)
            }
            </GridRow>
        </Grid>

    )
}

export default RecipeList