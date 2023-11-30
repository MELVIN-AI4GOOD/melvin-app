import React from "react";

import '../css/question.css';

class QuestionFrame extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedOption: null,
            answered: false,
        };
    }

    handleOptionChange = (option) => {
        this.setState({
            selectedOption: option,
        });
    };

    handleAnswer = () => {
        if (this.state.selectedOption !== null) {
            // Aqui você pode adicionar lógica para verificar se a resposta está correta
            // e atualizar o estado conforme necessário.
            // Por enquanto, apenas marcamos a pergunta como respondida.
            this.setState({
                answered: true,
            });
        } else {
            // Caso o usuário tente responder sem selecionar uma alternativa.
            alert('Nenhuma alternativa selecionada!');
        }
    };

    render() {
        const question = this.props.question;
        const { selectedOption, answered } = this.state;

        const statement = question.statement;
        const options = question.alternatives;
        const correctAnswer = question.answer;
        

        return (
            <div className='question-frame-div'>
                <div className='statement'>
                    <p>{statement}</p>
                </div>
                <div className='alternatives-div'>
                    {options.map((option, index) => (
                        <div key={index} className='alternative-div'>
                            <label>
                                <input
                                    type="radio"
                                    value={option}
                                    checked={selectedOption === option}
                                    onChange={() => this.handleOptionChange(option)}
                                    disabled={answered}
                                />
                                {option}
                            </label>
                        </div>
                    ))}
                </div>
                <div className='answer-button-div'>
                    <button onClick={this.handleAnswer} disabled={answered} className='answer-button'>
                        Responder
                    </button>
                </div>
            </div>
        );
    }
}

export default QuestionFrame;