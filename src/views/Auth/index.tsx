import LoginForm from '@Components/common/Login/LoginForm';
import kanbanImage from '@Assets/images/kanban.png';

function Auth() {
  return (
    <div className="grid h-full w-full lg:grid-cols-2 ">
      <div className="hidden h-full w-full items-center justify-center bg-blue-700 lg:flex lg:w-full ">
        <img src={kanbanImage} alt="" className="h-full w-full object-cover" />
      </div>
      <div className="flex h-full w-full items-center justify-center">
        <LoginForm />
      </div>
    </div>
  );
}

export default Auth;
