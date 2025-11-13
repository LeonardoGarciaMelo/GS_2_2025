import React from 'react';
import { View, Text } from 'react-native';
import { InsightCardProps } from '../../types';
import { styles } from './styles';

export const InsightCard: React.FC<InsightCardProps> = ({ insights }) => {
  return (
    <View style={styles.card}>
      <Text style={styles.title}>Insights Inteligentes</Text>
      {insights.map((insight, index) => (
        <View key={index} style={styles.insightItem}>
          <Text style={styles.insightText}>{insight}</Text>
        </View>
      ))}
    </View>
  );
};