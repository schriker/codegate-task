import { useAppDispatch, useAppSelector } from '../../app/hooks';
import {
  selectCurrentUserId,
  switchUser,
} from '../../features/users/usersSlice';
import Switch from '../Switch/Switch';

function UserSwitch() {
  const dispatch = useAppDispatch();
  const currentUserId = useAppSelector(selectCurrentUserId);

  return (
    <Switch
      label="Switch user"
      enabled={!!currentUserId}
      onChange={(value) => dispatch(switchUser(value ? 1 : 0))}
    />
  );
}

export default UserSwitch;
