import LeftSidebar from "./LeftSideBar";
import RightSideBar from "./RightSideBar";
import Main from "./Main";
import Messages from "./Messages";
import Header from "./Header";
import Footer from "./Footer";
import React from "react"
function App() {

  let width = window.innerWidth;
  let [mainArea,setMainArea]=React.useState(<Main />)
  let [title,setTitle]=React.useState("Home")
  
  function updateTitle(newtitle){
    setTitle(newtitle)
    if(newtitle==="Messages"){
      setMainArea(<Messages />)
    }
    else{
      setMainArea(<Main />)
    }
  }

  if(width>480){
    return (
      <div className="App">
        <LeftSidebar />
        <Main />
        <RightSideBar />
        <Messages />  
      </div>
    );
  }
  else{
    return (
      <div className="App">
        <Header title={title}/>
        {mainArea}
        <Footer updateTitle={updateTitle}/>
      </div>
    );
  }
  
}

export default App;
