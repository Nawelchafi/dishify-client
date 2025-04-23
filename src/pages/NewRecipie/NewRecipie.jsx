import './NewRecipie.css'
import { useState, useEffect } from 'react'
import React from 'react'

function NewRecipie() {
    const [ingredients, setIngredients] = useState([]);
    const [inputValue, setInputValue] = useState('');
    const [fields, setFields] = useState({});


    const handleIngredientKeyDown = (e) => {
        if ((e.key === 'Enter' || e.key === ',') && inputValue.trim()) {
            e.preventDefault();
            if (!ingredients.includes(inputValue.trim())) {
                setIngredients([...ingredients, inputValue.trim()]);
            }
            setInputValue('');
        }
    };

    const removeIngredient = (index) => {
        setIngredients(ingredients.filter((_, i) => i !== index)); // return elements that it's index is not equal to thepassed index 
    };

    const handleInputs = (e) => {
        setFields({ ...fields, [e.target.name]: e.target.value })
    }



    return (
        <div className="recipie ">
            <div className="recipie recipie-container">
                <form className="recipie-form">
                    <h2 className="recipie-title">New recipie</h2>

                    <div className="inputs-container">
                        <div className="input-group">
                            <label className='input-label' htmlFor='title' >title</label>
                            <input onChange={handleInputs} name="title" id="title" value={fields.title || ''} />
                        </div>
                        <div className="input-group">
                            <label className='input-label' htmlFor='ingredients' >ingredients</label>
                            <div className="tags-input-container">
                                {ingredients.map((item, index) => (

                                    <span key={index} className="tag">
                                        {item}
                                        <button type="button" onClick={() => removeIngredient(index)}>×</button>
                                    </span>
                                ))}
                                <input
                                    type="text"
                                    value={inputValue}
                                    onChange={(e) => setInputValue(e.target.value)}
                                    onKeyDown={handleIngredientKeyDown}
                                    placeholder="Type one ingredient and press Enter"
                                />
                            </div>

                        </div>
                        <div className="input-group">
                            <label className='input-label' htmlFor='instructions'  >instructions</label>

                            <textarea onChange={handleInputs} name="instructions" id='instructions' value={fields.instructions || ''} required />
                        </div>
                        <div className="input-group">
                            <label className='input-label' htmlFor='cookingTime' >cookingTime</label>

                            <input onChange={handleInputs} name="cookingTime" id='cookingTime' value={fields.cookingTime || ''} required />
                        </div>
                        <div className="input-group">
                            <label className='input-label' htmlFor='servings' >servings</label>

                            <input onChange={handleInputs} name="servings" id='servings' value={fields.servings || ''} required />
                        </div>
                        <div className="input-group">
                            <label className='input-label' htmlFor='category' >category</label>

                            <input onChange={handleInputs} name="category" id='category' value={fields.category || ''} required />
                        </div>
                        <div className="input-group">
                            <label className='input-label' htmlFor='origin' >origin</label>

                            <input onChange={handleInputs} name="origin" id='origin' value={fields.origin || ''} required />
                        </div>
                        <button type="submit" className="recipie-button">recipie</button>

                    </div>
                </form>
            </div>
        </div>
    )
}

export default NewRecipie