import axios from "axios";
import { Button, Tab, Tabs, TextField } from "@material-ui/core";
import SearchIcon from "@material-ui/icons/Search";
import { useState, useEffect } from "react";
import CustomPagination from "../../components/Pagination/CustomPagination";
import SingleContent from "../../components/SingleContent/SingleContent";
const Search = () => {
  const [type, setType] = useState(0);
  const [page, setPage] = useState(1);
  const [searchText, setSerchText] = useState("");
  const [content, setContent] = useState([]);
  const [numOfPages, setNumOfPages] = useState();

  const fetchSearch = async () => {
    try {
      const { data } = await axios.get(
        `https://api.themoviedb.org/3/search/${
          type ? "tv" : "movie"
        }?api_key=be27d5e930f16c035d895a7b3303b9b9&language=en-US&query=${searchText}&page=${page}&include_adult=false`
      );
      setContent(data.results);
      setNumOfPages(data.total_pages);
      console.log(data);
      
    } catch (error) {
      console.error(error);
    }
};


  useEffect(() => {
    window.scroll(0, 0);
    fetchSearch();
    // eslint-disable-next-line
  }, [type, page]);

  return (
    <div>
      <div style={{ display: "flex", margin: "15px 0" }}>
        <TextField
          style={{ flex: 1 }}
          id="outlined-basic"
          label="Search"
          variant="filled"
          onChange={(e) => setSerchText(e.target.value)}
        />
        <Button color="primary" onClick = {fetchSearch}>
          <SearchIcon />
        </Button>
      </div>
      <Tabs
        value={type}
        indicatorColor="primary"
        textColor="primary"
        style = {{padding: "10px"}}
        onChange={(event, newValue) => {
          setType(newValue);
          setPage(1);
        }}
      >
        <Tab label="Search Movie" style={{ width: "50%" }} />
        <Tab label="Search Tv Series" style={{ width: "50%" }} />
      </Tabs>
      <div className="trendig">
        {content &&
          content.map((c) => (
            <SingleContent
              key={c.id}
              media_type={type ? "tv" : "movie"}
              {...c}
            />
          ))}
        {searchText &&!content &&
          (type ? <h2>No Series Found</h2> : <h2>No Movies Found</h2>)
          }
      </div>

      {numOfPages > 1 && (
        <CustomPagination setPage={setPage}  numOfPages = {numOfPages} />
      )}
    </div>
  );
};

export default Search;
