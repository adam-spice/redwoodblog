import {
  FieldError,
  Form,
  FormError,
  Label,
  Submit,
  TextAreaField,
  TextField,
} from '@redwoodjs/forms'
import { useMutation } from '@redwoodjs/web'
import BlogLayout from 'src/layouts/BlogLayout/BlogLayout'
import { useForm } from 'react-hook-form'

const CREATE_CONTACT = gql`
  mutation CreateContactMutation($input: CreateContactInput!) {
    createContact(input: $input) {
      id
    }
  }
`

const ContactPage = () => {
  const formMethods = useForm()
  const [create, { loading, error }] = useMutation(CREATE_CONTACT, {
    onCompleted: () => {
      formMethods.reset()
      alert('thanks')
    },
  })
  const onSubmit = (data) => {
    create({ variables: { input: data } })
  }
  return (
    <BlogLayout>
      <div>
        <Form
          onSubmit={onSubmit}
          validation={{ mode: 'onBlur' }}
          formMethods={formMethods}
          error={error}
        >
          <FormError
            error={error}
            wrapperStyle={{ color: 'red', backgroundColor: 'lavenderblush' }}
          />
          <Label name="name" className="label" errorClassName="label error">
            Your Name
          </Label>
          <TextField
            name="name"
            className="input"
            errorClassName="input error"
            validation={{ required: true }}
          />
          <FieldError name="name" className="error" />

          <Label name="email" className="label" errorClassName="label error">
            Your Email
          </Label>
          <TextField
            name="email"
            className="input"
            errorClassName="input error"
            validation={{
              required: true,
              pattern: { value: /[^@]+@[^.]+\..+/ },
            }}
          />
          <FieldError name="email" className="error" />

          <Label name="message" className="label" errorClassName="label error">
            Your Message
          </Label>
          <TextAreaField
            name="message"
            className="input"
            errorClassName="input error"
            validation={{ required: true }}
          />
          <FieldError name="message" className="error" />

          <Submit disabled={loading} className="button">
            Save
          </Submit>
        </Form>
      </div>
    </BlogLayout>
  )
}

export default ContactPage
