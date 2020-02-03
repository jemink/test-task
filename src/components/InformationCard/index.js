import React from 'react';
import { InformationDetails } from './information-details';
import profile from '../../assets/images/profile.png';

export const InformationHeading = () => {
    return <React.Fragment>
        <div className="information-block p-4">
            <div className="information-head">
                <div className="infor-head d-flex justify-content-between mb-3">
                    <div>
                        <h6 className="mb-0">Extreme Alert</h6>
                        <p className="mb-0">~2 miles away</p>
                    </div>
                    <div>
                        <span>6 hours ago</span>
                    </div>
                </div>
                <div className="infor-title">
                    <h1>Help us find missing 14 year old Savvanah Smith last seen at Zilker Park</h1>
                    <p className="pb-0">
                        <img
                            height="40px"
                            width="40px"
                            src={profile}
                            alt="logo"
                            className="img-fluid img-austin"
                        />
                        Austin Police Department
                    </p>
                </div>
            </div>
            <div className="information-content">
                <InformationDetails/>
            </div>
        </div>
    </React.Fragment>
}
export default InformationHeading