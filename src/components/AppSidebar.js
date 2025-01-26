import React from 'react'
import { useSelector, useDispatch } from 'react-redux'

import {
  CCloseButton,
  CSidebar,
  CSidebarBrand,
  CSidebarFooter,
  CSidebarHeader,
  CSidebarToggler,
} from '@coreui/react'
import CIcon from '@coreui/icons-react'

import { AppSidebarNav } from './AppSidebarNav'

import logoImage from 'src/assets/brand/WasteWiseLogo.png'
import { sygnet } from 'src/assets/brand/sygnet'

// sidebar nav config
import navigation from '../_nav'

const AppSidebar = () => {
  const dispatch = useDispatch()
  const unfoldable = useSelector((state) => state.sidebarUnfoldable)
  const sidebarShow = useSelector((state) => state.sidebarShow)

  return (
    <CSidebar
        className="border-end"
        colorScheme="dark"
        position="fixed"
        unfoldable={unfoldable}
        visible={sidebarShow}
        style={{ backgroundColor: '#f7eee5' }}
        onVisibleChange={(visible) => {
          dispatch({ type: 'set', sidebarShow: visible })
        }}
      >
        <CSidebarHeader className="border-bottom" style={{ color: '#f7eee5', borderColor: '#f7eee5' }}>
          <CSidebarBrand to="/">
            <img src={logoImage} alt="Logo" style={{ height: '45px', width: 'auto' }}/>
          </CSidebarBrand>
          <CCloseButton
            className="d-lg-none"
            dark
            onClick={() => dispatch({ type: 'set', sidebarShow: false })}
          />
        </CSidebarHeader>
        <AppSidebarNav items={navigation} />
        <CSidebarFooter className="border-top d-none d-lg-flex" style={{ color: '#8B4513', borderColor: '#D2B48C' }}>
          <CSidebarToggler
            onClick={() => dispatch({ type: 'set', sidebarUnfoldable: !unfoldable })}
          />
        </CSidebarFooter>
    </CSidebar>
  )
}

export default React.memo(AppSidebar)
