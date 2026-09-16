import { renderToString } from 'react-dom/server'
import { StaticRouter } from 'react-router-dom'
import Portfolio from './pages/Portfolio'
import { buildStructuredData } from './lib/structuredData'
import './index.css'

/* Build-time only. Renders the portfolio to a static HTML string so the
   deployed index.html carries the real copy for crawlers, then React hydrates
   over it in the browser. */

export function render(url: string) {
  const html = renderToString(
    <StaticRouter location={url}>
      <Portfolio />
    </StaticRouter>,
  )

  return { html, structuredData: JSON.stringify(buildStructuredData()) }
}
