import { useState, useEffect } from "react";

interface LoginResponse {
  token: string;
  email: string;
  senha: string;
}

const useLogin = () => {
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      setIsAuthenticated(true);
    }
  }, []);

  const login = async (
    email: string,
    senha: string
  ): Promise<LoginResponse | void> => {
    setLoading(true);
    setError(null);

    try {
      const response = await fetch(
        "https://pit.lucasjanczak.com.br/api/Auth/Login",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ email, senha }),
        }
      );

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(
          errorData.message || "Erro ao Logar: Verifique seu e-mail e senha."
        );
      }

      const data: LoginResponse = await response.json();
      localStorage.setItem("token", data.token);
      setIsAuthenticated(true);
      return data;
    } catch (err: any) {
      setError(err.message || "Erro desconhecido. Tente novamente mais tarde.");
    } finally {
      setLoading(false);
    }
  };

  const logout = () => {
    localStorage.removeItem("token");
    setIsAuthenticated(false);
  };

  return { login, logout, loading, error, isAuthenticated };
};

export default useLogin;
