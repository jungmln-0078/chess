<template>
  <div id="app">
    <h3 style="text-align: center; margin-top: 128px; font-size: 32px;">{{ store.state.turn }}</h3>
    <board />
  </div>
</template>

<script>
import board from './components/Board.vue'
import { useStore } from 'vuex'
export default {
  components: { board },
  setup() {
    const store = useStore();
    return { store };
  }
}
</script>

