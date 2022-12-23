import UploadData from './UploadData'
import ShapleyGraph from './ShapleyGraph'
import GroupTable from './GroupTable';
import DistrbutionGraph from './DistrubtionGraph';
import ReactDOM from "react-dom/client";
import {
    createBrowserRouter,
    RouterProvider,
} from "react-router-dom";

export default function Root() {
    return (
        <div className='mainDiv'>
            <br />
            <h1>Detection of Groups With Biased Reprensentation in Ranking</h1>
            <br /><br />
            <div className='test'>
                <UploadData />
            </div>
            {/* {<ShapleyGraph data={[33.49, 8.04, 5.92, 5.26, -2.36, 1.94]}
          attributes={['final grade', 'second period grade', "mother's education", 'first period grade', "number of past class failures", "father's education"]} />} */}
            {/* <GroupTable /> */}
            {/* <DistrbutionGraph /> */}
        </div>
    );
};