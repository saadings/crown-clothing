import {
  FormInputLabelContainer,
  GroupContainer,
  InputContainer,
} from "./FormInputStyles";

const FormInput = ({ label, ...otherProps }: any) => {
  return (
    <>
      <GroupContainer>
        <InputContainer {...otherProps} />

        {label && (
          <FormInputLabelContainer shrink={otherProps.value.length}>
            {label}
          </FormInputLabelContainer>
        )}
      </GroupContainer>
    </>
  );
};

export default FormInput;
