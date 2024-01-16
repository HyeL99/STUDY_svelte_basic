<script>
	//Props
	export let fruits;
	export let reverse;
	export let slice;
	// let fruits = ['🍎', '🍌', '🍒', '🍊', '🍑'];
	console.log('fruits', fruits)
	let computedFruits = reverse ? [...fruits].reverse() : slice ? fruits.slice(...slice.split(',')) : fruits;	
	let computedTitle = 'Fruits' + (reverse ? ' reverse' : slice ? ` slice ${slice}` : '');
</script>
<h2>{computedTitle}</h2>
<ul>
	{#each computedFruits as fruit}
		<li>{fruit}</li>
	{/each}
</ul>