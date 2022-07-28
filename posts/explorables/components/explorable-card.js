import React from 'react';

class ExplorableCard extends React.Component {
    render() {
        const tags = this.props.tags;
        const tagItems = tags.map((tag) => {
                return (<span key={tag} className="tag mr-1 mb-1">{tag}</span>)
            });
        console.log(tagItems);
        return (
            <div className="card">
                <div className="card-image">
                    <figure className="image is-5by3">
                        <img src={this.props.imgSrc} alt="Explorable cover image"/>
                    </figure>
                </div>
                <div className="card-content">
                    <div className="title is-size-5 mb-0"><a href={this.props.explorableUrl}>{this.props.title}</a></div>
                    <time className="subtitle is-size-7" dateTime={this.props.publishedOn}>
                        {new Date(this.props.publishedOn).toDateString()}
                    </time>
                    <div className="content mt-2 is-size-7 mb-1">{this.props.description}</div>
                    <div>{tagItems}</div>
                </div>
            </div>
        );
    }
}

export default ExplorableCard;