import React from "react";

import Gym from "../gym";

class PortugueseGym extends React.Component {
    render() {
        const data = {
            questionsAsked: 42,
            hitRate: 0.71,
            strengths: ['colocação pronominal', 'análise sintática', 'crase', 'vírgula'],
            weaknesses: ['orações subordinadas', 'voz passiva', 'adjunto adverbial', 'moderninsmo']
        };

        const tags = ['surrealismo', 'morfologia', 'literatura de cordel', 'simbolismo', 'arcadismo']

        const question = {
            'statement': `Quanto mais complicada se tornou a produção industrial, mais numerosos passaram a ser os elementos 
            da indústria que exigiam garantia de fornecimento. Três deles eram de importância fundamental: o trabalho, a terra e o dinheiro. 
            Numa sociedade comercial, esse fornecimento só poderia ser organizado de uma forma: tornando-os disponíveis à compra. 
            Agora eles tinham que ser organizados para a venda no mercado. Isso estava 
            de acordo com a exigência de um sistema de mercado. Sabemos que em um sistema como esse, os lucros só 
            podem ser assegurados se se garante a autorregulação por meio de mercados competitivos interdependentes.
            POLANYI, K. A grande transformação: as origens de nossa época.
            Rio de Janeiro: Campus, 2000 (adaptado). 
            A consequência do processo de transformação socioeconômica abordado no texto é a`,
            'alternatives': [
                'expansão das terras comunais',
                'limitação do mercado como meio de especulação.',
                'consolidação da força de trabalho como mercadoria.',
                'diminuição do comércio por causa da industrialização.',
                'adequação do dinheiro como padrão das transações.'
            ],
            'answer': 2
        }

        return (
            <div>
                <div>
                    <Gym data={data} question={question} subject='Português' tags={tags}/>
                </div>
            </div>
        );
    }
}

export default PortugueseGym;