import React, {useEffect} from 'react';
import { useDispatch, useSelector } from "react-redux";

import { getOneProduct} from "../../redux/all/all";
import {useParams} from "react-router-dom";
const More = () => {
    const {oneProduct} = useSelector(store => store.all );
    const dispatch = useDispatch();
    const {id} = useParams();
    useEffect(() => {
        dispatch(getOneProduct(id))
    },[dispatch,id]);

    return (
        <section className="more">
            <div className="container">
                <div className="more__row">
                    <div className="more__left">
                        <img src={oneProduct?.image} alt={oneProduct?.title} width={500} height={500} />
                    </div>
                    <div className="more__right">
                        <h3 className="more__title">
                            {oneProduct?.title}
                        </h3>
                        <p className="more__subtitle">
                            {oneProduct?.subtitle}
                        </p>
                        <p className="more__subtitle">
                            {oneProduct?.text}
                        </p>
                        <p className="more__price">
                            {oneProduct?.price}
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default More;