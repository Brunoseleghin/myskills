import React from 'react';

import { TouchableOpacity, Text, StyleSheet, TouchableOpacityProps } from 'react-native';

interface ButtonProps extends TouchableOpacityProps {
  title: string
}

export function Button({ title, ...rest } : ButtonProps) {
  return (
    <TouchableOpacity
        style={styles.skillButton}
        activeOpacity={0.7}
        { ...rest }
      >
      <Text style={styles.textButton}>
        { title }
      </Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  skillButton: {
    backgroundColor: '#A370F7',
    paddingVertical: 10,
    alignItems: 'center',
    borderRadius: 7
  },
  textButton: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold'
  },
});