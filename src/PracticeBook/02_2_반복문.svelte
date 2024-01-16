<script>
	let name = '02_2_반복문';
	let fruits = ['🍎', '🍌', '🍒', '🍊', '🍑'];
	const deleteFruit = () => {fruits = fruits.slice(1)}
</script>
<h1>{name}</h1>
<ul>
{#each fruits as fruit}
	<li>{fruit}</li>
{/each}
</ul>

<button on:click={deleteFruit}>Eat it!</button>


<!--
	# : 시작기호 ex. {#if condition}
	/ : 종료기호 ex. {:else}
	: : 삽입기호 ex. {/if}
-->