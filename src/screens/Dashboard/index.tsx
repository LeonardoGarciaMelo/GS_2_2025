import React from 'react';
import { View, Text, ScrollView, TouchableOpacity } from 'react-native';
import { StatCard } from '../../components/StatCard';
import { InsightCard } from '../../components/InsightCard';
import { AddEntryModal } from '../../components/AddEntryModal';
import { useDashboard } from './hooks/useDashboard';
import { styles } from './styles';

export const Dashboard: React.FC = () => {
  const { showModal, setShowModal, handleAddEntry, stats, insights } = useDashboard();

  return (
    <View style={styles.container}>
      <ScrollView>
        <View style={styles.content}>
          <Text style={styles.title}>Dashboard</Text>
          <Text style={styles.subtitle}>Análise do seu bem-estar corporativo</Text>

          <View style={styles.statsGrid}>
            <StatCard
              value={stats.totalEntries}
              label="Registros"
              color="blue"
            />
            <StatCard
              value={stats.streak}
              label="Dias Seguidos 🔥"
              color="red"
            />
            <StatCard
              value={stats.avgProductivity}
              label="Produtividade Média"
              color="green"
            />
            <StatCard
              value={`${stats.avgSleep}h`}
              label="Sono Médio"
              color="yellow"
            />
          </View>

          <InsightCard insights={insights} />

          <TouchableOpacity
            onPress={() => setShowModal(true)}
            style={styles.addButton}
            activeOpacity={0.8}
          >
            <Text style={styles.addButtonText}>➕ Novo Registro</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>

      <AddEntryModal
        visible={showModal}
        onClose={() => setShowModal(false)}
        onSave={handleAddEntry}
      />
    </View>
  );
};