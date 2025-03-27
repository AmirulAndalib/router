/* eslint-disable */

// @ts-nocheck

// noinspection JSUnusedGlobalSymbols

// This file was automatically generated by TanStack Router.
// You should NOT make any changes in this file as it will be overwritten.
// Additionally, you should also exclude this file from your linter and/or formatter to prevent it from being checked or modified.

import { createFileRoute } from '@tanstack/react-router'

// Import Routes

import type { FileRoutesByPath, CreateFileRoute } from '@tanstack/react-router'
import { Route as rootRoute } from './routes/root'
import { Route as layoutRouteImport } from './routes/layout'
import { Route as indexRouteImport } from './routes/index'
import { Route as dbDashboardRouteImport } from './routes/db/dashboard'
import { Route as pagesRouteImport } from './routes/pages'
import { Route as HelloIndexRouteImport } from './routes/subtree/index'
import { Route as dbDashboardInvoicesRouteImport } from './routes/db/dashboard-invoices'
import { Route as dbDashboardIndexRouteImport } from './routes/db/dashboard-index'
import { Route as HelloFooIndexRouteImport } from './routes/subtree/foo/index'
import { Route as HelloFooIdRouteImport } from './routes/subtree/foo/$id'
import { Route as dbInvoiceDetailRouteImport } from './routes/db/invoice-detail'
import { Route as dbInvoicesIndexRouteImport } from './routes/db/invoices-index'

// Create Virtual Routes

const LangRouteImport = createFileRoute('/$lang')()

// Create/Update Routes

const layoutRoute = layoutRouteImport.update({
  id: '/_layout',
  getParentRoute: () => rootRoute,
} as any)

const LangRoute = LangRouteImport.update({
  id: '/$lang',
  path: '/$lang',
  getParentRoute: () => rootRoute,
} as any)

const indexRoute = indexRouteImport.update({
  id: '/',
  path: '/',
  getParentRoute: () => rootRoute,
} as any)

const dbDashboardRoute = dbDashboardRouteImport.update({
  id: '/dashboard',
  path: '/dashboard',
  getParentRoute: () => layoutRoute,
} as any)

const pagesRoute = pagesRouteImport.update({
  id: '/',
  path: '/',
  getParentRoute: () => LangRoute,
} as any)

const HelloIndexRoute = HelloIndexRouteImport.update({
  id: '/hello/',
  path: '/hello/',
  getParentRoute: () => layoutRoute,
} as any)

const dbDashboardInvoicesRoute = dbDashboardInvoicesRouteImport.update({
  id: '/invoices',
  path: '/invoices',
  getParentRoute: () => dbDashboardRoute,
} as any)

const dbDashboardIndexRoute = dbDashboardIndexRouteImport.update({
  id: '/',
  path: '/',
  getParentRoute: () => dbDashboardRoute,
} as any)

const HelloFooIndexRoute = HelloFooIndexRouteImport.update({
  id: '/hello/foo/',
  path: '/hello/foo/',
  getParentRoute: () => layoutRoute,
} as any)

const HelloFooIdRoute = HelloFooIdRouteImport.update({
  id: '/hello/foo/$id',
  path: '/hello/foo/$id',
  getParentRoute: () => layoutRoute,
} as any)

const dbInvoiceDetailRoute = dbInvoiceDetailRouteImport.update({
  id: '/$id',
  path: '/$id',
  getParentRoute: () => dbDashboardInvoicesRoute,
} as any)

const dbInvoicesIndexRoute = dbInvoicesIndexRouteImport.update({
  id: '/',
  path: '/',
  getParentRoute: () => dbDashboardInvoicesRoute,
} as any)

// Populate the FileRoutesByPath interface

