import React, { useState } from "react";
import Select from "react-select";
import '../App.css';
import Consts from './consts';
import GroupGraph from "./GroupGraph";
import GroupTable from './GroupTable';


const PROPOTIONAL = "propotional"
const NON_PROPOTIONAL = "non-propotional"

const optionsForData = [
    { value: "1", label: "students" },
    { value: "2", label: "2" },
    { value: "3", label: "3" },
    { value: "4", label: "load my own csv and json files" }
]

const optionsStudents = [
    { value: "school ", label: "student's school" },
    { value: "sex", label: "student's sex" },
    { value: "age", label: "student's age" },
    { value: "address", label: "student's home address tyep" },
    { value: "famsize ", label: " family size" },
    { value: "Pstatus", label: "parent's cohabitation status" },
    { value: "Medu", label: "mother's education" },
    { value: "Fedu", label: "father's education" },
    { value: "Mjob ", label: "mother's job" },
    { value: "Fjob", label: "father's job" },
    { value: "reason", label: "student's guardian" },
    { value: "guardian", label: "student's home address tyep" },
    { value: "traveltime ", label: "home to school travel time" },
    { value: "studytime ", label: "weekly study time" },
    { value: "failures ", label: "number of past class failures" },
    { value: "schoolsup", label: "extra educational support" },
    { value: "famsup  ", label: "family educational support" },
    { value: "paid", label: "extra paid classes within the course subject" },
    { value: "activities", label: "extra-curricular activities" },
    { value: "nursery", label: "attended nursery school" },
    { value: "higher  ", label: "wants to take higher education" },
    { value: "internet", label: "Internet access at home" },
    { value: "romantic", label: "with a romantic relationship" },
    { value: "famrel", label: "quality of family relationships" },
    { value: "freetime  ", label: "free time after school" },
    { value: "goout", label: "going out with friends" },
    { value: "Dalc", label: "workday alcohol consumption" },
    { value: "Walc", label: "weekend alcohol consumption" },
    { value: "health", label: "current health status" },
    { value: "absences", label: "number of school absences" },
    { value: "G1", label: "first period grade" },
    { value: "G2", label: "second period grade" },
    { value: "G3 ", label: "final grade" }
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
    const [kMin, setKMin] = useState(11);
    const [kMax, setKMax] = useState(13);
    const [threshold, setThreshold] = useState(2);
    const [alpha, setAlpha] = useState(0.05);
    const [attributes, setAttributes] = useState(["sex", "age_cat", "race_factor"]);
    const [groupTableData, setGroupTableData] = useState([]);
    const [ifShowgroupTableData, setIfShowgroupTableData] = useState(false);
    const [ifShowForm, setIfShowForm] = useState(true);

    // const onAddAttrubute = (choice) => {
    //     setAttributes(attributes.push(choice.value));
    // }

    const onAddAttrubute = event => {
        console.log("&&: " + event[event.length - 1].value);
        console.log(event.length, typeof (attributes), attributes)
        const temp_att = [...attributes, event[event.length - 1].value]
        setAttributes(temp_att);
        console.log(event.length, typeof (attributes), attributes)
    };

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
            return optionsStudents;
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
            alpha: alpha,
            attributes: attributes
        };
        console.log("^^^: " + attributes)
        fetch("http://localhost:3000/getGroups", {
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
                setGroupTableData(data2);
                setIfShowgroupTableData(true)
                setIfShowForm(false)
            })
            .catch(error => console.error(error));

    }

    return (
        <div>
            {ifShowForm ? (<form className="select">
                <label> please choose data set: </label>
                <Select options={optionsForData} onChange={(choice) => onChooseDataSet(choice)} styles={{ className: 'margin' }} />
                <div>
                    {ifUpload && <input type="file" name="json" onChange={() => { }} />}
                    {ifUpload && <input type="file" name="csv" onChange={() => { }} />}
                </div>
                {!ifUpload && <label>please choose attributes:</label>}
                {!ifUpload && <Select isMulti options={getOptions()} onChange={onAddAttrubute} />}
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
            </form>) : null}
            {ifShowgroupTableData ? <GroupGraph data={groupTableData} /> : null}
        </div>
    )
}

export default UploadData;