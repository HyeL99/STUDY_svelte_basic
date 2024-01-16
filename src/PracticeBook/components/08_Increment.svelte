<script>
	import {count} from '../store/store.js';

	const onIncre = () => {
		// $count += 1;
		count.increment();
	}
</script>

<button  on:click={onIncre}>+</button>