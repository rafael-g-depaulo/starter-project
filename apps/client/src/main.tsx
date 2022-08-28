import { StrictMode } from "react"
import * as ReactDOM from "react-dom/client"
import { BrowserRouter } from "react-router-dom"

import App from "./app/App"
import { GlobalContext } from "./contexts/globalContext"

const root = ReactDOM.createRoot(document.getElementById("root") as HTMLElement)
root.render(
  <StrictMode>
    <GlobalContext>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </GlobalContext>
  </StrictMode>
)
