import { useState, useEffect } from "react";

const useStatus = (): boolean => {
  const [status, setStatus] = useState<boolean>(true);

  useEffect(() => {
    const onlineHandler = () => {
      setStatus(true);
    };

    const offlineHandler = () => {
      setStatus(false);
    };

    window.addEventListener("online", onlineHandler);
    window.addEventListener("offline", offlineHandler);

    return () => {
      window.removeEventListener("online", onlineHandler);
      window.removeEventListener("offline", offlineHandler);
    };
  }, []);

  return status;
};

export default useStatus;
