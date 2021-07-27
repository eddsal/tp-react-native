import React, {useState} from 'react';
import {View} from 'react-native';
import {TextInput, Button} from 'react-native-paper';

export default function FormTask({onSubmit, selectedValue}) {
  const [values, setValues] = useState(
    selectedValue === true
      ? {
        name: '',
        status: '',
        date: '',
        geolocation:'',
        }
      : selectedValue,
  );

  const _onSubmit = () => {
   
    if (selectedValue) onSubmit(values);
  };
  const handleChange = event => {
    setValues({
      ...values,
      [event.target.name]: event.target.value,
    });
  };

  return (
    <View onSubmit={_onSubmit}>
      <TextInput
        label="Name"
        onChangeText={value =>
          handleChange({
            target: {
              name: 'name',
              value,
            },
          })
        }
        value={values.name}
      />
      <TextInput
        label="Status"
        onChangeText={value =>
          handleChange({
            target: {
              name: 'status',
              value,
            },
          })
        }
        value={values.status}
      />
     
      <Button onPress={_onSubmit}>Submit</Button>
    </View>
  );
}