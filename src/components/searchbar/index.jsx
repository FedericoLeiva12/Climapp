import React, { useState } from 'react';
import style from './style.module.scss';

export default function SearchBar({onSearch}) {
    const [value, setValue] = useState('');

    function onChangeHandler(e) {
        e.preventDefault();
        setValue(e.target.value);
    }

    function onSubmitHandler(e) {
        e.preventDefault();
        onSearch(value);
    }

    return (
        <form className={style.searchBar} onSubmit={onSubmitHandler}>
            <input type="text" onChange={onChangeHandler} value={value}/>
            <input type="submit" value="Buscar" />
        </form>
    );
}