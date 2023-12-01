import React from "react";

import '../css/resume-menu.css';
import '../css/tag.css';

class ResumeMenu extends React.Component {
    render() {
        return (
            <div className='resume-menu-div'>
                <div className='questions-asked-div'>
                    <p className='section-title'>Suas Questões</p><hr></hr>
                    <div>
                        <p>{this.props.data.questionsAsked} realizadas!</p>
                    </div>
                </div>
                <div className='hit-rate-div'>
                    <p className='section-title'>Índice de Acertos</p><hr></hr>
                    <div>
                        <p>{100*this.props.data.hitRate}% de acerto!</p>
                    </div>
                </div>
                <div className='strengths-div'>
                    <p className='section-title'>Pontos Fortes</p><hr></hr>
                    <Tags tags={this.props.data.strengths}/>
                </div>
                <div className='weaknesses-div'>
                    <p className='section-title'>Pontos Fracos</p><hr></hr>
                    <Tags tags={this.props.data.weaknesses}/>
                </div>
            </div>
        );
    }
}

class Tags extends React.Component {
    render() {
        return (
            <div className='subject-tags-div'>
                {this.props.tags.map((tag, index) => (<Tag name={tag} key={index}/>))}
            </div>
        );
    }
}

class Tag extends React.Component {
    render() {
        return (
            <div className='subject-tag-div'>
                <a>{this.props.name}</a>
            </div>
        );
    }
}

export default ResumeMenu