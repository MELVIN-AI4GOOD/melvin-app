import React from "react";
import Header from "../components/header";
import '../css/home.css';
import Footer from "../components/footer";

class Home extends React.Component {
    render() {
        return (
            <div>
                <Header/>
                <div className='content-container'>
                    <p className='instruction'>Seja bem vindo, {this.props.name}. O que gostarias de estudar agora?</p>
                    <DisciplineCards/>
                </div>
                <Footer/>
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
            <div className='discipline-cards-div'>
                {disciplinesCards}
            </div>
        );
    }
}

class DisciplineCard extends React.Component {
    render() {
        return (
            <div className='discipline-card-div'>
                <a href={this.props.link}>{this.props.name}</a>
            </div>
        );
    }
}

export default Home;