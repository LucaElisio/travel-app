<script>
import { store } from "../store.js";

export default {
    data() {
        return {
            store
        }
    }
}
</script>

<template>

    <h1>Giornate</h1>

    <div class="container" v-for="item in store.viaggio">

        <h3>Giorno {{ item.giorno }}</h3>
        <h6>Data: {{ item.data }}</h6>

        <ul>
            <li v-for="tappa in item.tappe">
                <strong>{{ tappa.titolo }}</strong>
                <ul>
                    <li>Descrizione: {{ tappa.descrizione }} </li>
                    <li>Cibo: {{ tappa.cibo }}</li>
                    <li>Curiosità: {{ tappa.curiosità }}</li>
                    <li>Note: {{ tappa.note }}</li>
                </ul>
            </li>
        </ul>
        <hr>
    </div>

</template>

<style scoped lang="scss"></style>