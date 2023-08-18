# MovieWebService <br>영화 웹 서비스 리액트로 만들기

<h1>23.08.17~18 </h1>

<h3>React 바뀐 router설정, 이해될때까지 영상 무한반복</h3>

<pre>
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./routes/Home";
import Detail from "./routes/Detail";

function App() {
return (
*Router>
*Routes>
<Route path="/movie/:id" element={<Detail />} />
<Route path="/" element={<Home />} />
\*/Routes>
\*Router>
);
}

export default App;

</pre>
<h3>react-router-dom 설치</h3>
<pre>
npm install react-router-dom
</pre>

<h3>리액트 라우터 설치와 셋팅<h3>
<pre>
npx create-react-app myapp
</pre>

<h1>23.08.15</h1>
<ul>
<li>React 앱은 state를 변경할떄 모든 코드들은 항상 다시 실행됨 가끔은 괜찮음 하지만 가끔 내부 컴포넌트 몇몇코드는 처음 딱한번만 실행되고 다시는 실행되고 싶지않을 때도 있음 </li>
<li>useEffect(); 를 사용해주면된다 <a href="https://github.com/bp4sp4/MovieWebService/blob/main/my-app/src/useEffectexample.js">예제</a></li>
</ul>

<h3>리액트 앱 만들기</h3>
<pre>
npx create-react-app myapp
</pre>
<h3>서버실행</h3>
<pre>
npm start
</pre>
