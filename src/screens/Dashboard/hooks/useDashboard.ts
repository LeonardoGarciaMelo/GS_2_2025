import { useState, useEffect } from 'react';
import { Alert } from 'react-native';
import { Entry, EntryFormData } from '../../../types';
import { storageService } from '../../../services/storageService';
import { calculations } from '../../../utils/calculations';

export const useDashboard = () => {
  const [entries, setEntries] = useState<Entry[]>([]);
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    loadEntries();
  }, []);

  const loadEntries = async () => {
    const data = await storageService.loadEntries();
    setEntries(data);
  };

  const handleAddEntry = async (formData: EntryFormData) => {
    const newEntry = {
      stress: formData.stress,
      sleep: parseFloat(formData.sleep) || 7,
      productivity: formData.productivity,
      mood: formData.mood,
      tasks: parseInt(formData.tasks) || 0,
    };

    const updated = await storageService.addEntry(newEntry);
    
    if (updated) {
      setEntries(updated);
      setShowModal(false);
      Alert.alert('Sucesso!', 'Registro salvo com sucesso!');
    } else {
      Alert.alert('Erro', 'Não foi possível salvar o registro.');
    }
  };

  const getStats = () => ({
    totalEntries: entries.length,
    streak: calculations.calculateStreak(entries),
    avgProductivity: calculations.calculateAverage(entries, 'productivity'),
    avgSleep: calculations.calculateAverage(entries, 'sleep'),
  });

  const insights = calculations.generateInsights(entries);

  return {
    showModal,
    setShowModal,
    handleAddEntry,
    stats: getStats(),
    insights,
  };
};