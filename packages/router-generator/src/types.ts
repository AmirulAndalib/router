export type RouteNode = {
  filePath: string
  fullPath: string
  variableName: string
  hasServerRoute?: boolean
  _fsRouteType: FsRouteType
  routePath?: string
  cleanedPath?: string
  path?: string
  isNonPath?: boolean
  isVirtualParentRequired?: boolean
  isVirtualParentRoute?: boolean
  isVirtual?: boolean
  children?: Array<RouteNode>
  parent?: RouteNode
}

export interface GetRouteNodesResult {
  rootRouteNode?: RouteNode
  routeNodes: Array<RouteNode>
}

export type FsRouteType =
  | '__root'
  | 'static'
  | 'layout'
  | 'pathless_layout'
  | 'lazy'
  | 'loader' // @deprecated
  | 'component' // @deprecated
  | 'pendingComponent' // @deprecated
  | 'errorComponent' // @deprecated
