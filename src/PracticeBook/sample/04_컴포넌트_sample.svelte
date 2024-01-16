<script>
	let name = '04_컴포넌트';
	let fruits = ['🍎', '🍌', '🍒', '🍊', '🍑'];
</script>

<h1>{name}</h1>
<h2>Fruits</h2>
<ul>
	{#each fruits as fruit}
		<li>{fruit}</li>
	{/each}
</ul>

<h2>Fruits Reverse</h2>
<ul>
	<!-- {#each fruits.reverse() as fruit} --> <!-- .reverse()는 원래 배열을 수정하기 때문에 복사해서 사용해야함 -->
	{#each [...fruits].reverse() as fruit} <!-- ... : 전개연산자(Spread Operator) -->
		<li>{fruit}</li>
	{/each}
</ul>

<h2>Fruits slice</h2>
<!--
	" .slice(시작, 끝 - 1) "는 배열의 시작부터 끝 직전까지의 아이템으로 새로운 배열을 반환한다.
-->
<ul>weee
	{#each fruits.slice(2) as fruit}
		<li>{fruit}</li>
	{/each}
</ul>
<ul>weee
	{#each fruits.slice(-2) as fruit}
		<li>{fruit}</li>
	{/each}
</ul>