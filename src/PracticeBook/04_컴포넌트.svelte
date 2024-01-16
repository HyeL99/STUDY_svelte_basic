<script>
    import Fruits from './components/04_Fruits.svelte';

	let name = '04_컴포넌트';
	let fruits = ['🍎', '🍌', '🍒', '🍊', '🍑'];
</script>

<h1>{name}</h1>
<Fruits fruits={fruits}/>
<Fruits {fruits} reverse/>
<Fruits {fruits} slice="-2"/>
<Fruits {fruits} slice="0, 3"/>