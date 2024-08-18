<script>
import { store } from "../store.js";

export default {
    data() {
        return {
            store,
            giornoInserito: 0,
            dataInserita: "",
        }
    },

    methods: {

        changeStatus: function (giorno) {

            // Trovo il giorno da aggiornare
            const dayToChange = store.viaggio.find(g => g.giorno === giorno)

            // Cambio valore dell'item
            dayToChange.completato = !dayToChange.completato

            //Trasformo in json l'array viaggio
            const jsonViaggio = JSON.stringify(store.viaggio);

            //Salvo nel localstorage il file json
            localStorage.setItem("viaggio", jsonViaggio)

        },

        deleteDay: function (giorno) {

            // Trovo indice del giorno selezionato
            let index = store.viaggio.findIndex(g => g.giorno === giorno);

            // Elimino elemento dall'array
            store.viaggio.splice(index, 1)

            // Trasformo in json e lo salvo nel localstorage
            const jsonViaggio = JSON.stringify(store.viaggio);
            localStorage.setItem("viaggio", jsonViaggio)
        },

        saveNewDay: function () {

            const newDay = { giorno: this.giornoInserito, data: this.dataInserita };

            store.viaggio.push(newDay);

            // Trasformo in json e lo salvo nel localstorage
            const jsonViaggio = JSON.stringify(store.viaggio);
            localStorage.setItem("viaggio", jsonViaggio)
        }

    },

    created() {
        const localTrip = localStorage.getItem("viaggio");
        if (localTrip !== null) {
            store.viaggio = JSON.parse(localTrip);
        } else {
            store.viaggio = [];
        }
    }
}
</script>

<template>

    <div class="container">
        <h1 class="text-center">Il tuo viaggio</h1>

        <table class="table">
            <thead>
                <tr>
                    <th scope="col" class="text-center">Giorno</th>
                    <th scope="col" class="text-center">Data</th>
                    <th scope="col" class="text-center">N. Tappe</th>
                    <th scope="col" class="text-center">Completato</th>
                    <th scope="col" class="text-center"></th>
                    <th scope="col" class="text-center"></th>

                </tr>
            </thead>
            <tbody>

                <tr v-for="item in store.viaggio">

                    <th scope="row" class="text-center">{{ item.giorno }}</th>

                    <td class="text-center">{{ item.data }}</td>

                    <td class="text-center">{{ item.tappe ? item.tappe.length : "Non definito" }}</td>

                    <td class="text-center">
                        <button class="btn border-0" @click="changeStatus(item.giorno)">
                            <i v-if="item.completato" class="fa-solid fa-circle-check fs-5" style="color: green;"></i>
                            <i v-else class="fa-solid fa-circle-xmark fs-5" style="color: red;"></i>
                        </button>
                    </td>

                    <td class="text-center"><router-link :to="{ name: 'Giornate' }"
                            class="btn btn-outline-warning">Dettagli</router-link></td>

                    <td>
                        <button class="btn btn-outline-danger" data-bs-toggle="modal" data-bs-target="#deleteDay">

                            <i class="fa-solid fa-trash"></i>

                            <!-- Delete Modal -->
                            <div class="modal fade" id="deleteDay" tabindex="-1" aria-hidden="true">
                                <div class="modal-dialog">
                                    <div class="modal-content">
                                        <div class="modal-header">
                                            <h1 class="modal-title fs-5" id="exampleModalLabel">Sei sicuro?</h1>
                                            <button type="button" class="btn-close" data-bs-dismiss="modal"
                                                aria-label="Close"></button>
                                        </div>
                                        <div class="modal-footer">
                                            <button type="button" class="btn btn-secondary"
                                                data-bs-dismiss="modal">Annulla</button>
                                            <button type="button" class="btn btn-danger" @click="deleteDay(item.giorno)"
                                                data-bs-dismiss="modal">Elimina</button>
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </button>
                    </td>

                </tr>

            </tbody>
        </table>

        <button class="btn btn-outline-primary" data-bs-toggle="modal" data-bs-target="#insertDay">Inserisci
            Giorno</button>


        <!-- Insert Modal -->
        <div class="modal fade" id="insertDay" tabindex="-1" aria-hidden="true">
            <div class="modal-dialog">
                <div class="modal-content">
                    <div class="modal-header">
                        <h1 class="modal-title fs-5" id="exampleModalLabel">Inserisci Giorno</h1>
                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div class="modal-body">
                        <form action="GET"></form>
                        <label for="giorno">Inserisci Giorno</label><br>
                        <input type="number" name="giorno" id="giorno" v-model="giornoInserito"><br>
                        <label for="data">Inserisci Data</label><br>
                        <input type="text" name="data" id="data" v-model="dataInserita">
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Chiudi</button>
                        <button type="button" class="btn btn-primary" @click="saveNewDay"
                            data-bs-dismiss="modal">Salva</button>
                    </div>
                </div>
            </div>
        </div>




    </div>

</template>

<style scoped lang="scss"></style>