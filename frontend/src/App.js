import './App.css';
import { CheckboxList, RadioList, TextInput, DatePicker } from 'oolib';
import { useQuery } from '@tanstack/react-query';
import { useState } from 'react';

function App() {
  const [formState, setFormState] = useState({});

  const { isLoading, isError, data, error } = useQuery({
    queryKey: ['formData'],
    queryFn: () =>
      fetch('http://localhost:3001/controller/formData').then((res) =>
        res.json()
      ),
  });

  return (
    <div style={{ marginLeft: '100px', justifyContent: 'center' }}>
      {isLoading ? (
        <div>Loading...</div>
      ) : isError ? (
        <div>Error: {error?.message ?? 'Error in rendering form'}</div>
      ) : (
        <div>
          {data.length > 0 &&
            data.map((formElement, index) => {
              return (
                <div key={index}>
                  {formElement.comp === 'TextInput' && (
                    <TextInput
                      onChange={(id, value) => {
                        setFormState({
                          ...formState,
                          [id]: value,
                        });
                      }}
                      isRequired={formElement.isRequired}
                      value={formState[formElement.props.id]}
                      {...formElement.props}
                    />
                  )}
                  {formElement.comp === 'CheckboxList' && (
                    <CheckboxList
                      inputStyle='checkbox'
                      listType='horizontal'
                      onChange={(id, value) => {
                        setFormState({
                          ...formState,
                          [id]: value,
                        });
                      }}
                      isRequired={formElement.isRequired}
                      value={formState[formElement.props.id]}
                      {...formElement.props}
                    />
                  )}
                  {formElement.comp === 'RadioList' && (
                    <RadioList
                      listType='horizontal'
                      onChange={(id, value) => {
                        setFormState({
                          ...formState,
                          [id]: value,
                        });
                      }}
                      isRequired={formElement.isRequired}
                      value={formState[formElement.props.id]}
                      {...formElement.props}
                    />
                  )}
                  {formElement.comp === 'DatePicker' && (
                    <DatePicker
                      onChange={(id, value) => {
                        setFormState({
                          ...formState,
                          [id]: value,
                        });
                      }}
                      isRequired={formElement.isRequired}
                      value={formState[formElement.props.id]}
                      {...formElement.props}
                    />
                  )}
                </div>
              );
            })}
        </div>
      )}
    </div>
  );
}

export default App;
