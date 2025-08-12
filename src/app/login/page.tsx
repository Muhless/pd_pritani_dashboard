import { InputComponent } from "@/components/Input";
import { ButtonComponent } from "@/components/ui/Button/Button";
import React from "react";
import { IoArrowForwardCircle } from "react-icons/io5";

const LoginPage = () => {
  return (
    <div className="flex items-center justify-center h-screen text-black bg-gray-100">
      <div className="flex flex-col justify-center p-10 space-y-5 bg-white rounded-xl h-1/2 border">
        <div className="flex justify-center">
          <h1 className="text-3xl font-heading font-mono">Login</h1>
        </div>
        <form>
          <div className="space-y-3">
            <InputComponent
              label="Username"
              name="username"
              placeholder="Masukkan username anda"
            />
            <InputComponent
              label="Password"
              name="password"
              placeholder="Masukkan password anda"
            />
          </div>
          <div className="mt-5 mb-2">
            <ButtonComponent
              variant="success"
              className="w-full flex items-center justify-center gap-1"
            >
              Submit <IoArrowForwardCircle size={25} />
            </ButtonComponent>
          </div>
          <p className="text-center text-sm text-gray-500">
            Belum punya akun ?{" "}
            <span className="hover:text-blue-600 underline">
              <a href="">Register</a>
            </span>{" "}
            disini
          </p>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;
