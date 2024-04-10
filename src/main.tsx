import ReactDOM from "react-dom/client"
import { ChakraProvider , ColorModeScript } from "@chakra-ui/react"
import theme from "./theme.ts"
import App from "./App.tsx"
import "./index.css"

const root = ReactDOM.createRoot(document.getElementById("root") as HTMLElement); 

root.render(
  <ChakraProvider theme={theme}>
    <ColorModeScript initialColorMode={theme.config.initialColorMode}/>
    <App />
  </ChakraProvider>
)
