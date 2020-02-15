import React, { Component } from 'react';
import recipesData from './recipesData';
import Recipe from './Recipe';
import GetRecipeButton from './GetRecipeButton';

class RecipesGenerator extends Component {
    constructor() {
        super();
        this.state = {
            data: [],
            previousRecipe: [],
        };
        this.printRecipe = this.printRecipe.bind(this);
    }

    printRecipe() {
        const recipe = recipesData[Math.floor(Math.random()*recipesData.length)];
        this.setState({
            data: recipe
        });
        this.setState({
            previousRecipe: recipe
        });
    }

    render() {
        return(
            <>
                <GetRecipeButton getRecipe={this.printRecipe}/>
                <Recipe info={this.state.data}/>
            </>
        )
    }
}

export default RecipesGenerator;