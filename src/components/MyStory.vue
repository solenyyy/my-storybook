<template>
  <div class="hello">
    <h1>{{ title }}</h1>
    <form>
      <label id="entry">
        {{ filtrado }}
        <input
          id="entrada"
          type="text"
          :size="size"
          @input="filtrador"
          aria-label="filter"
        />
      </label>
    </form>
  </div>
</template>

<script>
export default {
  name: 'MyStory',
  props: {
    /* Ajusta el tamaño del input */
    size: {
      type: Number,
      default: 32
    },
    title: {
      type: String,
      default: 'Ola ke ase'
    },
    /* Patrón que elimina de la frase introducida en el input */
    filter: {
      type: String,
      default: '',
    }
  },
  data() {
    return {
      filtrado: ''
    }
  },
  methods: {//No aqui no es
    filtrador(e) {
      let parts = e.target.value.split(this.filter);
      this.filtrado = '';
      for (const parte of parts) {
        this.filtrado += parte
      }
      this.$emit('ResultadoFiltrador', this.filtrado)
    }
  }
}
</script>

<style scoped>
.hello {
  display: flex;
  flex-direction: column;
}
</style>
