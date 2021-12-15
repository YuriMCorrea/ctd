import React, {useState} from 'react';
import {View, Platform, Button} from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';
import styles from "./style";
import EStyleSheet from 'react-native-extended-stylesheet';

EStyleSheet.build()

//Função DateTimePicker

export const InputData = () => {
  const [date, setDate] = useState(new Date(1598051730000));
  const [mode, setMode] = useState('date');
  const [show, setShow] = useState(false);

  const onChange = (event, selectedDate) => {
    const currentDate = selectedDate || date;
    setShow(Platform.OS === 'ios');
    setDate(currentDate);
  };

  const showMode = (currentMode) => {
    setShow(true);
    setMode(currentMode);
  };

  const showDatepicker = () => {
    showMode('date');
  };

  return (
    <View>
      <View style = {styles.containerBotao}>
        <Button 
            style = {styles.botaoData}
            onPress={showDatepicker} 
            title="Data de fabricação" 
            
        />
      </View>
      {show && (
        <DateTimePicker
          testID="dateTimePicker"
          value={date}
          mode={mode}
          is24Hour={true}
          display="default"
          onChange={onChange}
        />
      )}
    </View>
  );
};

export default InputData;