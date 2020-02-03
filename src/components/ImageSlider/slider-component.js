import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const images = [
    { id: 0, url: 'https://cdn.pixabay.com/photo/2015/12/01/20/28/road-1072823_960_720.jpg', name: 'test' },
    { id: 1, url: 'https://cdn.pixabay.com/photo/2015/12/01/20/28/road-1072823_960_720.jpg', name: 'test' },
    { id: 2, url: 'https://image.shutterstock.com/image-photo/country-road-600w-628141070.jpg', name: 'test' },
    { id: 3, url: 'https://image.shutterstock.com/image-photo/country-road-600w-628141070.jpg', name: 'test' }];

class SliderComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            slideIndex: 0,
        };
    }

    afterChange = (index) => {
        this.setState({slideIndex: index});
    }

    render() {
        const settings = {
            dots: false,
            infinite: true,
            speed: 500,
            slidesToShow: 1,
            slidesToScroll: 1,
            arrows: false
        };
        return (
            <div className="slider">
                <div>
                    <div className="slider">
                        <Slider {...settings} ref={slider => (this.slider = slider)} afterChange={this.afterChange}>
                            {images.map((data, index) => (
                                <div className="slider-thumb">
                                    <img src={data.url} height="200px" />
                                </div>
                            ))}
                        </Slider>
                    </div>
                    <div className="d-flex justify-content-between">
                        {
                            images.map((data, index) => (
                                <div className={data.id === this.state.slideIndex ? "slider-thumb active" : "slider-thumb"}>
                                    <img
                                        src={data.url}
                                        height="50px"
                                        width="50px"
                                        onClick={() => this.slider.slickGoTo(data.id)}
                                    />
                                </div>
                            ))
                        }
                    </div>
                </div>
            </div>
        );
    }
}

export default SliderComponent;