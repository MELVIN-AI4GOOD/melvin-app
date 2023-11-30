import React from "react";

import Header from "../../components/header";
import Question from "../../components/question";
import ResumeMenu from "../../components/resumeMenu";

class HistoryGym extends React.Component {
    render() {
        var data = {
            questionsAsked: 12,
            hitRate: 0.7,
            strengths: ['Revolução Francesa', 'Guerra da Independência', 'Brasil Colonial'],
            weaknesses: ['Revolução do Haiti', 'Ditaduras na América Latina']
        };

        return (
            <div>
                <Header/>
                <div className='content-container'>
                    <h1>HistoryGym</h1>
                    <hr></hr>
                    <ResumeMenu data={data}/>
                    <div className='question-frame'>
                        <div>
                            <a>próxima questão</a>
                        </div>
                        <Question statement='quem descobriu o Brasil?' options={['aaa', 'bbb', 'ccc', 'ddd']} answer={0}/>
                    </div>
                </div>
            </div>
        );
    }
}

export default HistoryGym;