import axios from 'axios';
import SingleContent from '../../components/SingleContent/SingleContent';
import CustomPagination from "../../components/Pagination/CustomPagination";
import {useState , useEffect} from 'react';
const Series = () => {
    const [content, setcontent] = useState([])
    const [page, setPage] = useState(1);
    const [numOfPages, setNumOfPages] = useState();
    const fetchSeries = async() =>{
        const {data} = await axios.get(`
        https://api.themoviedb.org/3/discover/tv?api_key=be27d5e930f16c035d895a7b3303b9b9&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=${page}
        `)
        setcontent(data.results)
        // setPage(data.total_pages);
        setNumOfPages(data.total_pages);
    }
    useEffect(()=>{
        window.scroll(0,0)
        fetchSeries();
    // eslint-disable-next-line
    } , [page])
    return (
        <div>
            <h2 className="page_title">Top Trending Tv Series 🔥</h2>
            <div className = "trendig">
                {
                    content && content.map((c)=>
                            <SingleContent
                                key = {c.id}
                                media_type = 'tv'
                                    {...c}
                            />
                    )
                }
            </div>
            <CustomPagination
                    setPage  = {setPage} numOfPages={numOfPages}
                />
        </div>
    )
}

export default Series
