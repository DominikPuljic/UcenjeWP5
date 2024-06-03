----CREATE DATABASE ovlasteni_servis;
----USE ovlasteni_servis;


--CREATE TABLE Klijent (
--    id INT PRIMARY KEY,
--    ime VARCHAR(50) NOT NULL,
--    prezime VARCHAR(50) NOT NULL,
--    email VARCHAR(100),
--    telefon VARCHAR(20)
--);


--CREATE TABLE Vozilo (
--    id INT PRIMARY KEY,
--    klijent_id INT,
--    marka VARCHAR(50) NOT NULL,
--    model VARCHAR(50) NOT NULL,
--    godina_proizvodnje datetime NOT NULL,
--    broj_registracije VARCHAR(20) NOT NULL,
--    FOREIGN KEY (klijent_id) REFERENCES Klijent(id)
--);

--CREATE TABLE Servisiranje (
--    id INT PRIMARY KEY,
--    vozilo_id INT,
--    datum_servisa DATE NOT NULL,
--    opis_usluge TEXT NOT NULL,
--    cijena DECIMAL(10, 2) NOT NULL,
--    FOREIGN KEY (vozilo_id) REFERENCES Vozilo(id)
--);
