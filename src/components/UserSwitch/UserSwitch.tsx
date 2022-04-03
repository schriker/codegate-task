import { useState } from 'react';
import Switch from '../UI/Switch/Switch';

function UserSwitch() {
  const [enabled, setEnabled] = useState(false);

  return (
    <Switch
      label="Switch user"
      enabled={enabled}
      onChange={(value) => setEnabled(value)}
    />
  );
}

export default UserSwitch;
