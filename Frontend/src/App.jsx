import 'bootstrap/dist/css/bootstrap.min.css'
import Container from 'react-bootstrap/Container';
import './App.css'
import NavBarOvlasteniservis from './components/NavBarOvlasteniservis';
import { Route, Routes } from 'react-router-dom';
import { RouteNames } from './constants';
import Pocetna from './pages/Pocetna';
import KlijentiPregled from './pages/Klijenti/KlijentPregled';
import KlijentiDodaj from './pages/Klijenti/KlijentDodaj';
import KlijentiPromjena from './pages/Klijenti/KlijentPromjena';


function App() {

  return (
    <>
    <Container>
      <NavBarOvlasteniservis />
      <Routes>
        <Route path={RouteNames.HOME} element={<Pocetna/>} />

        <Route path={RouteNames.KLIJENT_PREGLED} element={<KlijentiPregled/>}/>
        <Route path={RouteNames.KLIJENT_NOVI} element={<KlijentiDodaj/>}/>
        <Route path={RouteNames.KLIJENT_PROMJENA} element={<KlijentiPromjena/>}/>

      </Routes>
      <hr/>
      &copy; Ovlasteni servis
    </Container>
    
    </>
  )
}

export default App
