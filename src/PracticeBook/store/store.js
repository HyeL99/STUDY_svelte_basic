import { writable } from 'svelte/store';
// svelte/store => {writable, readable, derived, get}

/*
    const { subscribe, set, update } = writable(초기값);
    - subscribe : store의 값이 변경되면 자동으로 반영하는 역할
    - set : store의 값을 초기화하는 옵션
    - update : 값의 일부를 변경, 주로 커스텀 메소드를 만들 때 사용
    - set vs update : set이 store 전체를 초기화한다면 update는 값의 일부만 변경시킴
*/

export const storeName = writable(''); // 05_store

export const todos = writable([]); // 06_todo_basic


// export const count = writable(0);
const createCount = () => {
    const {subscribe, set, update}  = writable(0);

    const increment = () => update(count => count + 1);
    const decrement = () => update(count => count - 1);
    const reset = () => set(0);

    return {
        subscribe,
        increment,
        decrement,
        reset
    }
}
export const count = createCount();