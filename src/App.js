import './App.css';
import Header from './component/Header';
import Nav from './component/Nav';
import Article from './component/Article';
import Create from './component/Create';
import Update from './component/Update';
import { useState } from "react";


function App() {
  const [mode, setMode] = useState("WELCOME");
  const [id, setId] = useState(null);
  const [nextId, setNextId] = useState(4);
  const [topics, setTopics] = useState([
    {id:1,title:"HTML",body:"HTML is ..."},
    {id:2,title:"CSS",body:"CSS is ..."},
    {id:3,title:"Javascript",body:"Javascript is ..."}
  ])
  let content = null;
  let contextControll = null;
  if (mode === "WELCOME") {
    content = <Article title="Welcome" body="Hello, WEB" />
  }else if (mode === "READ") {
    let title, body = null;
    for (let i = 0; i < topics.length; i++) {
      if (topics[i].id === id) {
        title = topics[i].title;
        body = topics[i].body;
      }
    }
    content = <Article title={title} body={body} />;
    contextControll = <>
      <li><a href={"/update" + id} onClick={event => {
        event.preventDefault();
        setMode("UPDATE");

      }}>Update</a></li>
      <li><input type="button" value="Delete" onClick={() => {
        const newTopics = [];
        for (let i = 0; i < topics.length; i++) {
          if (topics[i].id !== id) {
            newTopics.push(topics[i]);
          }
        }
        setTopics(newTopics);
        setMode("WELCOME");
      }}/></li>
    </>
  }else if (mode === "CREATE") {
    content = <Create onCreate={(title,body) => {
      const newTopic = {id: nextId, title: title, body: body};
      const newTopics = [...topics];
      newTopics.push(newTopic);
      setTopics(newTopics);
      setMode("READ");
      setId(nextId);
      setNextId(nextId + 1);
    }} />;
  }else if (mode === "UPDATE") {
    let title, body = null;
    for (let i = 0; i < topics.length; i++) {
      if (topics[i].id === id) {
        title = topics[i].title;
        body = topics[i].body;
      }
    }
    content = <Update title={title} body={body} onUpdate = {(title,body) => {
      const newTopics = [...topics]
      const updatedTopic = {id: id, title: title, body: body}
      for (let i = 0; i < newTopics.length; i++) {
        if (newTopics[i].id === id) {
          newTopics[i] = updatedTopic;
          break;
        }
      }
      setTopics(newTopics);
      setMode("READ");
    }} />
  }
  return (
    <>
      <Header title="Web" onChangeMode={() => {
        setMode("WELCOME");
      }} />
      <Nav topics={topics} onChangeMode={(id) => {
        setMode("READ");
        setId(id);
      }} />
      {content}
      <ul>
        <li><a href="/create" onClick={evnet => {
          evnet.preventDefault();
          setMode("CREATE");
        }}>Create</a></li>
        {contextControll}
      </ul>
    </>
  );
}

export default App;
