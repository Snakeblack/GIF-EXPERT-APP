import React, { useState } from "react";
import { AddCategory } from "./components/AddCategory";

const GifExpertApp = () => {

    //const categories = ['Android', 'iOS', 'Windows'];

    const [categories, setCategories] = useState(['Android', 'iOS', 'Windows']);

    // const handleAdd = () => {
    //     // setCategories( ['Mac', ...categories]);
    //     setCategories( cats => [...cats, 'Mac']);
    // }

    return (
        <>
            <h2>GifExpertApp</h2>
            <AddCategory setCategories={ setCategories }/>
            <hr />

            <ol>
                {
                    categories.map( (category) => {
                        return <li key={ category }>{ category }</li>
                    })
                }
            </ol>
        </>
    );

}

export default GifExpertApp;