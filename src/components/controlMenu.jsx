import React from "react";

import '../css/control-menu.css';

class ControlMenu extends React.Component {
    render() {
        return (
            <div className='control-menu-div'>
                <div className='tags'>
                    <p>Tags</p>
                    <hr></hr>
                    <Tags tags={this.props.tags}></Tags>
                </div>
                <div className='recommendation-control'>
                    <p>Controles</p>
                    <hr></hr>
                    <Switch text='Filtrar por Tags'></Switch>
                    <Switch text='Modo Revisão'></Switch>
                </div>
                <div className='buttons-div'>
                    <button>Próxima Questão</button>
                    <button>Ver Resposta</button>
                </div>
                <div className='hint-box'>
                    <p>Alguma Dúvida? Pergunte!</p>
                    <hr></hr>
                    <div className='text-box'>
                        <input type='text'></input>
                        <button>perguntar</button>
                    </div>
                </div>
            </div>
        );
    }
}

class Switch extends React.Component {
    render() {
        return (
            <div className='switch'>
                <label className='switch-label'>
                    <input type='checkbox'></input>
                    <span className='slider round'></span>
                </label>
                <p>{this.props.text}</p>
            </div>
        );
    }
}

class Tags extends React.Component {
    render() {
        return (
            <div className='subject-tags-div'>
                {this.props.tags.map((tag, index) => (<Tag name={tag} key={index}/>))}
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

export default ControlMenu;