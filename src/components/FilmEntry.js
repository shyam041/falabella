import React from 'react';

class FilmEntry extends React.Component{
    state = {name:'',rating:'',duration:'',id:'',durationError:''};
    handleOnSubmit = (e)=>{
        e.preventDefault();
        const obiFilm = {name:this.state.name,rating:this.state.rating,duration:this.state.duration,id:Date.now()};
        this.props.addFilms(obiFilm)
    }

    onChangeName = (e)=>{
        this.setState({name:e.target.value});
    }
    onChangeRating = (e)=>{
        this.setState({rating:e.target.value});
    }
    onChangeDuration = (e)=>{
            this.setState({duration:e.target.value});
    }
    render(){
        return(
            <form onSubmit={this.handleOnSubmit}>
                <div>
                    <label>Movie Name</label>   
                </div>
                <div>
                    <input type='text' id='name-input' value={this.state.name} onChange={this.onChangeName}/>
                </div>
                <div>
                    <label>Ratings</label>   
                </div>
                <div>
                    <input type='text' id='ratings-input' value={this.state.rating} onChange={this.onChangeRating}/>
                </div>
                <div>
                    <label>Duration</label>   
                </div>
                <div>
                    <input type='text' id='duration-input' value={this.state.duration} onChange={this.onChangeDuration}/>
                </div>                
                <div>
                    <button type='submit' id='submit-button'>Submit</button>
                </div>
            </form>
        );
    }
}

export default FilmEntry;