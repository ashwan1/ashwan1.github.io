import React from 'react'
import classNames from 'classnames';

class PageBanner extends React.Component {
    render() {
        const bgImage = {backgroundImage: 'url(' + this.props.imgUrl + ')'};
        const titleTextClass = this.props.titleTextClass || 'has-text-white';
        const subTitleTextClass = this.props.subTitleTextClass || 'has-text-white-ter';
        const heroClasses = classNames('hero-body', 'has-text-centered', {
            'bgHeroImage': this.props.imgUrl
        });
        return (
            <section className={'has-background-black-ter hero ' + this.props.heroSize}>
                <div style={bgImage} className={heroClasses}>
                    <p className={'title ' + titleTextClass}>
                        {this.props.title}
                    </p>
                    <p className={'subtitle is-size-5 ' + subTitleTextClass}>
                        {this.props.description}
                    </p>
                </div>
            </section>
        );
    }
}

export default PageBanner;