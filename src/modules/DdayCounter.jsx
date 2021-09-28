/* 액션 타입 만들기 */
// 액션타입을 정의할 때 reducer/ACTION_TYPE형태로 적어줘야 한다. 
// 이렇게 접두사를 붙여주는 이유는 서로 다른 리듀서에서 액션이름이 중첩되는것을 방지하기 위해서
const COUNTER = 'DdayCounter/COUNTER';

/* 액션 생성함수 만들기 */
// 액션 생성함수를 만들고 export 키워드를 사용해서 내보내기
export const Counter = (user_year,user_month,user_day) => ({ type: COUNTER, user_year,user_month,user_day});

/* 초기 상태 선언 */
const initialState = [
  {
      user_year: 0,
      user_month: 0,
      user_day: 0
  }
]


// const now = new Date();
// let distance = state - now;
// if(distance < 0){
//     return false;
// }
// let days = Math.floor(distance / (1000 * 60 * 60 * 24));
// let day = days.toString();

/* 리듀서 선언 */
// 리듀서는 export default 로 내보내주세요.
export default function DdayCounter(state = initialState, action) {
    switch (action.type) {
      case 'COUNTER':
        return {
          user_year: action.user_year, 
          user_month: action.user_month, 
          user_day: action.user_day
        };
      default:
        return state;
    }
  }