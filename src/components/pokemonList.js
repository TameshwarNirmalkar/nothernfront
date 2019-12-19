import React from 'react';
import {
    ButtonBack, ButtonNext,
    CarouselProvider, Slide, Slider,
} from 'pure-react-carousel';

import 'pure-react-carousel/dist/react-carousel.es.css';
import s from '../App.scss';

import defaultImage from '../images/no-image.png';

const PokemonList = ({ dataList }) => {
    return (
        <div className="container mt-5">
            <CarouselProvider
                visibleSlides={3}
                totalSlides={dataList ? dataList.length : 3}
                step={3}
                naturalSlideWidth={400}
                naturalSlideHeight={500}
                hasMasterSpinner={false}
                dragEnabled={false}>

                <Slider className={s.slider}>
                    {
                        dataList && dataList.map((item, ind) =>
                            <Slide index={ind} key={ind}>
                                <h2 className="panel-heading">
                                    <span>{item.name}</span>
                                    <span> ID: {ind + 1}</span>
                                </h2>
                                <div className="d-flex justify-content-center">
                                    <img alt={item.name} src={defaultImage} className="w-100 h-100" />
                                </div>
                            </Slide>
                        )
                    }
                </Slider>
                <div className="prev-next">
                    <ButtonBack className="button-cls">Prev</ButtonBack>
                    <ButtonNext className="button-cls">Next</ButtonNext>
                </div>
            </CarouselProvider>

        </div>
    );
}


export default PokemonList;