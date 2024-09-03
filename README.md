
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
   CAMERA_IP=192.168.1.2 (Use your camera IP address)
   CAMERA_USERNAME=admin (Use the actual username)
   CAMERA_PASSWORD=admin123(Use the actual camera password)
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
  [Email](mailto:hello@mwando.co.ke)
  [Website]: https://mwando.co.ke 
  [LinkedIn]: https://ke.linkedin.com/in/mwandotheboss 
  [Facebook]: https://www.facebook.com/mwandotheboss/
  [Instagram]: https://www.instagram.com/mwandotheboss/ 
  [TikTok]: https://www.tiktok.com/@mwandotheboss 
  [X]: https://twitter.com/mwandotheboss





# Front End Development with React

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
