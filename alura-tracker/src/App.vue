<template>
  <main class="columns is-gapeless is-multiline " :class="{ '--tema-dark': modoEscuroAtivo }">
    <div class="column is-one-quarter align --tema-dark-conteudo">
      <BarraLateral @aoTemaAlterado="trocarTema"/>
    </div>
    <div class="column is-three-quarter --tema-dark-conteudo">
      <FormularioTarefa @aoSalvarTarefa="salvarTarefa"/>
      <div class="lista">
        <ListaTarefa v-for="(tarefa, index) in tarefas" :key="index" :tarefa="tarefa"/>
        <BoxTarefa v-if="listaVazia">Levanta e bora trabalhar</BoxTarefa>
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
import BoxTarefa from './components/BoxTarefa.vue';

export default defineComponent({
  name: 'App',
  components: {
    BarraLateral,
    FormularioTarefa,
    ListaTarefa,
    BoxTarefa,
    FixedFooter
  },
  data() {
    return {
      tarefas: [] as Tarefa[],
      modoEscuroAtivo: false
    }
  },
  computed: {
    listaVazia(): boolean{
      return this.tarefas.length === 0
    }
  },
  methods: {
    salvarTarefa(tarefa: Tarefa){
      this.tarefas.push(tarefa);
    },
    trocarTema (modoEscuroAtivo: boolean) {
      this.modoEscuroAtivo = modoEscuroAtivo;
    }
  }

});
</script>

<style>

.lista {
  padding: 1.25rem
}

.align{
  margin: 0.3rem
}
</style>
