/* prettier-ignore-start */

/* eslint-disable */

// @ts-nocheck

// noinspection JSUnusedGlobalSymbols

// This file is auto-generated by TanStack Router

import { createFileRoute } from '@tanstack/react-router'

// Import Routes

import { Route as rootRoute } from './routes/__root'

// Create Virtual Routes

const DashboardLazyImport = createFileRoute('/dashboard')()
const CreatetrackrLazyImport = createFileRoute('/createtrackr')()
const IndexLazyImport = createFileRoute('/')()

// Create/Update Routes

const DashboardLazyRoute = DashboardLazyImport.update({
  path: '/dashboard',
  getParentRoute: () => rootRoute,
} as any).lazy(() => import('./routes/dashboard.lazy').then((d) => d.Route))

const CreatetrackrLazyRoute = CreatetrackrLazyImport.update({
  path: '/createtrackr',
  getParentRoute: () => rootRoute,
} as any).lazy(() => import('./routes/createtrackr.lazy').then((d) => d.Route))

const IndexLazyRoute = IndexLazyImport.update({
  path: '/',
  getParentRoute: () => rootRoute,
} as any).lazy(() => import('./routes/index.lazy').then((d) => d.Route))

// Populate the FileRoutesByPath interface

declare module '@tanstack/react-router' {
  interface FileRoutesByPath {
    '/': {
      id: '/'
      path: '/'
      fullPath: '/'
      preLoaderRoute: typeof IndexLazyImport
      parentRoute: typeof rootRoute
    }
    '/createtrackr': {
      id: '/createtrackr'
      path: '/createtrackr'
      fullPath: '/createtrackr'
      preLoaderRoute: typeof CreatetrackrLazyImport
      parentRoute: typeof rootRoute
    }
    '/dashboard': {
      id: '/dashboard'
      path: '/dashboard'
      fullPath: '/dashboard'
      preLoaderRoute: typeof DashboardLazyImport
      parentRoute: typeof rootRoute
    }
  }
}

// Create and export the route tree

export const routeTree = rootRoute.addChildren({
  IndexLazyRoute,
  CreatetrackrLazyRoute,
  DashboardLazyRoute,
})

/* prettier-ignore-end */

/* ROUTE_MANIFEST_START
{
  "routes": {
    "__root__": {
      "filePath": "__root.tsx",
      "children": [
        "/",
        "/createtrackr",
        "/dashboard"
      ]
    },
    "/": {
      "filePath": "index.lazy.tsx"
    },
    "/createtrackr": {
      "filePath": "createtrackr.lazy.tsx"
    },
    "/dashboard": {
      "filePath": "dashboard.lazy.tsx"
    }
  }
}
ROUTE_MANIFEST_END */
