import LoginForm from "./components/LoginForm";

const LoginPage: React.FC = () => {
  return (
    <>
      <div className="w-full flex-col h-screen flex items-center justify-center">
        <div className="container">
          <LoginForm />
        </div>
      </div>
    </>
  );
};

export default LoginPage;
