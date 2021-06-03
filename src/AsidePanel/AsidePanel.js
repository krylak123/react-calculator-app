import React, { useEffect, useContext } from 'react';
import './AsidePanel.scss';
import { AppContext } from '../.store/AppProvider';

const AsidePanel = () => {

    const { resultList } = useContext(AppContext)

    const handleTouchStart = (e) => {
        e.target.parentNode.classList.toggle('active')
    }

    useEffect(() => {
        document.querySelector('.aside__swiper').addEventListener('touchstart', handleTouchStart)

        return () => {
            document.querySelector('.aside__swiper').removeEventListener('touchstart', handleTouchStart)
        }
    }, [])

    const resultListMap = resultList.map(item => (
        <li className="aside__result">{item}</li>
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