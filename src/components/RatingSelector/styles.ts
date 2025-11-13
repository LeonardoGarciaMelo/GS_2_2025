import { StyleSheet } from 'react-native';
import { colors } from '../../styles/colors';

export const styles = StyleSheet.create({
  container: {
    marginBottom: 20,
  },
  label: {
    fontSize: 14,
    fontWeight: '600',
    marginBottom: 8,
    color: colors.gray700,
  },
  buttonsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  button: {
    width: 50,
    height: 50,
    borderRadius: 25,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 2,
  },
  buttonActive: {
    backgroundColor: colors.blue500,
    borderColor: colors.primaryDark,
  },
  buttonInactive: {
    backgroundColor: colors.gray200,
    borderColor: colors.gray300,
  },
  buttonText: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  buttonTextActive: {
    color: colors.white,
  },
  buttonTextInactive: {
    color: colors.gray500,
  },
});