import { useState, useEffect } from "react";

interface LoginResponse {
  token: string; // Supondo que a resposta tenha um token de autenticação
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
        throw new Error(
          "Erro ao Logar: Verifique seu e-mail e senha e tente novamente."
        );
      }

      const data: LoginResponse = await response.json();
      localStorage.setItem("token", data.token);
      setIsAuthenticated(true);
      setLoading(false);
      return data;
    } catch (err: any) {
      setLoading(false);
      setError(err.message);
    }
  };

  const logout = () => {
    localStorage.removeItem("token");
    setIsAuthenticated(false);
  };

  return { login, logout, loading, error, isAuthenticated };
};

export default useLogin;
