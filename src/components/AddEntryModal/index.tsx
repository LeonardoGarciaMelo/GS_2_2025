import React from 'react';
import {
  View,
  Text,
  Modal,
  TouchableOpacity,
  TextInput,
  ScrollView,
} from 'react-native';
import { RatingSelector } from '../RatingSelector';
import { AddEntryModalProps } from '../../types';
import { useAddEntryModal } from './hooks/useAddEntryModal';
import { styles } from './styles';
import { colors } from '../../styles/colors';

export const AddEntryModal: React.FC<AddEntryModalProps> = ({
  visible,
  onClose,
  onSave,
}) => {
  const {
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
  } = useAddEntryModal();

  const handleSave = () => {
    onSave(getFormData());
    resetForm();
  };

  const handleClose = () => {
    resetForm();
    onClose();
  };

  return (
    <Modal
      visible={visible}
      animationType="slide"
      transparent={true}
      onRequestClose={handleClose}
    >
      <View style={styles.overlay}>
        <View style={styles.container}>
          <ScrollView showsVerticalScrollIndicator={false}>
            <Text style={styles.title}>Novo Registro Diário</Text>

            <RatingSelector
              label="Nível de Estresse"
              value={stress}
              onChange={setStress}
            />

            <View style={styles.inputContainer}>
              <Text style={styles.inputLabel}>Horas de Sono</Text>
              <TextInput
                value={sleep}
                onChangeText={setSleep}
                keyboardType="numeric"
                placeholder="Ex: 7.5"
                style={styles.textInput}
                placeholderTextColor={colors.gray400}
              />
            </View>

            <RatingSelector
              label="Produtividade Percebida"
              value={productivity}
              onChange={setProductivity}
            />

            <RatingSelector
              label="Humor Geral"
              value={mood}
              onChange={setMood}
            />

            <View style={styles.inputContainer}>
              <Text style={styles.inputLabel}>Tarefas Concluídas</Text>
              <TextInput
                value={tasks}
                onChangeText={setTasks}
                keyboardType="numeric"
                placeholder="Ex: 5"
                style={styles.textInput}
                placeholderTextColor={colors.gray400}
              />
            </View>

            <TouchableOpacity
              onPress={handleSave}
              style={styles.saveButton}
              activeOpacity={0.8}
            >
              <Text style={styles.saveButtonText}>Salvar Registro</Text>
            </TouchableOpacity>

            <TouchableOpacity
              onPress={handleClose}
              style={styles.cancelButton}
              activeOpacity={0.8}
            >
              <Text style={styles.cancelButtonText}>Cancelar</Text>
            </TouchableOpacity>
          </ScrollView>
        </View>
      </View>
    </Modal>
  );
};