import './css/grid.css';
import './App.css';
import Header from './components/Header/Header';
import Banner from './components/Banner/Banner';
import Introduction from './components/Introduction/Introduction';
import BestProduct from './components/BestProduct/BestProduct';
import ListProduct from './components/ListProduct/ListProduct';
import Story from './components/Story/Story';
import Issue from './components/Issue/Issue';
import VideoWrap from './components/VideoWrap/VideoWrap';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <div className="App">
      <Header />
      <Banner />
      <Introduction />
      <BestProduct />
      <ListProduct />
      <Story />
      <Issue />
      <VideoWrap />
      <Footer />
    </div>
  );
}

export default App;
