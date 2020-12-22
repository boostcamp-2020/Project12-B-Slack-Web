import {
  CREATE_MODAL_OPEN,
  CREATE_MODAL_CLOSE,
  CHANNEL_MODAL_OPEN,
  CHANNEL_MODAL_CLOSE,
  USERBOX_MODAL_OPEN,
  USERBOX_MODAL_CLOSE,
  PROFILE_MODAL_OPEN,
  PROFILE_MODAL_CLOSE,
  EMOJI_PICKER_OPEN,
  EMOJI_PICKER_CLOSE,
  ChannelModalState,
  ProfileModalState,
  EmojiPickerState
} from '@store/types/modal-types';

export const createModalOpen = () => ({ type: CREATE_MODAL_OPEN });
export const createModalClose = () => ({ type: CREATE_MODAL_CLOSE });
export const channelModalOpen = (payload: ChannelModalState) => ({ type: CHANNEL_MODAL_OPEN, payload });
export const channelModalClose = () => ({ type: CHANNEL_MODAL_CLOSE });
export const userboxModalOpen = () => ({ type: USERBOX_MODAL_OPEN });
export const userboxModalClose = () => ({ type: USERBOX_MODAL_CLOSE });
export const profileModalOpen = (payload: ProfileModalState) => ({ type: PROFILE_MODAL_OPEN, payload });
export const profileModalClose = () => ({ type: PROFILE_MODAL_CLOSE });
export const emojiPickerOpen = (payload: EmojiPickerState) => ({ type: EMOJI_PICKER_OPEN, payload });
export const emojiPickerClose = () => ({ type: EMOJI_PICKER_CLOSE });
