import React from 'react';
import bulmaCarousel from 'bulma-carousel/dist/js/bulma-carousel';

class Carousel extends React.Component {
    
    componentDidMount() {
        const carousels = bulmaCarousel.attach('.carousel, .hero-carousel', {
            slidesToScroll: 1,
            slidesToShow: 1,
            pagination: false
        });
    }

    render() {
        return(
            <section className={'section ' + this.props.bgColor}>
                <div className='container'>
                    <div className='carousel'>
                    {this.props.children}
                    </div>
                </div>
            </section>
        );
    }
}

export default Carousel;