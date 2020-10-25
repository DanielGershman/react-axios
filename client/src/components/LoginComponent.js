import React, { useState } from "react";
import axios from "axios";
import setToken from "./../config/axios";

function LoginComponent() {
    const [usTextState, setusTextState] = useState({
        us: "",
        ps: "",
    });
    const handleClickPost = async () => {
        axios
            .post("/login", usTextState)
            .then((res) => {
                console.log(res);
                setToken(res.data.token);
            })
            .catch((err) => {
                console.log(err);
                setToken("");
            });
    };

    const handleTextChange = async (event) => {
        console.log(event.target);
        let oldusTextState = { ...usTextState };
        oldusTextState[event.target.name] = event.target.value;
        setusTextState(oldusTextState);
    };

    return (
        <div>
            <h1>Login Component</h1>
            <input className="m-1" type="text" name="us" onChange={handleTextChange} placeholder="Username" value={usTextState.us} /> <br />
            <small className="form-text text-muted">{usTextState.us}</small>
            <br />
            <input type="password" name="ps" onChange={handleTextChange} placeholder="Password" value={usTextState.ps} /> <br />
            <small className="form-text text-muted">{usTextState.ps}</small>
            <br />
            <button className="btn bg-dark text-light m-1 p-1" onClick={handleClickPost}>
                Submit(axios post)
            </button>
        </div>
    );
}

export default LoginComponent;
