import classNames from "classnames"
import * as _ from "lodash"
import * as React from "react"
import { useEffect, useState } from "react"
import useFixed from "../hooks/useFixed"
import { prefixClassname } from "../styles/prefix"

import menus from "../utils/menus"

import "./simulator.scss"

function getSubpackage(componentName: string) {
  for (const menu of menus) {
    for (const page of menu.children) {
      if (page.to.endsWith(componentName)) {
        return menu.subpackage
      }
    }
  }
}

function resolveComponentName(path: string, pattern: RegExp | string) {
  return _.replace(path, pattern, "")
}

function getIframePath(path?: string) {
  if (path && _.startsWith(path, "/components/")) {
    const componentName = resolveComponentName(path, "/components/")
    return resolveComponentPath(componentName)
  }
  if (path && _.startsWith(path, "/taroify.com/components/")) {
    const componentName = resolveComponentName(path, "/taroify.com/components/")
    return resolveComponentPath(componentName)
  }
  return "#/pages/home/index"
}

function resolveComponentPath(componentName: string) {
  const subpackage = getSubpackage(componentName)
  const componentPath = _.endsWith(componentName, "/") ? componentName : `${componentName}/`
  return `#/pages/${(subpackage ? subpackage + "/" : subpackage) + componentPath}index`
}

function h5Root() {
  if (process.env.NODE_ENV === "development") {
    return `//${window.location.hostname}:${process.env.GATSBY_DEMO_PORT}/index.html`
  }
  return "/taroify.com/h5/index.html"
}

function getIframeUrl(path?: string) {
  const iframePath = getIframePath(path)
  return `${h5Root()}${iframePath}`
}

interface SimulatorProps {
  slug?: string
  isMobile?: boolean
}

export default function Simulator(props: SimulatorProps) {
  const { slug } = props
  const fixed = useFixed()
  const [iframeUrl, setIframeUrl] = useState("")

  useEffect(() => setIframeUrl(getIframeUrl(slug)), [slug])

  if (props.isMobile) {
    return <iframe title="simulator" src={iframeUrl} className={classNames(prefixClassname("simulator-mobile"))} />
  }

  return (
    <div
      className={classNames(prefixClassname("simulator"), {
        [prefixClassname("simulator--fixed")]: fixed,
      })}
    >
      <iframe title="simulator" src={iframeUrl} frameBorder="0" />
    </div>
  )
}
