import UploadData from './components/UploadData'
import ShapleyGraph from './components/ShapleyGraph'
import GroupTable from './components/GroupTable';
import DistrbutionGraph from './components/DistrubtionGraph';



function App() {
  return (
    <div className='mainDiv'>
      <br />
      <h1>Detection of Groups With Biased Reprensentation in Ranking</h1>
      <br /><br />
      <div className='test'>
        {/* <UploadData /> */}
      </div>
      {/* {<ShapleyGraph data={[33.49, 8.04, 5.92, 5.26, -2.36, 1.94]}
        attributes={['final grade', 'second period grade', "mother's education", 'first period grade', "number of past class failures", "father's education"]} />} */}
      {/* <GroupTable /> */}
      <DistrbutionGraph />
    </div>
  );
}

export default App;
