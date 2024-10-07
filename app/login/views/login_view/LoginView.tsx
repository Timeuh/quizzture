import GoogleUserLogin from '../../components/google_user_login/GoogleUserLogin';
import LoginForm from '../../components/login_form/LoginForm';
import {
  vLogin_login,
  vLogin_separator,
  vLogin_separatorContainer,
  vLogin_separatorText,
  vLogin_title,
} from './LoginView.styles';

export default function LoginView() {
  return (
    <main className={vLogin_login}>
      <h1 className={vLogin_title}>Connexion à QuizzTure</h1>
      <GoogleUserLogin />
      <div className={vLogin_separatorContainer}>
        <div className={vLogin_separator} />
        <h2 className={vLogin_separatorText}>Ou alors</h2>
        <div className={vLogin_separator} />
      </div>
      <LoginForm />
    </main>
  );
}
