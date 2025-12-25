import Login, {Profile, Setting} from "./Usercom"
function App(){
  return(
    <div>
      <h1>Importing and Exporting component</h1>
      <Login />
      <Profile />
      <Setting />
    </div>
  )
}

export default App;