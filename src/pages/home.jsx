import React from "react";

class Home extends React.Component {
    render() {

        return (
            <div>
                <div>
                    <h1>MELVIN</h1>
                    <hr></hr>
                </div>
                <div>
                    <h2>O que gostarias de estudar agora?</h2>
                    <DisciplineCards/>
                </div>
            </div>
        );
    }
}

class DisciplineCards extends React.Component {
    render() {
        const disciplines = [
            {'id':1, 'name': 'Português', 'link': '/gym/portuguese' },
            {'id':2, 'name': 'Inglês', 'link': '/gym/english' },
            {'id':3, 'name': 'Matemática', 'link': '/gym/math' },
            {'id':4, 'name': 'Física', 'link': '/gym/physics' },
            {'id':5, 'name': 'Química', 'link': '/gym/chemistry' },
            {'id':6, 'name': 'Biologia', 'link': '/gym/biology' },
            {'id':7, 'name': 'História', 'link': '/gym/history' },
            {'id':8, 'name': 'Geografia', 'link': '/gym/geography' },
            {'id':9, 'name': 'Filosofia', 'link': '/gym/philosophy' },
            {'id':10, 'name': 'Sociologia', 'link': '/gym/sociology' },
        ]

        const disciplinesCards = disciplines.map(discipline => (
            <DisciplineCard key={discipline.id} name={discipline.name} link={discipline.link}/>
        ));

        return (
            <div>
                {disciplinesCards}
            </div>
        );
    }
}

class DisciplineCard extends React.Component {
    render() {
        return (
            <div>
                <a href={this.props.link}>{this.props.name}</a>
            </div>
        );
    }
}

export default Home;