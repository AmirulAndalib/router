/* prettier-ignore-start */

/* eslint-disable */

// @ts-nocheck

// noinspection JSUnusedGlobalSymbols

// This file is auto-generated by TanStack Router

// Import Routes

import { Route as rootRoute } from './routes/__root'
import { Route as PostsImport } from './routes/posts'
import { Route as IndexImport } from './routes/index'
import { Route as UsersUserIdImport } from './routes/users.$userId'
import { Route as PostsPostIdImport } from './routes/posts/$postId'

// Create/Update Routes

const PostsRoute = PostsImport.update({
  id: '/posts',
  path: '/posts',
  getParentRoute: () => rootRoute,
})

const IndexRoute = IndexImport.update({
  id: '/',
  path: '/',
  getParentRoute: () => rootRoute,
})

const UsersUserIdRoute = UsersUserIdImport.update({
  id: '/users/$userId',
  path: '/users/$userId',
  getParentRoute: () => rootRoute,
})

const PostsPostIdRoute = PostsPostIdImport.update({
  id: '/$postId',
  path: '/$postId',
  getParentRoute: () => PostsRoute,
})

// Create and export the route tree

const PostsRouteChildren = {
  PostsPostIdRoute: PostsPostIdRoute,
}

const PostsRouteWithChildren = PostsRoute._addFileChildren(PostsRouteChildren)

const rootRouteChildren = {
  IndexRoute: IndexRoute,
  PostsRoute: PostsRouteWithChildren,
  UsersUserIdRoute: UsersUserIdRoute,
}

export const routeTree = rootRoute._addFileChildren(rootRouteChildren)

/* prettier-ignore-end */

/* ROUTE_MANIFEST_START
{
  "routes": {
    "__root__": {
      "filePath": "__root.tsx",
      "children": [
        "/",
        "/posts",
        "/users/$userId"
      ]
    },
    "/": {
      "filePath": "index.tsx"
    },
    "/posts": {
      "filePath": "posts.tsx",
      "children": [
        "/posts/$postId"
      ]
    },
    "/posts/$postId": {
      "filePath": "posts/$postId.tsx",
      "parent": "/posts"
    },
    "/users/$userId": {
      "filePath": "users.$userId.tsx"
    }
  }
}
ROUTE_MANIFEST_END */
