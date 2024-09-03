import React, { useState, useEffect } from 'react';
import axios from 'axios';

const CameraFeed = () => {
    const [snapshot, setSnapshot] = useState(null);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchSnapshot = async () => {
            try {
                const response = await axios.get('${process.env.REACT_APP_CAMERA_IP}:80/cgi-bin/snapshot.cgi?channel=1&type=0', {
                    auth: {
                        username: process.env.REACT_APP_CAMERA_USERNAME,
                        password: process.env.REACT_APP_CAMERA_PASSWORD,
                    },
                    responseType: 'arraybuffer',
                });
                const imageBase64 = Buffer.from(response.data, 'binary').toString('base64');
                setSnapshot(`data:image/jpeg;base64,${imageBase64}`);
            } catch (err) {
                setError(err.message);
            }
        };

        fetchSnapshot();
    }, []);

    return (
        <div>
            {error ? (
                <p>Error fetching snapshot: {error}</p>
            ) : (
                snapshot ? <img src={snapshot} alt="Camera Snapshot" /> : <p>Loading...</p>
            )}
        </div>
    );
};

export default CameraFeed;
