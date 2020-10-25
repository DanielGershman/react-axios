import "./App.css";
import { useEffect } from "react";
import Bootstrap from "bootstrap/dist/css/bootstrap.min.css";
// import axios from "axios";
import setToken, { setBaseUrl } from "./config/axios";
import LoginComponent from "./components/LoginComponent";
import AdminComponent from "./components/AdminComponent";

function App() {
    useEffect(() => {
        setBaseUrl();
    }, []);
    // const handleClickGet = async () => {
    //     axios
    //         .get(process.env.REACT_APP_BASE_URL + "/error", { params: { id: 12344 } })
    //         .then((res) => {
    //             console.log(res);
    //         })
    //         .catch((err) => console.log(err));
    // };
    // const handleClickPost = async () => {
    //     // const axiosOptions = {
    //     //     headers: {
    //     //         token: "jmdhfagj345r7ugy384957y3894g",
    //     //     },
    //     // };
    //     axios
    //         .post(
    //             "/",
    //             {
    //                 id: 1234,
    //             }
    //             // axiosOptions
    //         )
    //         .then((res) => {
    //             console.log(res);
    //         })
    //         .catch((err) => console.log(err));
    // };

    return (
        <div className="App">
            <header className="App-header">
                {/* <h1>Hello</h1>
                <button className="btn bg-dark text-light m-1 p-1" onClick={handleClickGet}>
                    axios get
                </button>
                <button className="btn bg-dark text-light m-1 p-1" onClick={handleClickPost}>
                    axios post
                </button> */}
                <LoginComponent />

                <AdminComponent />
            </header>
        </div>
    );
}

export default App;
