import React from 'react';

const Recipe = (props) => {
    return(
        <>
            <h4>{props.info.mealName}</h4>
            <img src={props.info.mealNameThumb} alt=""/>
            <p>{props.info.instructions}</p>
            <h5>{props.info.mealCategory}</h5>
            <div className="ingredients">
                <ul>
                    <li>{props.info.ingredient1}: {props.info.measure1}</li>
                    <li>{props.info.ingredient2}: {props.info.measure2}</li>
                    <li>{props.info.ingredient3}: {props.info.measure3}</li>
                    <li>{props.info.ingredient4}: {props.info.measure4}</li>
                    <li>{props.info.ingredient5}: {props.info.measure5}</li>
                    <li>{props.info.ingredient6}: {props.info.measure6}</li>
                    <li>{props.info.ingredient7}: {props.info.measure7}</li>
                    <li>{props.info.ingredient8}: {props.info.measure8}</li>
                    <li>{props.info.ingredient9}: {props.info.measure9}</li>
                    <li>{props.info.ingredient10}: {props.info.measure10}</li>
                    <li>{props.info.ingredient11}: {props.info.measure11}</li>
                    <li>{props.info.ingredient12}: {props.info.measure12}</li>
                    <li>{props.info.ingredient13}: {props.info.measure13}</li>
                    <li>{props.info.ingredient14}: {props.info.measure14}</li>
                    <li>{props.info.ingredient15}: {props.info.measure15}</li>
                    <li>{props.info.ingredient16}: {props.info.measure16}</li>
                    <li>{props.info.ingredient17}: {props.info.measure17}</li>
                    <li>{props.info.ingredient18}: {props.info.measure18}</li>
                    <li>{props.info.ingredient19}: {props.info.measure19}</li>
                    <li>{props.info.ingredient20}: {props.info.measure20}</li>
                </ul>
            </div>
            {/* <iframe src={props.info.mealVideo} frameborder="0" title="unique" /> */}
        </>
    );
}

export default Recipe;