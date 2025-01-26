// // eslint-disable-next-line react/prop-types
// const SensorAlert = ({ tooHot, tooCold, tooWet, tooDry }) => {
//   const [visible, setVisible] = React.useState(false)
//   const [message, setMessage] = React.useState('')

//   React.useEffect(() => {
//     if (tooHot) {
//       setMessage('The compost pile is too hot and may sterilize and kill its microorganisms.')
//       setVisible(true)
//     } else if (tooCold) {
//       setMessage('The compost pile is too cold. Consider adding more greens to it.')
//       setVisible(true)
//     } else if (tooWet) {
//       setMessage(
//         // eslint-disable-next-line prettier/prettier
//         'The compost pile is too moist. Consider adding more browns or improving drainage.')
//       setVisible(true)
//     } else if (tooDry) {
//       setMessage('The compost pile is too dry. Consider adding water or more greens.')
//       setVisible(true)
//     }

//     const timer = setTimeout(() => setVisible(false), 5000)
//     return () => clearTimeout(timer)
//   }, [tooHot, tooCold, tooWet, tooDry])

//   return React.createElement(
//     CToast,
//     {
//       visible: visible,
//       onClose: () => setVisible(false),
//       autohide: true,
//       delay: 5000,
//     },
//     React.createElement(CToastHeader, { closeButton: true }, 'Sensor Alert'),
//     React.createElement(CToastBody, null, message),
//   )
// }

// export default SensorAlert

// src/components/Alert.js

import React from 'react'
import PropTypes from 'prop-types'

const AlertComponent = ({ alerts }) => {
  if (alerts.length === 0) return null

  return (
    <div className="alert-container">
      {alerts.map((alert, index) => (
        <div key={index} className={`alert alert-${alert.type}`}>
          {alert.message}
        </div>
      ))}
    </div>
  )
}

AlertComponent.propTypes = {
  alerts: PropTypes.arrayOf(
    PropTypes.shape({
      type: PropTypes.string.isRequired,
      message: PropTypes.string.isRequired,
    }),
  ).isRequired,
}

export default AlertComponent
