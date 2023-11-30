import React from "react";

class Tags extends React.Component {
    render() {
        return (
            <div className='subject-tags-div'>
                {this.props.tags.map(tag => (<Tag name={tag}/>))}
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

export default {Tag, Tags}