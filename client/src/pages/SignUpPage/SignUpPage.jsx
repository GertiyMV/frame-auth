import AuthForm from '../../components/AuthForm/AuthForm';

export default function SignUpPage({ setUser }) {
  return (
    <div>
      <AuthForm title='Зарегистрироваться' type='signup' setUser={setUser} />
    </div>
  );
}
