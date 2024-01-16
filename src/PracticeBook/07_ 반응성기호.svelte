<script>
	const name = '07_반응성기호';

	let count = 0;

	/* 반응성 기호 ($: )
		"$: " 뒤에 있는 함수 내의 변수값이 변화할 때마다 실행되는 함수

		코드가 한 줄일 때는 그냥 쓰고, 여러줄일 때는 '중괄호({})'로 묶는다.
		if절과 같이 묶인 상태로 사용하는 조건문 또는 반복문은 중괄호로 묶지 않고 사용해도 된다.
	*/
	$: doubled = count * 2;
	$:if(count >= 10) {
		alert('카운트가 10을 넘었습니다.');
		count = 9;
	}
	$: {
		console.log('count', count, 'doubled', doubled);
	}
	
	const handleClick = () => {
		count += 1;
	};
</script>

<h1>{name}</h1>
<button on:click={handleClick}> <!-- '중괄호({})'로 묶으면 삼항연산자 사용 가능 -->
	클릭수 {count} {count === 0 ? '' : count === 1 ? 'time' :'times'}
</button>
<p>{count} 두배는 {doubled}</p>