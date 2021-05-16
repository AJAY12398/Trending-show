import React from 'react';
import {useEffect} from 'react'
import { useHistory } from "react-router-dom";
import { makeStyles } from '@material-ui/core/styles';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import WhatshotIcon from '@material-ui/icons/Whatshot';
import SearchIcon from '@material-ui/icons/Search';
import MovieIcon from '@material-ui/icons/Movie';
import TvIcon from '@material-ui/icons/Tv';
import PlaylistPlayIcon from '@material-ui/icons/PlaylistPlay';
const useStyles = makeStyles({
  root: {
    width: "100%",
    position: 'fixed',
    bottom: 0 ,
    backgroundColor : "#1976d2",
    zIndex:100,

  },
});

export default function SimpleBottomNavigation() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);
  const history  = useHistory();
  useEffect(() => {
    if(value === 0 )  history.push('/');
    else if (value === 1 )  history.push('/movies');
    else if (value === 2 )  history.push('/series');
    else if (value === 3 )  history.push('/search');    
    else if (value === 4 ) history.push('/watchlist')
  }, [value , history])

  return (
    <BottomNavigation
      value={value}
      onChange={(event, newValue) => {
        setValue(newValue);
      }} 
      showLabels
      className={classes.root}
    >
      <BottomNavigationAction label="Trending" style = {{color:"white"}} icon={<WhatshotIcon/>} />
      <BottomNavigationAction label="Movie" style = {{color:"white"}} icon={<MovieIcon/>} />
      <BottomNavigationAction label="Tv Series" style = {{color:"white"}} icon={<TvIcon />} />
      <BottomNavigationAction label="Search" style = {{color:"white"}} icon={<SearchIcon />} />
      <BottomNavigationAction label="WatchList" style = {{color:"white"}} icon={<PlaylistPlayIcon />} />
    </BottomNavigation>
  );
}