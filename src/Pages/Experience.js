import React from "react";
import {VerticalTimeline, VerticalTimelineElement} from 'react-vertical-timeline-component'
import 'react-vertical-timeline-component/style.min.css'
import SchoolIcon from '@mui/icons-material/School'
import WorkIcon from '@mui/icons-material/Work'

const Experience = () => {
    return(
        <div className="experience">
            <VerticalTimeline lineColor="#3e497a">
                <VerticalTimelineElement 
                className="vertical-timeline-element--education"
                date = "2014-2015"
                iconStyle = {{background: "#3e497a", color: "#fff"}}
                icon = {<SchoolIcon/>}
                >
                    <h3 className="vertical-timeline-element-title">Ratnam High School, Gudur, Andhra Pradesh</h3>
                    <p>SSC with 93%</p>
                </VerticalTimelineElement>
                <VerticalTimelineElement 
                className="vertical-timeline-element--education"
                date = "2015-2017"
                iconStyle = {{background: "#3e497a", color: "#fff"}}
                icon = {<SchoolIcon/>}
                >
                    <h3 className="vertical-timeline-element-title">Sri Gayatri Junior College, Nellore, Andhra Pradesh</h3>
                    <p>Intermediate(MPC) - 97%</p>
                </VerticalTimelineElement>
                <VerticalTimelineElement 
                className="vertical-timeline-element--education"
                date = "2017-2021"
                iconStyle = {{background: "#3e497a", color: "#fff"}}
                icon = {<SchoolIcon/>}
                >
                    <h3 className="vertical-timeline-element-title">Narayana Engineering College, Gudur, Andhra Pradesh</h3>
                    <p>B.tech(Computer Science Engineering) - 77%</p>
                </VerticalTimelineElement>
                <VerticalTimelineElement 
                className="vertical-timeline-element--education"
                date = "2021-present"
                iconStyle = {{background: "#3e497a", color: "#fff"}}
                icon = {<WorkIcon/>}
                >
                    <h3 className="vertical-timeline-element-title">Jr.Software Engineer - Cognizant Technology Solutions</h3>
                    <p>.NET Developer</p>
                </VerticalTimelineElement>
            </VerticalTimeline>
        </div>
    )
}

export default Experience