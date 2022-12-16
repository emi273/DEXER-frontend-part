import './App.css';
import ReactDOM from 'react-dom';
import UploadData from './components/UploadData'
import ShapleyGraph from './components/ShapleyGraph'
import { GroupHeading } from 'react-select/dist/declarations/src/components/Group';
import GroupTable from './components/GroupTable';



function App() {
  return (
    <div className='mainDiv'>
      <h1>biasd group</h1>
      <div className='test'>
        <UploadData />
      </div>
      {/* <ShapleyGraph data={[-100, 430, 448, 470, 540, 580, 690, 1100, 1200, 1380]}
       attributes={['South Korea', 'Canada', 'United Kingdom', 'Netherlands', 'Italy', 'France', 'Japan','United States', 'China', 'Germany']} /> */}
       <GroupTable />
    </div>
  );
}

export default App;
