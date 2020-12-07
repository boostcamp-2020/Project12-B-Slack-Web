import React from 'react';
import styled from 'styled-components';
import { Text, ModalBox, HoverInput, Button } from '@components/atoms';
import { color } from '@theme/index';

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
  return (
    <ModalBox {...props}>
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
            <HoverInput placeholder="e.g. plan-budget" />
          </InputWrap>
        </NodeWrap>
        <NodeWrap>
          <Text fontColor={color.primary} size="small" isBold>
            Description
          </Text>
          <InputWrap>
            <HoverInput />
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
            <Checkbox type="checkbox" />
          </CheckboxContainer>
        </NodeWrap>
        <SubmitButtonCantainer>
          <Button backgroundColor={color.button_tertiary} borderColor={color.button_tertiary} fontColor={color.text_quaternary} isBold>
            Create
          </Button>
        </SubmitButtonCantainer>
      </StyledCreateChannelModal>
    </ModalBox>
  );
};

export { CreateChannelModal, CreateChannelModalProps };
