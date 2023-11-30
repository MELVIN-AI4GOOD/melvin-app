import React from "react";

import Header from "../components/header";
import ResumeMenu from "../components/resumeMenu";
import QuestionFrame from "../components/question";
import ControlMenu from "../components/controlMenu";

import '../css/gym.css';
import Footer from "../components/footer";

const question = {
    'statement': `O Rio de Janeiro tem projeção imediata no próprio estado e no Espírito Santo, em parcela do sul do estado 
    da Bahia, e na Zona da Mata, em Minas Gerais, onde tem influência dividida com Belo Horizonte. Compõem 
    a rede urbana do Rio de Janeiro, entre outras cidades: Vitória, Juiz de Fora, Cachoeiro de Itapemirim, Campos dos Goytacazes, 
    Volta Redonda - Barra Mansa, Teixeira de Freitas, Angra dos Reis e Teresópolis.\nDisponível em: http://ibge.gov.br. Acesso em: 9 jul. 2015 (adaptado).
    \nO conceito que expressa a relação entre o espaço apresentado e a cidade do Rio de Janeiro é:`,
    'alternatives': [
        'Frente pioneira.',
        'Zona de transição',
        'Região polarizada.',
        'Área de conurbação',
        'Periferia metropolitana'
    ],
    'answer': 2
}

class Gym extends React.Component {
    render() {
        return (
            <div>
                <div className='gym-content'>
                    <ResumeMenu data={this.props.data}/>
                    <QuestionFrame question={question}/>
                    <ControlMenu/>
                </div>
                <Footer/>
            </div>

        );
    }
}

export default Gym;