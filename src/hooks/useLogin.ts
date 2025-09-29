import api from "@/api/axios";
import { useMutation } from "@tanstack/react-query";

type LoginRequest = {
  username: string;
  password: string;
};

type LoginResponse = {
  token: string;
};

export function useLogin() {
  return useMutation<LoginResponse, Error, LoginRequest>({
    mutationFn: async (data: LoginRequest) => {
      const res = await api.post("/auth/login", data);
      return res.data;
    },
  });
}
