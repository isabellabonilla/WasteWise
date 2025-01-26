// import React, { useEffect, useRef, useState, useCallback } from 'react'
// import { CCard, CCardBody, CCardHeader } from '@coreui/react'
// import { CChart } from '@coreui/react-chartjs'
// import SensorAlert from 'src/components/Alert.js'

// const [tooHot, setTooHot] = useState(false)
// const [tooCold, setTooCold] = useState(false)
// const [tooWet, setTooWet] = useState(false)
// const [tooDry, setTooDry] = useState(false)

// const SensorChart = () => {
//   const [chartData, setChartData] = useState({ labels: [], temperature: [], moisture: [] })
//   const wsRef = useRef(null)

//   const updateChartData = useCallback((newData) => {
//     const now = new Date()
//     const timeString = now.toLocaleTimeString()

//     setChartData((prevData) => {
//       const newLabels = [...prevData.labels, timeString].slice(-60)
//       const newTemperature = [...prevData.temperature, newData.temperature].slice(-60)
//       const newMoisture = [...prevData.moisture, newData.moisture].slice(-60)

//       return {
//         labels: newLabels,
//         temperature: newTemperature,
//         moisture: newMoisture,
//       }
//     })
//   },

//   useEffect(() => {
//     wsRef.current = new WebSocket(`ws://${window.location.hostname}:8080`)

//     wsRef.current.onmessage = (event) => {
//       const data = JSON.parse(event.data)
//       console.log('Received data:', data)
//       updateChartData(data)
//     }

//     return () => {
//       if (wsRef.current) {
//         wsRef.current.close()
//       }
//     }
//   }, [updateChartData])

//   return (
//     <CCard>
//       <CCardHeader>Sensor Data</CCardHeader>
//       <CCardBody>
//         <CChart
//           type="line"
//           data={{
//             labels: chartData.labels,
//             datasets: [
//               {
//                 label: 'Temperature (°F)',
//                 data: chartData.temperature,
//                 borderColor: 'rgb(255, 99, 132)',
//                 yAxisID: 'y-temperature',
//               },
//               {
//                 label: 'Moisture',
//                 data: chartData.moisture,
//                 borderColor: 'rgb(54, 162, 235)',
//                 yAxisID: 'y-moisture',
//               },
//             ],
//           }}
//           options={{
//             animation: {
//               duration: 0, // set animation duration to 0 (glitchy for every second (time) update)
//             },
//             transitions: {
//               active: {
//                 animation: {
//                   duration: 0, // disable transitions
//                 },
//               },
//             },
//             scales: {
//               'y-temperature': {
//                 type: 'linear',
//                 position: 'left',
//                 title: {
//                   display: true,
//                   text: 'Temperature (°F)',
//                 },
//               },
//               'y-moisture': {
//                 type: 'linear',
//                 position: 'right',
//                 title: {
//                   display: true,
//                   text: 'Moisture',
//                 },
//               },
//             },
//           }}
//         />
//         <SensorAlert tooHot={tooHot} tooCold={tooCold} tooWet={tooWet} tooDry={tooDry} />
//       </CCardBody>
//     </CCard>
//   )
// }

// export default SensorChart

import React, { useEffect, useRef, useState, useCallback } from 'react'
import { CCard, CCardBody, CCardHeader } from '@coreui/react'
import { CChart } from '@coreui/react-chartjs'
import AlertComponent from 'src/components/Alert.js'

