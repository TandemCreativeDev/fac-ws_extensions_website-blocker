import "~style.css";

import { useEffect, useState } from "react";

import Toggle from "~features/toggle";
import { getIsEnabled, setIsEnabled } from "~utils/storageHandler";

function IndexPopup() {
  const [isEnabled, setIsEnabledLocal] = useState<boolean>(true);

  const handleEnabledClick = async () => {
    const newState = !isEnabled;
    setIsEnabledLocal(newState);
    await setIsEnabled(newState);
  };

  useEffect(() => {
    const fetchEnabled = async () => {
      const enabled = await getIsEnabled();
      setIsEnabledLocal(enabled);
    };
    fetchEnabled();
  }, []);

  return (
    <div className="plasmo-flex plasmo-items-center plasmo-justify-center plasmo-h-64 plasmo-w-56 plasmo-flex-col plasmo-gap-5 plasmo-bg-slate-200">
      <h1 className="plasmo-text-lg">Website Blocker</h1>
      <Toggle onChange={handleEnabledClick} checked={isEnabled} />
    </div>
  );
}

export default IndexPopup;
