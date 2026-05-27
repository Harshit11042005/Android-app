import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

type HeaderProps = {
  title: string;
};

function Header({title}: HeaderProps) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
  },
  title: {
    color: '#FFFFFF',
    fontSize: 32,
    fontWeight: '700',
  },
});

export default Header;