declare module '@tanstack/react-router' {
  interface FileRoutesByPath {
    '/': {
      id: '/'
      path: '/'
      fullPath: '/'
      preLoaderRoute: typeof indexRouteImport
      parentRoute: typeof rootRoute
    }
    '/$lang': {
      id: '/$lang'
      path: '/$lang'
      fullPath: '/$lang'
      preLoaderRoute: typeof LangRouteImport
      parentRoute: typeof rootRoute
    }
    '/_layout': {
      id: '/_layout'
      path: ''
      fullPath: ''
      preLoaderRoute: typeof layoutRouteImport
      parentRoute: typeof rootRoute
    }
    '/$lang/': {
      id: '/$lang/'
      path: '/'
      fullPath: '/$lang/'
      preLoaderRoute: typeof pagesRouteImport
      parentRoute: typeof LangRouteImport
    }
    '/_layout/dashboard': {
      id: '/_layout/dashboard'
      path: '/dashboard'
      fullPath: '/dashboard'
      preLoaderRoute: typeof dbDashboardRouteImport
      parentRoute: typeof layoutRouteImport
    }
    '/_layout/dashboard/': {
      id: '/_layout/dashboard/'
      path: '/'
      fullPath: '/dashboard/'
      preLoaderRoute: typeof dbDashboardIndexRouteImport
      parentRoute: typeof dbDashboardRouteImport
    }
    '/_layout/dashboard/invoices': {
      id: '/_layout/dashboard/invoices'
      path: '/invoices'
      fullPath: '/dashboard/invoices'
      preLoaderRoute: typeof dbDashboardInvoicesRouteImport
      parentRoute: typeof dbDashboardRouteImport
    }
    '/_layout/hello/': {
      id: '/_layout/hello/'
      path: '/hello'
      fullPath: '/hello'
      preLoaderRoute: typeof HelloIndexRouteImport
      parentRoute: typeof layoutRouteImport
    }
    '/_layout/dashboard/invoices/': {
      id: '/_layout/dashboard/invoices/'
      path: '/'
      fullPath: '/dashboard/invoices/'
      preLoaderRoute: typeof dbInvoicesIndexRouteImport
      parentRoute: typeof dbDashboardInvoicesRouteImport
    }
    '/_layout/dashboard/invoices/$id': {
      id: '/_layout/dashboard/invoices/$id'
      path: '/$id'
      fullPath: '/dashboard/invoices/$id'
      preLoaderRoute: typeof dbInvoiceDetailRouteImport
      parentRoute: typeof dbDashboardInvoicesRouteImport
    }
    '/_layout/hello/foo/$id': {
      id: '/_layout/hello/foo/$id'
      path: '/hello/foo/$id'
      fullPath: '/hello/foo/$id'
      preLoaderRoute: typeof HelloFooIdRouteImport
      parentRoute: typeof layoutRouteImport
    }
    '/_layout/hello/foo/': {
      id: '/_layout/hello/foo/'
      path: '/hello/foo'
      fullPath: '/hello/foo'
      preLoaderRoute: typeof HelloFooIndexRouteImport
      parentRoute: typeof layoutRouteImport
    }
  }
}

// Add type-safety to the createFileRoute  function across the route tree

