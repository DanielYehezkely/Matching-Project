import React from 'react'

const Buttons = ({ handleSubmit }) => {

    return (
        <>
            <footer>
                <button
                    type='button'
                    className="trueBtn btn"
                    onClick={() => handleSubmit(true)}>True</button>
                <button
                    type='button'
                    className="falseBtn btn"
                    onClick={() => handleSubmit(false)}>False</button>
            </footer>
        </>

    )
}

export default Buttons