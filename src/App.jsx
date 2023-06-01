import React, { useState, useEffect } from 'react';
import Box from '@mui/material/Box';

import Card from './components/card';
import jsonData from './chp.json';

function App() {
  const [entries, setEntries] = useState(jsonData.entries);

  return (
    <>
      <Box
        sx={{
          width: '100vh',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          flexDirection: 'column',
          mx: 'auto',
        }}
      >
        <h1>Entries</h1>
        <ul>
          {entries.map((entry) => (
            <Card
              key={entry.id}
              body={entry.body}
              sentiment={entry.sentiment}
              pos={entry.positiveConfidence}
              neut={entry.neutralConfidence}
              neg={entry.negativeConfidence}
            />
          ))}
        </ul>
      </Box>
    </>
  );
}

export default App;
