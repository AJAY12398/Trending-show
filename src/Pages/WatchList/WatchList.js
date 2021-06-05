import {useState, useEffect} from 'react'
import SingleContent2 from '../../components/SingleContent/SingleContent2'
const WatchList = () => {
    const [content, setContent] = useState([])
    const [reload, setReload] = useState(false)

    useEffect(() => {
        setContent(JSON.parse(localStorage.getItem("watchlist")) || "[]")
    },[reload])
    
    return (
        <div>
            <h2 className="page_title">Welcome to Your WatchList</h2> 
            <div className = 'trendig'>
                        { content ?  content.map((c, index)=> 
                            <SingleContent2
                                key = {index}
                                {...c}
                                setReload={setReload}
                                reload={reload}
                            /> ) : <h1 style={{textAlign: "center"}}>NO movies found!! </h1>     
                        }
                </div>
 
        </div>
    )
}

export default WatchList
