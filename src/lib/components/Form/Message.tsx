import React from 'react';
import { FormText } from './bin/FormText';

interface Props {
  error?: string;
  touched?: boolean;
  help?: string;
}

const FormMessage = (props: Props): JSX.Element => {
  const { error, touched, help } = props;

  const getMessageText = (): string => {
    if (touched && error) return error;
    if (help) return help;
    return '';
  };

  return (
    <FormText error={error} touched={touched} help={help}>
      {getMessageText()}
    </FormText>
  );
};

export default FormMessage;
