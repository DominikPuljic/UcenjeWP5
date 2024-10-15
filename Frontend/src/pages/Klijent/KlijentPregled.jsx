import { useEffect, useState } from "react"
import KlijentService from "../../services/KlijentService"
import { Button, Table } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import { RouteNames } from "../../constants";


export default function KlijentPregled(){

    const navigate = useNavigate()

    const[klijent, setKlijent] = useState();

    async function dohvatiKlijenti(){
        const odgovor = await KlijentService.get();
        if(odgovor.greska){
            alert(odgovor.poruka)
            return
        }
        //debugger; // ovo radi u Chrome inspect (ali i ostali preglednici)
        setKlijent(odgovor.poruka)
    } 

    // Ovaj hook (kuka) se izvodi dolaskom na stranicu Smjerovi
    useEffect(()=>{
       dohvatiKlijenti();
    },[])


    function obrisi(sifra){
        if(!confirm('Sigurno obrisati')){
            return;
        }
        brisanjeKlijenta(sifra)
    }

    async function brisanjeKlijenta(sifra) {
        
        const odgovor = await KlijentService.brisanje(sifra);
        if(odgovor.greska){
            alert(odgovor.poruka)
            return
        }
        dohvatiKlijente();
    }


    return(
        <>
        <Link to={RouteNames.KLIJENT_NOVI}
        className="btn btn-success siroko">Dodaj novi klijent</Link>
        <Table striped bordered hover responsive>
            <thead>
                <tr>
                    <th>Ime</th>
                    <th>Prezime</th>
                    <th>Email</th>
                    <th>Telefon</th>
                    <th>Akcija</th>
                    
                </tr>
            </thead>
            <tbody>
                {klijent && klijent.map((klijent,index)=>(
                    <tr key={index}>
                        <td>
                            {klijent.ime}
                        </td>
                        <td>
                           {klijent.prezime}
                        </td>
                        <td>
                            {klijent.email}
                        </td>
                        <td>
                            {klijent.telefon}
                        </td>
                        <td>
                            <Button
                            variant="danger"
                            onClick={()=>obrisi(klijent.sifra)}
                            >
                                Obriši
                            </Button>
                            &nbsp;&nbsp;&nbsp;
                            <Button
                            onClick={()=>navigate(`/klijenti/${klijent.sifra}`)}
                            >
                                Promjena
                            </Button>
                        </td>
                    </tr>
                ))}
            </tbody>
        </Table>
        </>
    )
}