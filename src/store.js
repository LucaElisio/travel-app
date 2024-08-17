import { reactive } from 'vue'

export const store = reactive({

    // Links
    navItem: ["Home", "Giornate", "Borsa"],

    // Travel
    viaggio: [
        {
            giorno: 1,
            data: "2024-09-01",
            completato: false,
            tappe: [
                {
                    titolo: "Arrivo a Roma",
                    descrizione: "Arrivo a Roma nel pomeriggio e check-in in hotel. Prima passeggiata nel centro storico.",
                    immagine: "link_all'immagine_di_roma.jpg",
                    cibo: "Cena al ristorante tipico 'Trattoria da Luigi' per assaggiare la pasta alla carbonara.",
                    curiosità: "Sapevi che la Fontana di Trevi è stata costruita nel 1762 ed è una delle fontane più famose al mondo?",
                    note: "Portare scarpe comode per camminare."
                }
            ]
        },
        {
            giorno: 2,
            data: "2024-09-02",
            completato: false,
            tappe: [
                {
                    titolo: "Visita al Colosseo",
                    descrizione: "Tour guidato al Colosseo e visita al Foro Romano.",
                    immagine: "link_all'immagine_del_colosseo.jpg",
                    cibo: "Pranzo con pizza romana vicino al Colosseo.",
                    curiosità: "Il Colosseo poteva ospitare circa 50.000 spettatori durante i giochi gladiatori.",
                    note: "Prenotare in anticipo i biglietti per evitare code."
                },
                {
                    titolo: "Piazza di Spagna e Via del Corso",
                    descrizione: "Passeggiata per Piazza di Spagna e shopping lungo Via del Corso.",
                    immagine: "link_all'immagine_di_piazza_di_spagna.jpg",
                    cibo: "Gelato alla famosa gelateria 'Giolitti'.",
                    curiosità: "La scalinata di Piazza di Spagna è composta da 135 gradini ed è una delle più lunghe e ampie d'Europa.",
                    note: "Ottimo punto per foto panoramiche dalla cima della scalinata."
                }
            ]
        },
        {
            giorno: 3,
            data: "2024-09-03",
            completato: false,
            tappe: [
                {
                    titolo: "Vaticano e Cappella Sistina",
                    descrizione: "Visita ai Musei Vaticani, Cappella Sistina e Basilica di San Pietro.",
                    immagine: "link_all'immagine_della_cappella_sistina.jpg",
                    cibo: "Pranzo leggero nei pressi del Vaticano con un panino fresco.",
                    curiosità: "Michelangelo ha dipinto il soffitto della Cappella Sistina tra il 1508 e il 1512.",
                    note: "Indossare abbigliamento appropriato per la visita in luoghi sacri."
                },
                {
                    titolo: "Trastevere di sera",
                    descrizione: "Esplorazione del quartiere di Trastevere con cena in una trattoria locale.",
                    immagine: "link_all'immagine_di_trastevere.jpg",
                    cibo: "Cena con piatti tipici come la coda alla vaccinara.",
                    curiosità: "Trastevere è uno dei quartieri più autentici e vivaci di Roma, famoso per la sua vita notturna.",
                    note: "Ottimo per una passeggiata serale tra i vicoli."
                }
            ]
        },
        {
            giorno: 4,
            data: "2024-09-04",
            completato: false,
            tappe: [
                {
                    titolo: "Gita a Firenze",
                    descrizione: "Partenza in treno per Firenze, visita al Duomo e al Battistero.",
                    immagine: "link_all'immagine_di_firenze.jpg",
                    cibo: "Pranzo con bistecca alla fiorentina.",
                    curiosità: "Il Duomo di Firenze, noto anche come Santa Maria del Fiore, è uno dei più grandi d'Europa.",
                    note: "Non dimenticare di visitare il Campanile di Giotto per una vista spettacolare della città."
                },
                {
                    titolo: "Galleria degli Uffizi",
                    descrizione: "Visita alla Galleria degli Uffizi per ammirare opere di Botticelli, Leonardo da Vinci e Michelangelo.",
                    immagine: "link_all'immagine_uffizi.jpg",
                    cibo: "Merenda con dolci tipici toscani in una pasticceria storica.",
                    curiosità: "La Galleria degli Uffizi è uno dei musei più antichi e famosi al mondo, aperto al pubblico nel 1765.",
                    note: "Prenotare i biglietti in anticipo per evitare lunghe attese."
                }
            ]
        },
        {
            giorno: 5,
            data: "2024-09-05",
            completato: false,
            tappe: [
                {
                    titolo: "Ritorno a Roma e Villa Borghese",
                    descrizione: "Rientro a Roma e visita a Villa Borghese con passeggiata nei giardini.",
                    immagine: "link_all'immagine_villa_borghese.jpg",
                    cibo: "Picnic nei giardini con prodotti locali.",
                    curiosità: "Villa Borghese è uno dei parchi più grandi di Roma e ospita la famosa Galleria Borghese.",
                    note: "Ottimo posto per rilassarsi dopo giorni di intensa esplorazione."
                },
                {
                    titolo: "Serata al Teatro dell'Opera",
                    descrizione: "Conclusione del viaggio con una serata al Teatro dell'Opera di Roma.",
                    immagine: "link_all'immagine_teatro_opera_roma.jpg",
                    cibo: "Cena prima dello spettacolo in un ristorante elegante vicino al teatro.",
                    curiosità: "Il Teatro dell'Opera di Roma è stato inaugurato nel 1880 ed è uno dei principali teatri d'opera d'Italia.",
                    note: "Prenotare i biglietti per lo spettacolo con anticipo."
                }
            ]
        }
    ]
})