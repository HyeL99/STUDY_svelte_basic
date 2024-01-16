<script>
	export let todo;
	export let todos;

	let isEdit = false;
	let editTitle = '';

	const clearTitle = () => {
		editTitle  = '';
	};
	const onEdit = () => {
		clearTitle();
		isEdit = true;
	};
	const offEdit = () => {
		isEdit = false;
	};
	const deleteTodo = () => {
		$todos = $todos.filter(t => t.id !== todo.id);
	};
	const updateTodo = () => {
		if (!editTitle.trim()) {
			alert('수정사항을 입력해주세요.');
		} else {
			todo.title = editTitle.trim();
			offEdit();
		}
	};
</script>
{#if isEdit}
	<li>
		<input type="text" bind:value={editTitle} on:keydown={(e) => {e.key === 'Enter' && updateTodo()}}/>
		<button on:click={updateTodo}>OK</button>
		<button on:click={offEdit}>Cancel</button>
	</li>
{:else}
	<li>
		<b>{todo.title}</b>
		<button on:click={onEdit}>Edit</button>
		<button on:click={deleteTodo}>Delete</button>
	</li>
{/if}
