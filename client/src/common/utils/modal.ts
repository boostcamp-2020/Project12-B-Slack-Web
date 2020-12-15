import { useDispatch } from 'react-redux';
import { profileModalOpen } from '@store/actions/modal-action';

interface Iuser {
  userId: number;
  profileUri: string;
  displayName: string;
}

export const openProfileModal = (user: Iuser) => {
  const dispatch = useDispatch();
  return (e: any) => {
    const x = window.pageXOffset + e.target.getBoundingClientRect().left;
    const y = window.pageYOffset + e.target.getBoundingClientRect().top;
    const { userId, profileUri, displayName } = user;
    dispatch(profileModalOpen({ x, y, userId, profileUri, displayName }));
  };
};
