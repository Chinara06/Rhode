import React from 'react';
import { Navigation, A11y } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import { MdOutlineNavigateNext } from "react-icons/md";
import { GrFormPrevious } from "react-icons/gr";

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/scrollbar';
const About = () => {
    return (
        <section className="about">
            <div className="container">

                <div className="about__row">
                    <h3 className="about__title">
                        A NOTE FROM OUR FOUNDER
                    </h3>
                    <p className="about__text">
                        My journey towards healthier skin inspired me to develop products that really work, in a way that’s accessible to everyone. Rhode is dedicated to making products based in science and great formulation, simplifying many of the mysteries and complex narratives behind efficacious skincare. I hope these will become your go-to essentials that can live in your bathroom, be your favorite travel companion, improve your skin over time, and keep your skin happy and hydrated.
                    </p>
                </div>
                <section className="care">
                    <div className="care__row">
                        <div className="care__left">
                            <div className="care__texts">
                                <h3 className="care__texts-title">
                                    intentional skincare
                                </h3>
                                <p className="care__texts-desc">
                                    Rhode is a line of curated skincare essentials. Formulated for a variety of skin types and needs with high performance ingredients, it’s a daily routine that nourishes your skin barrier over time.
                                </p>
                            </div>
                        </div>
                        <div className="care__right">
                            <img src="https://www.rhodeskin.com/cdn/shop/files/Zaira-Water_2000x.jpg?v=1653084056" alt="" width={730} height={793}/>
                        </div>
                    </div>
                </section>
                <section className="swiper">
                    < div className="swiper__row">
                        <div className="swiper__texts">
                            <h3 className="swiper__title">
                                research-backed
                                ingredients
                            </h3>
                            <p className="swiper__text">
                                Every rhode product is made from purposeful, high-performance ingredients at efficacious levels.
                            </p>
                        </div>
                        <div className="swiper__cards">
                            <Swiper
                                style={{height:"520px"}}
                                modules={[Navigation, A11y]}
                                spaceBetween={100}
                                slidesPerView={4}
                                navigation={{
                                    nextEl: '.custom-swiper-button-next',
                                    prevEl: '.custom-swiper-button-prev',
                                }}

                                onSwiper={(swiper) => console.log(swiper)}
                                onSlideChange={() => console.log('slide change')}
                            >
                            <SwiperSlide className="swiper__card">
                                <img src="https://www.rhodeskin.com/cdn/shop/files/Ing_SheaButter_v3_2000x2000_1_2000x.jpg?v=1653500206" alt="" width={353} height={353}/>
                                <h3 className="swiper__subtitle">
                                    SHEA BUTTER
                                </h3>
                                <p className="swiper__desc">
                                    Hydrates + moisturizes with 5 essential fatty acids (including vitamins E, D, A, and allantoin).
                                </p>
                            </SwiperSlide>
                            <SwiperSlide className="swiper__card">
                                <img src="https://www.rhodeskin.com/cdn/shop/files/Ing_Niacinamide_2000x2000_4967fd9c-bc95-4aba-acc6-d0eab27b268a_2000x.jpg?v=1653006375" alt="" width={353} height={353}/>
                                <h3 className="swiper__subtitle">
                                    NIACINAMIDE
                                </h3>
                                <p className="swiper__desc">
                                    Nourishes and minimizes the look of pores + improves skin’s overall texture.
                                </p>
                            </SwiperSlide>
                            <SwiperSlide className="swiper__card">
                                <img src="https://www.rhodeskin.com/cdn/shop/files/Ing_CupuacuButter_2000x2000_183bfa80-324f-4acc-b917-5752f3a38037_2000x.jpg?v=1653006405" alt="" width={353} height={353}/>
                                <h3 className="swiper__subtitle">
                                    CUPUAÇU
                                </h3>
                                <p className="swiper__desc">
                                    Helps maintain skin elasticity, improve suppleness for dry, dehydrated skin.
                                </p>
                            </SwiperSlide>
                            <SwiperSlide className="swiper__card">
                                <img src="https://www.rhodeskin.com/cdn/shop/files/Ing_BabasuuOil_v3_2000x2000_1_2000x.jpg?v=1653500219" alt="" width={353} height={353}/>
                                <h3 className="swiper__subtitle">
                                    BABASSU
                                </h3>
                                <p className="swiper__desc">
                                    Rich, natural source of lauric acid known to strengthen the microbiome + replenish overall skin moisture.
                                </p>
                            </SwiperSlide>
                            <SwiperSlide className="swiper__card">
                                <img src="https://www.rhodeskin.com/cdn/shop/files/Ing_Hyaluronic_2000x2000_40745670-93e7-4db2-a665-8a5be176e7d1_2000x.jpg?v=1653006460" alt="" width={353} height={353}/>
                                <h3 className="swiper__subtitle">
                                    HYALURONIC ACID
                                </h3>
                                <p className="swiper__desc">
                                    Supports hydration, locks in water + replenishes moisture.
                                </p>
                            </SwiperSlide>
                            <SwiperSlide className="swiper__card">
                                <img src="https://www.rhodeskin.com/cdn/shop/files/Ing_Marula_2000x2000_60b205d0-9144-401b-a41b-7fee07abd7c4_2000x.jpg?v=1653006481" alt="" width={353} height={353}/>
                                <h3 className="swiper__subtitle">
                                    MARULA OIL
                                </h3>
                                <p className="swiper__desc">
                                    Lightweight yet rich in fatty acids that help support + soften the skin barrier.
                                </p>
                            </SwiperSlide>
                            <SwiperSlide className="swiper__card">
                                <img src="https://www.rhodeskin.com/cdn/shop/files/Ing_Squalene_2000x2000_0c9b3737-9763-4389-a1db-442baad40e19_2000x.jpg?v=1653006505" alt="" width={353} height={353}/>
                                <h3 className="swiper__subtitle">
                                    SQUALANE
                                </h3>
                                <p className="swiper__desc">
                                    Powerful emollient, hydrates + softens skin
                                </p>
                            </SwiperSlide>
                            <SwiperSlide className="swiper__card">
                                <img src="https://www.rhodeskin.com/cdn/shop/files/Ing_Acai_v3_2000x2000_977cf097-8e00-4568-843f-ba15a3b455c3_2000x.jpg?v=1653500233" alt="" width={353} height={353}/>
                                <h3 className="swiper__subtitle">
                                    AÇAI
                                </h3>
                                <p className="swiper__desc">
                                    Antioxidant-rich + defends skin from harmful free radicals.
                                </p>
                            </SwiperSlide>
                                </Swiper>
                            <div className="custom-swiper-button-prev custom-button"><GrFormPrevious size={27} /></div>
                            <div className="custom-swiper-button-next custom-button"><MdOutlineNavigateNext size={27}  /></div>
                            </div>
                        </div>
                </section>
                <section className="meet">
                    <div className="meet__row">
                        <h3 className="meet__title">
                            meet the advisory board
                        </h3>
                        <p className="meet__text">
                            Our Skincare Advisory Board is comprised of renowned experts in chemistry and dermatology. Informed by the latest research, they guide our product innovation from initial formula to final glaze.
                        </p>
                        <div className="meet__cards">
                            <div className="meet__card">
                                <img src="https://www.rhodeskin.com/cdn/shop/files/ron_2000x.jpg?v=1653006218" alt="" width={473} height={473}/>
                                <div className="meet__info">
                                    <h3 className="meet__subtitle">DR. RON ROBINSON</h3>
                                    <p className="meet__desc">cosmetic chemist</p>
                                    <p className="meet__texts">An innovator in the field, Dr. Robinson is an award-winning chemist with over 20 years experience developing products for top beauty brands. He is the founder of BeautyStat, a groundbreaking brand in the skincare industry.</p>
                                </div>
                            </div>
                            <div className="meet__card">
                                <img src="https://www.rhodeskin.com/cdn/shop/files/Dhaval-New-Final_2000x.jpg?v=1661468393" alt="" width={473} height={473}/>
                                <div className="meet__info">
                                    <h3 className="meet__subtitle">DR. DHAVAL BHANUSALI</h3>
                                    <p className="meet__desc">dermatologist</p>
                                    <p className="meet__texts">Dr. Bhanusali is a leading dermatologist in the skincare industry. He works with patients out of his practice in Hudson Yards, New York City, and regularly consults with health companies to create renowned products that are accessible and effective.</p>
                                </div>
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
                            <SwiperSlide className="products__card">
                                <div className="products__title">blush</div>
                                <img src="https://www.rhodeskin.com/cdn/shop/files/Piggy-Hero-4_Desktop_d131a90c-169b-43ed-b34d-9e18c791b664_2000x.jpg?v=1717787526" alt="" width={456} height={408}/>
                                <div className="products__texts">
                                    <div className="products__info">
                                        <h3 className="products__titles">
                                            pocket blush
                                        </h3>
                                        <p className="products__text">
                                            The natural flush
                                        </p>
                                    </div>
                                    <div className="products__price">
                                        <h3 className="products__desc">
                                            $24.00
                                        </h3>
                                    </div>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide  className="products__card">
                                <div className="products__title">tint</div>
                                <img src="https://www.rhodeskin.com/cdn/shop/files/coral-duo-hero-1_10_2000x.jpg?v=1718244705" alt="" width={456} height={408}/>
                                <div className="products__texts">
                                    <div className="products__info">
                                        <h3 className="products__titles">
                                            peptide lip tint
                                        </h3>
                                        <p className="products__text">
                                            The tinted lip layer
                                        </p>
                                    </div>
                                    <div className="products__price">
                                        <h3 className="products__desc">
                                            $18.00
                                        </h3>
                                    </div>
                                </div>
                            </SwiperSlide >
                            <SwiperSlide className="products__card">
                                <div className="products__title">case</div>
                                <img src="https://www.rhodeskin.com/cdn/shop/files/PDP-Desktop-guavaspritz_2000x.jpg?v=1718206739" alt="" width={456} height={408}/>
                                <div className="products__texts">
                                    <div className="products__info">
                                        <h3 className="products__titles">
                                            summer lip case
                                        </h3>
                                        <p className="products__text">
                                            Four limited edition colors
                                        </p>
                                    </div>
                                    <div className="products__price">
                                        <h3 className="products__desc">
                                            $35.00
                                        </h3>
                                    </div>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide  className="products__card">
                                <div className="products__title">cleanse</div>
                                <img src="https://www.rhodeskin.com/cdn/shop/files/PDP-Cleanser-1_95039e96-fbec-4973-9527-11261dc5c2ac_2000x.jpg?v=1721337061" alt="" width={456} height={408}/>
                                <div className="products__texts">
                                    <div className="products__info">
                                        <h3 className="products__titles">
                                            pineapple refresh
                                        </h3>
                                        <p className="products__text">
                                            The daily cleanser
                                        </p>
                                    </div>
                                    <div className="products__price">
                                        <h3 className="products__desc">
                                            $28.00
                                        </h3>
                                    </div>
                                </div>
                            </SwiperSlide >
                            <SwiperSlide  className="products__card">
                                <div className="products__title">prep</div>
                                <img src="https://www.rhodeskin.com/cdn/shop/files/glazing-milk-pdp-desktop_2000x.jpg?v=1686006325" alt="" width={456} height={408}/>
                                <div className="products__texts">
                                    <div className="products__info">
                                        <h3 className="products__titles">
                                            glazing milk
                                        </h3>
                                        <p className="products__text">
                                            The essential prep layer
                                        </p>
                                    </div>
                                    <div className="products__price">
                                        <h3 className="products__desc">
                                            $30.00
                                        </h3>
                                    </div>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide className="products__card">
                                <div className="products__title">prep</div>
                                <img src="https://www.rhodeskin.com/cdn/shop/files/Hero-2_3_2000x.jpg?v=1699985925" alt="" width={456} height={408}/>
                                <div className="products__texts">
                                    <div className="products__info">
                                        <h3 className="products__titles">
                                            peptide glazing fluid
                                        </h3>
                                        <p className="products__text">
                                            The dewy hydration layer
                                        </p>
                                    </div>
                                    <div className="products__price">
                                        <h3 className="products__desc">
                                            $30.00
                                        </h3>
                                    </div>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide className="products__card">
                                <div className="products__title">restore</div>
                                <img src="https://www.rhodeskin.com/cdn/shop/files/BRC_1_2000x.jpg?v=1652299861" alt="" width={456} height={408}/>
                                <div className="products__texts">
                                    <div className="products__info">
                                        <h3 className="products__titles">
                                            barrier restore cream
                                        </h3>
                                        <p className="products__text">
                                            The rich recovery layer
                                        </p>
                                    </div>
                                    <div className="products__price">
                                        <h3 className="products__desc">
                                            $30.00
                                        </h3>
                                    </div>
                                </div>
                            </SwiperSlide>
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

export default About;