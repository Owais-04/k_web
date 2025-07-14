import { useEffect, useState } from 'react'
import './App.css'
import { fetchDestinations } from './services/api'
import DestinationCard from './components/DestinationCard'

function App() {
  const [destinations, setDestinations] = useState([])
  const [destLoading, setDestLoading] = useState(true)
  const [destError, setDestError] = useState(null)

  useEffect(() => {
    fetchDestinations().then(res => {
      if (Array.isArray(res)) {
        setDestinations(res)
        setDestLoading(false)
      } else if (res && res.error) {
        setDestError(res.error)
        setDestLoading(false)
      } else {
        setDestError('Unknown response')
        setDestLoading(false)
      }
    })
  }, [])

  return (
    <div className="app-container">
      <h1>Explore Kashmir</h1>
      <p>Discover breathtaking destinations in Kashmir. Click a destination to see more details!</p>
      {destLoading && <p>Loading destinations...</p>}
      {destError && <p style={{color: 'red'}}>Error: {destError}</p>}
      {!destLoading && !destError && (
        <div className="destinations-grid">
          {destinations.map((dest) => (
            <DestinationCard key={dest._id} destination={dest} onClick={() => {}} />
          ))}
        </div>
      )}
    </div>
  )
}

export default App
