const { AxiosDigestAuth } = require('@lukesthl/ts-axios-digest-auth');

const digestAuthClient = new AxiosDigestAuth({
    username: 'admin',
    password: 'admin123',
});

async function getSnapshot() {
    try {
        const response = await digestAuthClient.request({
            method: 'GET',
            url: 'http://192.168.1.89/cgi-bin/snapshot.cgi?channel=1&type=0',
        });
        console.log('Snapshot retrieved successfully:', response.data);
    } catch (error) {
        console.error('Error retrieving snapshot:', error.message);
    }
}

getSnapshot();