import React from 'react';

const StartupCardsBannerList = ({bannerData}) => {
    const {title, image} = bannerData;

    const BannerImg = {
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.6)),url(${image})`
    }

    return (
        <div className="col-md-4">
            <div style={BannerImg} className="startupCardItem">
                <div className="card-body">
                    <button type="button" className="btn btn-outline-white">{title}</button>
                </div>
            </div>
        </div>
    );
};

export default StartupCardsBannerList;