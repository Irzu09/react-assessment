import React from 'react';
import styles from '../../page.module.css';
import { useState } from 'react';
import { geocodeByAddress, getLatLng } from 'react-places-autocomplete';
import { GoogleMap, LoadScript, Marker, StandaloneSearchBox } from '@react-google-maps/api';
import { Input } from 'antd';
import SearchHistory from '../SearchHistory';
import { useSelector, useDispatch } from 'react-redux'

const { Search } = Input;

function MapWidget() {
    const dispatch = useDispatch();
    const hist = useSelector((state) => state.History?.history)
    console.log(hist);

    const [address, setAddress] = useState('');
    const [position, setPosition] = useState({ Latitude: 3.1390, Longitude: 101.6869 }); //KL

    const containerStyle = {
        width: '100%',
        height: '400px',
    };

    const center = {
        lat: position.Latitude,
        lng: position.Longitude,
    };

    const handleChange = (newAddress) => {
        setAddress(newAddress);
    };

    const handleSearch = async (address) => {
        try {
            const results = await geocodeByAddress(address);
            setAddress(results[0].formatted_address);
            const latLng = await getLatLng(results[0]);
            setPosition({ Latitude: latLng.lat, Longitude: latLng.lng });
            console.log('Latitude:', latLng.lat);
            console.log('Longitude:', latLng.lng);

            dispatch(addToHistory(address));
        } catch (error) {
            console.error('Error:', error);
        }
    };

    return (
        <>
            <LoadScript googleMapsApiKey={process.env.API_KEY} libraries={['places']}>
                <StandaloneSearchBox onPlacesChanged={() => handleSearch(address)}>
                    <Search
                        className={styles.marginSearchBox}
                        placeholder="Search place"
                        allowClear
                        size="large"
                        value={address}
                        onChange={(e) => handleChange(e.target.value)}
                    />
                    {/* <input type="text" value={address} onChange={(e) => handleChange(e.target.value)} /> */}
                </StandaloneSearchBox>
                <GoogleMap mapContainerStyle={containerStyle} center={center} zoom={10}>
                    <Marker position={center} />
                </GoogleMap>
            </LoadScript>
            <SearchHistory />
        </>
    );
}

export default MapWidget;
