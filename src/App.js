
import './App.css';
import UserTable from './Components/UserTable';

function App() {
  const dataSource = 'https://jsonplaceholder.typicode.com/posts';
  const pageSize=5;
  return (
    <div className="App">
      
      <UserTable dataSource={dataSource} pageSize={pageSize}/>
    </div>
  );
}

export default App;