declare module './routes/index' {
  const createFileRoute: CreateFileRoute<
    '/',
    FileRoutesByPath['/']['parentRoute'],
    FileRoutesByPath['/']['id'],
    FileRoutesByPath['/']['path'],
    FileRoutesByPath['/']['fullPath']
  >
}
declare module './routes' {
  const createFileRoute: CreateFileRoute<
    '/$lang',
    FileRoutesByPath['/$lang']['parentRoute'],
    FileRoutesByPath['/$lang']['id'],
    FileRoutesByPath['/$lang']['path'],
    FileRoutesByPath['/$lang']['fullPath']
  >
}
declare module './routes/layout' {
  const createFileRoute: CreateFileRoute<
    '/_layout',
    FileRoutesByPath['/_layout']['parentRoute'],
    FileRoutesByPath['/_layout']['id'],
    FileRoutesByPath['/_layout']['path'],
    FileRoutesByPath['/_layout']['fullPath']
  >
}
declare module './routes/pages' {
  const createFileRoute: CreateFileRoute<
    '/$lang/',
    FileRoutesByPath['/$lang/']['parentRoute'],
    FileRoutesByPath['/$lang/']['id'],
    FileRoutesByPath['/$lang/']['path'],
    FileRoutesByPath['/$lang/']['fullPath']
  >
}
declare module './routes/db/dashboard' {
  const createFileRoute: CreateFileRoute<
    '/_layout/dashboard',
    FileRoutesByPath['/_layout/dashboard']['parentRoute'],
    FileRoutesByPath['/_layout/dashboard']['id'],
    FileRoutesByPath['/_layout/dashboard']['path'],
    FileRoutesByPath['/_layout/dashboard']['fullPath']
  >
}
declare module './routes/db/dashboard-index' {
  const createFileRoute: CreateFileRoute<
    '/_layout/dashboard/',
    FileRoutesByPath['/_layout/dashboard/']['parentRoute'],
    FileRoutesByPath['/_layout/dashboard/']['id'],
    FileRoutesByPath['/_layout/dashboard/']['path'],
    FileRoutesByPath['/_layout/dashboard/']['fullPath']
  >
}
declare module './routes/db/dashboard-invoices' {
  const createFileRoute: CreateFileRoute<
    '/_layout/dashboard/invoices',
    FileRoutesByPath['/_layout/dashboard/invoices']['parentRoute'],
    FileRoutesByPath['/_layout/dashboard/invoices']['id'],
    FileRoutesByPath['/_layout/dashboard/invoices']['path'],
    FileRoutesByPath['/_layout/dashboard/invoices']['fullPath']
  >
}
declare module './routes/subtree/index' {
  const createFileRoute: CreateFileRoute<
    '/_layout/hello/',
    FileRoutesByPath['/_layout/hello/']['parentRoute'],
    FileRoutesByPath['/_layout/hello/']['id'],
    FileRoutesByPath['/_layout/hello/']['path'],
    FileRoutesByPath['/_layout/hello/']['fullPath']
  >
}
declare module './routes/db/invoices-index' {
  const createFileRoute: CreateFileRoute<
    '/_layout/dashboard/invoices/',
    FileRoutesByPath['/_layout/dashboard/invoices/']['parentRoute'],
    FileRoutesByPath['/_layout/dashboard/invoices/']['id'],
    FileRoutesByPath['/_layout/dashboard/invoices/']['path'],
    FileRoutesByPath['/_layout/dashboard/invoices/']['fullPath']
  >
}
declare module './routes/db/invoice-detail' {
  const createFileRoute: CreateFileRoute<
    '/_layout/dashboard/invoices/$id',
    FileRoutesByPath['/_layout/dashboard/invoices/$id']['parentRoute'],
    FileRoutesByPath['/_layout/dashboard/invoices/$id']['id'],
    FileRoutesByPath['/_layout/dashboard/invoices/$id']['path'],
    FileRoutesByPath['/_layout/dashboard/invoices/$id']['fullPath']
  >
}
declare module './routes/subtree/foo/$id' {
  const createFileRoute: CreateFileRoute<
    '/_layout/hello/foo/$id',
    FileRoutesByPath['/_layout/hello/foo/$id']['parentRoute'],
    FileRoutesByPath['/_layout/hello/foo/$id']['id'],
    FileRoutesByPath['/_layout/hello/foo/$id']['path'],
    FileRoutesByPath['/_layout/hello/foo/$id']['fullPath']
  >
}
declare module './routes/subtree/foo/index' {
  const createFileRoute: CreateFileRoute<
    '/_layout/hello/foo/',
    FileRoutesByPath['/_layout/hello/foo/']['parentRoute'],
    FileRoutesByPath['/_layout/hello/foo/']['id'],
    FileRoutesByPath['/_layout/hello/foo/']['path'],
    FileRoutesByPath['/_layout/hello/foo/']['fullPath']
  >
}

// Create and export the route tree

interface LangRouteChildren {
  pagesRoute: typeof pagesRoute
}

const LangRouteChildren: LangRouteChildren = {
  pagesRoute: pagesRoute,
}

const LangRouteWithChildren = LangRoute._addFileChildren(LangRouteChildren)

