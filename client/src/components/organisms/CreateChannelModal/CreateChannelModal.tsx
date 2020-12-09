import React, { useState } from 'react';
import styled from 'styled-components';
import { Text, ModalBox, HoverInput, Button } from '@components/atoms';
import { color } from '@theme/index';
import { useSelector, useDispatch } from 'react-redux';
import { createModalClose } from '@store/actions/modal-action';

interface CreateChannelModalProps {}

const StyledCreateChannelModal = styled.div`
  max-width: 30rem;
`;

const NodeWrap = styled.div`
  margin-bottom: 1rem;
`;

const InputWrap = styled.div`
  width: 100%;
  margin: 0.6rem 0rem;
`;

const CheckboxContainer = styled.div`
  display: flex;
  align-items: flex-end;
`;

const Checkbox = styled.input`
  margin-left: 1rem;
`;

const SubmitButtonCantainer = styled.div`
  display: flex;
  justify-content: flex-end;
  width: 100%;
`;

const CreateChannelModal: React.FC<CreateChannelModalProps> = ({ ...props }) => {
  const dispatch = useDispatch();
  const isOpen = useSelector((store: any) => store.modal.isOpen);
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [isPrivate, setIsPrivate] = useState(false);

  const onChangeName = (e: any) => {
    setName(e.target.value);
  };

  const onChangeDescription = (e: any) => {
    setDescription(e.target.value);
  };

  const onChangeIsPrivate = (e: any) => {
    setIsPrivate(e.target.value);
  };

  const handlingCreateButtonClick = () => {
    console.log(name, description, isPrivate);
  };

  return (
    <>
      {isOpen ? (
        <ModalBox onClick={() => dispatch(createModalClose())} {...props}>
          <StyledCreateChannelModal>
            <NodeWrap>
              <Text fontColor={color.primary} isBold size="large">
                Create a Channel
              </Text>
            </NodeWrap>
            <NodeWrap>
              <Text fontColor={color.text_tertiary} size="small">
                Channels are where your team communicates. They’re best when organized around a topic — #marketing, for example
              </Text>
            </NodeWrap>
            <NodeWrap>
              <Text fontColor={color.primary} size="small" isBold>
                Name
              </Text>
              <InputWrap>
                <HoverInput placeholder="e.g. plan-budget" onChange={onChangeName} />
              </InputWrap>
            </NodeWrap>
            <NodeWrap>
              <Text fontColor={color.primary} size="small" isBold>
                Description
              </Text>
              <InputWrap>
                <HoverInput onChange={onChangeDescription} />
              </InputWrap>
              <Text fontColor={color.text_tertiary} size="small">
                What’s this channel about?
              </Text>
            </NodeWrap>
            <NodeWrap>
              <CheckboxContainer>
                <Text fontColor={color.primary} size="small" isBold>
                  Make private
                </Text>
                <Checkbox type="checkbox" onChange={onChangeIsPrivate} />
              </CheckboxContainer>
            </NodeWrap>
            <SubmitButtonCantainer onClick={handlingCreateButtonClick}>
              <Button backgroundColor={color.button_tertiary} borderColor={color.button_tertiary} fontColor={color.text_quaternary} isBold>
                Create
              </Button>
            </SubmitButtonCantainer>
          </StyledCreateChannelModal>
        </ModalBox>
      ) : null}
    </>
  );
};

export { CreateChannelModal, CreateChannelModalProps };
