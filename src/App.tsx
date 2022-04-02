import React, { useState } from 'react';
import moment, { Moment } from 'moment';
import styled from 'styled-components';
import { v4 as uuidv4 } from 'uuid';
import { HiPlusSm } from 'react-icons/hi';
import TodoElements from './components/TodoElements';

interface TodoListInterface {
  id: string;
  isChecked: boolean;
  content: string;
}

function App(): JSX.Element {
  const [todoList, setTodoList] = useState<TodoListInterface[]>([]);
  const [todoInput, setTodoInput] = useState<string>('');

  const today: Moment = moment();
  const day: string = DAY[today.day()];
  const adjustedDate: string = today.format('YYYY년 MM월 DD일');

  const addTodoElement = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    const newElement: TodoListInterface = {
      id: uuidv4(),
      isChecked: false,
      content: todoInput,
    };
    setTodoList([...todoList, newElement]);
    setTodoInput('');
  };

  const adjustCheck = (id: string): void => {
    const adjustedList = todoList.map((element) =>
      id === element.id ? { ...element, isChecked: !element.isChecked } : element,
    );
    setTodoList(adjustedList);
  };

  const deleteTodoElement = (id: string): void => {
    const adjustedList = todoList.filter((element) => id !== element.id);
    setTodoList(adjustedList);
  };

  return (
    <TodoMain>
      <TodoContainer>
        <DateInfoContainer>
          <TodayInfo>{adjustedDate}</TodayInfo>
          <DayInfo>{day}요일</DayInfo>
        </DateInfoContainer>
        <TodoElementWrapper>
          {todoList.map(({ id, isChecked, content }) => (
            <TodoElements
              key={id}
              id={id}
              content={content}
              isChecked={isChecked}
              adjustCheck={adjustCheck}
              deleteTodoElement={deleteTodoElement}
            />
          ))}
        </TodoElementWrapper>
        <TodoInputForm>
          <TodoInput
            onChange={(event) => setTodoInput(event.target.value)}
            value={todoInput}
            placeholder="할 일을 입력해주세요"
          />
          <TodoAddButton
            onClick={(event) => {
              addTodoElement(event);
            }}
          >
            <PlusIcon />
          </TodoAddButton>
        </TodoInputForm>
      </TodoContainer>
    </TodoMain>
  );
}

export default App;

const DAY: string[] = ['일', '월', '화', '수', '목', '금', '토'];

const TodoMain = styled.main`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
`;

const TodoContainer = styled.section`
  width: 70%;
  padding: 60px 60px 30px;
  border-radius: 20px;
  background-color: white;
`;

const DateInfoContainer = styled.div`
  padding-bottom: 30px;
  border-bottom: 1px solid #92a9bd;
`;

const TodayInfo = styled.h2`
  padding-bottom: 20px;
  font-size: 30px;
  font-weight: bold;
`;

const DayInfo = styled.h3`
  color: #92a9bd;
  font-size: 20px;
`;

const TodoElementWrapper = styled.div`
  width: 100%;
  height: 60vh;
  border-bottom: 1px solid #92a9bd;
`;

const TodoInputForm = styled.form`
  display: flex;
  justify-content: center;
  margin-top: 30px;
  width: 100%;
`;

const TodoInput = styled.input`
  width: 100%;
  font-size: 18px;
`;

const TodoAddButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 50px;
  height: 50px;
  background-color: #92a9bd;
  border-radius: 30px;
`;

const PlusIcon = styled(HiPlusSm)`
  font-size: 32px;
  color: white;
`;
