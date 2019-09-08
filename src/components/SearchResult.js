import React from 'react'

class SearchResult extends React.Component{
    renderMovies =()=>{
        const trs = this.props.films.map((film)=>{
            return(<tr key={film.id}>
                <td>{film.name}</td>
                <td>{film.rating}</td>
                <td>{film.duration}</td>
            </tr>);
        });
        return trs;
    }
    render(){
        return(
            <table>                
                <tbody>
                    <tr>
                        <th>Name</th>
                        <th>Rating</th>
                        <th>Duration</th>
                    </tr>
                    {this.renderMovies()}
                </tbody>
            </table>
        );
    }
}


export default SearchResult;