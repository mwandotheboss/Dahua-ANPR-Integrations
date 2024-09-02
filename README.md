
# Dahua ANPR Integrations

## Overview

This repository provides a Node.js integration for Dahua's ANPR cameras, enabling developers to capture snapshots, process license plates, and interact with Dahua devices via RESTful APIs. The integration supports advanced features such as Digest Authentication and can be easily extended to support other functionalities of Dahua cameras.

## Features

- **Snapshot Capture**: Retrieve snapshots from Dahua ANPR cameras using HTTP requests.
- **Digest Authentication**: Securely interact with Dahua devices using Digest Authentication.
- **Real-time License Plate Recognition**: Process and store recognized license plate data.
- **Integration with Third-party Systems**: Easily connect the ANPR data with external databases, monitoring systems, and more.

## Requirements

- **Node.js**: v14.x or higher
- **Dahua ANPR Camera**: Tested with model XYZ (adjust based on actual model)
- **NPM Packages**:
  - `axios`: For making HTTP requests.
  - `@lukesthl/ts-axios-digest-auth`: For handling Digest Authentication.

## Installation

1. **Clone the Repository**:

   ```bash
   git clone https://github.com/mwandotheboss/Dahua-ANPR-Integrations.git
   cd Dahua-ANPR-Integrations
   ```

2. **Install Dependencies**:

   ```bash
   npm install
   ```

3. **Configure Environment Variables**:
   
   Create a `.env` file in the root directory and add the following:

   ```env
   CAMERA_IP=192.168.1.89
   CAMERA_USERNAME=admin
   CAMERA_PASSWORD=admin123
   ```

4. **Run the Integration**:

   ```bash
   node getSnapshot.js
   ```

## Usage

### Capture Snapshot

The primary script `getSnapshot.js` retrieves a snapshot from the Dahua ANPR camera and stores it locally.

```javascript
const { AxiosDigestAuth } = require('@lukesthl/ts-axios-digest-auth');

const digestAuthClient = new AxiosDigestAuth({
    username: process.env.CAMERA_USERNAME,
    password: process.env.CAMERA_PASSWORD,
});

async function getSnapshot() {
    try {
        const response = await digestAuthClient.request({
            method: 'GET',
            url: `http://${process.env.CAMERA_IP}/cgi-bin/snapshot.cgi?channel=1&type=0`,
        });
        console.log('Snapshot retrieved successfully:', response.data);
    } catch (error) {
        console.error('Error retrieving snapshot:', error.message);
    }
}

getSnapshot();
```

### Integration with Other Services

You can integrate the captured data with other systems by extending the functionality in `getSnapshot.js`. For example, you could:

- **Upload snapshots** to cloud storage like AWS S3.
- **Analyze license plates** using a machine learning model.
- **Log data** into a centralized database for monitoring and reporting.

## Troubleshooting

- **Digest Authentication Errors**: Ensure that your camera’s firmware is up-to-date and that the username/password are correct.
- **Connection Issues**: Check network configurations and ensure that the camera is accessible from your network.

## Contributing

Contributions are welcome! Please fork this repository, make your changes, and submit a pull request.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Contact

For any queries or support, please reach out to:

- **Zephania Mwando**  
  [LinkedIn](www.linkedin.com/in/mwando)  
  [Email](mailto:zephaniamwando@gmail.com)
