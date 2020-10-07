/**
 * Implement Gatsby's SSR (Server Side Rendering) APIs in this file.
 *
 * See: https://www.gatsbyjs.com/docs/ssr-apis/
 */

import React from "react"
export const onRenderBody = ({ setHeadComponents }, pluginOptions) => {
  setHeadComponents([
    // FontAwesome
    <script async src="https://use.fontawesome.com/68deeed567.js"></script>,
  ])
}
