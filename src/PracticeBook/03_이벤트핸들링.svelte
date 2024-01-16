<script>
	import {onMount} from 'svelte';
	let name = '03_이벤트핸들링';
	let isRed = false;
	let state = "basic";
	let text = "";
	
	/*
	onMount(() => { // 요소들이 마운트된 뒤에 실행할 코드들을 콜백함수에 입력
		const box = document.querySelector('.box');
		box.addEventListener('click', () => {
			isRed = !isRed;
		});
	});
	*/
</script>

<h1>{name}</h1>
<!-- svelte-ignore a11y-click-events-have-key-events -->
<div
	class="box" style="background-color: {isRed ? 'Crimson' : 'Thistle'}"
	on:click={() => {isRed = !isRed;}}
	on:mouseenter={() => {state  = 'enter'}}
	on:mouseleave={() => {state  = 'leave'}}
>
	Box! _ <span>{state}</span>
</div>

<style>
	.box {
		width: 300px;
		height: 150px;
		padding: 1rem;
		font-weight: bold;
		background-color: Thistle;
	}
</style>

<h3>text : {text}</h3>
<!-- <input type="text" on:input={e => {text = e.target.value}} value={text}/> -->
<input type="text" bind:value={text}/>
<button on:click={() => {text = 'clicked'}}>click</button>