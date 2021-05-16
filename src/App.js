import { Container } from '@material-ui/core';
import {BrowserRouter , Switch ,Route} from 'react-router-dom';
import "./App.css";
import Header from "./components/Header/Header";
import LabelBottomNavigation from "./components/Mnav";
import Movies from './Pages/Movies/Movies';
import Search from './Pages/Search/Search';
import Series from './Pages/Series/Series';
import Trending from './Pages/Trending/Trending';
import WatchList from './Pages/WatchList/WatchList';
function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <div className="app">
           <Container>
              <Switch>
                <Route exact path="/" component = {Trending}/>
                <Route path="/movies" component = {Movies} />
                <Route path="/series" component = {Series} />
                <Route path="/search" component = {Search} />
                <Route path="/watchlist" component = {WatchList} />
              </Switch>
           </Container> 
        </div>
        <LabelBottomNavigation />
      </BrowserRouter>
    </>
  );
}
export default App;