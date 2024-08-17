<script>
import {store} from "../store.js";

export default {
    data(){
        return{
            store
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
                    <th scope="col">Giorno</th>
                    <th scope="col">Data</th>
                    <th scope="col">N. Tappe</th>
                    <th scope="col">Completato</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="item in store.viaggio">
                    <th scope="row">{{item.giorno}}</th>
                    <td>{{item.data}}</td>
                    <td>{{item.tappe.length}}</td>
                    <td>{{item.completato}}</td>
                </tr>
            </tbody>
        </table>
    </div>

</template>

<style scoped lang="scss"></style>