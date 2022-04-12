import { BrowserRouter } from 'react-router-dom';
import { Header } from './components/Header/header';
import { Routes } from './routes';
import { GlobalStyle } from './styles/global';
import 'bootstrap/dist/css/bootstrap.min.css';
import "./App.css";
export function App() {

  return (
    <div className="App">
      <BrowserRouter>
        <GlobalStyle />
        <Header />
        <Routes />
      </BrowserRouter>
    </div>
  );
}