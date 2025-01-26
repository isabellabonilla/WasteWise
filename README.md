# WasteWise

### Arduino Sensor Dashboard

<img width="1424" alt="image" src="https://github.com/user-attachments/assets/82ec7840-d1de-4bea-9a50-8b01b1ed76c0" />

### Description
This project is a real-time dashboard that displays temperature and moisture data from an Arduino sensor. It features a React frontend with CoreUI components and a Node.js backend for communication with the Arduino via a serial connection and WebSocket for real-time updates.

<img width="861" alt="image" src="https://github.com/user-attachments/assets/d4af55f8-5a93-4465-93a2-dc499ed8718b" />

### Features
Real-time temperature and moisture data visualization
Alert system for extreme temperature and moisture levels
Responsive design using CoreUI components
WebSocket communication for live updates

### Prerequisites
Node.js (v14 or later)
npm (v6 or later)
Arduino IDE
Compatible Arduino board with temperature and soil moisture sensors

### Installation
Clone the repository:
git clone https://github.com/yourusername/arduino-sensor-dashboard.git
Navigate to the project directory:
cd arduino-sensor-dashboard
npm install
Upload the Arduino sketch to your board:
Locate the sketch file: arduino/sensor_sketch.ino
Use the Arduino IDE to upload it.
Update the serial port in arduino.js to match your Arduino's port.

### Usage
Start the backend server:
node arduino.js
In a new terminal, start the React development server:
npm start
Open your browser and navigate to http://localhost:3000 to view the dashboard.

### Project Structure
src/: React frontend code
views/Dashboard.js: Main dashboard component
components/SensorChart.js: Chart component for sensor data
components/AlertComponent.js: Alert component for sensor thresholds
arduino.js: Node.js backend for Arduino communication
arduino/: Arduino sketches and related files

### Contributing
Contributions are welcome! If you'd like to contribute:
Fork the repository.
Create a new branch (git checkout -b feature/your-feature).
Commit your changes (git commit -m 'Add your feature').
Push to the branch (git push origin feature/your-feature).
Submit a Pull Request.

### License
This project is licensed under the MIT License - see the below for some of their documentation and LICENSE file for details.

### Acknowledgments
This project utilizes the CoreUI Free React Admin Template, which provides a robust foundation for building responsive web applications.
Creators of CoreUI:
Łukasz Holeczek (GitHub, Twitter)
Andrzej Kopański (GitHub)
CoreUI Team:
GitHub
Twitter
Open Collective

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

## What's included
Within the download you'll find the following directories and files, logically grouping common assets and providing both compiled and minified variations. You'll see something like this:
coreui-free-react-admin-template
├── public/          # static files
│   ├── favicon.ico
│   └── manifest.json
│
├── src/             # project root
│   ├── assets/      # images, icons, etc.
│   ├── components/  # common components - header, footer, sidebar, etc.
│   ├── layouts/     # layout containers
│   ├── scss/        # scss styles
│   ├── views/       # application views
│   ├── _nav.js      # sidebar navigation config
│   ├── App.js
│   ├── index.js
│   ├── routes.js    # routes config
│   └── store.js     # template state example 
│
├── index.html       # html template
├── ...
├── package.json
├── ...
└── vite.config.mjs  # vite config
```
