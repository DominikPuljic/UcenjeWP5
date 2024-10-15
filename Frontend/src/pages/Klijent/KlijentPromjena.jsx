import KlijentService from "../../services/KlijentService"
import { Button, Row, Col, Form } from "react-bootstrap";
import { Link, useNavigate, useParams } from "react-router-dom";
import { RouteNames } from "../../constants";
import { useEffect, useState } from "react";


export default function KlijentiPromjena(){

    const [klijent,setKlijent] = useState({})
    const navigate = useNavigate()
    const routeParams = useParams()

    async function dohvatiKlijente(){
        const odgovor = await KlijentService.getBySifra(routeParams.sifra);
        if(odgovor.greska){
            alert(odgovor.poruka)
            return
        }
        setKlijent(odgovor.poruka)
        //debugger; // ovo radi u Chrome inspect (ali i ostali preglednici)
        
    } 

    useEffect(()=>{
        dohvatiKlijent();
     },[])

     async function promjena(klijenta) {
        //console.log(smjer)
        //console.log(JSON.stringify(smjer))
        const odgovor = await KlijentService.promjena(routeParams.sifra,klijent)
        if(odgovor.greska){
            alert(odgovor.poruka)
            return;
        }
        navigate(RouteNames.KLIJENT_PREGLED)
    }

    function obradiSubmit(e){ // e je event
        e.preventDefault(); // nemoj odraditi zahtjev na server
        let podaci = new FormData(e.target)
        //console.log(podaci.get('naziv'))
        promjena({
            Ime: podaci.get('Ime'),
            Prezime:podaci.get('prezime'),
            Email:podaci.get('email'),
            Telefon:podaci.get('telefon'),
        })
    }

    return(
        <>
        Promjena klijenta
        <Form onSubmit={obradiSubmit}>

            <Form.Group controlId="ime">
                <Form.Label>Ime</Form.Label>
                <Form.Control type="text" name="ime" required
                defaultValue={klijent.ime} />
            </Form.Group>

            
            <Form.Group controlId="prezime">
                <Form.Label>Prezime</Form.Label>
                <Form.Control type="text" name="prezime" required
                defaultValue={klijent.prezime} />
            </Form.Group>

            
            <Form.Group controlId="email">
                <Form.Label>Email</Form.Label>
                <Form.Control type="text" name="email" required
                defaultValue={klijent.email} />
            </Form.Group>

            
            <Form.Group controlId="telefon">
                <Form.Label>Telefon</Form.Label>
                <Form.Control type="text" name="telefon" required
                defaultValue={klijent.telefon} />
            </Form.Group>

            
        <Row className="akcije">
            <Col xs={6} sm={12} md={3} lg={6} xl={6} xxl={6}>
            <Link to={RouteNames.KLIJENT_PREGLED} 
            className="btn btn-danger siroko">Odustani</Link>
            </Col>
            <Col xs={6} sm={12} md={9} lg={6} xl={6} xxl={6}>
            <Button variant="success"
            type="submit"
            className="siroko">Promjeni klijenta</Button>
            </Col>
        </Row>
        </Form>
        </>
    )
}