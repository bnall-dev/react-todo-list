import React from 'react';
import InputField from './InputField';
import SubmitButton from './SubmitButton';

function Form(props) {
  return (
    <form id="form" onSubmit={props.handleSubmit}>
      <InputField />
      <SubmitButton
        itemList={props.itemList}
        setItemList={props.setItemList}
        InputField={InputField}
      />
    </form>
  );
}

export default Form;
