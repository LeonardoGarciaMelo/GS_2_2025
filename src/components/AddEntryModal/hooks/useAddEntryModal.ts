import { useState } from 'react';
import { EntryFormData } from '../../../types';

export const useAddEntryModal = () => {
  const [stress, setStress] = useState(3);
  const [sleep, setSleep] = useState('7');
  const [productivity, setProductivity] = useState(3);
  const [mood, setMood] = useState(3);
  const [tasks, setTasks] = useState('');

  const resetForm = () => {
    setStress(3);
    setSleep('7');
    setProductivity(3);
    setMood(3);
    setTasks('');
  };

  const getFormData = (): EntryFormData => ({
    stress,
    sleep,
    productivity,
    mood,
    tasks,
  });

  return {
    stress,
    setStress,
    sleep,
    setSleep,
    productivity,
    setProductivity,
    mood,
    setMood,
    tasks,
    setTasks,
    resetForm,
    getFormData,
  };
};