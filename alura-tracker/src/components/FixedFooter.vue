<template>
        <div class="columns is-flex is-fixed-bottom">
            <div class="column" role="form" aria-label="Formulario para criação de uma nova tarefa">
                <p class="has-text-centered ">Fagner Gomes</p>
            </div>
        </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
    name: "FixedFooter"
});
</script>

<style>
.box {
    padding: 1rem;
    margin: 1rem;
}

p {
    color: #999;
}

</style>