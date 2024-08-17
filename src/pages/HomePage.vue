<script>
import {store} from "../store.js";

export default {
    data(){
        return{
            store
        }
    },

    methods: {

        changeStatus: function(giorno){

        // Trovo il giorno da aggiornare
        const dayToChange = store.viaggio.find(g => g.giorno === giorno)
        
        // Cambio valore dell'item
        dayToChange.completato = !dayToChange.completato

        //Trasformo in json l'array viaggio
        const jsonViaggio = JSON.stringify(store.viaggio);
        
        //Salvo nel localstorage il file json
        localStorage.setItem("viaggio", jsonViaggio)

        },

        deleteDay: function(giorno){
            store.viaggio.splice(giorno-1, 1)

            // Trasformo in json e lo salvo nel localstorage
            const jsonViaggio = JSON.stringify(store.viaggio);
            localStorage.setItem("viaggio", jsonViaggio)
        }

    },

    created(){
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
                    <th scope="row" class="text-center">{{item.giorno}}</th>
                    <td class="text-center">{{item.data}}</td>
                    <td class="text-center">{{item.tappe.length}}</td>
                    <td class="text-center">
                        <button class="btn" @click="changeStatus(item.giorno)">
                        <i v-if="item.completato" class="fa-solid fa-circle-check" style="color: green;"></i>
                        <i v-else class="fa-solid fa-circle-xmark" style="color: red;"></i>
                        </button>
                    </td>
                    <td class="text-center"><router-link :to="{name: 'Giornate'}" class="btn btn-outline-warning">Dettagli</router-link></td>
                    <td><button @click="deleteDay(item.giorno)" class="btn btn-outline-danger"><i class="fa-solid fa-trash"></i></button></td>
                </tr>
            </tbody>
        </table>
    </div>

</template>

<style scoped lang="scss"></style>