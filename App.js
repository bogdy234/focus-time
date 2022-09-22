import { useState } from 'react';
import { View, SafeAreaView, StyleSheet, Platform } from 'react-native';
import { Focus } from './src/features/focus/Focus';
import { FocusHistory } from './src/features/focus/FocusHistory';
import { Timer } from './src/features/timer/Timer';
import { colors } from './src/utils/colors';
import { spacing } from './src/utils/sizes';

export default function App() {
  const [focusSubject, setFocusSubject] = useState(null);
  const [focusHistory, setFocusHistory] = useState([]);

  return (
    <SafeAreaView style={styles.container}>
      {focusSubject ? (
        <Timer
          focusSubject={focusSubject}
          onTimerEnd={(subject) => setFocusHistory([...focusHistory, subject])}
          clearSubject={() => setFocusSubject(null)}
        />
      ) : (
        <View style={{ flex: 1 }}>
          <Focus addSubject={setFocusSubject} />
          <FocusHistory history={focusHistory} />
        </View>
      )}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: Platform.OS === 'ios' ? spacing.md : spacing.lg,
    backgroundColor: colors.darkBlue,
  },
});
