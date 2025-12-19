import React from "react";
import AppShell from "./components/layout/AppShell";
import { UnitsProvider } from "./services/UnitsProvider";


function App() {
    return (
        <React.StrictMode>
            <UnitsProvider>
                <AppShell />
            </UnitsProvider>
        </React.StrictMode>
    );
}

export default App;
