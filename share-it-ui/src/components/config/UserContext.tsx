import React, { createContext, useContext, ReactNode, FC, useState } from 'react';

interface UserContextData {
  userName: string;
  following: string[];
  posts: any[];
  updateUser: (newUserName: string) => void;
  updateFollowing: (newFollowing: string[]) => void;
  updatePosts: (newPosts: any[]) => void;
}

//Create the context with an initial value 
// Create the context with a complete initial value
const UserContext = createContext<UserContextData>({
  userName: 'DefaultUser',
  following: [''],
  posts: [],
  updateUser: () => {},
  updateFollowing: () => {},
  updatePosts: () => {},
});


//Create a provider component that wraps app
interface UserContextProviderProps {
  children: ReactNode;
}

export const UserContextProvider: FC<UserContextProviderProps> = ({ children }) => {
  const [userName, setUserName] = useState('DefaultUser');
  const [following, setFollowing] = useState(['']);
  const [posts, setPosts] = useState<any[]>([]);

  //Function to update the username
  const updateUser = (newUserName: string) => {
    setUserName(newUserName);
  };

  //Function to update the following
  const updateFollowing = (newFollowing: string[]) => {
    setFollowing(newFollowing);
  };

  //Function to update the posts
  const updatePosts = (newPosts: any[]) => {
    setPosts(newPosts);
  };

  //Provide the context value to the components in the tree
  const contextValue: UserContextData = {
    userName,
    following,
    posts,
    updateUser,
    updateFollowing,
    updatePosts
  };

  return <UserContext.Provider value={contextValue}>{children}</UserContext.Provider>;
};

//custom hook to consume the context
export const useUserContext = () => {
  const context = useContext(UserContext);
  if (!context) {
    throw new Error('useUserContext must be used within a UserContextProvider');
  }
  return context;
};