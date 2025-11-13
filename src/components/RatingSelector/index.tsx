import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { RatingSelectorProps } from '../../types';
import { styles } from './styles';

export const RatingSelector: React.FC<RatingSelectorProps> = ({ 
  value, 
  onChange, 
  label 
}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.label}>{label}</Text>
      <View style={styles.buttonsContainer}>
        {[1, 2, 3, 4, 5].map(num => (
          <TouchableOpacity
            key={num}
            onPress={() => onChange(num)}
            style={[
              styles.button,
              value === num ? styles.buttonActive : styles.buttonInactive,
            ]}
            activeOpacity={0.7}
          >
            <Text
              style={[
                styles.buttonText,
                value === num ? styles.buttonTextActive : styles.buttonTextInactive,
              ]}
            >
              {num}
            </Text>
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );
};