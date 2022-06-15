import LeftSidebar from "./LeftSideBar";
import RightSideBar from "./RightSideBar";
import Main from "./Main";




function App() {
  return (
    <div className="App">
      <LeftSidebar />
      <Main />
      <RightSideBar />
      {/* <div className="messages">Messages</div> */}
    </div>
  );
}

export default App;
