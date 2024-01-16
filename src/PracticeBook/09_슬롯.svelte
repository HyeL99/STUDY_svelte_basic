<script>
	import Card2 from './components/09_Card_basic.svelte';
	import Card from './components/09_Card.svelte';
	import Widget from './components/09_Widget.svelte'
	
	const name = '09_슬롯';
</script>

<h1>{name}</h1>

<!--
	<slot>태그란?
	내부 태그에 해당되는 내용이 컴포넌트 내 slot 태그에 삽입된 형태로 나타남

	script에서 slot값을 확인하려면 '$$slots.{name}' 사용
	ex. $$slots.name, $$slots.email

	자식 컴포넌트에서 부모 컴포넌트에 상태값 전달하는 방법
	- 사용해야하는 slot에 상태값 속성 부여
		ex. <slot name="email" {hovering}>
	- 부모 컴포넌트의 적용이 필요한 곳에 let:{상태값 속성 이름} 사용
		ex. <div slot="email" let:hovering>

	svelte:fragment
	- DOM으로 감싸지 않고 바로 명명된 슬롯을 사용할 수 있는 방법
	- 무의미한 태그 사용을 방지할 수 있다.
-->
<Card2>
	<h2>안녕하세요!</h2>
	<p>이곳은 내용이 들어가는 영역입니다.</p>
</Card2>
<Card2>
	<h2>Hello Svelte</h2>
	<p>Svelte를 배우는 여러분을 환영합니다.</p>
	<p>즐거운 코딩되세요...</p>
</Card2>

<Card>
	<span slot='name'>
		홍길동
	</span>
	<span slot='address'>서울특별시<br />여의도동</span>
	<span slot='email'>my_email@example.com</span>
</Card>
<br />
<Card>
	<span slot='address'>서울특별시<br />여의도동</span> 
</Card>
<br />
<Card>
	<span slot='name'>홍길동</span>]
	<span slot='email' let:hovering>
		{#if hovering}
			<b>my_email@example.com</b>
		{:else}
			my_email@example.com
		{/if}
	</span>
</Card>

<!-- <Widget>
	<h1 slot='header'>Hello</h1>
	<div slot='footer'>
		<p>All rights reserved.</p>
		<p>Copyright (c) 2019 Svelte Industries</p>
	</div>
</Widget> -->
<Widget>
	<h1 slot='header'>Hello</h1>
	<svelte:fragment slot='footer'><!-- 무의미한 div 태그 사용 방지 -->
		<p>All rights reserved.</p>
		<p>Copyright (c) 2019 Svelte Industries</p>
	</svelte:fragment>
</Widget>