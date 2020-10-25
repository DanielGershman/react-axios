import React from "react";
import axios from "axios";

const AdminComponent = () => {
    const handleOnClick = () => {
        axios
            .get("/4534")
            .then((res) => console.log(res))
            .catch((err) => console.log(err));
    };
    return (
        <div>
            <div>
                <h1>Admin component</h1>
                <button className="btn bg-dark text-light" onClick={handleOnClick}>
                    Go
                </button>
            </div>
        </div>
    );
};

export default AdminComponent;
