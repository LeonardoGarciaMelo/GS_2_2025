import React from 'react';
import { View, Text, ScrollView } from 'react-native';
import { HistoryCard } from '../../components/HistoryCard';
import { useHistory } from './hooks/useHistory';
import { styles } from './styles';

export const History: React.FC = () => {
  const { entries, handleDeleteEntry } = useHistory();

  return (
    <View style={styles.container}>
      <ScrollView>
        <View style={styles.content}>
          <Text style={styles.title}>Histórico</Text>

          {entries.length === 0 ? (
            <View style={styles.emptyState}>
              <Text style={styles.emptyEmoji}>📊</Text>
              <Text style={styles.emptyText}>
                Nenhum registro ainda.{'\n'}Comece adicionando seu primeiro dia!
              </Text>
            </View>
          ) : (
            entries.map(entry => (
              <HistoryCard
                key={entry.id}
                entry={entry}
                onDelete={handleDeleteEntry}
              />
            ))
          )}
        </View>
      </ScrollView>
    </View>
  );
};