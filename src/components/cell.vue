<template>
	<div style="position: relative" @click="onPieceClick"> 
		<img v-show="moveable" src="../assets/circle.png" width="45" height="45" />
		<p class="chessPiece" style="position: absolute; top: 50%; left: 50%; transform: translate(-50%, -50%);">{{ chessPiece == '_' ? '' : chessPiece }}</p>
	</div>
	
</template>

<script>
import { onBeforeMount, ref, watch } from 'vue'
import { useStore } from 'vuex'
import checkColor from '../export/checkColor'
import checkPiece from '../export/checkPiece'
export default {
    props: {
        idx: String
    },
    setup(props) {
        const chessPiece = ref(null);
        const moveable = ref(false);
        const store = useStore();
        onBeforeMount(() => { 
            chessPiece.value = store.state.board[props.idx[0]][props.idx[1]].text;
						moveable.value = store.state.board[props.idx[0]][props.idx[1]].moveable;
        });
        const onPieceClick = () => {
            let chkColor = checkColor(chessPiece.value);
						if (store.state.piece && !moveable.value) {
							store.commit('resetMoveable', {});
						}
            if (chkColor == store.state.turn) {
							store.commit('showMoveable', { piece: checkPiece(chessPiece.value), color: chkColor, x: Number(props.idx[0]), y: Number(props.idx[1]), pieceChar: chessPiece.value});
            } else if (moveable.value) {
              store.commit('movePiece', { x: Number(props.idx[0]), y: Number(props.idx[1]) });
            }
            
        }
				watch(store.state.board, () => {
					chessPiece.value = store.state.board[props.idx[0]][props.idx[1]].text;
					moveable.value = store.state.board[props.idx[0]][props.idx[1]].moveable;
				});
        return { chessPiece, moveable, onPieceClick }
    }
}
</script>

<style>

</style>