import React from 'react';
import { createRoot } from 'react-dom/client';

function App() {
    return (
        <div>
            <h1>React CI/CD Demo</h1>
            <p>Built automatically using the reusable Jenkins framework.</p>
        </div>
    );
}

createRoot(document.getElementById('root')).render(<App />);