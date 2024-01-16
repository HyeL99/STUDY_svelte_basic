<script>
	import { storeName } from './store/store.js';
	import Parent from './components/05_Parent.svelte';
	
	const title = '05_스토어';
	let name = 'Hello';
	$storeName = name;
</script>

<h1>{title}</h1>
<input type="text" bind:value={$storeName} />
<Parent />