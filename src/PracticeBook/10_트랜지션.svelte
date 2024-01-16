<style>
	.wrap {
		padding: 1em;
		background: crimson;
		color: white;
		margin-top: 1em;
	}
</style>
<script>
	import { fade, slide, blur, fly, scale, draw } from 'svelte/transition';
	import { bounceInOut, backOut, elasticInOut } from 'svelte/easing';
	
	const name = '10_트랜지션';

	let visibles = {
		fade: false,
		slide: false,
		blur: false,
		fly: false,
		scale: false,
		draw: false,
		inOut: false,
	};

	const changeVisible = (type) => {
		visibles[type] = !visibles[type];
	};
</script>

<!--
	Transition : 화면전환효과
	- fade
	- slide
	- blur
	- fly
	- scale
	- draw

	+ delay : 지정한 시간 후 전환효과 실행
	+ duration : 지정한 시간 동안 전환효과 실행
	+ easing : 샘플링된 전환효과들의 옵션
    + opacity : 불투명도
    + amount : 흐릿한 효과의 크기
    + x, y : 설정한 좌표에서 날아옴
    + start : 효과의 시작 시 스케일의 사이즈
    + speed : draw 효과의 선 나타나는 속도
-->

<h1>{name}</h1>

{#each Object.keys(visibles) as key}
	<button on:click={() => changeVisible(key)}>{key}</button>
{/each}

{#if visibles.fade}
	<div transition:fade class=wrap>
		<h1>fade 예제</h1>
	</div>
{/if}
{#if visibles.slide}
	<!-- <div transition:slide={{duration: 1000, delay: 1000}} class='wrap'> -->
	<div transition:slide={{easing: bounceInOut}} class='wrap'>
		<h1>slide 예제</h1>
	</div>
{/if}
{#if visibles.blur}
	<div transition:blur={{opacity: 100, amount: 100}} class='wrap'>
		<h1>blur 예제</h1>
	</div>
{/if}
{#if visibles.fly}
	<div transition:fly={{x:200, y:100, opacity:0}} class='wrap'>
		<h1>fly 예제</h1>
	</div>
{/if}
{#if visibles.scale}
	<div transition:scale={{start: 10}} class='wrap'>
		<h1>scale 예제</h1>
	</div>
{/if}

{#if visibles.inOut}
	<div in:fade out:slide={{duration: 500}} class='wrap'>
		<h1>inOut 예제</h1>
	</div>
{/if}

{#if visibles.draw}
	<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 103 124'>
		<g>
			<path
				transition:draw={{speed: 0.1}}
				style="stroke:#ff3e00; stroke-width: 1.5;"
				d='M45.41,108.86A21.81,21.81,0,0,1,22,100.18,20.2,20.2,0,0,1,18.53,84.9a19,19,0,0,1,.65-2.57l.52-1.58,1.41,1a35.32,35.32,0,0,0,10.75,5.37l1,.31-.1,1a6.2,6.2,0,0,0,1.11,4.08A6.57,6.57,0,0,0,41,95.19a6,6,0,0,0,1.68-.74L70.11,76.94a5.76,5.76,0,0,0,2.59-3.83,6.09,6.09,0,0,0-1-4.6,6.58,6.58,0,0,0-7.06-2.62,6.21,6.21,0,0,0-1.69.74L52.43,73.31a19.88,19.88,0,0,1-5.58,2.45,21.82,21.82,0,0,1-23.43-8.68A20.2,20.2,0,0,1,20,51.8a19,19,0,0,1,8.56-12.7L56,21.59a19.88,19.88,0,0,1,5.58-2.45A21.81,21.81,0,0,1,85,27.82,20.2,20.2,0,0,1,88.47,43.1a19,19,0,0,1-.65,2.57l-.52,1.58-1.41-1a35.32,35.32,0,0,0-10.75-5.37l-1-.31.1-1a6.2,6.2,0,0,0-1.11-4.08,6.57,6.57,0,0,0-7.06-2.62,6,6,0,0,0-1.68.74L36.89,51.06a5.71,5.71,0,0,0-2.58,3.83,6,6,0,0,0,1,4.6,6.58,6.58,0,0,0,7.06,2.62,6.21,6.21,0,0,0,1.69-.74l10.48-6.68a19.88,19.88,0,0,1,5.58-2.45,21.82,21.82,0,0,1,23.43,8.68A20.2,20.2,0,0,1,87,76.2a19,19,0,0,1-8.56,12.7L51,106.41a19.88,19.88,0,0,1-5.58,2.45'
			/>
		</g>
	</svg> 
{/if}