import React from 'react';
import unsplash from '../api/unsplash';
import SearchBar from './SearchBar';
import ImageList from './ImageList';

class App extends React.Component{
    state = { images : []}

    onSearchSubmit = async (term) => {
        
       const response = await unsplash.get('/search/photos',{
            params : { query : term}
        });
        this.setState({
            images : response.data.results
        })

    }

    render(){
        return(
            <div className="ui container" style={{marginTop : '10px'}}>
                <h1>React Pics</h1>
                <h3>A simple React app</h3>
                <SearchBar onSearchSubmit={this.onSearchSubmit}/>
                <ImageList images={this.state.images}/>
            </div>
        )
    }
} 


export default App;