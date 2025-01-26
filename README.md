# WasteWise
### Collaborators: Jackie Jurado, Karla Tran, Isabella Bonilla

### Arduino Sensor Dashboard

<img width="1424" alt="image" src="https://github.com/user-attachments/assets/82ec7840-d1de-4bea-9a50-8b01b1ed76c0" />

![image](https://github.com/user-attachments/assets/8bf20559-4117-4175-ab98-8da6006a8bcf)

<img width="527" alt="image" src="https://github.com/user-attachments/assets/e6a8523e-3316-4174-97cc-d1f78689e566" />

### Description
This project is a real-time dashboard that displays temperature and moisture data from an Arduino sensor. It features a React frontend with CoreUI components and a Node.js backend for communication with the Arduino via a serial connection and WebSocket for real-time updates.

<img width="861" alt="image" src="https://github.com/user-attachments/assets/d4af55f8-5a93-4465-93a2-dc499ed8718b" />

### Features
* Real-Time Data Visualization: Displays live temperature and moisture readings using dynamic and interactive charts for a clear and detailed view of sensor performance.
* Alert System: Automatically triggers alerts for extreme temperature or moisture levels, helping users take timely action.
* Responsive Design: Built with CoreUI components to ensure an optimal user experience on desktops, tablets, and mobile devices.
* WebSocket Communication: Enables seamless, low-latency updates between the Arduino and the dashboard.
* Data History: Stores historical sensor data for trends analysis and performance monitoring.
* Customizable Thresholds: Allows users to set specific alert thresholds for both temperature and moisture to suit individual needs.
* User-Friendly Interface: Provides an intuitive and clean design, making it accessible even for non-technical users.
* Multi-Sensor Support: Capable of displaying data from multiple sensors simultaneously.
* Arduino Integration: Designed to work seamlessly with Arduino-based hardware for real-world environmental monitoring

### Prerequisites
* Node.js (v14 or later)
* npm (v6 or later)
* Arduino IDE
* Compatible Arduino board with temperature and soil moisture sensors

### Installation
* Clone the repository:
git clone https://github.com/yourusername/arduino-sensor-dashboard.git
* Navigate to the project directory:
cd arduino-sensor-dashboard
npm install
* Upload the Arduino sketch to your board:
* Locate the sketch file: arduino/sensor_sketch.ino
* Use the Arduino IDE to upload it.
* Update the serial port in arduino.js to match your Arduino's port.

### Usage
* Start the backend server:
node arduino.js
* In a new terminal, start the React development server:
npm start
* Open your browser and navigate to http://localhost:3000 to view the dashboard.

### Project Structure
* src/: React frontend code
* views/Dashboard.js: Main dashboard component
* components/SensorChart.js: Chart component for sensor data
* components/AlertComponent.js: Alert component for sensor thresholds
* arduino.js: Node.js backend for Arduino communication
* arduino/: Arduino sketches and related files

### Contributing
* Contributions are welcome! If you'd like to contribute:
* Fork the repository.
* Create a new branch (git checkout -b feature/your-feature).
* Commit your changes (git commit -m 'Add your feature').
* Push to the branch (git push origin feature/your-feature).
8 Submit a Pull Request.

### License
This project is licensed under the MIT License - see the below for some of their documentation and LICENSE file for details.

### Acknowledgments
This project utilizes the CoreUI Free React Admin Template, which provides a robust foundation for building responsive web applications.
Creators of CoreUI:
* Łukasz Holeczek (GitHub, Twitter)
* Andrzej Kopański (GitHub)
* CoreUI Team:
* GitHub
* Twitter
* Open Collective

### Resources
* https://stackoverflow.com/questions/57011328/arduino-read-serial-monitor-with-nodejs-and-output-in-react-web-page
* https://github.com/codeadamca/arduino-to-nodejs/blob/main/README.md
* https://stackoverflow.com/questions/66050092/how-to-add-a-new-file-to-an-existing-repository-using-vs-code
* https://stackoverflow.com/questions/70179711/reading-arduino-data-using-websocket-with-html-nodejs
* https://forum.arduino.cc/t/control-arduino-with-web-browser-html-websockets-and-node-js/93405
* https://www.youtube.com/watch?v=hFBFju_ZSYs
* https://gist.ly/youtube-summarizer/node-js-application-communication-arduino-react-and-websockets
* https://medium.com/@machadogj/arduino-and-node-js-via-serial-port-bcf9691fab6a
* https://www.youtube.com/watch?v=gQYsUjT-IBo
* https://forum.arduino.cc/t/control-arduino-with-web-browser-html-websockets-and-node-js/93405
* https://www.geeksforgeeks.org/what-is-web-socket-and-how-it-is-different-from-the-http/
* https://yedianyang.medium.com/how-to-send-data-to-a-web-page-from-arduino-serial-port-7aef849ccdd6

## Quick Start
- [Download the latest release](https://github.com/coreui/coreui-free-react-admin-template/archive/refs/heads/main.zip)
- Clone the repo: `git clone https://github.com/coreui/coreui-free-react-admin-template.git`

### Installation
``` bash
$ npm install
```
or
``` bash
$ yarn install
```

### Basic usage
``` bash
# dev server with hot reload at http://localhost:3000
$ npm start 
```
or 
``` bash
# dev server with hot reload at http://localhost:3000
$ yarn start
```
Navigate to [http://localhost:3000](http://localhost:3000). The app will automatically reload if you change any of the source files.

