import UploadData from './components/UploadData'
import ShapleyGraph from './components/ShapleyGraph'
import GroupTable from './components/GroupTable';
import DistrbutionGraph from './components/DistrubtionGraph';
import React from "react";
import ReactDOM from "react-dom/client";
import Root from './components/root'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import GroupGraph from './components/GroupGraph';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
  },
  {
    path: "/GroupGraph",
    element: <GroupGraph />
  }
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

// export default function createRoot();







































// import UploadData from './components/UploadData'
// import ShapleyGraph from './components/ShapleyGraph'
// import GroupTable from './components/GroupTable';
// import DistrbutionGraph from './components/DistrubtionGraph';



// function App() {
//   return (
//     <div className='mainDiv'>
//       <br />
//       <h1>Detection of Groups With Biased Reprensentation in Ranking</h1>
//       <br /><br />
//       <div className='test'>
//         <UploadData />
//       </div>
//       {/* {<ShapleyGraph data={[33.49, 8.04, 5.92, 5.26, -2.36, 1.94]}
//         attributes={['final grade', 'second period grade', "mother's education", 'first period grade', "number of past class failures", "father's education"]} />} */}
//       <GroupTable />
//       {/* <DistrbutionGraph /> */}
//     </div>
//   );
// }

// export default App;
