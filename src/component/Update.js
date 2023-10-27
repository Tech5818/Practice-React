import React, { useState } from "react";

const Update = (props) => {
    const [title, setTitle] = useState(props.title);
    const [body, setBody] = useState(props.body);

    return (
        <>
            <article>
                <h2>Update</h2>
                <form onSubmit={event => {
                    event.preventDefault();
                    const title = event.target.title.value;
                    const body = event.target.body.value;
                    
                    props.onUpdate(title,body);
                }}>
                    <p><input type="text" name="title" value={title} onChange={event => {
                        setTitle(event.target.value);
                    }}/></p>
                    <p><textarea name="body" value={body} onChange={event => {
                        setBody(event.target.value);
                    }}></textarea></p>
                    <p><input type="submit" value="Update" /></p>
                </form>
            </article>
        </>
    );
}

export default Update;