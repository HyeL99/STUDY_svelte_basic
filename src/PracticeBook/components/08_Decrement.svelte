<script>
	import {count} from '../store/store.js';

	const onDecre = () => {
		// $count -= 1;
		count.decrement();
	}
</script>

<button  on:click={onDecre}>-</button>