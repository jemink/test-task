import React from 'react'
import SliderComponent from "./slider-component";
export const Slider = () => {
    return  (
        <div className="slider-block h-100">
            <div className="slider slider-display m-md-0 m-4">
                <SliderComponent/>
            </div>
            <div className="updates-content">
                <h4>Updates</h4>
                <ul className="list-unstyled updated-list">
                    <li className="updated-list-item">
                        <div className="list-item-name">7 min ago</div>
                        <div className="list-item-detail">Here is an update that will show up if admins post and update from
                            the web portal.
                        </div>
                    </li>
                    <li className="updated-list-item">
                        <div className="list-item-name">32 min ago</div>
                        <div className="list-item-detail">Here is new update that will show up if admins post something
                        </div>
                    </li>
                </ul>
            </div>
        </div>
    )
}
export default Slider