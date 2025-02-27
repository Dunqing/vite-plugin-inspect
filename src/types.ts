import type { Awaitable } from '@antfu/utils'

export interface TransformInfo {
  name: string
  result: string
  start: number
  end: number
  order?: string
}

export interface ModuleInfo {
  id: string
  plugins: string[]
  deps: string[]
  virtual: boolean
}

export interface ModulesList {
  root: string
  modules: ModuleInfo[]
  ssrModules: ModuleInfo[]
}

export interface ModuleTransformInfo {
  resolvedId: string
  transforms: TransformInfo[]
}

export interface PluginMetricInfo {
  name: string
  totalTime: number
  invokeCount: number
  enforce?: string
}

export interface RPCFunctions {
  list(): Awaitable<ModulesList>
  getIdInfo(id: string, ssr: boolean, clear?: boolean): Awaitable<ModuleTransformInfo>
  resolveId(id: string, ssr: boolean): Awaitable<string>
  clear(id: string, ssr: boolean): Awaitable<void>
  getPluginMetrics(ssr: boolean): Awaitable<PluginMetricInfo[]>
}

export interface HMRData {
  ids: (string | null)[]
}
