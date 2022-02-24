import React from "react";
import './FeaturedMovie.css'

export default ({item, }) => { 

    let firstdate = new Date(item.first_air_date)
    let genres = []; 
    for(let i in item.genres) { 
        genres.push(item.genres[i].name);
    }
    return (

       
    <section className="featured" style={
        { backgroundSize: 'cover', 
            backgroundPosition: 'center', 
            backgroundImage: `url(https://image.tmdb.org/t/p/original${item.backdrop_path})`    
        }

    }>
        <div className="featured--vertical"> 
            <div className="featured--horizontal"> 
                <div className="filmeDestaque"> 

                    <div className="filmeInfo">
                            <h2 className="nomeFilme"> {item.original_name}</h2>
                            <div className="pontosFilme"> {item.vote_average} pontos </div>
                            <div className="anoFilme"> {firstdate.getFullYear()}</div>
                            <div className="numeroTemp"> {item.number_of_seasons} temporada{item.number_of_seasons !== 1 ? 's' : ''}</div>
                    </div>
                    
                    <div className="DescricaoFilme"> {item.overview}</div>
                    
                    <div className="botoes"> 
                    <a href="" className="botaoassistir">  Assistir</a>
                    <a href="" className="botaominhalista"> +Minha Lista </a></div>
                    <div className="generoFilme"> <strong> Gêneros:</strong> {genres.join(', ')} </div>
                </div>
            </div>
        
        
        </div>


    </section>
    );

}