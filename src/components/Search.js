import React from 'react'

const Search =(props)=>{
        return(
            <form>
                <div>
                    <label>Search</label>
                </div>
                <div>
                    <input type='text' id='search-input' onChange={(e)=>{props.filterMovies(e.target.value)}}/>
                </div>
            </form>
        );
    };

export default Search;