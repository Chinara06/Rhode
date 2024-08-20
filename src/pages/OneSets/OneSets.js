import React,{useEffect}  from 'react';
import { useDispatch, useSelector } from "react-redux";
import { getOneSets} from "../../redux/sets/sets";
import {useParams} from "react-router-dom";

const OneSets = () => {
    const {oneSets} = useSelector(store => store.sets);
    const dispatch = useDispatch();
    const {id} = useParams();
    useEffect(() => {
        dispatch(getOneSets(id))
    }, [dispatch, id]);
    return (
        <section className="more">
            <div className="container">
                <div className="more__row">
                    <div className="more__left">
                        <img src={oneSets?.image} alt={oneSets?.title} width={500} height={500}/>
                    </div>
                    <div className="more__right">
                        <h3 className="more__title">
                            {oneSets?.title}
                        </h3>
                        <p className="more__subtitle">
                            {oneSets?.subtitle}
                        </p>
                        <p className="more__subtitle">
                            {oneSets?.text}
                        </p>
                        <p className="more__price">
                            {oneSets?.price}
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};
export default OneSets;