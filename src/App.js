import React, { useEffect, useState } from "react";
import tmdb from "./tmdb";
import MovieRow from "./components/MovieRow";
import './App.css'
import FeaturedMovie from "./components/FeaturedMovie";
import Header from "./components/Header";


export default () => 
{ 

  const [movielist, setMovieList] = useState([]);
  const [featuredData, setFeaturedData] = useState(null)
  const [blackHeader, setBlackHeader] = useState(false)


  useEffect(() => {
    const loadAll = async () => { 
      let list = await tmdb.getHomeList();
      setMovieList(list);

      //pegando o featured 
      let originals = list.filter(i=>i.slug === 'originals')
      let randomchosen = Math.floor(Math.random() * (originals[0].items.results.length -1))
      let chosen = originals[0].items.results[randomchosen];
      let chosenInfo = await tmdb.getMovieInfo(chosen.id, 'tv');
      console.log(chosenInfo)
      setFeaturedData(chosenInfo);
    
      
    }
      loadAll();
  }, []);

  useEffect(() => {
    const scrollListener = () => { 
      if (window.scrollY > 10) { 
        setBlackHeader(true); 

      }
      else { 
        setBlackHeader(false);
      }

    }
    window.addEventListener('scroll', scrollListener);

    return () => { 
      window.removeEventListener('scroll', scrollListener);
    }

  },[]);


  return (
      
     


      <div className="page">
        <Header black={blackHeader} />
        
        {featuredData  && <FeaturedMovie item={featuredData}/>
        
        }
       
        <section className="lists"> 
         {movielist.map((item, key) => (
           <MovieRow key={key} title={item.title} items={item.items}/>

         ))}

        </section>

        <footer className="footer"> 
            Feito como treinamento por Gabriel Machiaveli. <br/>
            Direitos de imagem para Netflix. <br/>
            Dados retirados do site Themoviedb.org <br/>

        </footer>
        
         
      </div>


  );


}