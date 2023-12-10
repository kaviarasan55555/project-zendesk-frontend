
import React from 'react';

function QueryList({ queries }) {
  return (
    <ul>
      {queries.map(query => (
        <li key={query._id}>
          <strong>{query.subject}</strong>: {query.description}
        </li>
      ))}
    </ul>
  );
}

export default QueryList;
