import React, {useEffect} from 'react';
import { Navigation, A11y } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import { MdOutlineNavigateNext } from "react-icons/md";
import { GrFormPrevious } from "react-icons/gr";

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/scrollbar';

import {Link} from "react-router-dom"
import {useDispatch, useSelector} from "react-redux";
import {getAll} from "../../redux/all/all";
import {addToCart} from "../../redux/cart/cart";

const Shop = () => {
    const { data } = useSelector(store => store.all);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getAll());
    }, [dispatch]);

    const handleAddToCart = (item) => {
        dispatch(addToCart(item));
    };

    return (
        <section className="shop">
            <div className="container">
                <div className="shop__row">
                    <div className="shop__text">
                        <p className="shop__title">
                            One of EVERYTHING really GOOD.
                        </p>
                    </div>
                    <div className="shop__img">
                        <img src="https://www.rhodeskin.com/cdn/shop/files/PLP_2000x.jpg?v=1717789940" alt="" width={1459 }/>
                    </div>
                </div>
                <div className="swiper">
                    <div className="swiper__btns">
                        <Link to={"/all"}>
                            <button className="swiper__btn">
                                SHOP ALL
                            </button>
                        </Link>
                        <Link to={"/lip"}>
                        <button className="swiper__btn">
                            LIP + CHEEK
                        </button>
                        </Link>
                        <Link to={"/skin"}>
                            <button className="swiper__btn">
                                SKIN
                            </button>
                        </Link>
                        <Link to={"/sets"}>
                        <button className="swiper__btn">
                            SETS
                        </button>
                        </Link>
                    </div>
                </div>
                <section className="product">
                    <div className="product__row">
                        <div className="product__cards">
                            <div className="product__card">
                                
                            </div>
                        </div>
                    </div>
                </section>
                <section className="products">
                    <div className="products__row">
                        <div className="products__cards">
                            <Swiper
                                style={{height:"600px"}}
                                modules={[Navigation, A11y]}
                                spaceBetween={50}
                                slidesPerView={3}
                                navigation={{
                                    nextEl: '.custom-swiper-button-next',
                                    prevEl: '.custom-swiper-button-prev',
                                }}

                                onSwiper={(swiper) => console.log(swiper)}
                                onSlideChange={() => console.log('slide change')}
                            >
                                {
                                    data.map((item) => (
                                        <SwiperSlide className="products__card">
                                            <div className="products__title">
                                                {item.name}
                                            </div>
                                            <Link to={`/more/${item.id}`}>
                                                <img src={item.image} alt="" width={456} height={408}/>
                                            </Link>
                                            <div className="products__texts">
                                                <div className="products__info">
                                                    <h3 className="products__titles">
                                                        {item.title}
                                                    </h3>
                                                    <p className="products__text">
                                                        {item.subtitle}
                                                    </p>
                                                </div>
                                                <div className="products__price">
                                                    <h3 className="products__desc">
                                                        {item.price}
                                                    </h3>
                                                </div>
                                                <div className="all__click">
                                                    <button onClick={() => handleAddToCart(item)}>ADD</button>
                                                </div>
                                            </div>
                                        </SwiperSlide>
                                    ))
                                }
                            </Swiper>
                            <div className="custom-swiper-button-prev custom-button"><GrFormPrevious size={27} /></div>
                            <div className="custom-swiper-button-next custom-button"><MdOutlineNavigateNext size={27}  /></div>
                        </div>
                    </div>
                </section>
            </div>

        </section>
    );
};

export default Shop;