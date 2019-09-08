import React from 'react';
import FilmEntry from './FilmEntry';
import Search from './Search';
import SearchResult from './SearchResult';

class Films extends React.Component{
    state = {movies:[],filterMovies:[],filterdValue:""};
    addFilms = (objFilm)=>{
        console.log(objFilm)
        this.setState({movies:this.state.movies.concat([objFilm])},()=>{
            this.filterMovies();
        });
        
    }

    setFilterdValue = (val)=>{
        console.log(val);
        this.setState({filterdValue:val})
        this.filterMovies();
    }

    filterMovies =()=>{
        const result = this.state.movies.filter((film)=>{
            if(this.state.filterdValue.trim().length<2){
                return true;
            }else{
                return film.name.includes(this.state.filterdValue.trim());
            }
            
        });
        this.setState({filterMovies: [...result]})
    }

    render(){
        return(
            <div>
                <FilmEntry addFilms = {this.addFilms}/>
                <Search films={this.state.movies} filterMovies={this.setFilterdValue}/>
                <SearchResult films={this.state.filterMovies}/>
            </div>
            
        )
    }
}

export default Films;