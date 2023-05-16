import React, {useState} from "react";
import MainForm from "./MainForm";
import MainList from "./MainList";

const Main = () => {
    const [userData, setUserData] = useState([]);

    const userFormDataHandler = (formData) => {
       setUserData((prevFormData) => {
        return [formData, ...prevFormData]
       });
    };

    return (
        <main>
            <div className="main_container">
                <MainForm onAddData={userFormDataHandler} />
                <MainList onUserData={userData} />
            </div>
        </main>
    );
}

export default Main;