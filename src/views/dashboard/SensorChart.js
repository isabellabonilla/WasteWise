import React, { useEffect, useRef, useState, useCallback } from 'react'
import { CCard, CCardBody, CCardHeader } from '@coreui/react'
import { CChart } from '@coreui/react-chartjs'

const SensorChart = () => {
  const [chartData, setChartData] = useState({ labels: [], temperature: [], moisture: [] })
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
    <CCard>
      <CCardHeader>Sensor Data</CCardHeader>
      <CCardBody>
        <CChart
          type="line"
          data={{
            labels: chartData.labels,
            datasets: [
              {
                label: 'Temperature (°F)',
                data: chartData.temperature,
                borderColor: 'rgb(255, 99, 132)',
                yAxisID: 'y-temperature',
              },
              {
                label: 'Moisture',
                data: chartData.moisture,
                borderColor: 'rgb(54, 162, 235)',
                yAxisID: 'y-moisture',
              },
            ],
          }}
          options={{
            animation: {
              duration: 0, // set animation duration to 0 (glitchy for every second (time) update)
            },
            transitions: {
              active: {
                animation: {
                  duration: 0, // disable transitions
                },
              },
            },
            scales: {
              'y-temperature': {
                type: 'linear',
                position: 'left',
                title: {
                  display: true,
                  text: 'Temperature (°F)',
                },
              },
              'y-moisture': {
                type: 'linear',
                position: 'right',
                title: {
                  display: true,
                  text: 'Moisture',
                },
              },
            },
          }}
        />
      </CCardBody>
    </CCard>
  )
}

export default SensorChart
