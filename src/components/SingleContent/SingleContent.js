import { Badge } from '@material-ui/core'
import {img_300  , unavailable} from  '../../Config/config';
import Button from '@material-ui/core/Button';
import './SingleContent.css'
import {Link} from 'react-router-dom';
const SingleContent = ({   id , release_date, media_type ,first_air_date  ,  title , name ,  poster_path , overview , vote_average ,c}) => {
        const addwatchlist = () => {
            const movie = {id , release_date, media_type ,first_air_date  ,  title , name ,  poster_path , overview , vote_average}
            const watchList = JSON.parse(localStorage.getItem("watchlist") || "[]");
            watchList.push(movie);
            console.log(watchList)
            console.log(movie)
            localStorage.setItem("watchlist", JSON.stringify(watchList));
        }
    return (
    
        <div className = "media">
                <Badge  badgeContent={vote_average} color = {vote_average>6 ? "primary" : "secondary"}/>
                <img className = "poster" src = { poster_path ? `${img_300+ poster_path}` : unavailable } alt = {title || name}/>                
                <b className = "title"> {title || name}</b>
                <span className = "typeof">{media_type === "tv"? "Tv Series": "Movie"}
                <span className = "date">{release_date || first_air_date}</span>
                </span>
             {/* <Link  style = {{textDecoration: "none"}}  to = {`/watchlist/${id}`}>
                </Link> */}
                <Button variant="contained"  onClick = {addwatchlist} className = "btn" color="primary">Add to WatchList</Button>
                {/* <Link to = {`watchlist${id}`}>Add to  {id}</Link> */}
        </div>
        
    )
}

export default SingleContent

