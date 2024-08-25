import React, {useState} from "react";
import '../../components/Header/Header.css'
import '../../styles/hero.css'
import Select from "react-select";
import './Search.css'
import {useParams} from "react-router-dom";



function SearchPage() {

    const [optionsValue, setOptionsValue] = useState(null);
    const [mattersValue, setMattersValue] = useState(null);

    const item = [
        {
            enuciado: '01. lorem possui',
            title: 'Ideias',
            text: 'Se tiver sugestões para melhorar o sistema, entre em contato e compartilhe suas ideias. sdfasdg´fklsdjfǵjsdl;fjasdkl;jf;ĺasd´fgsd',
            image: '',
            a: 'a) sdfkasdklf;asdkl0.',
            b: 'a) sdfkasdklf;asdkl0.',
            c: 'a) sdfkasdklf;asdkl0.',
            d: 'a) sdfkasdklf;asdkl0.',
        },
    ];

    const topics = [
        { value: "bludes", label: "mat" },
        { value: "rocdk", label: "sa" },
        { value: "djazz", label: "J" },
        { value: "orcdhestra", label: "Orstra" },
    ];

    const matters = [
        { value: "bludes", label: "Blues" },
        { value: "rocdk", label: "Rock" },
        { value: "djazz", label: "Jazz" },
        { value: "orcdhestra", label: "Orchestra" },
    ];


    const options = [
        { value: "blues", label: "Blues" },
        { value: "rock", label: "Rock" },
        { value: "jazz", label: "Jazz" },
        { value: "orchestra", label: "Orchestra" },
    ];

    const startYear = 2014;
    const endYear = 2024;

    const years = Array.from({ length: endYear - startYear + 1 }, (v, i) => ({
        value: startYear + i,
        label: startYear + i,
    }));

    const customStyles = {
        backgroundColor: "#212529",
        padding: "10px",
        border: "none",
        boxShadow: "none",
        width: "50px",
    };

    const [selectedOption, setSelectedOption] = useState(null);
    const [selectedTopic, setSelectedTopic] = useState(null);
    const [selectedOptions, setSelectedOptions] = useState(null);
    const [only, setOnly] = useState('Ano');

    const { name } = useParams();

    const selectChange = (selectedTopic) => {
        setMattersValue(selectedTopic);

        if (!selectedTopic) {
            setSelectedTopic(null);
        }
    };

    const handleFirstSelectChange = (selectedOption) => {
        setOptionsValue(selectedOption);

        if (!selectedOption) {
            setSelectedOption(null);
        }
    };
    const filteredYears = years.filter(option => {
        return optionsValue ? parseInt(option.value) > parseInt(optionsValue.value) : true;
    });

    const handleSecondSelectChange = (selectedOption) => {
        setSelectedOption(selectedOption);
    };

    const maxSelections = 3;

    const handleChange = (selected) => {
        if (selected.length <= maxSelections) {
            setSelectedOptions(selected);
        }
    };

    const date = () => {
        setOnly(prevState => prevState === 'Ano' ? 'Período' : 'Ano');
        setSelectedOption(null)
    };

    return (

        <div>
            <div className="">
                <h2>SaberVest</h2>
            </div>
            <div className="">
                <h1 className="">{name.toUpperCase()}</h1>
            </div>

            <div className="card__body">
                <Select
                    isClearable
                    className="select"
                    value={mattersValue}
                    onChange={selectChange}
                    options={matters}
                    placeholder="Selecione uma matéria"
                />

                    <Select
                        isClearable
                        isDisabled={!mattersValue}
                        className="select"
                        options={topics}
                        value={selectedTopic}
                        onChange={setSelectedTopic}
                        placeholder="Selecione um assunto"
                    />


                <div className="card__container">

                    <Select
                        isClearable
                        className="select"
                        defaultValue={optionsValue}
                        onChange={handleFirstSelectChange}
                        options={years}
                        styles={customStyles}
                        placeholder="Selecione o ano"
                    />


                    {only === 'Período' && (
                        <Select
                            className="select"
                            isDisabled={!optionsValue}
                            value={selectedOption}
                            onChange={handleSecondSelectChange}
                            options={filteredYears}
                            styles={customStyles}
                            placeholder="Selecione um período"
                        />
                    )}
                    <input type="checkbox"
                           id="switch"
                           className="checkbox"
                           onClick={date}
                    />

                    <label htmlFor="switch"
                           className="toggle">
                        <i className=""></i>
                        <i className=""></i>

                    </label>
                    <br></br>
                    <br></br>
                    <div>{only}</div>

                    <Select className="select"
                            value={selectedOptions}
                            onChange={handleChange}
                            options={options}
                            isMulti
                            styles={customStyles}
                    />

                    <button className="secondary__btn">Limpar</button>
                    <button className="primary__btn">Filtrar</button>
                </div>

            </div>

            <br></br>
            <div>
                <div className="card__container">
                    {
                        item.map((item, index) => (
                            <div className="" key={index}>
                                <h3 className="">{item.text}</h3>
                                <h3 className="">{item.enuciado}</h3>
                                <span className="">{item.a}</span>
                                <span className="">{item.b}</span>
                                <span className="">{item.c}</span>
                                <span className="">{item.d}</span>
                            </div>
                        ))
                    }
                </div>
            </div>


            <span className="ri-arrow-left-s-line"></span>
            <span className="">1</span>
            <span className="">...</span>
            <span className="">5</span>
            <span className="">...</span>
            <span className="">10</span>
            <span className="ri-arrow-right-s-line"></span>

        </div>
    );
}

export default SearchPage;