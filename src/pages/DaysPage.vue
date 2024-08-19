<script>
import { store } from "../store.js";

export default {
    data() {
        return {
            store
        }
    },

    created() {
        const localTrip = localStorage.getItem("viaggio");
        if (localTrip !== null) {
            store.viaggio = JSON.parse(localTrip);
        } else {
            store.viaggio = [];
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

        saveDay: function (giorno) {

            store.selectedDay = giorno;

            //Trasformo in json l'array viaggio
            const jsonViaggio = JSON.stringify(store.viaggio);

            //Salvo nel localstorage il file json
            localStorage.setItem("viaggio", jsonViaggio)

        }
    }
}
</script>

<template>

    <h1>Giornate</h1>

    <div class="container" v-for="item in store.viaggio">

        <div class="d-flex align-items-center justify-content-between">
            <div class="d-flex">
                <h3>Giorno {{ item.giorno }}</h3>
                <button class="btn border-0" @click="changeStatus(item.giorno)">
                    <i v-if="item.completato" class="fa-solid fa-circle-check fs-5" style="color: green;"></i>
                    <i v-else class="fa-solid fa-circle-xmark fs-5" style="color: red;"></i>
                </button>
            </div>
            <div>
                <router-link :to="{ name: 'NuovaTappa' }" @click="saveDay(item.giorno)"
                    class="btn btn-warning modify-btn">
                    <i class="fa-solid fa-pen"></i>
                </router-link>
            </div>
        </div>

        <h6>Data: {{ item.data }}</h6>

        <ul>
            <li v-for="tappa in item.tappe" class="mb-5">
                <strong>{{ tappa.titolo }}</strong>
                <ul class="d-flex">
                    <div class="col-8">
                        <li>Descrizione: {{ tappa.descrizione }} </li>
                        <li>Cibo: {{ tappa.cibo }}</li>
                        <li>Curiosità: {{ tappa.curiosità }}</li>
                        <li>Note: {{ tappa.note }}</li>
                    </div>
                    <div class="col-3 img" :style="{ backgroundImage: 'url(' + tappa.immagine + ')' }"></div>
                </ul>
            </li>
        </ul>
        <hr>
    </div>

</template>

<style scoped lang="scss">
.modify-btn {

    font-size: 0.9rem;
    background-color: orange;
    border-radius: 50%;
    height: 30px;
    width: 30px;
    display: flex;
    justify-content: center;
    align-items: center;
}

.img{
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;

}

</style>