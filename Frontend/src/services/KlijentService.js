import { HttpService } from "./HttpService";



async function get(){
    return await HttpService.get('/Klijent')
    .then((odgovor)=>{
        //console.log(odgovor.data)
        //console.table(odgovor.data)
        return {greska: false, poruka: odgovor.data}
    })
    .catch((e)=>{
        //console.log(e)
        return {greska: true, poruka: 'Problem kod dohvaćanja klijenta'}   
    })
}

async function brisanje(sifra){
    return await HttpService.delete('/Klijent/' + sifra)
    .then(()=>{
        return {greska: false, poruka: 'Obrisano'}
    })
    .catch(()=>{
        return {greska: true, poruka: 'Problem kod brisanja klijenta'}   
    })
}

async function dodaj(klijent){
    return await HttpService.post('/Klijent',klijent)
    .then(()=>{
        return {greska: false, poruka: 'Dodano'}
    })
    .catch(()=>{
        return {greska: true, poruka: 'Problem kod dodavanja klijenta'}   
    })
}

async function promjena(sifra,klijent){
    return await HttpService.put('/Klijent/' + sifra,klijent)
    .then(()=>{
        return {greska: false, poruka: 'Dodano'}
    })
    .catch(()=>{
        return {greska: true, poruka: 'Problem kod dodavanja klijenta'}   
    })
}

async function getBySifra(sifra){
    return await HttpService.get('/Klijent/'+sifra)
    .then((odgovor)=>{
        return {greska: false, poruka: odgovor.data}
    })
    .catch((e)=>{
        return {greska: true, poruka: 'Problem kod dohvaćanja klijenta s šifrom '+sifra}   
    })
}


export default {
    get,
    brisanje,
    dodaj,
    getBySifra,
    promjena
}
