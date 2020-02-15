import React from 'react';

const GetRecipeButton = (props) => {
    return (
        <>
            <h3 className="title">¿Qué comemos hoy?</h3>
            <p className="subtitle">Déjate consentir por alguna de nuestras deliciosas recetas al azar y cocina algo nuevo hoy</p>
            <button className="button" onClick={props.getRecipe}>Obtén tu receta</button>
        </>
    )
}

export default GetRecipeButton;