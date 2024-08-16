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

            <!-- Hamburger Button -->
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup"
                aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>

            <!-- Links -->
            <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
                <div class="navbar-nav">
                    <a v-for="item in store.navItem" class="nav-link" aria-current="page" href="#">{{ item }}</a>
                </div>
            </div>

        </div>

    </nav>

</template>