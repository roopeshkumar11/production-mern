import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { Myprovider } from './context/contextapi.jsx'




ReactDOM.createRoot(document.getElementById('root')).render(

<Myprovider>
<App />
</Myprovider>
)
