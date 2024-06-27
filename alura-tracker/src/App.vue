<template>
  <main class="columns is-gapeless is-multiline">
    <div class="column is-one-quarter">
      <BarraLateral />
    </div>
    <div class="column is-three-quarter">
      <FormularioTarefa @aoSalvarTarefa="salvarTarefa"/>
      <div class="lista">
        <ListaTarefa v-for="(tarefa, index) in tarefas" :key="index" :tarefa="tarefa"/>
      </div>
      <FixedFooter />
    </div>
  </main>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import BarraLateral from './components/BarraLateral.vue';
import FormularioTarefa from './components/FormularioTarefa.vue';
import FixedFooter from './components/FixedFooter.vue'
import ListaTarefa from './components/ListaTarefa.vue'
import Tarefa from './interfaces/Tarefa.interface';

export default defineComponent({
  name: 'App',
  components: {
    BarraLateral,
    FormularioTarefa,
    ListaTarefa,
    FixedFooter
  },
  data() {
    return {
      tarefas: [] as Tarefa[]
    }
  },
  methods: {
    salvarTarefa(tarefa: Tarefa){
      this.tarefas.push(tarefa);
    }
  }

});
</script>

<style>
main {
  background-color: #eeeeef;
}

.lista {
  padding: 1.25rem
}
</style>
