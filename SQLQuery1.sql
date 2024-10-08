﻿

CREATE TABLE Klijenti (
    id INT PRIMARY KEY,
    ime VARCHAR(50) NOT NULL,
    prezime VARCHAR(50) NOT NULL,
    email VARCHAR(100),
    telefon VARCHAR(20)
);


CREATE TABLE Vozila (
    id INT PRIMARY KEY,
    klijent_id INT,
    marka VARCHAR(50) NOT NULL,
    model VARCHAR(50) NOT NULL,
    godina_proizvodnje datetime NOT NULL,
    broj_registracije VARCHAR(20) NOT NULL,
    FOREIGN KEY (klijent_id) REFERENCES Klijenti(id)
);

CREATE TABLE Servisiranja (
    id INT PRIMARY KEY,
    vozilo_id INT,
    datum_servisa DATE NOT NULL,
    opis_usluge TEXT NOT NULL,
    cijena DECIMAL(10, 2) NOT NULL,
    FOREIGN KEY (vozilo_id) REFERENCES Vozila(id)
);
INSERT INTO Klijenti (id, prezime, ime, email, telefon) VALUES
(1, 'Trdin', 'Marina', 'mana2411@gmail.com', '0912345678'),
(2, 'Bičanić', 'Hrvoje', 'chola.bog@gmail.com', '0923456789'),
(3, 'Cuca', 'Luka', 'lukacuca@gmail.com', '0934567890'),
(4, 'Matković', 'Luka', 'lmatkovic00@gmail.com', '0945678901'),
(5, 'Živković', 'Goran', 'goran.zivkovic1993@gmail.com', '0956789012');

INSERT INTO Vozila (id, klijent_id, marka, model, godina_proizvodnje, broj_registracije) VALUES
(1, 1, 'Toyota', 'Corolla', '2015-01-01', 'ZG1234AB'),
(2, 2, 'Volkswagen', 'Golf', '2018-05-15', 'ZG5678CD'),
(3, 3, 'Honda', 'Civic', '2016-03-20', 'ZG9101EF'),
(4, 4, 'Ford', 'Focus', '2017-07-30', 'ZG2345GH'),
(5, 5, 'Renault', 'Megane', '2019-09-10', 'ZG6789IJ');

INSERT INTO Servisiranja (id, vozilo_id, datum_servisa, opis_usluge, cijena) VALUES
(1, 1, '2024-01-15', 'Zamjena ulja i filtera', 150.00),
(2, 2, '2024-02-10', 'Zamjena kočnica', 250.00),
(3, 3, '2024-03-05', 'Redovni servis', 300.00),
(4, 4, '2024-04-20', 'Popravak usisne grane', 400.00),
(5, 5, '2024-05-25', 'Zamjena guma', 200.00);