import React from 'react';
import dummyData from '../../../dummyData/startupBannerData.json';
import StartupCardsBannerList from './StartupCardsBannerList';
import './StartupCardsBanner.css';

const StartupCardsBanner = () => {
    const startupBannerData  = dummyData;

    return (
        <div className="pb-5 pt-2">
            <div className="container">
                <div className="row">
                    {startupBannerData.map(bannerData => <StartupCardsBannerList bannerData={bannerData} key={bannerData.id} ></StartupCardsBannerList> )}
                </div>
            </div>
        </div>
    );
};

export default StartupCardsBanner;