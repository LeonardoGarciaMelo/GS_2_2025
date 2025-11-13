import { useState, useEffect } from 'react';
import { Alert } from 'react-native';
import { Entry } from '../../../types';
import { storageService } from '../../../services/storageService';

export const useHistory = () => {
  const [entries, setEntries] = useState<Entry[]>([]);

  useEffect(() => {
    loadEntries();
  }, []);

  const loadEntries = async () => {
    const data = await storageService.loadEntries();
    setEntries(data);
  };

  const handleDeleteEntry = (id: number) => {
    Alert.alert(
      'Confirmar',
      'Deseja excluir este registro?',
      [
        { text: 'Cancelar', style: 'cancel' },
        {
          text: 'Excluir',
          style: 'destructive',
          onPress: async () => {
            const updated = await storageService.deleteEntry(id);
            if (updated) {
              setEntries(updated);
            }
          },
        },
      ]
    );
  };

  const sortedEntries = [...entries].reverse();

  return {
    entries: sortedEntries,
    handleDeleteEntry,
  };
};