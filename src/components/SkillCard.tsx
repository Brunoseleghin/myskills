import React from 'react';

import { TouchableOpacity, Text, StyleSheet, TouchableOpacityProps } from 'react-native';

interface SkillCardProps extends TouchableOpacityProps {
  skill: string
}

export function SkillCard({ skill, ...rest } : SkillCardProps ) {
  return (
    <TouchableOpacity
      style={styles.skillCard}
      activeOpacity={0.7}
      {...rest}
    >
      <Text style={styles.skillCardText}>
        { skill }
      </Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  skillCard: {
    backgroundColor: '#1F1E25',
    paddingVertical: 15,
    marginBottom: 15,
    alignItems: 'center',
    borderRadius: 30
  },
  skillCardText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold'
  }
})