import React from 'react';
import styled from 'styled-components';
import { BsCheckLg, BsTrash } from 'react-icons/bs';

interface AdjustCheckFunc {
  (id: string): void;
}

interface DeleteTodoFunc {
  (id: string): void;
}

interface TodoListInterface {
  id: string;
  isChecked: boolean;
  content: string;
  adjustCheck: AdjustCheckFunc;
  deleteTodoElement: DeleteTodoFunc;
}

interface CheckedInterface {
  isChecked?: boolean;
}

function TodoElements({ id, isChecked, content, adjustCheck, deleteTodoElement }: TodoListInterface): JSX.Element {
  return (
    <TodoElementContainer>
      <TodoContentWrapper>
        <CheckButton
          onClick={() => {
            adjustCheck(id);
          }}
          isChecked={isChecked}
        >
          <BsCheckLg />
        </CheckButton>
        <TodoContent>{content}</TodoContent>
      </TodoContentWrapper>
      <DeleteButton
        onClick={() => {
          deleteTodoElement(id);
        }}
      >
        <BsTrash />
      </DeleteButton>
    </TodoElementContainer>
  );
}

export default TodoElements;

const TodoElementContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 30px 0;
  width: 100%;
  border-bottom: 1px solid #f4f4f4;
`;

const TodoContentWrapper = styled.div`
  display: flex;
  align-items: center;
`;

const CheckButton = styled.button`
  padding-top: 10px;
  width: 46px;
  height: 46px;
  border-radius: 30px;
  border: 3px solid ${({ isChecked }: CheckedInterface): string => (isChecked ? '#8bdb81' : '#f3f3f3')};
  font-size: 22px;
  color: ${({ isChecked }: CheckedInterface): string => (isChecked ? '#8bdb81' : '#f3f3f3')};
`;

const TodoContent = styled.div`
  margin-left: 60px;
  font-size: 20px;
`;

const DeleteButton = styled.button`
  padding-top: 6px;
  font-size: 20px;
  color: #cccccc;
`;
