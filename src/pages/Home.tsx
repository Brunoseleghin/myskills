import React, { useEffect, useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  FlatList
} from 'react-native';
import { Button } from '../components/Button';
import { SkillCard } from '../components/SkillCard';

interface SkillData {
  id: string,
  name: string
}

export function Home() {
  const [newSkill, setNewSkill] = useState('');
  const [mySkills, setMySkills] = useState<SkillData[]>([]);
  const [greetings, setGreetings] = useState('');

  function handleAddSkill() {
    const newSkillData = {
      id: String(new Date().getTime()),
      name: newSkill
    }

    setMySkills([...mySkills, newSkillData]);
    setNewSkill('');
  }

  function handleRemoveSkill(id: string) {
    setMySkills(skills => skills.filter(
      skill => skill.id !== id
    ));
  }

  useEffect(() => {
    const currentHours = new Date().getHours();

    if (currentHours < 12) {
      setGreetings('Good Morning');
    } else if (currentHours >= 12 && currentHours < 18) {
      setGreetings('Good Afternoon');
    } else {
      setGreetings('Good Night');
    }
  },[])

  return (
    <View style={styles.container}>
      <Text style={styles.greetings}>
        Welcome, Bruno {'\n'}
        { greetings } 😀
      </Text>

      <TextInput
        style={styles.skillInput}
        placeholder='New Skill'
        placeholderTextColor='#555'
        onChangeText={setNewSkill}
        value={newSkill}
      />

      <Button
        title='Add Skill'
        onPress={handleAddSkill}
      />

      <Text style={styles.skillText}>
        My Skills
      </Text>

      <FlatList
        showsVerticalScrollIndicator={false}
        data={mySkills}
        keyExtractor={item => item.id}
        renderItem={({item}) => (
          <SkillCard
            skill={item.name}
            onPress={() => handleRemoveSkill(item.id)}
          />
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#121015',
    paddingHorizontal: 30,
    paddingVertical: 40,
  },
  greetings: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#fff',
    lineHeight: 25,
    marginBottom: 20,
  },
  skillInput: {
    backgroundColor: '#1F1E25',
    fontSize: 18,
    color: '#fff',
    paddingHorizontal: 15,
    borderRadius: 7,
    marginBottom: 20
  },
  skillText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#fff',
    lineHeight: 25,
    marginTop: 20,
    marginBottom: 20,
  }
});
