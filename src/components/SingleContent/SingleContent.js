import { Badge } from '@material-ui/core'
import {img_300  , unavailable} from  '../../Config/config';
// import Button from '@material-ui/core/Button';
import './SingleContent.css'
// import AddIcon from '@material-ui/icons/Add';
import ContentModal from '../ContantModal/ContentModal';
const SingleContent = ({   id , release_date, media_type ,first_air_date  ,  title , name ,  poster_path , overview , vote_average ,total_pages}) => {
        // const addwatchlist = () => {
        //     const movie = {id , release_date, media_type ,first_air_date  ,  title , name ,  poster_path , overview , vote_average}
        //     const watchList = JSON.parse(localStorage.getItem("watchlist") || "[]");
        //     watchList.push(movie);
        //     console.log(watchList)
        //     console.log(movie)
        //     localStorage.setItem("watchlist", JSON.stringify(watchList));
        // }
    return (
        <ContentModal  media_type = { media_type}  id = {id}   release_date = {release_date} first_air_date = {first_air_date}
        title = {title} name = {name} poster_path = {poster_path} overview = {overview} vote_average = {vote_average} 
         >
        {/* <div className = "media"> */}
                <Badge  badgeContent={vote_average} color = {vote_average>6 ? "primary" : "secondary"}/>
                <img className = "poster" src = { poster_path ? `${img_300+ poster_path}` : unavailable } alt = {title || name}/>                
                <b className = "title"> {title || name}</b>
                <span className = "typeof">{media_type === "tv"? "Tv Series": "Movie"}
                <span className = "date">{release_date || first_air_date}</span>
                </span>
                 {/* <Button variant="contained"  onClick = {addwatchlist} className = "btn" color="primary">
                <AddIcon></AddIcon>
                Add to WatchList</Button>  */}
        {/* </div> */}
        </ContentModal>
        
    )
}

export default SingleContent

