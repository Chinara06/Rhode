import React, {useEffect} from 'react';
import {Link} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {getLip} from "../../redux/lip/lip";
import { addToCart } from "../../redux/cart/cart";
const Lip = () => {
    const {data} = useSelector(store => store.lip);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getLip())
    }, [dispatch]);

    const handleAddToCart = (item) => {
        dispatch(addToCart(item))
    };
    return (
        <section className="lip">
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
                        <Link to={"/sets"}>
                            <button className="swiper__btn">
                                SETS
                            </button>
                        </Link>
                    </div>
                </div>
                <div className="skin__row">
                    <div className="skin__cards">
                        {data.map((item) => (
                                <div className="skin__card">
                                    <Link to={`/OneLip/${item.id}`}>
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

export default Lip;