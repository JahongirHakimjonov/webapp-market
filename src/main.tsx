import React from 'react'
import {createRoot} from 'react-dom/client'
import App from './App'
import './styles.css'
import './types/types.d'

const root = document.getElementById('root') as HTMLElement

createRoot(root).render(
    <React.StrictMode>
        <App/>
    </React.StrictMode>
)