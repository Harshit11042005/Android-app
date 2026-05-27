import React, {useEffect, useState} from 'react';
import {
  Pressable,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';
import {
  SafeAreaProvider,
  SafeAreaView,
} from 'react-native-safe-area-context';

import Header from './components/Header';

function App() {
  const isDarkMode = useColorScheme() === 'dark';

  return (
    <SafeAreaProvider>
      <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
      <AppContent />
    </SafeAreaProvider>
  );
}

function AppContent() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (count > 5) {
      setCount(0);
    }
  }, [count]);

  return (
    <SafeAreaView style={styles.screen}>
      <Header title="Counter" />

      <View style={styles.controls}>
        <CounterButton label="+" onPress={() => setCount(value => value + 1)} />
        <CounterButton label="-" onPress={() => setCount(value => value - 1)} />
      </View>

      <Text style={styles.count}>Count: {count}</Text>

      {count >= 5 ? (
        <Text style={styles.warning}>You have reached 5!</Text>
      ) : null}

      <Pressable
        accessibilityRole="button"
        onPress={() => setCount(0)}
        style={styles.resetButton}>
        <Text style={styles.resetText}>Reset</Text>
      </Pressable>
    </SafeAreaView>
  );
}

type CounterButtonProps = {
  label: string;
  onPress: () => void;
};

function CounterButton({label, onPress}: CounterButtonProps) {
  return (
    <Pressable
      accessibilityLabel={`${label === '+' ? 'Increase' : 'Decrease'} count`}
      accessibilityRole="button"
      onPress={onPress}
      style={styles.counterButton}>
      <Text style={styles.counterButtonText}>{label}</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  screen: {
    alignItems: 'center',
    backgroundColor: '#101418',
    flex: 1,
    justifyContent: 'center',
    padding: 24,
  },
  controls: {
    flexDirection: 'row',
    gap: 20,
    marginTop: 32,
  },
  counterButton: {
    alignItems: 'center',
    backgroundColor: '#7A3F22',
    borderColor: '#F4EFE9',
    borderRadius: 8,
    borderWidth: 2,
    height: 80,
    justifyContent: 'center',
    width: 100,
  },
  counterButtonText: {
    color: '#FFFFFF',
    fontSize: 40,
    fontWeight: '700',
  },
  count: {
    color: '#FFFFFF',
    fontSize: 35,
    marginTop: 28,
  },
  warning: {
    color: '#FF6B6B',
    fontSize: 28,
    marginTop: 12,
    textAlign: 'center',
  },
  resetButton: {
    borderColor: '#FF6B6B',
    borderRadius: 8,
    borderWidth: 2,
    marginTop: 24,
    paddingHorizontal: 20,
    paddingVertical: 10,
  },
  resetText: {
    color: '#FFFFFF',
    fontSize: 22,
    fontWeight: '600',
    textTransform: 'uppercase',
  },
});

export default App;
