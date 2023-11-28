import React from "react";

class Question extends React.Component {
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
        const { statement, options } = this.props;
        const { selectedOption, answered } = this.state;

        return (
            <div>
                <p>{statement}</p>
                {options.map((option, index) => (
                    <div key={index}>
                        <label>
                            <input
                                type="radio"
                                value={option}
                                checked={selectedOption === option}
                                onChange={() => this.handleOptionChange(option)}
                                disabled={answered}
                            />
                            {`Alternativa ${String.fromCharCode(65 + index)}: ${option}`}
                        </label>
                    </div>
                ))}
                <button onClick={this.handleAnswer} disabled={answered}>
                    Responder
                </button>
            </div>
        );
    }
}

export default Question;