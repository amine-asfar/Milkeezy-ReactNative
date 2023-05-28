import React, { useState, useEffect } from 'react';
import { View, Text, Button, StyleSheet, Image, TouchableOpacity, ScrollView } from "react-native";
import { images, COLORS, icons } from '../components/constants';

const userAvatar = require('../assets/images/UserMeezy.png');
const botAvatar = require('../assets/images/Meezy.png');
const sadBotAvatar = require('../assets/images/MeezyTriste.png');
const happyBotAvatar = require('../assets/images/MeezyAmoureaux.png');

const subjects = [
  "Douleur lors de l'allaitement",
  "Mon bébé tête tout le temps",
  "Pas assez de lait",
  "La fatigue",
  "L’alimentation",
];

const stepsBySubject = {
  "Douleur lors de l'allaitement": [
    {
      id: '0',
      message: 'Nous vous conseillons de consulter un professionnel.',
      end: true,
      user: 'bot',
      botAvatar: sadBotAvatar,
    },
    {
      id: '1',
      message: 'Avez-vous des douleurs au sein ou au mamelon ?',
      options: [
        { value: 1, label: 'Douleur au sein', trigger: '2' },
        { value: 2, label: 'Douleur au mamelon', trigger: '0' },

      ],
      user: 'bot',
      botAvatar: sadBotAvatar,
    },
    {
      id: '2',
      message: 'Depuis moins de 48h ou plus de 48h ?',
      options: [
        { value: 1, label: 'Depuis moins de 48H', trigger: '3' },
        { value: 2, label: 'Depuis plus de 48H', trigger: '0' },

      ],
      user: 'bot',
      botAvatar: sadBotAvatar,
    },

    {
      id: '3',
      message: 'Q3',
      options: [
        { value: 1, label: 'sur les 2 seins', trigger: '5' },
        { value: 2, label: 'sur 1 sein', trigger: '4' },

      ],
      user: 'bot',
      botAvatar: sadBotAvatar,
    },
    {
      id: '4',
      message: "Tétée le + régulièrement possible.Mettre du chaud sur la zone avant les tétées.Masser la zone lors des tétées.Exprimer manuellement ou à l'aide d'un tire-lait pour soulager l'engorgement.Cataplasme d'agile verte ou de feuille de choux.",
      end: true,
      user: 'bot',
      botAvatar: botAvatar,
    },
    {
      id: '5',
      message: 'Q4',
      options: [
        { value: 1, label: 'La douleur est apparue en même temps', trigger: '0' },
        { value: 2, label: 'La douleur est apparue à des moments différents', trigger: '4' },

      ],
      user: 'bot',
      botAvatar: sadBotAvatar,
    },
  ],
  "Mon bébé tête tout le temps": [
    {
      id: '1',
      message: 'Question pour sujet 2?',
      options: [
        { value: 1, label: 'Option 1', trigger: '4' },
        { value: 2, label: 'Option 2', trigger: '3' },
        { value: 3, label: 'Option 3', trigger: '3' },
      ],
      user: 'bot',
      botAvatar: botAvatar,
    },

    {
      id: '3',
      message: 'Mauvaise réponse, essayez à nouveau.',
      trigger: '2',
      user: 'bot',
      botAvatar: sadBotAvatar,
    },
    {
      id: '4',
      message: 'Génial! Vous avez bien répondu!',
      trigger: '5',
      user: 'bot',
      botAvatar: happyBotAvatar,
    },
    {
      id: '5',
      message: 'Merci pour votre participation',
      end: true,
      user: 'bot',
      botAvatar: botAvatar,
    },
  ],
  "Pas assez de lait": [
    {
      id: '1',
      message: 'Question pour sujet 3?',
      options: [
        { value: 1, label: 'Option 1', trigger: '4' },
        { value: 2, label: 'Option 2', trigger: '3' },
        { value: 3, label: 'Option 3', trigger: '3' },
      ],
      user: 'bot',
      botAvatar: botAvatar,
    },

    {
      id: '3',
      message: 'Mauvaise réponse, essayez à nouveau.',
      trigger: '2',
      user: 'bot',
      botAvatar: sadBotAvatar,
    },
    {
      id: '4',
      message: 'Génial! Vous avez bien répondu!',
      trigger: '5',
      user: 'bot',
      botAvatar: happyBotAvatar,
    },
    {
      id: '5',
      message: 'Merci pour votre participation',
      end: true,
      user: 'bot',
      botAvatar: botAvatar,
    },
  ],
  "La fatigue": [
    {
      id: '1',
      message: 'Question pour sujet 4?',
      options: [
        { value: 1, label: 'Option 1', trigger: '4' },
        { value: 2, label: 'Option 2', trigger: '3' },
        { value: 3, label: 'Option 3', trigger: '3' },
      ],
      user: 'bot',
      botAvatar: botAvatar,
    },

    {
      id: '3',
      message: 'Mauvaise réponse, essayez à nouveau.',
      trigger: '2',
      user: 'bot',
      botAvatar: sadBotAvatar,
    },
    {
      id: '4',
      message: 'Génial! Vous avez bien répondu!',
      trigger: '5',
      user: 'bot',
      botAvatar: happyBotAvatar,
    },
    {
      id: '5',
      message: 'Merci pour votre participation',
      end: true,
      user: 'bot',
      botAvatar: botAvatar,
    },
  ],
  "L’alimentation": [
    {
      id: '1',
      message: 'Question pour sujet 5?',
      options: [
        { value: 1, label: 'Option 1', trigger: '4' },
        { value: 2, label: 'Option 2', trigger: '3' },
        { value: 3, label: 'Option 3', trigger: '3' },
      ],
      user: 'bot',
      botAvatar: botAvatar,
    },

    {
      id: '3',
      message: 'Mauvaise réponse, essayez à nouveau.',
      trigger: '2',
      user: 'bot',
      botAvatar: sadBotAvatar,
    },
    {
      id: '4',
      message: 'Génial! Vous avez bien répondu!',
      trigger: '5',
      user: 'bot',
      botAvatar: happyBotAvatar,
    },
    {
      id: '5',
      message: 'Merci pour votre participation',
      end: true,
      user: 'bot',
      botAvatar: botAvatar,
    },
  ],

};

