import React from 'react';
import { Text, FlatList } from 'react-native';
import RepositoryItem from './RepositoryItem';
import repositories from '../data/repositories';

const RepositoryList = () => {
  return (
    <FlatList
      data={repositories}
      ItemSeparatorComponent={() => <Text />}
      renderItem={({ item: repo }) => <RepositoryItem {...repo} />}
    ></FlatList>
  );
};

export default RepositoryList;
