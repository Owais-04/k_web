import { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { fetchDestinations } from '../services/api';
import './DestinationDetails.css';

function DestinationDetails() {
  const { id } = useParams();
  const [destination, setDestination] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    fetchDestinations().then(res => {
      if (Array.isArray(res)) {
        const found = res.find(d => d._id === id);
        setDestination(found);
        setLoading(false);
      } else if (res && res.error) {
        setError(res.error);
        setLoading(false);
      } else {
        setError('Unknown response');
        setLoading(false);
      }
    });
  }, [id]);

  if (loading) return <div className="details-container"><p>Loading...</p></div>;
  if (error || !destination) return <div className="details-container"><p style={{color:'red'}}>Error: {error || 'Destination not found'}</p></div>;

  return (
    <div className="details-container">
      <button className="back-btn" onClick={() => navigate(-1)}>&larr; Back</button>
      <h2>{destination.name}</h2>
      <div className="details-images">
        {destination.images && destination.images.map((img, idx) => (
          <img key={idx} src={img} alt={destination.name + ' ' + (idx+1)} />
        ))}
      </div>
      <p>{destination.description}</p>
      <h4>Highlights</h4>
      <ul>
        {destination.highlights && destination.highlights.map((h, idx) => (
          <li key={idx}>{h}</li>
        ))}
      </ul>
      <div className="details-sections">
        <div>
          <h4>Hotels to Stay</h4>
          <p>(Coming soon)</p>
        </div>
        <div>
          <h4>Cuisines to Try</h4>
          <p>(Coming soon)</p>
        </div>
        <div>
          <h4>Activities to Try</h4>
          <p>(Coming soon)</p>
        </div>
      </div>
    </div>
  );
}

export default DestinationDetails; 