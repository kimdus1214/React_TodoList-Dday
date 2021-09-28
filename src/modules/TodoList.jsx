// 액션타입을 정의할 때 reducer/ACTION_TYPE형태로 적어줘야 한다. 
// 이렇게 접두사를 붙여주는 이유는 서로 다른 리듀서에서 액션이름이 중첩되는 것을 방지하기 위해서
const CREATE = 'TodoList/CREATE';
const TOGGLE = 'TodoList/TOGGLE';
const REMOVE = 'TodoList/REMOVE';

/* 액션 생성함수 선언 */
let nextId = 1;
export const Create = text => ({
    type: CREATE,
    todo: {
        id: nextId++,
        text
    }
});
export const Toggle = id => ({
    type: TOGGLE,
    id
});
export const Remove = id => ({
    type: REMOVE,
    id
});

/* 초기 상태 선언 */
// 리듀서의 초기 상태는 꼭 객체 타입일 필요 없다.
// 배열이여도 되고, 원시 타입 (숫자, 문자열, 불리언 이여도 상관 없다.
const initialState = [
    {
      id: 1,
      text: '공부하기',
      done: false
    } 
];

export default function TodoList(state = initialState, action){
    switch (action.type){
        case CREATE:
            return state.concat(action.todo);
        case TOGGLE:
            return state.map(todo=>todo.id === action.id ? {...todo, done: !todo.done } : todo);
        case REMOVE:
            return state.filter(todo=>todo.id !== action.id);
        default:
            throw state;
    }
}