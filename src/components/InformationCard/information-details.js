import React from 'react';
import AttachmentLogo from '../../assets/images/attachment_icon.png';

export const InformationDetails = () => {
    return (
        <div className="information-details">
            <h5>Details</h5>
            <p>Please help us find missing 14 year old savvanah Smith who was last seen with her
                friend at Zilkder park on Monday August 21st at 4:45pm, savvanah was wearning a red sweatshirt and black pants
                and has not been seen for over 1 day.
            </p>
            <h5>Instructions</h5>
            <p>
                Here are the instructions that can be included. Please call 911 fro more information
            </p>
            <h5>Attachments</h5>
            <div className="information-details-file">
                <div className="d-flex">
                    <img src={AttachmentLogo} height="20px" width="20px" alt="" className="img-fluid"/>
                    <span>Missing_Flyer.pdf</span></div>
            </div>

        </div>
    );
}
export default InformationDetails