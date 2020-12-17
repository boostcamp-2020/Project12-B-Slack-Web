import React from 'react';
import Picker from 'emoji-picker-react';
import { DropMenuBox } from '@components/atoms';
import { useDispatch, useSelector } from 'react-redux';
import { emojiPickerClose } from '@store/actions/modal-action';
import { createMessageReaction } from '@socket/emits/reaction';
import { ChatType } from '@constants/index';

interface EmojiPickerProps {}

const EmojiPicker: React.FC<EmojiPickerProps> = () => {
  const dispatch = useDispatch();
  const { x, y, chatId, isOpen, type } = useSelector((store: any) => store.modal.emojiPicker);
  const onEmojiClick = (e: any, emojiObject: any) => {
    const { names, emoji } = emojiObject;
    if (type === ChatType.Reply) console.log(emojiObject);
    else createMessageReaction({ messageId: chatId, title: names[0], emoji });
    dispatch(emojiPickerClose());
  };

  const handlingCloseModal = () => {
    dispatch(emojiPickerClose());
  };

  return (
    <>
      {isOpen && (
        <DropMenuBox x={x} y={y} onClick={handlingCloseModal}>
          <Picker onEmojiClick={onEmojiClick} />
        </DropMenuBox>
      )}
    </>
  );
};

export { EmojiPicker, EmojiPickerProps };
