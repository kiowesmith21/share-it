import React, { createContext, useContext, ReactNode } from 'react';

// Define the shape of your context data
interface UserContextData {
  // Your context data here
  userName: string;
  updateUser: (newUserName: string) => void;
}

// Create the context with an initial value (this will be used if a component is rendered outside the provider)
const UserContext = createContext<UserContextData | undefined>(undefined);

// Create a provider component that will wrap your app
interface UserContextProviderProps {
  children: ReactNode;
}

export const UserContextProvider: React.FC<UserContextProviderProps> = ({ children }) => {
  // Your state or any other logic here
  const [userName, setUserName] = React.useState('DefaultUser');

  // Function to update the username
  const updateUser = (newUserName: string) => {
    setUserName(newUserName);
  };

  // Provide the context value to the components in the tree
  const contextValue: UserContextData = {
    userName,
    updateUser,
  };

  return <UserContext.Provider value={contextValue}>{children}</UserContext.Provider>;
};

// Create a custom hook to consume the context
export const useUserContext = () => {
  const context = useContext(UserContext);
  if (!context) {
    throw new Error('useUserContext must be used within a UserContextProvider');
  }
  return context;
};