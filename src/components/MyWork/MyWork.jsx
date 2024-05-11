import React from "react";
import "./MyWork.css";
import { mywork_data } from "../../utils/data";
// import "./images/arrow-icon.png";
// import data from "../../data";

const MyWork = () =>{
  return (
    <section id="projects" className="experience-container">
            <h5>Projects</h5>
        <div className="mywork">
        <div className="mywork-container">
            {mywork_data.map((work,index) => {
                return <img className="logo" key={index} src={work.w_img} alt="" />
                    })}
                    </div>
                    <div className="mywork-showmore">
                        <p>Show More</p>
                        <img src="./images/arrow-icon.png" alt="" />
                    </div>
                </div>
    </section>
  )
}

export default MyWork;