import './styles/globals.scss';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header';

export default function App() {
  return (
    <>
      <Header/>
      <h1 className='danger'>Teste</h1>
    </>
  );
}