<script>
import { store } from '../store';

export default {
    data() {
        return {
            store,
            dayToChange: "",
        }
    },

    methods: {
        handleFileUpload(event) {
            if (event.target.files && event.target.files[0]) {
                store.formData.immagine = event.target.files[0];
            }
        },

        saveNewStage(giorno) {
            const newStage = {
                titolo: store.formData.titolo,
                descrizione: store.formData.descrizione,
                immagine: store.formData.immagine,
                cibo: store.formData.cibo,
                curiosita: store.formData.curiosita,
                note: store.formData.note
            };

            const dayToChange = store.viaggio.find(g => g.giorno === giorno);

            if (dayToChange) {
                dayToChange.tappe = dayToChange.tappe || [];
                dayToChange.tappe.push(newStage);

                // Salva nel localStorage
                this.saveDataToLocalStorage();
            }

            console.log(store.viaggio);
        },

        saveDataToLocalStorage() {
            localStorage.setItem("viaggio", JSON.stringify(store.viaggio));
            localStorage.setItem("selectedDay", store.selectedDay);
        },

        loadDataFromLocalStorage() {
            const storedViaggio = localStorage.getItem("viaggio");
            const storedSelectedDay = localStorage.getItem("selectedDay");

            if (storedViaggio) {
                store.viaggio = JSON.parse(storedViaggio);
            } else {
                store.viaggio = []; // Imposta un array vuoto se non ci sono dati
            }

            if (storedSelectedDay) {
                store.selectedDay = JSON.parse(storedSelectedDay);
            } else {
                // Imposta il primo giorno come default se selectedDay non è definito
                store.selectedDay = store.viaggio.length > 0 ? store.viaggio[0].giorno : null;
            }
        }
    },

    created() {
        // Carica i dati da localStorage all'avvio
        this.loadDataFromLocalStorage();

        // Trova l'oggetto corrispondente al giorno selezionato
        const dayToChange = store.viaggio.find(g => g.giorno === store.selectedDay);

        // Se l'oggetto è trovato, assegna le tappe, altrimenti imposta un array vuoto
        this.dayToChange = dayToChange ? dayToChange.tappe : [];

        console.log(this.dayToChange);
    }
}
</script>


<template>
    <h2 class="text-center">Gestisci Tappe</h2>
    <div class="container text-center">
        <button class="btn btn-outline-primary" data-bs-toggle="modal" data-bs-target="#stageModal">Inserisci
            Tappa</button>
    </div>

    <ul v-for="tappa in this.dayToChange">
        <strong>{{ tappa.titolo }}</strong>
        <li>Descrizione: {{ tappa.descrizione }}</li>
        <li>Cibo: {{ tappa.cibo }}</li>
        <li>Curiosità: {{ tappa.curiosita }}</li>
        <li>Note: {{ tappa.note }}</li>
        <hr>
    </ul>


    <!-- Modal -->
    <div class="modal fade" id="stageModal" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1"
        aria-labelledby="stageModal" aria-hidden="true">
        <div class="modal-dialog">
            <div class="modal-content">
                <div class="modal-header">
                    <h1 class="modal-title fs-5" id="staticBackdropLabel">Inserisci Tappa</h1>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">
                    <form action="">

                        <!-- Titolo -->
                        <label for="titolo" class="form-label">Titolo</label>
                        <input type="text" class="form-control mb-4" id="titolo" v-model="store.formData.titolo"
                            placeholder="Inserisci il titolo" required />

                        <!-- Descrizione -->
                        <label for="descrizione" class="form-label">Descrizione</label>
                        <textarea class="form-control mb-4" id="descrizione" v-model="store.formData.descrizione"
                            placeholder="Inserisci la descrizione" required></textarea>

                        <!-- Cibo -->
                        <label for="cibo" class="form-label">Cibo</label>
                        <input type="text" class="form-control mb-4" id="cibo" v-model="store.formData.cibo"
                            placeholder="Inserisci il cibo" />

                        <!-- Curiosità -->
                        <label for="curiosita" class="form-label">Curiosità</label>
                        <textarea class="form-control mb-4" id="curiosita" v-model="store.formData.curiosita"
                            placeholder="Inserisci le curiosità"></textarea>

                        <!-- Note -->
                        <label for="note" class="form-label">Note</label>
                        <textarea class="form-control mb-4" id="note" v-model="store.formData.note"
                            placeholder="Inserisci le note"></textarea>

                        <!-- Pulsante Invio e Chiusura -->
                        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Chiudi</button>
                        <button type="button" class="btn btn-primary mx-2" data-bs-dismiss="modal"
                            @click="saveNewStage(store.selectedDay)">Salva</button>

                    </form>
                </div>
            </div>
        </div>
    </div>

</template>