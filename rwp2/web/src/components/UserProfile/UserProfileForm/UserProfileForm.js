import {
  Form,
  FormError,
  FieldError,
  Label,
  Submit,
  SelectField,
  RadioField,
} from '@redwoodjs/forms'

import { City, Gender } from "@prisma/client";


// export const City: {
//   SAINTELUCE,
//   RIVIERESALEE,
//   FORTDEFRANCE
// };

const UserProfileForm = (props) => {
  const onSubmit = (data) => {
    props.onSave(data, props?.userProfile?.id)
  }

  return (
    <div className="rw-form-wrapper">
      <Form onSubmit={onSubmit} error={props.error}>
        <FormError
          error={props.error}
          wrapperClassName="rw-form-error-wrapper"
          titleClassName="rw-form-error-title"
          listClassName="rw-form-error-list"
        />

        <Label
          name="city"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          City
        </Label>

        {/* <RadioField
          name="city"
          defaultValue={props.userProfile?.city}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
          validation={{ required: true }}
        >
          <option>Sainte-Luce</option>
          <option>Rivière-Salée</option>
          <option>Fort-de-France</option>
          <option>TBD</option>
        </RadioField> */}

        <SelectField
          defaultValue={props.userProfile?.City}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
          validation={{ required: true }}
          name="city"
          // multiple={true}
        >
          <option>Please select an option</option>
          <option>SAINTELUCE</option>
          <option>RIVIERESALEE</option>
          <option>FORTDEFRANCE</option>
        </SelectField>

        <FieldError name="city" className="rw-field-error" />

        <Label
          name="gender"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Gender
        </Label>

        <SelectField
          defaultValue={props.userProfile?.Gender}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
          validation={{ required: true }}
          name="gender"
          // multiple={true}
        >
          <option>Please select an option</option>
          <option>FEMALE</option>
          <option>MALE</option>
          <option>OTHER</option>
        </SelectField>

        <FieldError name="gender" className="rw-field-error" />


        <div className="rw-button-group">
          <Submit disabled={props.loading} className="rw-button rw-button-blue">
            Save
          </Submit>
        </div>
      </Form>
    </div>
  )
}

export default UserProfileForm
