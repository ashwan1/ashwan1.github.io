import React from 'react'

class PageBanner extends React.Component {
    render() {
        return (
            <section className='has-background-black-ter hero'>
                <div className='hero-body has-text-centered'>
                    <p className='title has-text-white'>
                        {this.props.title}
                    </p>
                    <p className='subtitle has-text-white-ter is-size-5'>
                        {this.props.description}
                    </p>
                </div>
            </section>
        );
    }
}

export default PageBanner;