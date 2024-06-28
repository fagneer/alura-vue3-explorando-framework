<template>
    <BoxTarefa>
        <div class="columns">
            <div class="column is-7">
                {{tarefa.descricao || 'Tarefa sem descrição'}}
            </div>
            <div class="column">
                <CronometroFormulario :tempoEmSegundos="tarefa.duracaoEmSegundos" />
            </div>
        </div>
    </BoxTarefa>
</template>


<script lang="ts">
    import { defineComponent, PropType } from 'vue';
    import CronometroFormulario from './CronometroFormulario.vue'
    import Tarefa from '../interfaces/Tarefa.interface';
    import BoxTarefa from './BoxTarefa.vue'

    export default defineComponent({
        name: 'listaTarefa',
        components: {
            CronometroFormulario,
            BoxTarefa

        },
        props: {
            tarefa: {
                type: Object as PropType<Tarefa>,
                required: true
            }
        }
    })
</script>
