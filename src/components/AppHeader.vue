<script>
import { store } from "../store";

export default {
    data() {
        return {
            store,
        };
    },
};
</script>

<template>
    
    <nav class="navbar navbar-expand-lg bg-body-tertiary">

        <div class="container-fluid">

            <!-- Logo/Brand -->
            <a class="navbar-brand" href="#">Travel-App</a>

            <!-- Links -->
            <div class="d-flex" id="navbarNavAltMarkup">
                <div class="navbar-nav">
                    <router-link v-for="item in store.navItem" class="nav-link" aria-current="page" :to="{name: item}">{{ item }}</router-link>
                </div>
            </div>

        </div>

    </nav>

</template>