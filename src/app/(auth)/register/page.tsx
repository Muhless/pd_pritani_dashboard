import BaseCard from "@/components/card/BaseCard";
import { ButtonComponent } from "@/components/ui/button/Button";
import { InputComponent } from "@/components/ui/input/Input";
import { BiLogIn } from "react-icons/bi";

const RegisterPage = () => {
  return (
    <form className="bg-background min-h-screen flex items-center justify-center">
      <BaseCard className="flex flex-col items-center space-y-3">
        <h1>Buat Akun</h1>
        <InputComponent label="Username" name="username" required />
        <InputComponent label="Password" name="password" required />
        <ButtonComponent
          variant="success"
          className="w-full flex justify-center"
        >
          <div className="flex items-center space-x-2">
            <BiLogIn />
            <p>Buat Akun</p>
          </div>
        </ButtonComponent>
      </BaseCard>
    </form>
  );
};

export default RegisterPage;
