import React from 'react'

export default function SearchBox (props) {
    return (
        <input
            type="search"
            placeholder='text'
            className='monster'
            onChange={props.onChangeHandler}
        >
        </input>
    )
}