interface dbDashboardInvoicesRouteChildren {
  dbInvoicesIndexRoute: typeof dbInvoicesIndexRoute
  dbInvoiceDetailRoute: typeof dbInvoiceDetailRoute
}

const dbDashboardInvoicesRouteChildren: dbDashboardInvoicesRouteChildren = {
  dbInvoicesIndexRoute: dbInvoicesIndexRoute,
  dbInvoiceDetailRoute: dbInvoiceDetailRoute,
}

const dbDashboardInvoicesRouteWithChildren =
  dbDashboardInvoicesRoute._addFileChildren(dbDashboardInvoicesRouteChildren)

interface dbDashboardRouteChildren {
  dbDashboardIndexRoute: typeof dbDashboardIndexRoute
  dbDashboardInvoicesRoute: typeof dbDashboardInvoicesRouteWithChildren
}

const dbDashboardRouteChildren: dbDashboardRouteChildren = {
  dbDashboardIndexRoute: dbDashboardIndexRoute,
  dbDashboardInvoicesRoute: dbDashboardInvoicesRouteWithChildren,
}

const dbDashboardRouteWithChildren = dbDashboardRoute._addFileChildren(
  dbDashboardRouteChildren,
)

interface layoutRouteChildren {
  dbDashboardRoute: typeof dbDashboardRouteWithChildren
  HelloIndexRoute: typeof HelloIndexRoute
  HelloFooIdRoute: typeof HelloFooIdRoute
  HelloFooIndexRoute: typeof HelloFooIndexRoute
}

const layoutRouteChildren: layoutRouteChildren = {
  dbDashboardRoute: dbDashboardRouteWithChildren,
  HelloIndexRoute: HelloIndexRoute,
  HelloFooIdRoute: HelloFooIdRoute,
  HelloFooIndexRoute: HelloFooIndexRoute,
}

const layoutRouteWithChildren =
  layoutRoute._addFileChildren(layoutRouteChildren)

export interface FileRoutesByFullPath {
  '/': typeof indexRoute
  '/$lang': typeof LangRouteWithChildren
  '': typeof layoutRouteWithChildren
  '/$lang/': typeof pagesRoute
  '/dashboard': typeof dbDashboardRouteWithChildren
  '/dashboard/': typeof dbDashboardIndexRoute
  '/dashboard/invoices': typeof dbDashboardInvoicesRouteWithChildren
  '/hello': typeof HelloIndexRoute
  '/dashboard/invoices/': typeof dbInvoicesIndexRoute
  '/dashboard/invoices/$id': typeof dbInvoiceDetailRoute
  '/hello/foo/$id': typeof HelloFooIdRoute
  '/hello/foo': typeof HelloFooIndexRoute
}

export interface FileRoutesByTo {
  '/': typeof indexRoute
  '': typeof layoutRouteWithChildren
  '/$lang': typeof pagesRoute
  '/dashboard': typeof dbDashboardIndexRoute
  '/hello': typeof HelloIndexRoute
  '/dashboard/invoices': typeof dbInvoicesIndexRoute
  '/dashboard/invoices/$id': typeof dbInvoiceDetailRoute
  '/hello/foo/$id': typeof HelloFooIdRoute
  '/hello/foo': typeof HelloFooIndexRoute
}

export interface FileRoutesById {
  __root__: typeof rootRoute
  '/': typeof indexRoute
  '/$lang': typeof LangRouteWithChildren
  '/_layout': typeof layoutRouteWithChildren
  '/$lang/': typeof pagesRoute
  '/_layout/dashboard': typeof dbDashboardRouteWithChildren
  '/_layout/dashboard/': typeof dbDashboardIndexRoute
  '/_layout/dashboard/invoices': typeof dbDashboardInvoicesRouteWithChildren
  '/_layout/hello/': typeof HelloIndexRoute
  '/_layout/dashboard/invoices/': typeof dbInvoicesIndexRoute
  '/_layout/dashboard/invoices/$id': typeof dbInvoiceDetailRoute
  '/_layout/hello/foo/$id': typeof HelloFooIdRoute
  '/_layout/hello/foo/': typeof HelloFooIndexRoute
}

