const { AxiosDigestAuth } = require('@lukesthl/ts-axios-digest-auth');
const fs = require('fs').promises;
const path = require('path');
const os = require('os');

// Configure cameras
const cameras = [
    {
        id: 1,
        url: 'http://30.30.30.109/cgi-bin/snapshot.cgi?channel=1&type=0',
        username: 'admin',
        password: 'admin@1234'
    },
    {
        id: 2,
        url: 'http://30.30.30.110/cgi-bin/snapshot.cgi?channel=1&type=0',  // Fixed IP address
        username: 'admin',
        password: 'admin@1234'
    }
];

// Create digest auth clients for each camera
const digestAuthClients = cameras.map(camera => new AxiosDigestAuth({
    username: camera.username,
    password: camera.password,
}));

async function getSnapshotFromCamera(camera, authClient) {
    try {
        console.log(`Attempting to connect to Camera ${camera.id} at ${camera.url}`);
        
        const response = await authClient.request({
            method: 'GET',
            url: camera.url,
            responseType: 'arraybuffer',
            timeout: 5000, // 5 second timeout
            validateStatus: false // Allow non-200 status codes
        });

        console.log(`Camera ${camera.id} response status:`, response.status);
        
        if (response.status !== 200) {
            throw new Error(`Camera ${camera.id} returned status ${response.status}`);
        }

        if (!response.data || response.data.length === 0) {
            throw new Error(`Camera ${camera.id} returned empty response`);
        }

        const timestamp = new Date().toISOString().replace(/[:.]/g, '-');
        const desktopPath = path.join(os.homedir(), 'Desktop');
        const snapshotDir = path.join(desktopPath, 'ANPRSnapshots');
        const filename = `camera${camera.id}_snapshot_${timestamp}.jpg`;
        const filepath = path.join(snapshotDir, filename);

        // Create directory if it doesn't exist
        await fs.mkdir(snapshotDir, { recursive: true });

        // Write the snapshot to file
        await fs.writeFile(filepath, response.data);
        console.log(`Snapshot from Camera ${camera.id} saved successfully:`, filepath);
    } catch (error) {
        console.error(`Error handling snapshot from Camera ${camera.id}:`);
        console.error('Error details:', {
            message: error.message,
            code: error.code,
            response: error.response ? {
                status: error.response.status,
                statusText: error.response.statusText
            } : 'No response'
        });
    }
}

async function getAllSnapshots() {
    try {
        // Handle each camera separately to prevent one failure from affecting others
        for (let i = 0; i < cameras.length; i++) {
            await getSnapshotFromCamera(cameras[i], digestAuthClients[i]);
            // Add small delay between captures
            if (i < cameras.length - 1) {
                await new Promise(resolve => setTimeout(resolve, 1000));
            }
        }
    } catch (error) {
        console.error('Error in getAllSnapshots:', error);
    }
}

// Start capturing
getAllSnapshots();