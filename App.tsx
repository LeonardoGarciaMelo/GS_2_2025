import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, SafeAreaView } from 'react-native';
import { Dashboard } from './src/screens/Dashboard';
import { History } from './src/screens/History';
import { colors } from './src/styles/colors';

type Screen = 'dashboard' | 'history';

export default function App() {
  const [currentScreen, setCurrentScreen] = useState<Screen>('dashboard');

  return (
    <View style={styles.container}>
      {/* Navigation */}
      <View style={styles.navbar}>
        <View style={styles.navButtons}>
          <TouchableOpacity
            onPress={() => setCurrentScreen('dashboard')}
            style={[
              styles.navButton,
              currentScreen === 'dashboard' && styles.navButtonActive,
            ]}
            activeOpacity={0.7}
          >
            <Text
              style={[
                styles.navButtonText,
                currentScreen === 'dashboard' && styles.navButtonTextActive,
              ]}
            >
              📊 Dashboard
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => setCurrentScreen('history')}
            style={[
              styles.navButton,
              currentScreen === 'history' && styles.navButtonActive,
            ]}
            activeOpacity={0.7}
          >
            <Text
              style={[
                styles.navButtonText,
                currentScreen === 'history' && styles.navButtonTextActive,
              ]}
            >
              📝 Histórico
            </Text>
          </TouchableOpacity>
        </View>
      </View>

      {/* Content */}
      {currentScreen === 'dashboard' ? <Dashboard /> : <History />}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
  },
  navbar: {
    backgroundColor: colors.white,
    paddingTop: 10,
    paddingBottom: 10,
    borderBottomWidth: 1,
    borderBottomColor: colors.gray200,
  },
  navButtons: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingHorizontal: 20,
  },
  navButton: {
    paddingVertical: 12,
    paddingHorizontal: 20,
  },
  navButtonActive: {
    borderBottomWidth: 3,
    borderBottomColor: colors.primary,
  },
  navButtonText: {
    fontSize: 16,
    color: colors.gray500,
  },
  navButtonTextActive: {
    fontWeight: 'bold',
    color: colors.primary,
  },
});