import GoogleRegister from '../../components/google_register/GoogleRegister';
import RegisterForm from '../../components/register_form/RegisterForm';
import {
  vRegister_register,
  vRegister_separator,
  vRegister_separatorContainer,
  vRegister_separatorText,
  vRegister_title,
} from './RegisterView.styles';

export default function RegisterView() {
  return (
    <main className={vRegister_register}>
      <h1 className={vRegister_title}>Inscrivez-vous sur QuizzTure !</h1>
      <GoogleRegister />
      <div className={vRegister_separatorContainer}>
        <div className={vRegister_separator} />
        <h2 className={vRegister_separatorText}>Ou alors</h2>
        <div className={vRegister_separator} />
      </div>
      <RegisterForm />
    </main>
  );
}