const SensorChart = () => {
  const [chartData, setChartData] = useState({ labels: [], temperature: [], moisture: [] })
  const [alerts, setAlerts] = useState([])
  const wsRef = useRef(null)

  const updateChartData = useCallback((newData) => {
    const now = new Date()
    const timeString = now.toLocaleTimeString()

    setChartData((prevData) => {
      const newLabels = [...prevData.labels, timeString].slice(-60)
      const newTemperature = [...prevData.temperature, newData.temperature].slice(-60)
      const newMoisture = [...prevData.moisture, newData.moisture].slice(-60)

      return {
        labels: newLabels,
        temperature: newTemperature,
        moisture: newMoisture,
      }
    })

    // Check for alerts
    const newAlerts = []
    if (newData.tooHot)
      newAlerts.push({ type: 'warning', message: 'Compost is too hot. Consider aerating it soon.' })
    if (newData.tooCold)
      newAlerts.push({
        type: 'warning',
        message: 'Compost is getting cold! Consider adding greens to warm it up.',
      })
    if (newData.tooWet)
      newAlerts.push({
        type: 'warning',
        message: 'Compost is too moist! Consider adding more browns.',
      })
    if (newData.tooDry)
      newAlerts.push({
        type: 'warning',
        message: 'Compost is getting too dry! Consider adding water and greens.',
      })

    setAlerts(newAlerts)
  }, [])

  useEffect(() => {
    wsRef.current = new WebSocket(`ws://${window.location.hostname}:8080`)

    wsRef.current.onmessage = (event) => {
      const data = JSON.parse(event.data)
      console.log('Received data:', data)
      updateChartData(data)
    }

    return () => {
      if (wsRef.current) {
        wsRef.current.close()
      }
    }
  }, [updateChartData])

  return (
    <CCard style={{ border: 'none' }}>
      <CCardBody className="custom-chart-container">
        <AlertComponent alerts={alerts} />
        <CChart
          type="line"
          data={{
            labels: chartData.labels,
            datasets: [
              {
                label: 'Temperature (°F)',
                data: chartData.temperature,
                borderColor: 'rgb(255, 99, 132)',
                backgroundColor: 'rgba(255, 99, 132, 1)',
                yAxisID: 'y-temperature',
                color: '#d3d3d3',
              },
              {
                label: 'Moisture',
                data: chartData.moisture,
                borderColor: 'rgb(54, 162, 235)',
                backgroundColor: 'rgba(54, 162, 235, 1)',
                yAxisID: 'y-moisture',
                grid: {
                  color: '#d3d3d3', // Set color of grid lines (light grey)
                  lineWidth: 1, // Set line width
                },
              },
            ],
          }}
          options={{
            animation: { duration: 0 },
            transitions: { active: { animation: { duration: 0 } } },
            scales: {
              'y-temperature': {
                type: 'linear',
                position: 'left',
                title: {
                  display: true,
                  text: 'Temperature (°F)',
                  color: '#f7eee5', // Set title font color to white
                  font: {
                    size: 16, // Set title font size (adjust as needed)
                  },
                },
                ticks: {
                  color: '#f7eee5', // Set axis tick labels color to white
                  font: {
                    size: 16, // Set title font size (adjust as needed)
                  },
                },
                grid: {
                  color: '#d3d3d3', // Set color of grid lines (light grey)
                  lineWidth: 1, // Set line width
                },
              },
              'y-moisture': {
                type: 'linear',
                position: 'right',
                //title: { display: true, text: 'Moisture' },
                title: {
                  display: true,
                  text: 'Moisture',
                  color: '#f7eee5', // Set title font color to white
                  font: {
                    size: 16, // Set title font size (adjust as needed)
                  },
                },
                ticks: {
                  color: '#f7eee5', // Set axis tick labels color to white
                  font: {
                    size: 16, // Set title font size (adjust as needed)
                  },
                },
                grid: {
                  color: '#d3d3d3', // Set color of grid lines (light grey)
                  lineWidth: 1, // Set line width
                },
              },
              x: {
                title: {
                  display: true,
                  text: 'Time',
                  color: '#f7eee5', // Set title font color to white
                  font: {
                    size: 16, // Set title font size (adjust as needed)
                  },
                },
                ticks: {
                  color: '#f7eee5', // Set axis tick labels color to white
                  font: {
                    size: 16, // Set title font size (adjust as needed)
                  },
                },
              },
            },
            plugins: {
              tooltip: {
                backgroundColor: 'rgba(0,0,0,0.7)', // Optional: Tooltip background color
              },
              legend: {
                position: 'top',
                labels: {
                  font: {
                    size: 16, // Set the font size of legend labels (increase this value to make font larger)
                  },
                  color: '#f7eee5', // Set the color of the legend labels
                  padding: 20, // Increase the space between legend items (adjust the value as needed)
                },
              },
            },
            layout: {
              padding: {
                top: 20, // Add more space at the top to accommodate the legend (adjust as needed)
                bottom: 20,
                left: 20,
                right: 20,
              },
            },
            elements: {
              line: {
                tension: 0.4, // Adjust line tension for smoother curves
              },
            },
            chartArea: {
              backgroundColor: '#e6ded7', // Change this to your preferred color
            },
          }}
        />
      </CCardBody>
    </CCard>
  )
}

export default SensorChart
