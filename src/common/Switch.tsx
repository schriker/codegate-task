import { Switch as TailwindSwitch } from '@headlessui/react';
import { SwitchPropsType } from '../types/switch';

function Switch({ enabled, onChange, label }: SwitchPropsType) {
  return (
    <TailwindSwitch.Group>
      <div className="flex flex-col">
        <TailwindSwitch.Label className="my-2 text-sm text-zinc-500 cursor-pointer">
          {label}
        </TailwindSwitch.Label>
        <div className="ml-1">
          <TailwindSwitch
            checked={enabled}
            onChange={onChange}
            className={`${
              enabled ? 'bg-green-500' : 'bg-gray-200'
            } relative inline-flex items-center h-6 rounded-full w-11 transition-colors drop-shadow-xl`}
          >
            <span
              className={`${
                enabled ? 'translate-x-6' : '-translate-x-1'
              } inline-block w-6 h-6 transform bg-white rounded-full transition-transform`}
            />
          </TailwindSwitch>
        </div>
      </div>
    </TailwindSwitch.Group>
  );
}

export default Switch;
