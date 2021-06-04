import React, { useEffect, useContext } from 'react';
import './AsidePanel.scss';
import { AppContext } from '../.store/AppProvider';

const AsidePanel = () => {

    const { resultList } = useContext(AppContext)

    const handleTouchStart = () => {
        document.querySelector('.aside').classList.toggle('active')
    }

    useEffect(() => {
        document.querySelector('.aside__swiper').addEventListener('touchstart', handleTouchStart)
        document.querySelector('.aside__swiper').addEventListener('click', handleTouchStart)

        return () => {
            document.querySelector('.aside__swiper').removeEventListener('touchstart', handleTouchStart)
            document.querySelector('.aside__swiper').removeEventListener('click', handleTouchStart)
        }
    }, [])

    const resultListMap = resultList.map(item => (
        <li className="aside__result">{item.operation} = {item.result}</li>
    ))

    return (
        <aside className="aside">
            <div className="aside__swiper">
                <span className="aside__line"></span>
                <span className="aside__line"></span>
                <span className="aside__line"></span>
            </div>
            <h3 className="aside__title">History</h3>
            <ul className="aside__results">
                {resultListMap}
            </ul>
        </aside>
    );
}

export default AsidePanel;