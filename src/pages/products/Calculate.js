import React from 'react'
import { useTranslation } from "react-i18next";
import { makeStyles } from '@mui/styles';
import { RedirectToUcenter } from 'utilities'
import TopBanner from 'components/TopBanner'

import calculatetopbanner from 'assets/images/products/calculatetopbanner.jpg'


const useStyles = makeStyles({
    calculateCard: {
        boxShadow: '0px 3px 6px #00000029',
        borderRadius: '20px',
        // position: 'absolute',
        // top: '60%'
    }
})

const Calculate = () => {
    const classes = useStyles();
    const { t } = useTranslation();
    return (
        <>
            <TopBanner
                background={calculatetopbanner}
                titles={["Forex Trading"]}
                subtitles={["Explore the world’s hottest trading products and explore endless investment opportunities with HXFX GLOBAL."]}
                buttons={[{ color: 'btn-warning', text: "Trade Now", callback: RedirectToUcenter }]} />

            <div className="container col-9 p-4" style={{ minHeight: '630px' }}>
                <div className={`${classes.calculateCard} card p-4`}>
                    <ul className="nav nav-fill">
                        <li className="nav-item mx-2">
                            <button className="nav-link btn btn-warning active" aria-current="page" href="#">{t('Point Value')}</button>
                        </li>
                        <li className="nav-item mx-2">
                            <button className="nav-link btn btn-warning" href="#">{t('Deposit')}</button>
                        </li>
                        <li className="nav-item mx-2">
                            <button className="nav-link btn btn-warning" href="#">{t('Profit')}</button>
                        </li>
                        <li className="nav-item mx-2">
                            <button className="nav-link btn btn-warning">{t('Interest')}</button>
                        </li>
                    </ul>
                    <div className="row align-items-end my-4">

                        <div className="col">
                            <label htmlFor="Trading Type" className="form-label">{t('Trading Type')}</label>
                            <select className="form-select" value="Commodity" aria-label="Trading Type" id="Trading Type">
                                <option selected>Commodity</option>
                                <option value="1">One</option>
                                <option value="2">Two</option>
                                <option value="3">Three</option>
                            </select>
                        </div>

                        <div className="col">
                            <label htmlFor="Trading Product" className="form-label">Trading Product</label>
                            <select className="form-select" value="Gold" aria-label="Trading Product" id="Trading Product">
                                <option selected>Gold</option>
                                <option value="1">One</option>
                                <option value="2">Two</option>
                                <option value="3">Three</option>
                            </select>
                        </div>

                        <div className="col">
                            <label htmlFor="Trading Amount" value="0.01" className="form-label">{t('Trading Amount')}</label>
                            <input type="number" id="Trading Amount" className="form-control"></input>
                        </div>

                        <div className="col">
                            <button className="btn btn-primary">{t('Calculate')}</button>
                        </div>

                    </div>
                </div>
            </div>
        </>
    )
}

export default Calculate
