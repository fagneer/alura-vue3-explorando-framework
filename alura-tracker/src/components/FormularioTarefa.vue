<template>
    <div class="box">
        <div class="columns">
            <div class="column is-8" role="form" aria-label="Formulario para criação de uma nova tarefa">
                <input type="text" class="input" name="" id="" placeholder="Qual tarefa você deseja iniciar?" v-model="descricaoTarefa" required/>
            </div>

            <div class="column">
                <TemporizadorCronometro @aoTemporizadorFinalizado="finalizarTarefa"/>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import TemporizadorCronometro from "./TemporizadorCronometro.vue";

export default defineComponent({
    name: "FormularioTarefa",
    emits: ['aoSalvarTarefa'],
    components: {
        TemporizadorCronometro
    },
    data() {
        return {
            descricaoTarefa: ''
        }
    },
    methods: {
        finalizarTarefa(tempoDecorrido: number): void {
            this.$emit('aoSalvarTarefa', {
                duracaoEmSegundos: tempoDecorrido,
                descricao: this.descricaoTarefa
            })
            this.descricaoTarefa = ''
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