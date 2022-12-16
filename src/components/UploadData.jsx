import React, { useState } from "react";
import Select from "react-select";
import '../App.css';
import Consts from './consts'


const PROPOTIONAL = "propotional"
const NON_PROPOTIONAL = "non-propotional"

const optionsForData = [
    { value: "1", label: "students" },
    { value: "2", label: "2" },
    { value: "3", label: "3" },
    { value: "4", label: "load my own csv and json files" }
]

const optionsCompass = [
    { value: "9", label: "9" },
    { value: "10", label: "10" },
    { value: "11", label: "11" },
    { value: "12", label: "12" }
]
const optionsForMoeny = [
    { value: "13", label: "13" },
    { value: "14", label: "14" },
    { value: "15", label: "15" },
    { value: "16", label: "16" }
]

const optionsForAlgorithm = [
    { value: PROPOTIONAL, label: PROPOTIONAL },
    { value: NON_PROPOTIONAL, label: NON_PROPOTIONAL }
]

function UploadData(props) {
    console.log("tallll");

    const handleChangeKMin = (event) => {
        setKMin(event.target.value);
        console.log(kMin);
    }

    const handleChangeKMax = (event) => {
        setKMax(event.target.value);
        console.log(kMax);
    }

    const handleChangeThreshold = (event) => {
        setThreshold(event.target.value);
        console.log(threshold);
    }

    const handleChangeAlpha = (event) => {
        setAlpha(event.target.value);
        console.log(alpha);
    }

    //todo: upload only if value = 4, on click

    const [ifUpload, setIfUpload] = useState(false);
    const [numOfOption, setNumOfOption] = useState("1");
    const [typeOfAlgorithm, setTypeOfAlgorithm] = useState("propotional")
    const [kMin, setKMin] = useState(0);
    const [kMax, setKMax] = useState(0);
    const [threshold, setThreshold] = useState(0);
    const [alpha, setAlpha] = useState(0);


    const onChooseDataSet = (choice) => {
        setNumOfOption(choice.value)
        if (choice.value === "4") {
            console.log("bdika");
            setIfUpload(true);
            console.log((ifUpload));
        }
        else {
            setIfUpload(false);
        }
    }

    const getOptions = () => {
        if (numOfOption === "1")
            return Consts.optionsStudents;
        else if (numOfOption === "2")
            return optionsCompass;
        else
            return optionsForMoeny;
    }

    const onChooseAlgorithm = (choice) => {
        setTypeOfAlgorithm(choice.value);
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        const data = {
            numOfOption: numOfOption,
            typeOfAlgorithm: typeOfAlgorithm,
            kMin: kMin,
            kMax: kMax,
            threshold: threshold,
            alpha: alpha
        };
        fetch("http://localhost:3000/run", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(data),
        })
            .then((response) => response.json())
            .then((data2) => {
                // Do something with the response data
                console.log(data2);
            })
            .catch(error => console.error(error));

    }

    return (
        <form className="select">
            <label> please choose data set: </label>
            <Select options={optionsForData} onChange={(choice) => onChooseDataSet(choice)} styles={{ className: 'margin' }} />
            <div>
                {ifUpload && <input type="file" name="json" onChange={() => { }} />}
                {ifUpload && <input type="file" name="csv" onChange={() => { }} />}
            </div>
            {!ifUpload && <label>please choose attributes:</label>}
            {!ifUpload && <Select isMulti options={getOptions()} />}
            <label> choose type of algoirthm:</label>
            <Select label={'type_of_algorthm'} options={optionsForAlgorithm} onChange={(choice) => onChooseAlgorithm(choice)} />
            <label> Please enter k min: </label> <input type="text" name="k_min" onChange={handleChangeKMin} />
            <br />
            <label> Please enter k max: </label> <input type="text" name="k_max" onChange={handleChangeKMax} />
            <br />
            <label> Please enter threshold: </label> <input type="text" name="threshold" onChange={handleChangeThreshold} />
            <br />
            {(typeOfAlgorithm === PROPOTIONAL) && <label> Please enter alpha: </label>} {(typeOfAlgorithm === PROPOTIONAL) && <input type="text" name="alpha" onChange={handleChangeAlpha} />}
            <br />
            <button onClick={handleSubmit}>Submit</button >
        </form>
    )
}

export default UploadData;