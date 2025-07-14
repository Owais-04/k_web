import './DestinationCard.css';

function DestinationCard({ destination, onClick }) {
  return (
    <div className="destination-card" onClick={onClick}>
      <img
        src={destination.images && destination.images[0] ? destination.images[0] : 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=400&q=80'}
        alt={destination.name}
        className="destination-image"
      />
      <div className="destination-info">
        <h3>{destination.name}</h3>
        <p>{destination.description.length > 80 ? destination.description.slice(0, 77) + '...' : destination.description}</p>
      </div>
    </div>
  );
}

export default DestinationCard; 