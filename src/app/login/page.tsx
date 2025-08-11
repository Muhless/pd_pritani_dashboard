import { InputComponent } from "@/components/Input";
import { ButtonComponent } from "@/components/ui/Button/Button";
import React from "react";

const LoginPage = () => {
  return (
    <div className="flex items-center justify-center h-screen text-black">
      <div className="flex flex-col justify-center p-10 space-y-3 bg-white rounded-xl h-1/2">
        <div className="flex justify-center">
          <h1 className="text-3xl">Login</h1>
        </div>
        <form className="space-y-4">
          <div>
            <InputComponent
              label="Username"
              name="username"
              placeholder="Masukkan username anda"
            />
          </div>
          <div>
            <InputComponent
              label="Password"
              name="password"
              placeholder="Masukkan password anda"
            />
          </div>
          <ButtonComponent variant="success" className="w-full">
            Submit
          </ButtonComponent>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;
