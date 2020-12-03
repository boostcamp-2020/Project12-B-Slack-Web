import React from 'react';
import styled from 'styled-components';
import { Text, ModalBox, HoverInput, Button } from '@components/atoms';

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
          <Text color="rgba(0,0,0,1)" isBold size="large">
            Create a Channel
          </Text>
        </NodeWrap>
        <NodeWrap>
          <Text color="rgba(147,147,147,1)" size="small">
            Channels are where your team communicates. They’re best when organized around a topic — #marketing, for example
          </Text>
        </NodeWrap>
        <NodeWrap>
          <Text color="black" size="small" isBold>
            Name
          </Text>
          <InputWrap>
            <HoverInput placeholder="e.g. plan-budget" />
          </InputWrap>
        </NodeWrap>
        <NodeWrap>
          <Text color="black" size="small" isBold>
            Description
          </Text>
          <InputWrap>
            <HoverInput />
          </InputWrap>
          <Text color="rgba(147,147,147,1)" size="small">
            What’s this channel about?
          </Text>
        </NodeWrap>
        <NodeWrap>
          <CheckboxContainer>
            <Text color="black" size="small" isBold>
              Make private
            </Text>
            <Checkbox type="checkbox" />
          </CheckboxContainer>
        </NodeWrap>
        <SubmitButtonCantainer>
          <Button backgroundColor="rgba(221,221,221,1)" borderColor="rgba(221,221,221,1)" fontColor="rgba(83,83,83,1)" onClick={() => {}} isBold>
            Create
          </Button>
        </SubmitButtonCantainer>
      </StyledCreateChannelModal>
    </ModalBox>
  );
};

export { CreateChannelModal, CreateChannelModalProps };
