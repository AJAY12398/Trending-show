import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Modal from "@material-ui/core/Modal";
import Backdrop from "@material-ui/core/Backdrop";
import Fade from "@material-ui/core/Fade";
import axios from "axios";
import { useState, useEffect } from "react";
import {
  img_500,
  unavailable,
  unavailableLandscape,
} from "../../Config/config";
import { Button } from "@material-ui/core";
import YouTubeIcon from "@material-ui/icons/YouTube";
import AddIcon from "@material-ui/icons/Add";
import "./ContentModal.css";
import Carousel from '../Carousel/Carousel'

const useStyles = makeStyles((theme) => ({
  modal: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  paper: {
    width: "90%",
    height: "80%",
    backgroundColor: "#1976d2",
    border: "1px solid  #282c34",
    color: "white",
    boxShadow: theme.shadows[5],
    padding: theme.spacing(1, 1, 3),
  },
}));

export default function ContentModal({
  children,
  media_type,
  id,
  first_air_date,
  title,
  name,
  poster_path,
  overview,
  vote_average,
  release_date,
}) {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);
  const [content, setContent] = useState();
  const [video, setVideo] = useState();
  const apikey = "be27d5e930f16c035d895a7b3303b9b9&language";
  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const fetchData = async () => {
    const { data } = await axios.get(
      `https://api.themoviedb.org/3/${media_type}/${id}?api_key=${apikey}&language=en-US`
    );
    setContent(data);
    // console.log(data);
  };
  const fetchVideos = async () => {
    const { data } = await axios.get(
      `https://api.themoviedb.org/3/${media_type}/${id}/videos?api_key=${apikey}&language=en-US`
    );
    // console.log(data);
    setVideo(data.results[0]?.key);
  };
  useEffect(() => {
    fetchData();
    fetchVideos();
    // eslint-disable-next-line
  }, []);
  const addwatchlist = () => {
    const movie = {
      id,
      release_date,
      media_type,
      first_air_date,
      title,
      name,
      poster_path,
      overview,
      vote_average,
    };
    const watchList = JSON.parse(localStorage.getItem("watchlist") || "[]");
    watchList.push(movie);
    console.log(watchList);
    console.log(movie);
    localStorage.setItem("watchlist", JSON.stringify(watchList));
  };

  return (
    <>
      <div
        className="media"
        style={{ cursor: "pointer" }}
        color="inherit"
        type="button"
        onClick={handleOpen}
      >
        {children}
      </div>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        className={classes.modal}
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={open}>
          {content && (
            <div className={classes.paper}>
              <div className="ContentModal"
               >
                <img
                  src={
                    content.poster_path
                      ? `${img_500}/${content.poster_path}`
                      : unavailable
                  }
                  alt={content.name || content.title}
                  className="ContentModal__portrait"
                />
                <img
                  src={
                    content.backdrop_path
                      ? `${img_500}/${content.backdrop_path}`
                      : unavailableLandscape
                  }
                  alt={content.name || content.title}
                  className="ContentModal__landscape"
                />
                <div className="ContentModal_about">
                  <span className="ContentModal_title"  style = {{fontWeight : "700" , marginTop : "20px"}}>
                    {content.name || content.title}
                    {content.first_air_date || content.release_date}
                  </span>
                  {content.tagline && (
                    <i className="ContentModal_tagline">{content.tagline}</i>
                  )}
                  <span className="ContentModal_overview" style = {{ marginTop : "20px"}}>
                    {content.overview}
                  </span>
                  <div>
                    <Carousel media_type = {media_type} id= {id}/>
                  </div>
                  <Button
                    variant="contained"
                    startIcon={<YouTubeIcon />}
                    color="secondary"
                    target="__blank"
                    href={`https://www.youtube.com/watch?v=${video}`}
                    style = {{margin : "10px 2px"}}
                  >
                    Watch the Trailer
                  </Button>
                  <Button
                    variant="contained"
                    onClick={addwatchlist}
                    className="btn"
                    color="primary"
                  >
                    <AddIcon></AddIcon>
                    Add to WatchList
                  </Button>
                </div>
              </div>
            </div>
          )}
        </Fade>
      </Modal>
    </>
  );
}
