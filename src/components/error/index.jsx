import React from 'react';
import style from './style.module.scss';

export default function Error({errorMessage, hideError}) {
    return (
        <form className={style.error} onSubmit={e => {
            e.preventDefault();
            hideError();
        }}>
            <div className={style.left}>
                {errorMessage}
            </div>
            <div className={style.right}>
                <input type="submit" className={style.hide} onClick={hideError} value="X"/>
            </div>
        </form>
    )
}