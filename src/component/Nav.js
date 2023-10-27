import React from "react";

const Nav = (props) => {
    const lis = [];
    for(let i=0; i<props.topics.length; i++) {
        let t = props.topics[i];
        lis.push(
        <li key={t.id}>
            <a id={t.id} href={"/read/" + t.id} onClick={(evnet) => {
                evnet.preventDefault();
                props.onChangeMode(Number(evnet.target.id))
            }}>{t.title}</a>
        </li>)
    }
    return (
        <>
            <ol>
                {lis}
            </ol>
        </>
    );
}

export default Nav;