## Movie review app | 영화리뷰앱

- [o] Router 설정
- [o] 컴포넌트, 폴더 등 설정
- [o] Api 설정
- [o] Header, Footer 컴포넌트 구성
- [o] Loading 컴포넌트 구성
- [o] 웹폰트 설정
- [o] 각 페이지 UI 구성과 반응형
- [o] Helmet
- [] Header scroll Event
- [] Deploy !! 최종

## 설치 항목

- [o] react-router-dom
- [o] styled-components
- [o] styled-reset
- [] swiper
- [] font-awesome
- [] react-hook-form
- [] helmet-async
- [] react-icons

---

react-life-cycle
=> 라이프사이클 = 컴포넌트의 수명주기
constructor(생성자)

api 받아올 시 해당페이지가 터질 수 있을 경우
예외 처리 하기
에외처리 했을 때 사용했던 코드
if(조건문)

- 조건이 너무 많아 사용이 어려움

\*예외처리(2가지)

1. 컴파일 에러
   =>컴퓨터번역에러
   =>프로그램 실행되기 전에 발생하는 오류
2. 런타임 에러
   =>프로그램이 실행 중 발생하는 오류

\*try ~catch(사용)
=>예외가 발생할 거 같은 코드를 제어함
try{
예외 발생 가능성이 있는 코드작성(문제발생)
}catch(변수명(error)){
예외가 발생했을 때 처리
}finally{
예외와 상관없이 무조건 실행해야하는 코드
}

// (() => {})();
// => useEffect 사용시 함수를 사용하는데 코드를 줄이는 방법

// // asyne , await =>비동기 사용 할 때 씀

웹표준을 안 지켰을 때 - 검색불가(노출이 안됌)

map
=> 배열에만 사용됌
ex)
const data = [
         {
            id: 0,
            title: "title_1"
            desc: 컨텐츠 타이틀 4번
         }
      ] 
      사용법
      data.map(변수명(con) => (
      con.사용할 내용
      ))

api / fetch
=> const fetch = require("node-fetch"); <= import하는 방법
fetch = > api를 사용할 때 요청할 때 필요함

api---
fetch (a, b).then(())
a = 기본url b = options
promise = 비동기

useQuery
=>

axios
=>

useParams
=>

helmet
=>



Swiper
=>



globalStyled
=>


