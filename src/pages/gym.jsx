import React from "react";

import Header from "../components/header";
import ResumeMenu from "../components/resumeMenu";
import QuestionFrame from "../components/question";
import ControlMenu from "../components/controlMenu";

import '../css/gym.css';
import Footer from "../components/footer";

class Gym extends React.Component {
    render() {
        return (
            <div>
                <div className='gym-content'>
                    <ResumeMenu data={this.props.data}/>
                    <QuestionFrame question={this.props.question} subject={this.props.subject}/>
                    <ControlMenu tags={this.props.tags}/>
                </div>
                <Footer/>
            </div>

        );
    }
}

export default Gym;