<template>
  <main class="columns is-gapeless is-multiline">
    <div class="column is-one-quarter">
      <BarraLateral />
    </div>
    <div class="column is-three-quarter">
      <FormularioTarefa />
      <FixedFooter />
    </div>
  </main>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import BarraLateral from './components/BarraLateral.vue';
import FormularioTarefa from './components/FormularioTarefa.vue';
import FixedFooter from './components/FixedFooter.vue'

export default defineComponent({
  name: 'App',
  components: {
    BarraLateral,
    FormularioTarefa,
    FixedFooter
  }
});
</script>
  
<style>
main {
    background-color: #eeeeef;
  }
</style>
