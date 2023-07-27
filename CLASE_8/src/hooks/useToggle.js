import { useCallback, useEffect, useMemo, useState } from "react";

const useToggle = (initialActive = false) => {
  const [active, setActive] = useState(initialActive);

  useEffect(() => {
    console.log("TOGGLE STATE:", active);
  }, [active]);

  const handleActivate = () => setActive(true);
  const handleDeactivate = () => setActive(false);
  const handleToggle = () => setActive(!active);

  return { handleActivate, handleDeactivate, handleToggle, active };
};

export default useToggle;
