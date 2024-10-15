import KlijentService from "../../services/KlijentService"
import { Button, Row, Col, Form } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import { RouteNames } from "../../constants";


export default function KlijentiDodaj(){

    const navigate = useNavigate()

    async function dodaj(klijent) {
        //console.log(smjer)
        //console.log(JSON.stringify(smjer))
        const odgovor = await KlijentService.dodaj(klijent)
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
        dodaj({
            Ime: podaci.get('Ime'),
            Prezime: podaci.get('prezime'),
            Email: podaci.get('email'),
            Telefon: podaci.get('telefon'),
             
        })
    }

    return(
        <>
        Dodavanje klijent
        <Form onSubmit={obradiSubmit}>

            <Form.Group controlId="Ime">
                <Form.Label>Ime</Form.Label>
                <Form.Control type="text" name="Ime" required />
            </Form.Group>

            <Form.Group controlId="Prezime">
                <Form.Label>Prezime</Form.Label>
                <Form.Control type="text" name="Prezime" required />
            </Form.Group>


            <Form.Group controlId="Email">
                <Form.Label>Email</Form.Label>
                <Form.Control type="text" name="Email" required />
            </Form.Group>

            <Form.Group controlId="Telefon">
                <Form.Label>Telefon</Form.Label>
                <Form.Control type="text" name="Telefon" />
            </Form.Group>

            

        <Row className="akcije">
            <Col xs={6} sm={12} md={3} lg={6} xl={6} xxl={6}>
            <Link to={RouteNames.KLIJENT_PREGLED} 
            className="btn btn-danger siroko">Odustani</Link>
            </Col>
            <Col xs={6} sm={12} md={9} lg={6} xl={6} xxl={6}>
            <Button variant="success"
            type="submit"
            className="siroko">Dodaj klijenta</Button>
            </Col>
        </Row>
        </Form>
        </>
    )
}