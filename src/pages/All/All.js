import React, { useEffect } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { getAll } from "../../redux/all/all";
import { addToCart } from "../../redux/cart/cart";
import { Link } from "react-router-dom";

const All = () => {
    const { data } = useSelector(store => store.all);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getAll());
    }, [dispatch]);

    const handleAddToCart = (item) => {
        dispatch(addToCart(item));
    };

    return (
        <section className="all">
            <div className="container">
                <div className="swiper">
                    <div className="swiper__btns">
                        <Link to={"/shop"}>
                            <button className="swiper__btn">SHOP</button>
                        </Link>
                        <Link to={"/lip"}>
                            <button className="swiper__btn">LIP + CHEEK</button>
                        </Link>
                        <Link to={"/skin"}>
                            <button className="swiper__btn">SKIN</button>
                        </Link>
                        <Link to={"/sets"}>
                            <button className="swiper__btn">SETS</button>
                        </Link>
                    </div>
                </div>
                <div className="all__row">
                    <div className="all__cards">
                        {data.map((item) => (
                                <div className="all__card" key={item.id}>
                                    <Link to={`/more/${item.id}`}>
                                    <img src={item.image} alt={item.title} width={705} height={430} />
                                    </Link>
                                    <div className="all__texts">
                                        <div className="all__info">
                                            <h3 className="all__titles">{item.title}</h3>
                                            <p className="all__text">{item.subtitle}</p>
                                        </div>
                                        <div className="all__price">
                                            <h3 className="all__desc">{item.price}</h3>
                                        </div>
                                        <div className="all__click">
                                            <button onClick={() => handleAddToCart(item)}>ADD</button>
                                        </div>
                                    </div>
                                </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default All;