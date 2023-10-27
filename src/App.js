import { useReducer, useState } from 'react';
import './App.css';
import Student from "./Student";

const defaultValue = {
  count: 0,
  students: [],
};


const reducer = (state, action) => {
  switch (action.type) {
    case "add_student" :
      const name = action.load.name;
      const newStudent = {
        id : Date.now(),
        name,
        isHere: false,
      }
      return {
        count: state.count + 1,
        students: [...state.students, newStudent],
      };
    case "delete_student" :
      return {
        count: state.count - 1,
        students: state.students.filter(student => student.id !== action.load.id),
      }
    case "mark_student" :
      return {
        count: state.count,
        students: state.students.map(student => {
          if (student.id === action.load.id) {
            return {...student, isHere: !student.isHere}
          }
          return student
        })
      }
    default: 
      return state; 
  }
};


function App() {
  const [name, setName] = useState('');
  const [studentInfo, dispatch] = useReducer(reducer, defaultValue);

  const handleAddStudent = () => {
    dispatch({type: "add_student", load: {name}});
    setName("");
  }

  return (
    <>
      <h1>출석부</h1>
      <p>학생수 : {studentInfo.count}명</p>
      <input type='text' placeholder='학생의 이름을 입력하세요.' value={name} 
      onChange={e => setName(e.target.value)}/>
      <button onClick={handleAddStudent}>추가</button>
      {studentInfo.students.map((students) => {
        return <Student key={students.id} name={students.name} dispatch={dispatch} id={students.id} isHere={students.isHere}/>;
      })}
    </>
  );
}

export default App;
