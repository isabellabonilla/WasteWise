import React from 'react'
import { useLocation } from 'react-router-dom'

import routes from '../routes'

import { CBreadcrumb, CBreadcrumbItem } from '@coreui/react'
import './AppBreadcrumb.css'

const AppBreadcrumb = () => {
  // const currentLocation = useLocation().pathname

  // const getRouteName = (pathname, routes) => {
  //   const currentRoute = routes.find((route) => route.path === pathname)
  //   return currentRoute ? currentRoute.name : false
  // }

  // const getBreadcrumbs = (location) => {
  //   const breadcrumbs = []
  //   location.split('/').reduce((prev, curr, index, array) => {
  //     const currentPathname = `${prev}/${curr}`
  //     const routeName = getRouteName(currentPathname, routes)
  //     routeName &&
  //       breadcrumbs.push({
  //         pathname: currentPathname,
  //         name: routeName,
  //         active: index + 1 === array.length ? true : false,
  //       })
  //     return currentPathname
  //   })
  //   return breadcrumbs
  // }

  // const breadcrumbs = getBreadcrumbs(currentLocation)

  // return (
  //   <CBreadcrumb className="breadcrumb-container my-0">
  //     <CBreadcrumbItem href="/" className="breadcrumb-item">Home</CBreadcrumbItem>
  //     {breadcrumbs.map((breadcrumb, index) => {
  //       return (
  //         <CBreadcrumbItem
  //           {...(breadcrumb.active ? { active: true } : { href: breadcrumb.pathname })}
  //           key={index}
  //           className={`breadcrumb-item ${breadcrumb.active ? 'active' : ''}`}
  //         >
  //           {breadcrumb.name}
  //         </CBreadcrumbItem>
  //       )
  //     })}
  //   </CBreadcrumb>
  // )
}

export default React.memo(AppBreadcrumb)
