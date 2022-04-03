import { useAppDispatch } from '../../hooks/useAppDispatch';
import { useAppSelector } from '../../hooks/useAppSelector';
import {
  selectCurrentUserId,
  switchUser,
} from './usersSlice';
import Switch from '../../common/Switch';

function UsersSwitch() {
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

export default UsersSwitch;
