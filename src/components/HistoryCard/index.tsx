import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { calculations } from '../../utils/calculations';
import { HistoryCardProps } from '../../types';
import { styles } from './styles';

export const HistoryCard: React.FC<HistoryCardProps> = ({ entry, onDelete }) => {
  return (
    <View style={styles.card}>
      <View style={styles.header}>
        <Text style={styles.date}>
          {calculations.formatDate(entry.date)}
        </Text>
        <TouchableOpacity onPress={() => onDelete(entry.id)} activeOpacity={0.7}>
          <Text style={styles.deleteIcon}>🗑️</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.detailsGrid}>
        <View style={styles.detailItem}>
          <Text style={styles.detailLabel}>Estresse</Text>
          <Text style={styles.detailValue}>{'⭐'.repeat(entry.stress)}</Text>
        </View>

        <View style={styles.detailItem}>
          <Text style={styles.detailLabel}>Sono</Text>
          <Text style={styles.detailValue}>{entry.sleep}h</Text>
        </View>

        <View style={styles.detailItem}>
          <Text style={styles.detailLabel}>Produtividade</Text>
          <Text style={styles.detailValue}>
            {'⭐'.repeat(entry.productivity)}
          </Text>
        </View>

        <View style={styles.detailItem}>
          <Text style={styles.detailLabel}>Humor</Text>
          <Text style={styles.detailValue}>{'⭐'.repeat(entry.mood)}</Text>
        </View>

        <View style={[styles.detailItem, styles.detailItemFull]}>
          <Text style={styles.detailLabel}>Tarefas Concluídas</Text>
          <Text style={styles.detailValue}>{entry.tasks}</Text>
        </View>
      </View>
    </View>
  );
};