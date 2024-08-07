import React from 'react';
import Header from 'Header'
function Provider({ children }) {
  return (
    <div>
      <Header />
      {children}
    </div>
  );
}

export default Provider;
