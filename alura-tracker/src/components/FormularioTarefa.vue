<template>
    <div class="box">
        <div class="columns">
            <div class="column is-8" role="form" aria-label="Formulario para criação de uma nova tarefa">
                <input type="text" class="input" name="" id="" placeholder="Qual tarefa você deseja iniciar?" />
            </div>

            <div class="column">
                <div class="is-flex is-align-items-center is-justify-content-space-between">
                    <section>
                        <strong>00:00:00</strong>
                    </section>
                    <button class="button" @click="iniciar">
                        <span class="icon">
                            <i class="fas fa-play"></i>
                        </span>
                        <span>Play</span>
                    </button>
                    <button class="button" @click="finalizar">
                        <span class="icon">
                            <i class="fas fa-stop"></i>
                        </span>
                        <span>Stop</span>
                    </button>
                </div>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
    name: "FormularioTarefa",
    methods: {
        iniciar() {
            console.log('iniciando');
        },
        finalizar() {
            console.log('finalizando');
        }
    }
});
</script>

<style>
.box {
    padding: 1rem;
    margin: 1rem;
}

button:hover {
    color: var(--success);
    border-color: var(--success);
}

</style>