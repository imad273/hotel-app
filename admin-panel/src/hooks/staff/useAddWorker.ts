import { useState } from "react";

interface dataType {
  name: string
  position: string
  phoneNumber: string
  email: string
  address: string
}

export function useAddWorker() {
  const [data, setData] = useState();
  const [error, setError] = useState(false);
  const [errorMsg, setErrorMsg] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const createWorker = async (data: dataType) => {
    setError(false);
    let url = "http://localhost:9999";

    if (process.env.NODE_ENV !== "development") {
      url = "https://hotel-app-35mr.onrender.com"
    }

    const request = await fetch(`${url}/staff/create_worker`, {
      method: "POST",
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data)
    });
    
    if (!request.ok && request.status === 500) {
      setError(true);
    }
    
    const response = await request.json();

    setData(response);
    setIsLoading(false);
  }

  return { createWorker, data, error, errorMsg, isLoading };
}