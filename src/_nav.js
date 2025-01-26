import React from 'react'
import CIcon from '@coreui/icons-react'
import {
  cilBell,
  cilCalculator,
  cilChartLine,
  cilChartPie,
  cilCursor,
  cilDescription,
  cilDrop,
  cilExternalLink,
  cilGlobeAlt,
  cilGraph,
  cilHeart,
  cilHistory,
  cilNotes,
  cilPencil,
  cilPeople,
  cilPuzzle,
  cilSpeedometer,
  cilStar,
} from '@coreui/icons'
import { CNavGroup, CNavItem, CNavTitle } from '@coreui/react'

const _nav = [
  {
    component: CNavItem,
    name: 'Dashboard',
    to: '/dashboard',
    icon: <CIcon icon={cilGraph} customClassName="nav-icon" style={{ color: '#8B4513' }} />, // Brown color for icon
    badge: {
      color: 'info',
    },
  },
  {
    component: CNavGroup,
    name: 'Community',
    to: '/community',
    icon: <CIcon icon={cilPeople} customClassName="nav-icon" style={{ color: '#8B4513' }} />, // Brown color for icon
    items: [
      {
        component: CNavItem,
        name: 'Friends',
        to: '/community/friends',
        icon: <CIcon icon={cilHeart} customClassName="nav-icon" style={{ color: '#8B4513' }} />, // Brown color for icon
      },
      {
        component: CNavItem,
        name: 'Explore',
        to: '/community/explore',
        icon: <CIcon icon={cilGlobeAlt} customClassName="nav-icon" style={{ color: '#8B4513' }} />, // Brown color for icon
      },
    ],
  },
  {
    component: CNavItem,
    name: 'History',
    to: '/history',
    icon: <CIcon icon={cilHistory} customClassName="nav-icon" style={{ color: '#8B4513' }} />, // Brown color for icon
  },
]

export default _nav
