<template>
  <div class="board">
      <table>
          <tr v-for="(boardrow, index1) in board" :key="index1">
              <td v-for="(boardcell, index2) in boardrow" :class="(index1 + index2) % 2 == 0 ? 'brown' : ''" :key="index2"><cell :idx="index1+''+index2" /></td>
          </tr>
      </table>
  </div>
</template>

<script>
import { onMounted, reactive, toRefs } from 'vue';
import { useStore } from 'vuex';
import cell from './cell.vue';
export default {
    components: {
        cell
    },
    setup() {
        const state = reactive({board: []});
        const store = useStore();
        onMounted(() => { state.board = store.state.board })
        return { ...toRefs(state) }
    }
}
</script>

<style>

</style>