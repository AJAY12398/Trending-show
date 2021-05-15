import axios from "axios";
import { useState, useEffect } from "react";
import CustomPagination from "../../components/Pagination/CustomPagination";
import SingleContent from "../../components/SingleContent/SingleContent";
const Movies = () => {
  const [movie, setMovie] = useState([]);
  const [numOfPages, setNumOfPages] = useState();
  const [page, setPage] = useState(1);

  const featchMovie = async () => {
    const { data } = await axios.get(
      `https://api.themoviedb.org/3/discover/movie?api_key=be27d5e930f16c035d895a7b3303b9b9&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=${page}`
      // &with_genres=${genereforURL}
    );
    // console.log(data);
    setMovie(data.results);
    setNumOfPages(data.total_pages);
  };
  useEffect(() => {
    featchMovie();
    // eslint-disable-next-line
  },);
  return (
    <div>
      <h2 className="page_title">Top Trending Movies 🎥</h2>
      <div className = 'trendig'>
                        {
                          movie && movie.map((c)=>
                            <SingleContent
                              key = {c.id}
                              {...c}
                              movie={c}
                            />
                          )
                        }
                </div>
                <CustomPagination
                  setPage = {setPage}
                />
    </div>
  );
};

export default Movies;
