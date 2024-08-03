import AuthForm from '../../components/AuthForm/AuthForm';

export default function SignInPage({ setUser }) {
  return (
    <div>
      <AuthForm title='Войти' type='signin' setUser={setUser} />
    </div>
  );
}
