# Arduino Sensor Dashboard

<img width="1424" alt="image" src="https://github.com/user-attachments/assets/82ec7840-d1de-4bea-9a50-8b01b1ed76c0" />

### Description
This project is a real-time dashboard that displays temperature and moisture data from an Arduino sensor. It uses a React frontend with CoreUI components and a Node.js backend to communicate with the Arduino via a serial connection and WebSocket for real-time updates.
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
Clone the repository with: 

git clone https://github.com/yourusername/arduino-sensor-dashboard.git

then 

cd arduino-sensor-dashboard

### Install dependencies:
npm install

Upload the Arduino sketch (found in arduino/sensor_sketch.ino) to your Arduino board.
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
Contributions are welcome! Please feel free to submit a Pull Request.
### License
This project is licensed under the MIT License - see the below for some of their documentation and LICENSE file for details.



# CoreUI Free React Admin Template [![Tweet](https://img.shields.io/twitter/url/http/shields.io.svg?style=social&logo=twitter)](https://twitter.com/intent/tweet?text=CoreUI%20-%20Free%React%204%20Admin%20Template%20&url=https://coreui.io&hashtags=bootstrap,admin,template,dashboard,panel,free,angular,react,vue)

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

#### Build

Run `build` to build the project. The build artifacts will be stored in the `build/` directory.

```bash
# build for production with minification
$ npm run build
```

or

```bash
# build for production with minification
$ yarn build
```

## What's included

Within the download you'll find the following directories and files, logically grouping common assets and providing both compiled and minified variations. You'll see something like this:

```
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

## Creators

**Łukasz Holeczek**

* <https://twitter.com/lukaszholeczek>
* <https://github.com/mrholek>

**Andrzej Kopański**

* <https://github.com/xidedix>

**CoreUI Team**

* <https://twitter.com/core_ui>
* <https://github.com/coreui>
* <https://github.com/orgs/coreui/people>

## Community

Get updates on CoreUI's development and chat with the project maintainers and community members.

- Follow [@core_ui on Twitter](https://twitter.com/core_ui).
- Read and subscribe to [CoreUI Blog](https://coreui.ui/blog/).

## Support CoreUI Development

CoreUI is an MIT-licensed open source project and is completely free to use. However, the amount of effort needed to maintain and develop new features for the project is not sustainable without proper financial backing. You can support development by buying the [CoreUI PRO](https://coreui.io/pricing/?framework=react&src=github-coreui-free-react-admin-template) or by becoming a sponsor via [Open Collective](https://opencollective.com/coreui/).

## Copyright and License

copyright 2024 creativeLabs Łukasz Holeczek.   

Code released under [the MIT license](https://github.com/coreui/coreui-free-react-admin-template/blob/main/LICENSE).
