import React,{useEffect}  from 'react';
import { useDispatch, useSelector } from "react-redux";
import { getOneLip} from "../../redux/lip/lip";
import {useParams} from "react-router-dom";

const OneLip = () => {
    const {oneLip} = useSelector(store => store.lip);
    const dispatch = useDispatch();
    const {id} = useParams();
    useEffect(() => {
        dispatch(getOneLip(id))
    },[dispatch,id]);
    return (
        <section className="more">
            <div className="container">
                <div className="more__row">
                    <div className="more__left">
                        <img src={oneLip?.image} alt={oneLip?.title} width={500} height={500} />
                    </div>
                    <div className="more__right">
                        <h3 className="more__title">
                            {oneLip?.title}
                        </h3>
                        <p className="more__subtitle">
                            {oneLip?.subtitle}
                        </p>
                        <p className="more__subtitle">
                            {oneLip?.text}
                        </p>
                        <p className="more__price">
                            {oneLip?.price}
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default OneLip;