import React, { Fragment } from "react";
import EducationImg from "../asset/logo.png";
import EducationData from "../../Data/EducationData";
import classes from "./education.module.css";
import { useSelector } from "react-redux";

function Education() {
    const nonThemeColor = useSelector(state => state.nonThemeColor);
    const uiColor=useSelector(state=>state.uiColor);

    const languagesDone=EducationData.codingStatus;
    return (
        <Fragment>
            <div className={classes.educationHeader} id="education">
                <div className={classes.eduImg}>
                    <img src={EducationImg} alt="" srcset="" />
                </div>
                <div className={classes.educationCard}>
                    <h1 style={{color:uiColor}}>Education</h1>
                    <h2 style={{ color: nonThemeColor }}>Coding Statistics and Certifications</h2>
                    <div className={classes.codingInfo}>
                        {
                            languagesDone.map((item,index) =>
                                <div key={index} className={classes.progressBar}>
                                    <label htmlFor={item.name}>{item.name}</label>
                                    <progress id={item.name} value={item.percentDone} max="100"></progress>
                                    {/* <h5>{item.percentDone}%</h5> */}
                                </div>
                            )
                        }
                    </div>
                </div>
            </div>
            
        </Fragment>
    )
}
export default Education;