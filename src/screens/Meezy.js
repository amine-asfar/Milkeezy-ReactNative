
import React, { useState,useEffect } from 'react';
import { View, Text,Button,TextInput,StyleSheet,Image,TouchableOpacity,ScrollView } from "react-native";
import { images,COLORS,icons } from '../components/constants';
function Meezy() {
  const [step, setStep] = useState('1');
  const [history, setHistory] = useState([]);

  const userAvatar = require('../assets/images/user.png');

  const steps = [
    {
      id: '1',
      message: 'À quel numéro je pense?',
      trigger: '2',
      user: 'bot',
      botAvatar: require('../assets/images/Meezy.png'),
    },
    {
      id: '2',
      options: [
        { value: 1, label: 'Numéro 1', trigger: '4' },
        { value: 2, label: 'Numéro 2', trigger: '3' },
        { value: 3, label: 'Numéro 3', trigger: '3' },
      ],
      user: 'user',
    },
    {
      id: '3',
      message: 'Mauvaise réponse, essayez à nouveau.',
      trigger: '2',
      user: 'bot',
      botAvatar: require('../assets/images/MeezyTriste.png'),
    },
    {
      id: '4',
      message: 'Génial! Vous êtes télépathe!',
      end: true,
      user: 'bot',
      botAvatar: require('../assets/images/MeezyAmoureaux.png'),
    },
  ];

  useEffect(() => {
    const initialStep = steps.find(s => s.id === step);
    setHistory([initialStep]);

    if (initialStep.trigger) {
      handleOptionClick(initialStep.trigger);
    }
  }, []);

  useEffect(() => {
    const currentStep = steps.find(s => s.id === step);
    if (currentStep.trigger && !currentStep.options) {
      handleOptionClick(currentStep.trigger);
    }
  }, [step]);

  const handleOptionClick = (trigger) => {
    const nextStep = steps.find(s => s.id === trigger);
    if (nextStep.user === 'bot') {
      setHistory(prevHistory => [...prevHistory, { user: 'user', message: history[history.length - 1].options.find(o => o.trigger === trigger).label, botAvatar: userAvatar }, nextStep]);
    } else {
      setHistory(prevHistory => [...prevHistory, nextStep]);
    }
    setStep(trigger);
  }

  const restartChat = () => {
    setStep('1');
    setHistory([steps.find(s => s.id === '1')]);
  }

  const currentStep = steps.find(s => s.id === step);

  return (
    <View style={{ flex: 1, paddingTop: 50,backgroundColor:"#d7d7d7" }}>
      <ScrollView style={{ paddingHorizontal: 20 }}>
        {history.map((s, i) => (
          <View key={i} style={styles.messageContainer(s.user)}>
            {s.user === 'bot' && <Image source={s.botAvatar} style={styles.avatar} />}
            <View style={styles.messageBubble(s.user)}>
              <Text style={styles.messageText}>{s.message}</Text>
            </View>
            {s.user === 'user' && <Image source={s.botAvatar} style={styles.avatar} />}
          </View>
        ))}
      </ScrollView>
      {currentStep.options && (
        <View style={styles.optionsContainer}>
          {currentStep.options.map((option, i) => (
            <TouchableOpacity
              key={i}
              style={styles.optionButton}
              onPress={() => handleOptionClick(option.trigger)}
            >
              <Text style={styles.optionText}>{option.label}</Text>
            </TouchableOpacity>
          ))}
        </View>
      )}
      {currentStep.end && <Button title="Restart" color={COLORS.primary} onPress={restartChat} />}
    </View>
  );
}

const styles = StyleSheet.create({
  
  messageContainer: (user) => ({
    flexDirection: 'row',
    justifyContent: user === 'bot' ? 'flex-start' : 'flex-end',
    marginBottom: 10,
    alignItems: 'flex-end',
    
  }),
  avatar: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginLeft: 10,
    marginRight: 10,
  },
  messageBubble: (user) => ({
    maxWidth: '70%',
    paddingHorizontal: 12,
    paddingVertical: 8,
    borderRadius: 20,
    backgroundColor: COLORS.primary ,
  }),
  messageText: {
    fontSize: 16,
    lineHeight: 22,
    color: '#fff',
    fontWeight: '600',
  },
  optionsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    padding: 20,
    borderTopWidth: 1,
    borderTopColor: '#eee',
  },
  optionButton: {
    backgroundColor: COLORS.primary,
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 25,
  },
  optionText: {
    color: '#fff',
    fontSize: 16,
  },
 
}

);



export default Meezy;
