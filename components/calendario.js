import React, { useState, useEffect } from 'react';
import { Text, View, StyleSheet, Image} from 'react-native';
import { Calendar } from 'react-native-calendars';

const Calendario = () => {
  return (
    <View style={styles.container}>
 <Calendar
          current={'2021-07-01'}
          minDate={'2021-07-03'}
          maxDate={'2021-07-30'}
          onDayPress={day => {
            console.log('selected day', day);
          }}
          monthFormat={'yyyy MM'}
          onMonthChange={month => {
            console.log('month changed', month);
          }}
          hideArrows={true}
          hideExtraDays={true}
          disableMonthChange={true}
          firstDay={1}
        />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#ffdddd',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 5,
  },
});

export default Calendario;