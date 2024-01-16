<script>
	let name = '01_기본';
	let age = 85;

	// setTimeout(() => {
	// 	name = 'WORLD';
	// 	age = 58;
	// }, 3000)
    
	function assign(){
		name = '01_기본_바뀜';
		age = 58;
	}
</script>

<h1>{name}</h1>
<h2  class={age < 85 ? 'active' : ''} > {age}</h2>
<img src="" alt={name} />
<input type="text" value={age} />
<input type="text" bind:value={name} />
<button on:click={assign}>click!</button>

<style>
	h1{
		color: red;
	}
	.active {
		color: blue;
	}
</style>