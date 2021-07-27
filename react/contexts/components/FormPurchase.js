import React, {useState} from 'react';
import {View} from 'react-native';
import {TextInput, Button} from 'react-native-paper';

export default function FormPurchase({onSubmit, selectedValue}) {
  const [values, setValues] = useState(
    selectedValue === true
      ? {
          name: '',
          status: '',
        }
      : selectedValue,
  );

  const _onSubmit = () => {
    // Vanilla JS approch
    //const newData = new FormData(event.target);
    //const values = newData.entries.reduce((acc, [key, value]) => {
    //  acc[key] = value;
    //  return acc;
    //}, {});
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
      <TextInput
        label="date"
        onChangeText={value =>
          handleChange({
            target: {
              name: 'date',
              value,
            },
          })
        }
        value={values.date}
      />
      <Button onPress={_onSubmit}>Submit</Button>
    </View>
  );
}