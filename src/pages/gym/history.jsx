import React from "react";

import Header from "../../components/header";
import Gym from "../gym";



class HistoryGym extends React.Component {
    render() {
        var data = {
            questionsAsked: 45,
            hitRate: 0.95,
            strengths: ['Revolução Francesa', 'Guerra da Independência', 'Brasil Colonial', 'Belle Époque'],
            weaknesses: ['Revolução do Haiti', 'Ditaduras na América Latina']
        };

        const tags = ['história', 'modernidade', 'revolução industrial', 'guerra do ópio', 'mundo árabe', 'guerra do peloponeso',]

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

        return (
            <div>
                <div>
                    <Gym data={data} question={question} tags={tags} subject='História'/>
                </div>
            </div>
        );
    }
}

export default HistoryGym;