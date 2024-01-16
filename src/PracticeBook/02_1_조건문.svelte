<script>
	let name = '02_1_조건문';
	let toggle = false;

	if (toggle) {
		
	} else {
		
	}
</script>
<h1>{name}</h1>
<button on:click={() => {toggle = !toggle}}>Toggle</button>
<div>
	{#if toggle}
		<b> toggle off </b>
	{:else}
		<span> toggle on </span>
	{/if}
</div>


<!--
	# : 시작기호 ex. {#if condition}
	/ : 종료기호 ex. {:else}
	: : 삽입기호 ex. {/if}
-->