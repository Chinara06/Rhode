import React, {useEffect} from 'react';
import { Navigation, A11y } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import { MdOutlineNavigateNext } from "react-icons/md";
import { GrFormPrevious } from "react-icons/gr";

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/scrollbar';
import {Link} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {getAll} from "../../redux/all/all";
import {addToCart} from "../../redux/cart/cart";
const Home = () => {
    const { data } = useSelector(store => store.all);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getAll());
    }, [dispatch]);

    const handleAddToCart = (item) => {
        dispatch(addToCart(item));
    };

    return (
        <section className={"home"}>
            <div className="container">
                <div className="home__row">
                    <div className="home__img">
                        <img src="https://www.rhodeskin.com/cdn/shop/files/Export-HP-summer-blush-desktop_2x_77d284dc-4425-492c-a3d2-b494a91415a2_2000x.jpg?v=1722550526" alt="" width={1458} height={553}/>
                    </div>
                    <div className="home__cards">
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
                                    <SwiperSlide className="home__card">
                                        <div className="home__title">
                                            {item.name}
                                        </div>
                                        <Link to={`/more/${item.id}`}>
                                            <img src={item.image} alt="" width={456} height={408}/>
                                        </Link>
                                        <div className="home__texts">
                                            <div className="home__info">
                                                <h3 className="home__titles">
                                                    {item.title}
                                                </h3>
                                                <p className="home__text">
                                                    {item.subtitle}
                                                </p>
                                            </div>
                                            <div className="home__price">
                                                <h3 className="home__desc">
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
            </div>
            <section className="one">
                <div className="container">
                    <div className="one__row">
                        <div className="one__texts">
                            <h2 className="one__title">
                                one of everything
                                <br/>
                                really good
                            </h2>
                            <p className="one__desc">
                                At rhode, our beauty philosophy is to make one of everything really good. To us, that means a collection of intentional, high-performance essentials you reach for on a daily basis. The ones you love, rely on, and always come back to.
                            </p>
                            <button className="one__btn">MEET RHODE</button>
                        </div>
                        <div className="one__img">
                            <img src="https://www.rhodeskin.com/cdn/shop/files/blush-about-hp-desktop_3_2000x.jpg?v=1717916242" alt="" width={1458} height={553}/>
                        </div>
                    </div>

                </div>
            </section>
            <section className="lip">
                <div className="container">
                    <div className="lip__row">
                        <div className="lip__left">
                            <img src="https://www.rhodeskin.com/cdn/shop/files/lip-case-guava_2000x.jpg?v=1718252712" alt="" width={745} height={793}/>
                        </div>
                        <div className="lip__right">
                            <div className="lip__texts">
                                <h3 className="lip__texts-title">
                                    shades of summer
                                </h3>
                                <p className="lip__texts-desc">
                                    Our bubble phone case comes in four limited edition shades to go with the summer Peptide Lip Tints. Match your phone to your lips and cheeks all season long.
                                </p>
                                <button className="lip__btn">JUICY COLOR</button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="restore">
                <div className="container">
                    <div className="restore__row">
                        <div className="restore__left">
                            <h3 className="restore__title">
                                To RESTORE and NURTURE the skin you have now for lasting results that reveal themselves over time.
                            </h3>
                            <button className="lip__btn">OUR VALUESOUR </button>
                        </div>
                        <div className="restore__right">
                            <img src="https://www.rhodeskin.com/cdn/shop/files/blush-hp-summary_2000x.jpg?v=1717721693" alt="" width={725} height={793}/>
                        </div>
                    </div>
                </div>
            </section>
        </section>
    );
};

export default Home;