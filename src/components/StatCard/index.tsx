import React from 'react';
import { View, Text } from 'react-native';
import { colors } from '../../styles/colors';
import { StatCardProps } from '../../types';
import { styles } from './styles';

export const StatCard: React.FC<StatCardProps> = ({ value, label, color }) => {
  const getColorStyles = () => {
    switch (color) {
      case 'blue':
        return { backgroundColor: colors.blue100, textColor: colors.blue900 };
      case 'red':
        return { backgroundColor: colors.red100, textColor: colors.red900 };
      case 'green':
        return { backgroundColor: colors.green100, textColor: colors.green900 };
      case 'yellow':
        return { backgroundColor: colors.yellow100, textColor: colors.yellow900 };
    }
  };

  const colorStyles = getColorStyles();

  return (
    <View style={[styles.card, { backgroundColor: colorStyles.backgroundColor }]}>
      <Text style={[styles.value, { color: colorStyles.textColor }]}>{value}</Text>
      <Text style={[styles.label, { color: colorStyles.textColor }]}>{label}</Text>
    </View>
  );
};