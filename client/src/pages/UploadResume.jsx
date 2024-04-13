import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import { apiRequest, apiRequest2 } from "../utils";
import { useSelector,useDispatch } from "react-redux";


function UploadResume() {
    const [title,setTitle] = useState("");
    const [file,setFile] = useState("");
    const { user } = useSelector((state) => state.user);

    const submitImage = async (e) =>{
        e.preventDefault();
        const formData = new FormData();

        formData.append("title",title)
        formData.append('file',file)
        console.log(title,file)

        const result = await axios.get(
          "http://localhost:8800/api-v1/user/uploadresume"
        );
        console.log(result)
    }

  return (
    <div className="App" style={{ display: "flex", justifyContent: "center", alignItems: "center", paddingTop: "30px", flexDirection: "column" }}>
      <form className="formStyle" onSubmit= {submitImage}style={{ padding: "20px", border: "1px solid black", width: "25%", textAlign: "center" }}>
        <h4>Upload Resume to parse</h4>
        <br />
        <input type="text" className="form-control" placeholder="Title" required onChange={(e) => setTitle(e.target.value)}/>
        <br />
        <input type="file" className="form-control" accept="application/pdf" onChange={(e) => setFile(e.target.files[0])} />
        <br />
        <button className="btn btn-primary" type="submit" >
          Submit
        </button>
      </form>
      <br />
      <br />
    </div>
  );
}

export default UploadResume;
