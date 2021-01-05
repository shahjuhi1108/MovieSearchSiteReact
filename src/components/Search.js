import React, { useState } from 'react'

const Search = (props) => {

    const [searchValue, setSeachValue] = useState("")

    const handleSearchInputChanges = (e) => {
        setSeachValue(e.target.value)
    }

    const resetSearchInputField = () => {
        setSeachValue("")
    }

    const callSearchFunction = (e) => {
        e.preventDefault()
        props.search(searchValue)
        resetSearchInputField()
    }

    return (
        <form className="search">
            <input
                value={searchValue}
                onChange={handleSearchInputChanges}
                type="text"
            />
            <input 
                onClick={callSearchFunction} 
                type="submit"
                value="SEARCH" 
            />
        </form>
    );
};

export default Search