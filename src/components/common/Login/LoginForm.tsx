import Icon from '@Components/common/Icon';
import { Button } from '@Components/RadixComponents/Button';
import googleIcon from '@Assets/images/google.png';
import { Input, Label } from '@Components/common/FormUI';

function LoginForm() {
  return (
    <div className="flex h-full w-full flex-col items-center   justify-center   ">
      <div className="flex  flex-col items-center justify-center gap-10 sm:w-[28rem]">
        <div className="flex h-fit w-full gap-2   sm:w-[28rem] md:w-[28rem]">
          <Icon
            className="!text-sm !font-bold text-gray-400"
            name="arrow_back_ios"
          />
          <span className="text-md text-gray-400">Back to Dashboard</span>
        </div>
        <div className="flex h-full w-fit flex-col  gap-8 sm:w-[28rem]">
          <div>
            <h2 className="text-xl md:text-2xl">Sign In</h2>
            <span className="text-md text-gray-400">
              Enter your username and password to sign in!
            </span>
          </div>
          <Button className="flex h-12 w-full items-center gap-2 bg-gray-200 text-lg font-normal text-black">
            <img className="h-4 w-4" src={googleIcon} alt="" />
            <span className="text-md leading-10 tracking-wider">
              Sign in with Google
            </span>
          </Button>
          <div className="my-4 flex w-full items-center justify-center">
            <hr className="w-full border-gray-300" />
            <span className="px-4 text-lg text-gray-500">or</span>
            <hr className="w-full border-gray-300" />
          </div>
          <form className="flex w-full flex-col">
            <div className="input-section flex w-full flex-col gap-8">
              <div className="flex w-full flex-col gap-2">
                <Label>
                  Username<span className="text-lg text-blue-700">*</span>
                </Label>
                <Input
                  type="text"
                  className="w-full  rounded-lg border"
                  placeholder="Prajwal Siwa"
                />
              </div>
              <div className="flex w-full flex-col gap-2">
                <Label>
                  Password<span className="text-lg text-blue-700">*</span>
                </Label>
                <Input
                  type="password"
                  className="w-full rounded-lg border"
                  placeholder="Min. 6 characters"
                />
              </div>
            </div>
            <div className="my-2 flex w-full justify-between">
              <div className="flex items-center gap-2">
                <Input type="checkbox" />
                <span>Keep me logged in</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="cursor-pointer text-blue-700">
                  Forgot password?
                </span>
              </div>
            </div>
            <Button
              type="submit"
              className="h-12 rounded-lg bg-blue-700 hover:bg-blue-800"
            >
              <span className="text-md leading-10 tracking-wider">Sign In</span>
            </Button>
            <div className="mt-4 flex w-full gap-2">
              <div className="flex items-center gap-2">
                <Input type="checkbox" />
                <span>Not registered yet?</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="cursor-pointer text-blue-700">
                  Create an Account
                </span>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default LoginForm;
