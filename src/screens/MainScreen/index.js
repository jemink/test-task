import React from 'react';
import GoogleMapComponen from '../../components/MapWithDarkMode';
import ImageSlider from '../../components/ImageSlider';
import InformationCard from '../../components/InformationCard';
import "./mainScreenStyle.css";

const triangleCoords = [
    { lat: 25.774, lng: -80.190 },
    { lat: 18.466, lng: -66.118 },
    { lat: 32.321, lng: -64.757 },
    { lat: 25.774, lng: -80.190 }
];

const markerPosition = {
    lat: 40.7484445,
    lng: -73.9878584
}

function App() {
    return (
        <section className="main-section">
            <div className="container-fluid media_menu">
                <div className="row">
                    <div className="col-md-3">
                        <div className="map-card">
                        <GoogleMapComponen googleMapURL="https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places&key=AIzaSyCXmLu2pqTfsxk5RWs6QPdnyf6e83fj_q0"
                            loadingElement={< div style={{ height: `100%` }} />}
                            containerElement={< div style={{ height: `100%` }} />}
                            mapElement={< div style={{ height: `100%` }} />}
                            polygonCoords={triangleCoords}
                            markerPosition={markerPosition}
                        />
                        </div>
                    </div>
                    <div className="col-md-6">
                        <InformationCard />
                    </div>
                    <div className="col-md-3">
                        <ImageSlider />
                    </div>
                </div>
            </div>
        </section>
    );
}

export default App