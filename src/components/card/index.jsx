import React from 'react';
import {Link} from 'react-router-dom';
import style from './style.module.scss';

import humidityImg from '../../assets/humidity.png';
import windImg from '../../assets/wind.png';

export default function Card({cityId, cityName, imageUrl, max, min, humidity, wind, onClose}) {
    return (
        <div className={style.card}>
            <div className={style.top}>
                <div className={style.title}>
                    <Link to={`/city/${cityId}`}>{cityName}</Link>
                </div>
                <div className={style.hide}>
                    <button onClick={onClose}>X</button>
                </div>
            </div>
            <div className={style.content}>
                <div className={style.left}>
                    <table>
                        <thead>
                            <tr>
                                <th>Max</th>
                                <th>Min</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>{max}°C</td>
                                <td>{min}°C</td>
                            </tr>
                        </tbody>
                    </table>

                    <div className={style.details}>
                        <div className={style.infoD}>
                            <img src={humidityImg} />
                            <span>{humidity}%</span>
                        </div>
                        <div className={style.infoD}>
                            <img src={windImg} />
                            <span>{wind}m/s</span>
                        </div>
                    </div>
                </div>
                <div className={style.right}>
                    <img src={imageUrl} />
                </div>
            </div>
        </div>
    )
}