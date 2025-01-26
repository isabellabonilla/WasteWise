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
