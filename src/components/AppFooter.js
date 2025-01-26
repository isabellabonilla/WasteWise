import React from 'react'
import { CFooter } from '@coreui/react'

const AppFooter = () => {
  return (
    <CFooter className="px-4" style={{ backgroundColor: '#e6ded7', color: '#61564d' }}>
        <div style={{ color: '#007bff' }}>
          <a href="https://coreui.io" target="_blank" rel="noopener noreferrer" style={{ color: '#61564d' }}>
            WasteWise
          </a>
          <span className="ms-1" style={{ color: '#61564d' }}>&copy; 2025 SwampHacksX.</span>
        </div>
        <div className="ms-auto" style={{ color: '#61564d' }}>
          <span className="me-1">Powered by</span>
          <a href="https://coreui.io/react" target="_blank" rel="noopener noreferrer" style={{ color: '#61564d' }}>
            CoreUI React Admin &amp; Dashboard Template
          </a>
        </div>
    </CFooter>
  )
}

export default React.memo(AppFooter)
