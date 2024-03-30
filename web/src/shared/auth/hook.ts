import React from 'react';

import { AuthContext } from './context';

// Export a hook to use the context
export const useAuth = () => {
  return React.useContext(AuthContext);
};
