import SignupForm from "../components/SignupForm";

interface RegisterPageProps {
  params: {
    role: string;
  };
}

const RegisterPage: React.FC<RegisterPageProps> = ({ params: { role } }) => {
  return (
    <div className="w-full flex-col h-screen flex items-center justify-center">
      <div className="container">
        <SignupForm role={role} />
      </div>
    </div>
  );
};

export default RegisterPage;
