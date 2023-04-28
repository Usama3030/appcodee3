import React from "react";
import { NavLink} from 'react-router-dom'
import './style.css';
//styleline 6

function Home() {

  return (
   <div className="home">
 
      <div className="container-fluid">
        <div className="row g-3 my-2">
        <div className="col-md-3 p-1">
        <NavLink style={{ textDecoration: "none", color: "black" }} to="/Attendance"> 
         <div className="dashboard p-3 bg-warning shadow-sm d-flex justify-content-around align-items-center rounded">
              <div>
                <h2 className="fs-2">Attendance</h2>
              </div>
            </div></NavLink>
          </div>
          <div className="col-md-3 p-1">
          <NavLink style={{ textDecoration: "none", color: "black" }} to="/Reports">
            <div className="dashboard p-3 bg-secondary shadow-sm d-flex justify-content-around align-items-center rounded">
              <div>
                <h2 className="fs-2">Report</h2>
              </div>
            </div></NavLink>
          </div>
          <div className="col-md-3 p-1">
          <NavLink style={{ textDecoration: "none", color: "black" }} to="/Professors">
            <div className="dashboard p-3 bg-warning shadow-sm d-flex justify-content-around align-items-center rounded">
              <div>
                <h3 className="fs-2">Professor</h3>
              </div>
            </div></NavLink>
          </div>
          <div className="col-md-3 p-1">
          <NavLink style={{ textDecoration: "none", color: "black" }} to="/Schedule/scheduletable">
            <div className="dashboard p-3 bg-primary shadow-sm d-flex justify-content-around align-items-center rounded">
              <div>
                <h3 className="fs-2">TimeTable</h3>
              </div>
            </div>
            </NavLink>
          </div>
         
          <div className="col-md-3 p-1">
          <NavLink style={{ textDecoration: "none", color: "black" }} to="/Schedule">
            <div className="dashboard p-3 bg-primary shadow-sm d-flex justify-content-around align-items-center rounded">
              <div>
                <h3 className="fs-2">Schedule</h3>
              </div>
            </div></NavLink>
          </div>
          <div className="col-md-3 p-1">
          <NavLink style={{ textDecoration: "none", color: "black" }} to="/NoticeBoard">
            <div className="dashboard p-3 bg-warning shadow-sm d-flex justify-content-around align-items-center rounded">
              <div>
                <h3 className="fs-2">NoticePage</h3>
              </div>
            </div></NavLink>
          </div>
          <div className="col-md-3 p-1">
          <NavLink style={{ textDecoration: "none", color: "black" }} to="/Notices">
            <div className="dashboard p-3 bg-secondary shadow-sm d-flex justify-content-around align-items-center rounded">
              <div>
                <h3 className="fs-2">Notices</h3>
              </div>
            </div></NavLink>
          </div>
          <div className="col-md-3 p-1">
          <NavLink style={{ textDecoration: "none", color: "black" }} to="/Biometric Machine">
            <div className="dashboard p-3 bg-warning shadow-sm d-flex justify-content-around align-items-center rounded">
              <div>
                <h3 className="fs-2">Biometric Professor</h3>
              </div>
            </div></NavLink>
          </div>
          <div className="col-md-3 p-1">
          <NavLink style={{ textDecoration: "none", color: "black" }} to="/Login">
            <div className="dashboard p-3 bg-success shadow-sm d-flex justify-content-around align-items-center rounded">
              <div>
                <h3 className="fs-2">Admin</h3>
              </div>
            </div></NavLink>
          </div>
        </div>
        
      </div>
      </div>
  );
}

export default Home;
