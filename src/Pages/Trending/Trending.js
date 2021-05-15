import axios from 'axios'
import  {useState , useEffect} from 'react'
import CustomPagination from '../../components/Pagination/CustomPagination';
import SingleContent from '../../components/SingleContent/SingleContent';
import './Trending.css';
const Trending = () => {

    const [content, setContent] = useState([])
    const [page  , setPage] = useState(1)
    const fetchTrending  = async() =>{
            const {data} = await axios.get(
                `https://api.themoviedb.org/3/trending/all/day?api_key=be27d5e930f16c035d895a7b3303b9b9&page=${page}`
            );
            // console.log(data.results);
            setContent(data.results);
    }
    useEffect(()=>{
        fetchTrending();
        // eslint-disable-next-line
    }, [page]);
    return (
            <div>
                <h2 className="page_title">Top Trending 🎬</h2>
                <div className = 'trendig'>
                        { content &&  content.map((c)=> 
                            <SingleContent 
                                key = {c.id}
                                // id = {c.id}
                                // poster = {c.poster_path}
                                // title  = {c.title || c.name}
                                // date = {c.first_air_date || c.release_date}
                                // media_type = {c.media_type}
                                // vot_avg = {c.vote_average} or
                                {...c}
                            />
                        )}
                </div>
                
                <CustomPagination 
                    setPage  = {setPage}
                />  
            </div>
                
    )
}

export default Trending;
