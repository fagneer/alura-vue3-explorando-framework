<template>
    <header class="box">
      <h1>
        <img src="../assets/logo.png" alt="Logo Alura Tacker">
      </h1>
      <button class="button" @click="alteraTema">
        {{textoBotao}}
      </button>
    </header>
  </template>
  
  <script lang="ts">
  import { defineComponent } from 'vue';
  
  export default defineComponent({
    name: 'BarraLateral',
    data() {
      return {
        modoEscuroAtivo: false
      }
    },
    computed: {
      textoBotao() {
        if(this.modoEscuroAtivo){
          return 'Ativar light mode'
        }
        return 'Ativar dark mode'
      }
    },
    emits: ['aoTemaAlterado'],
    methods: {
      alteraTema() {
        this.modoEscuroAtivo = !this.modoEscuroAtivo;
        this.$emit('aoTemaAlterado', this.modoEscuroAtivo);
      }
    }
  });
  </script>
  

  <style scoped>
  header {
    background: #111144;
    width: 100%;
    height: 100vh;
    padding: 1rem;
    text-align: center;
  }

  @media only screen and (max-width: 768px) {
    header {
        padding: 2.5rem;
        height: auto;
    }
  }
  </style>
  