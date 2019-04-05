import React from 'react';

export default function Flight({ cheap }) {
  console.log(JSON.stringify(cheap.flight));
  return (
    <div>
      <h1>Flight</h1>
      {cheap.loading && <div>Loading Cheap flight...</div>}
      {cheap.error && <div>{cheap.error}</div>}

      {cheap.flight.length > 0 && (
        <div>
          {cheap.flight.map(f => (
            <div>
              [cheap] {f.id}, {f.departure}, {f.arrival}, {f.departureTime},{' '}
              {f.arrivalTime}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
