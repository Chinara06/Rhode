import React,{useEffect}  from 'react';
import { useDispatch, useSelector } from "react-redux";
import { getOneSkin} from "../../redux/skin/skin";
import {useParams} from "react-router-dom";

const OneSkin = () => {
    const {oneSkin} = useSelector(store => store.skin);
    const dispatch = useDispatch();
    const {id} = useParams();
    useEffect(() => {
        dispatch(getOneSkin(id))
    },[dispatch,id]);
    return (
        <section className="more">
            <div className="container">
                <div className="more__row">
                    <div className="more__left">
                        <img src={oneSkin?.image} alt={oneSkin?.title} width={500} height={500} />
                    </div>
                    <div className="more__right">
                        <h3 className="more__title">
                            {oneSkin?.title}
                        </h3>
                        <p className="more__subtitle">
                            {oneSkin?.subtitle}
                        </p>
                        <p className="more__subtitle">
                            {oneSkin?.text}
                        </p>
                        <p className="more__price">
                            {oneSkin?.price}
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default OneSkin;