function Meezy() {
  const [subject, setSubject] = useState(null);
  const [step, setStep] = useState(null);
  const [history, setHistory] = useState([]);
  const [currentMessage, setCurrentMessage] = useState(null);
  


  useEffect(() => {
    if (step) {
      const currentStep = stepsBySubject[subject].find(s => s.id === step);
      setCurrentMessage(currentStep);
    }
  }, [step,history]);


  const handleSubjectClick = (subject) => {
    setSubject(subject);
    setStep('1');
    const steps = stepsBySubject[subject];
    
    setCurrentMessage(steps.find(s => s.id === '1'));
    setHistory([]);
   
  };

  const handleOptionClick = (option) => {
    const nextStep = stepsBySubject[subject].find(s => s.id === option.trigger);
    //choix utilisateur
    const userChoice = {
      id: 'userChoice',
      user: 'user',
      message: option.label,
      avatar: userAvatar
    };

    setHistory(prevHistory => [...prevHistory, currentMessage, userChoice]);
    
    setCurrentMessage(nextStep);
    setStep(option.trigger);
  };

  const restartChat = () => {
    setStep(null);
    setSubject(null);
    setHistory([]);
    setCurrentMessage(null);
  };



  const currentStep = subject && step ? stepsBySubject[subject].find(s => s.id === step) : null;


  return (
    <View style={{ flex: 1, paddingTop: 50, backgroundColor: "#d7d7d7" }}>
      <ScrollView style={{ paddingHorizontal: 20 }}>
        {history.map((s, i) => {
          if (s.id === 'userChoice') {
            return (
              <View key={i} style={styles.messageContainer(s.user)}>
                <View style={styles.messageBubble(s.user)}>
                  <Text style={styles.messageText}>{s.message}</Text>
                </View>
                {s.user === 'user' && <Image source={s.avatar} style={styles.avatar} />}
              </View>
            );
           } 
          else {
            return (
              <View key={i} style={styles.messageContainer(s.user)}>
                {s.user === 'bot' && <Image source={s.botAvatar} style={styles.avatar} />}
                <View style={styles.messageBubble(s.user)}>
                  <Text style={styles.messageText}>{s.message}</Text>
                </View>
                {s.user === 'user' && <Image source={s.avatar} style={styles.avatar} />}
              </View>
            );
          }
        })}
        {/* Meezy question */}
        {currentMessage && (
        <View style={styles.messageContainer(currentMessage.user)}>
          {currentMessage.user === 'bot' && <Image source={currentMessage.botAvatar} style={styles.avatar} />}
          <View style={styles.messageBubble(currentMessage.user)}>
            <Text style={styles.messageText}>{currentMessage.message}</Text>
          </View>
          {currentMessage.user === 'user' && <Image source={currentMessage.avatar} style={styles.avatar} />}
        </View>
      )}
       


      </ScrollView>
      {/* premiere etape du chat choisir un sujet */}
      {!subject && (
        <View style={styles.optionsContainer}>
          {subjects.map((subject, i) => (
            <TouchableOpacity
              key={i}
              style={styles.optionButton}
              onPress={() => handleSubjectClick(subject)}
            >
              <Text style={styles.optionText}>{subject}</Text>
            </TouchableOpacity>
          ))}
        </View>
      )}
        {/* options de reponses */}
      {currentStep && currentStep.options && (
        <View style={styles.optionsContainer}>
          {currentStep.options.map((option, i) => (
            <TouchableOpacity
              key={i}
              style={styles.optionButton}
              onPress={() => handleOptionClick(option)}
            >
              <Text style={styles.optionText}>{option.label}</Text>
            </TouchableOpacity>
          ))}
        </View>
      )} 
      {currentStep && currentStep.end && <Button title="Recommencer" color={COLORS.primary} onPress={restartChat} />}
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
    backgroundColor: user === 'bot' ? COLORS.primary : COLORS.secondary,
  }),
  messageText: {
    fontSize: 16,
    lineHeight: 22,
    color: '#fff',
    fontWeight: '600',
  },
  optionsContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
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
    margin: 5,
  },
  optionText: {
    color: '#fff',
    fontSize: 16,
  },
});

export default Meezy;
