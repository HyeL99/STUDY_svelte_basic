<script>
	import Todo from './components/06_Todo.svelte';
    import { todos } from './store/store.js';
	
	const name = '06_투두리스트예제';
	let title = "";
	let id = 0;

	const createTodo = () => {
		if(!title.trim()){
			alert('내용을 입력해주세요.')
		} else {
			$todos.push({id, title: title.trim()});
			$todos = $todos; /* !!!!!!!!! 중요 !!!!!!!!! */
			/*
				svelte는 값이 할당될 때 상태 변화를 감지한다.
				따라서 todo.push()를 한 상태에서는 상태변화를 감지하지 못하여
				자기할당(todos = todos)을 통해 새로운 상태변화를 감지시켜주어야한다.
			*/
			id++;
			title = '';
		}
	}
</script>

<h1>{name}</h1>

<input type="text" bind:value={title} on:keydown={e => e.key === 'Enter' && createTodo()} />
<button on:click={createTodo}>Create Todo</button>

<ul>
	{#each $todos as todo}
		<Todo {todo} {todos}/>
		<!-- <Todo {todo} todos={$todos}/> -->
		<!--
			todos={$todos}로 사용하면 todos에 그냥 배열이 넘어가게 된다.
			배열만 넘어가게 되면 store 객체 기능을 사용할 수 없어서
			값의 업데이트가 불가능해지므로 객체 상태 전부를 props로 넘겨준다.
			컴포넌트 내에서 사용할 때에는 달러사인($)이 붙은 상태로 사용하면 된다.
		-->
	{/each}
</ul>