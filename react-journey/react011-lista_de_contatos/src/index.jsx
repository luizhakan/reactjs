import {createRoot} from "react-dom/client";

// bootstrap
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.bundle';

import App from "./App";

createRoot(document.querySelector("#root")).render(<App />);