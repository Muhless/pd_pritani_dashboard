"use client";

import { InputComponent } from "@/components/Input";
import { AlternatifLoginButton } from "@/components/ui/button/AlternatifLoginButton";
import { ButtonComponent } from "@/components/ui/button/Button";
import { useLogin } from "@/hooks/useLogin";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { FaFacebook, FaGithub, FaGoogle } from "react-icons/fa";

export default function LoginPage() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const { mutate: login, isPending, isError, error } = useLogin();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    login(
      { username, password },
      {
        onSuccess: (data) => {
          localStorage.setItem("token", data.token);
          alert("Login berhasil 🚀");
        },
      }
    );
  };

  return (
    <div className="grid h-screen grid-cols-2 text-black bg-gray-100">
      {/* left side */}
      <div className="relative col-span-1">
        <Image
          src="/images/rice-field.jpg"
          alt="banner-login"
          fill
          className="object-fill shadow-2xl"
        />
      </div>
      {/* right side */}
      <div className="flex flex-col justify-center items-center col-span-1 p-10 space-y-5 bg-white">
        <div className="flex flex-col items-center justify-center">
          <h1 className="font-mono text-4xl font-semibold">Login</h1>
          <p className="text-gray-600 text-center font-sans">
            Selamat datang di dashboard <br />
            <span>Penggilingan Padi Pritani</span>
          </p>
        </div>
        <form onSubmit={handleSubmit} className="w-96">
          <div className="space-y-3">
            <InputComponent
              label="Username"
              name="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              placeholder="Masukkan username anda"
            />
            <InputComponent
              label="Password"
              name="password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Masukkan password anda"
            />
            <h3 className="inline-block text-gray-500 cursor-pointer font-bold hover:text-green-600 hover:underline">
              Lupa Password ?
            </h3>
          </div>
          <div className="mt-3">
            <ButtonComponent
              variant="success"
              className="flex items-center justify-center w-full gap-1"
              type="submit"
              disabled={isPending}
            >
              {isPending ? "Loading..." : "Login"}
            </ButtonComponent>
            {isError && (
              <p className="mt-2 text-sm text-red-600">
                {(error as Error).message}
              </p>
            )}
          </div>
        </form>
        <div className="space-y-3 w-96">
          <div className="flex items-center">
            <div className="flex-1 text-gray-400 border-t"></div>
            <p className="px-3">atau</p>
            <div className="flex-1 text-gray-400 border-t"></div>
          </div>
          <div className="flex justify-evenly">
            <AlternatifLoginButton>
              <FaGoogle />
            </AlternatifLoginButton>
            <AlternatifLoginButton>
              <FaFacebook />
            </AlternatifLoginButton>
            <AlternatifLoginButton>
              <FaGithub />
            </AlternatifLoginButton>
          </div>
          <p className="text-sm text-center text-gray-500">
            Belum punya akun ? buat akun{" "}
            <span className="underline hover:text-blue-600">
              <Link href="/register">disini</Link>
            </span>
          </p>
        </div>
      </div>
    </div>
  );
}