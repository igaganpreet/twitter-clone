import LeftSidebar from "./LeftSideBar";
import RightSideBar from "./RightSideBar";
import Main from "./Main";
import Messages from "./Messages";
import Header from "./Header";
import Footer from "./Footer";
import React from "react"
import Notifications from "./Notifications";
import Explore from "./Explore";

function App() {

  let width = window.innerWidth;
  let [mainArea,setMainArea]=React.useState(<Main />)
  let [title,setTitle]=React.useState("Home")
  
  function updateTitle(newtitle){
    setTitle(newtitle)
    if(newtitle==="Messages"){
      setMainArea(<Messages />)
    }
    else if(newtitle==="Notifications"){
      setMainArea(<Notifications />)
    }
    else if(newtitle==="Explore"){
      setMainArea(<Explore />)
    }
    else{
      setMainArea(<Main />)
    }
  }

  if(width>480){
    return (
      <div className="App">
        <LeftSidebar updateTitle={updateTitle} />
        <div>
          <Header title={title} />
          {mainArea}
          </div>
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
        <Footer updateTitle={updateTitle} />
      </div>
    );
  }
  
}

export default App;
