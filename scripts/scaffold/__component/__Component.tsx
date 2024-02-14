/* eslint-disable no-underscore-dangle */
import React from 'react';

// Define the component Props interface
// If additional custom types are needed,
// add those to a types.ts file in the component directory
export interface Props {
  text: string;
}

// Declare the component
const __Component = (props: Props): JSX.Element => {
  const { text } = props;
  return (
    <div>
      <p>{text}</p>
    </div>
  );
};

// Export the component as the default export
export default __Component;
