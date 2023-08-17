// 필요한 모듈 및 컴포넌트를 불러옵니다.
import Button from "./Button";  // Button 컴포넌트를 불러옵니다. (하지만 코드에서 사용되지 않음)
import styles from "./App.module.css";  // App 컴포넌트의 스타일을 정의한 CSS 파일을 불러옵니다.
import { useState, useEffect } from "react";  // React의 useState와 useEffect 훅을 불러옵니다.

// App 컴포넌트를 정의합니다.
function App() {
  // 상태(state)를 관리하는 변수들을 선언합니다.
  const [ToDo, setToDo] = useState("");  // ToDo 항목의 상태와 이를 변경하는 함수를 정의합니다.
  const [ToDos, setToDos] = useState([]);  // ToDo 항목들의 목록 상태와 이를 변경하는 함수를 정의합니다.

  // 입력값이 변경될 때 호출되는 함수를 정의합니다.
  const onChange = (event) => setToDo(event.target.value);

  // 폼을 제출할 때 호출되는 함수를 정의합니다.
  const onSubmit = (event) => {
    event.preventDefault();  // 폼의 기본 동작을 막습니다.
    if (ToDo === "") {  // 만약 ToDo가 비어있다면 더 이상 진행하지 않습니다.
      return;
    }
    // 새로운 ToDo 항목을 기존 목록 앞에 추가하고, ToDo를 초기화합니다.
    setToDos((currentArray) => [ToDo, ...currentArray]);
    setToDo("");
  }

  console.log(ToDo);  // ToDo 상태를 콘솔에 출력합니다.

  // 컴포넌트의 UI를 반환합니다.
  return (
    <div>
      <h1>Add Your Todos</h1>
      {/* ToDo 항목을 입력하는 폼 */}
      <form onSubmit={onSubmit}>
        <input onChange={onChange} value={ToDo} type="text" placeholder="write your Todos" />
        <button>Add To Dos</button>
      </form>
      <hr />
      {/* ToDo 항목 목록을 표시하는 목록 */}
      <ul>
        {ToDos.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;  // App 컴포넌트를 내보냅니다.
