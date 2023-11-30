import React from "react";

class ResumeMenu extends React.Component {
    render() {
        return (
            <div className='resume-menu'>
                <div className='questions-asked-div'>
                    <p>Questões feitas: {this.props.data.questionsAsked}</p><hr></hr>
                </div>
                <div className='hit-rate-div'>
                    <p>Índice de Acertos: {this.props.data.hitRate}</p><hr></hr>
                </div>
                <div className='strengths-div'>
                    <p>Pontos Fortes</p>
                    <Tags tags={this.props.data.strengths}/>
                    <hr></hr>
                </div>
                <div className='weaknesses-div'></div>
                <p>Pontos Fracos</p>
                <Tags tags={this.props.data.weaknesses}/>
                <hr></hr>
            </div>
        );
    }
}

class Tags extends React.Component {
    render() {
        return (
            <div className='subject-tags-div'>
                {this.props.tags.map(tag => (<Tag name={tag}/>))}
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