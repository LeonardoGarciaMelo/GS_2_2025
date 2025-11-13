import AsyncStorage from '@react-native-async-storage/async-storage';
import { Entry } from '../types';

const STORAGE_KEY = '@mindmetrics:entries';

export const storageService = {
  /**
   * Carregar todos os registros do AsyncStorage
   */
  async loadEntries(): Promise<Entry[]> {
    try {
      const data = await AsyncStorage.getItem(STORAGE_KEY);
      return data ? JSON.parse(data) : [];
    } catch (error) {
      console.error('Erro ao carregar dados:', error);
      return [];
    }
  },

  /**
   * Salvar array de registros no AsyncStorage
   */
  async saveEntries(entries: Entry[]): Promise<boolean> {
    try {
      await AsyncStorage.setItem(STORAGE_KEY, JSON.stringify(entries));
      return true;
    } catch (error) {
      console.error('Erro ao salvar dados:', error);
      return false;
    }
  },

  /**
   * Adicionar novo registro
   */
  async addEntry(entryData: Omit<Entry, 'id' | 'date'>): Promise<Entry[] | null> {
    try {
      const entries = await this.loadEntries();
      const newEntry: Entry = {
        id: Date.now(),
        date: new Date().toISOString(),
        ...entryData,
      };
      const updated = [...entries, newEntry];
      await this.saveEntries(updated);
      return updated;
    } catch (error) {
      console.error('Erro ao adicionar registro:', error);
      return null;
    }
  },

  /**
   * Deletar registro por ID
   */
  async deleteEntry(id: number): Promise<Entry[] | null> {
    try {
      const entries = await this.loadEntries();
      const updated = entries.filter(e => e.id !== id);
      await this.saveEntries(updated);
      return updated;
    } catch (error) {
      console.error('Erro ao deletar registro:', error);
      return null;
    }
  },

  /**
   * Limpar todos os dados
   */
  async clearAll(): Promise<boolean> {
    try {
      await AsyncStorage.removeItem(STORAGE_KEY);
      return true;
    } catch (error) {
      console.error('Erro ao limpar dados:', error);
      return false;
    }
  },
};