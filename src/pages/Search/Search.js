import React , {useState} from 'react';
import {getSearchAll} from "../../redux/all/all";
import {useDispatch, useSelector} from "react-redux";

const Search = () => {
    const [name, setName] = useState("");
    const [selectedPerson, setSelectedPerson] = useState(null);
    const dispatch = useDispatch();
    const { dataSearch } = useSelector(store => store.all);

    const onChange = (e) => {
        setName(e.target.value);
        dispatch(getSearchAll(e.target.value));
    };

    const handlePersonClick = (id) => {
        const person = dataSearch.find(item => item.id === id);
        setSelectedPerson(person);
    };
    return (
        <section className={"search"}>
            <div className="container">
                <div className="search__row">
                    <h3 className="search__title">
                        Search
                    </h3>
                    <div className="search__find">
                        <label>
                            <input type="search"
                                   onChange={onChange}
                                   value={name}
                            />
                        </label>
                        {dataSearch && (
                            <div className="search__team">
                                {dataSearch.map(item => (
                                    <div
                                        className="search__product"
                                        key={item.id}
                                        onClick={() => handlePersonClick(item.id)}
                                    >
                                        <p className="search__name">
                                            <strong>{item.name}</strong>
                                        </p>
                                    </div>
                                ))}
                            </div>
                        )}

                        {selectedPerson && (
                            <div className="search__details">
                                <div className="search__left">
                                    <img src={selectedPerson.image} alt={selectedPerson.name} width={400} height={350}/>
                                </div>
                                <div className="search__right">
                                    <p className="search__text"><strong> {selectedPerson.title}</strong></p>
                                    <p className="search__text"><strong>{selectedPerson.subtitle}</strong> </p>
                                    <p className="search__text"><strong>{selectedPerson.text}</strong></p>
                                    <p className="search__text"><strong> {selectedPerson.price}</strong></p>
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </section>
    );
};
export default Search;