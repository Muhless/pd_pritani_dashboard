import { InputComponent } from "@/components/Input";
import { AlternatifLoginButton } from "@/components/ui/Button/AlternatifLoginButton";
import { ButtonComponent } from "@/components/ui/Button/Button";
import Link from "next/link";
import { FaFacebook, FaGithub, FaGoogle } from "react-icons/fa";

const LoginPage = () => {
  return (
    <div className="flex items-center justify-center h-screen text-black bg-gray-100">
      <div className="flex flex-col justify-center p-20 space-y-10 bg-white border rounded-xl">
        <div className="flex justify-center">
          <h1 className="text-3xl font-heading ">Login</h1>
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
            <h3 className="font-bold text-green-600">Lupa Password ?</h3>
          </div>
          <div className="mt-5">
            <ButtonComponent
              variant="success"
              className="flex items-center justify-center w-full gap-1"
            >
              Login
            </ButtonComponent>
          </div>
        </form>
        <div className="space-y-3">
          <div className="flex items-center">
            <div className="flex-1 border-t text-gray-400"></div>
            <p className="px-3">atau</p>
            <div className="flex-1 border-t text-gray-400"></div>
          </div>
          <div className="flex justify-evenly">
            <AlternatifLoginButton>
              <FaGoogle />
            </AlternatifLoginButton>
            <AlternatifLoginButton>
              <FaFacebook />
            </AlternatifLoginButton>{" "}
            <AlternatifLoginButton>
              <FaGithub />
            </AlternatifLoginButton>
          </div>
          <p className="text-sm text-center text-gray-500">
            Belum punya akun ? buat akun{" "}
            <span className="underline hover:text-blue-600">
              <Link href="/register">disini</Link>
            </span>{" "}
          </p>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
