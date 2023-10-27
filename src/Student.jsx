import React from "react";

const Student = ({name, dispatch, id, isHere}) => {
    const handleDeleteStudent = () => {
        dispatch({type: "delete_student", load: {id}});
    }
    const handleToggle = () => {
        dispatch({type: "mark_student", load: {id}})
    }

    return (
        <div>
            <span style={{
                textDecoration: isHere ? "line-throught" : "none",
                color: isHere ? "lightgray" : "black",
            }} onClick={handleToggle}>{name}</span>
            <button onClick={handleDeleteStudent}>삭제</button>
        </div>
    )
}

export default Student;