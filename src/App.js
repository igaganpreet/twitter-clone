import LeftSidebar from "./LeftSideBar";
import RightSideBar from "./RightSideBar";
import Main from "./Main";
// import Messages from "./Messages";



function App() {
  return (
    <div className="App">
      <LeftSidebar />
      <Main />
      <RightSideBar />
      {/* <Messages />   */}
    </div>
  );
}

export default App;
