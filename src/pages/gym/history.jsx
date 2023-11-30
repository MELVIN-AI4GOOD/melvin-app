import React from "react";

import Header from "../../components/header";
import Gym from "../gym";

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
                <div>
                    <Gym data={data}/>
                </div>
            </div>
        );
    }
}

export default HistoryGym;