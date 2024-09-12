import React, {useEffect} from 'react';
import {Link} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {getSets} from "../../redux/sets/sets";
import { addToCart } from "../../redux/cart/cart";
const Sets = () => {
    const {data} = useSelector(store => store.sets);
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getSets())
    },[dispatch]);

    const handleAddToCart = (item) => {
        dispatch(addToCart(item))
    }
    return (
        <section className={"sets"}>
            <div className="container">
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
                        <Link to={"/shop"}>
                            <button className="swiper__btn">
                                Shop
                            </button>
                        </Link>
                        <Link to={"/skin"}>
                        <button className="swiper__btn">
                            SKIN
                        </button>
                        </Link>
                    </div>
                </div>
                <div className="sets__row">
                    <div className="skin__cards">
                        {data.map((item) => (
                                <div className="skin__card">
                                    <Link to={`/OneSets/${item.id}`}>
                                    <img src={item.image} alt="" width={705} height={430}/>
                                    </Link>
                                    <div className="skin__texts">
                                        <div className="skin__info">
                                            <h3 className="skin__titles">
                                                {item.title}
                                            </h3>
                                            <p className="skin__text">
                                                {item.subtitle}
                                            </p>
                                        </div>
                                        <div className="skin__price">
                                            <h3 className="all__desc">
                                                {item.price}
                                            </h3>
                                        </div>
                                        <div className="all__btn">
                                            <button onClick={() => handleAddToCart(item)}>ADD</button>
                                        </div>
                                    </div>
                                </div>
                            ))
                        }
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Sets;