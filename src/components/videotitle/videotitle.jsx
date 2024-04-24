import './videotitle.css'
import titleCard from '../../assets/avengers.png'

function VideoTitle(){
     return(
        <>
         <div className='title'>
             <img src={titleCard} alt="image" className='title-card' /> 
             <h4 className='movie-specs'> 2012 2h24m 4 languages </h4>          
         </div>
         <div className='description'>
            <div className='description-text'>
              <p>Earth's mightiest heroes must come together and learn to fight as a team if they are going to stop the mischievous Loki and his alien army from enslaving humanity.</p> 
              <h4>Superhero | Action | Dark Humour</h4>
            </div>
            <div className='subscribe-button'>
              <button className="button-4" role="button">
                Subscribe to Watch
              </button>
            </div>
         </div>
              
       
        </>
     )

}

export default VideoTitle
