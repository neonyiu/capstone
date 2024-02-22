import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './component/Header';
import NavItems from './component/NavItems';
import Main from './component/Main';
import Footer from './component/Footer';

function App() {
  return (
    <>
      <Header>
        <NavItems/>
      </Header>
      <Main/>
      <Footer/>
    </>
  );
}

export default App;
