import Main from '../components/Main'
import ContactForm from '../components/form/ContactForm'

const Contact = () => (
  <Main title='Contact' titleSuffix={true}>
    <div className="flex flex-col items-center justify-center my-16 px-6">
      <h1>Contact us</h1>
      <ContactForm />
    </div>
  </Main>
)

export default Contact
