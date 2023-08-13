import React from 'react';
import { View, Text } from 'react-native';
import RepositoryList from './RepositoryList';
import AppBar from './AppBar';
import { Route, Routes } from 'react-router-native';

const SignIn = () => {
  return (
    <View>
      <Text>Working on it</Text>
    </View>
  );
};

const Main = () => {
  return (
    <View style={{ flexGrow: 1 }}>
      <AppBar />
      <Routes>
        <Route path='/' element={<RepositoryList />} />
        <Route path='/signin' element={<SignIn />} />
      </Routes>
    </View>
  );
};

export default Main;