export interface FileRouteTypes {
  fileRoutesByFullPath: FileRoutesByFullPath
  fullPaths:
    | '/'
    | '/$lang'
    | ''
    | '/$lang/'
    | '/dashboard'
    | '/dashboard/'
    | '/dashboard/invoices'
    | '/hello'
    | '/dashboard/invoices/'
    | '/dashboard/invoices/$id'
    | '/hello/foo/$id'
    | '/hello/foo'
  fileRoutesByTo: FileRoutesByTo
  to:
    | '/'
    | ''
    | '/$lang'
    | '/dashboard'
    | '/hello'
    | '/dashboard/invoices'
    | '/dashboard/invoices/$id'
    | '/hello/foo/$id'
    | '/hello/foo'
  id:
    | '__root__'
    | '/'
    | '/$lang'
    | '/_layout'
    | '/$lang/'
    | '/_layout/dashboard'
    | '/_layout/dashboard/'
    | '/_layout/dashboard/invoices'
    | '/_layout/hello/'
    | '/_layout/dashboard/invoices/'
    | '/_layout/dashboard/invoices/$id'
    | '/_layout/hello/foo/$id'
    | '/_layout/hello/foo/'
  fileRoutesById: FileRoutesById
}

export interface RootRouteChildren {
  indexRoute: typeof indexRoute
  LangRoute: typeof LangRouteWithChildren
  layoutRoute: typeof layoutRouteWithChildren
}

const rootRouteChildren: RootRouteChildren = {
  indexRoute: indexRoute,
  LangRoute: LangRouteWithChildren,
  layoutRoute: layoutRouteWithChildren,
}

export const routeTree = rootRoute
  ._addFileChildren(rootRouteChildren)
  ._addFileTypes<FileRouteTypes>()

/* ROUTE_MANIFEST_START
{
  "routes": {
    "__root__": {
      "filePath": "root.tsx",
      "children": [
        "/",
        "/$lang",
        "/_layout"
      ]
    },
    "/": {
      "filePath": "index.tsx"
    },
    "/$lang": {
      "filePath": "",
      "children": [
        "/$lang/"
      ]
    },
    "/_layout": {
      "filePath": "layout.tsx",
      "children": [
        "/_layout/dashboard",
        "/_layout/hello/",
        "/_layout/hello/foo/$id",
        "/_layout/hello/foo/"
      ]
    },
    "/$lang/": {
      "filePath": "pages.tsx",
      "parent": "/$lang"
    },
    "/_layout/dashboard": {
      "filePath": "db/dashboard.tsx",
      "parent": "/_layout",
      "children": [
        "/_layout/dashboard/",
        "/_layout/dashboard/invoices"
      ]
    },
    "/_layout/dashboard/": {
      "filePath": "db/dashboard-index.tsx",
      "parent": "/_layout/dashboard"
    },
    "/_layout/dashboard/invoices": {
      "filePath": "db/dashboard-invoices.tsx",
      "parent": "/_layout/dashboard",
      "children": [
        "/_layout/dashboard/invoices/",
        "/_layout/dashboard/invoices/$id"
      ]
    },
    "/_layout/hello/": {
      "filePath": "subtree/index.tsx",
      "parent": "/_layout"
    },
    "/_layout/dashboard/invoices/": {
      "filePath": "db/invoices-index.tsx",
      "parent": "/_layout/dashboard/invoices"
    },
    "/_layout/dashboard/invoices/$id": {
      "filePath": "db/invoice-detail.tsx",
      "parent": "/_layout/dashboard/invoices"
    },
    "/_layout/hello/foo/$id": {
      "filePath": "subtree/foo/$id.tsx",
      "parent": "/_layout"
    },
    "/_layout/hello/foo/": {
      "filePath": "subtree/foo/index.tsx",
      "parent": "/_layout"
    }
  }
}
ROUTE_MANIFEST_END */
