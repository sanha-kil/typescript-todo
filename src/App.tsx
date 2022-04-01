import moment from 'moment';
import React from 'react';
import styled from 'styled-components';

function App(): JSX.Element {
  const today = moment();
  const day: string = DAY[today.day() - 1];
  const adjustedDate = today.format('YYYY년 MM월 DD일');

  return (
    <TodoMain>
      <TodoContainer>
        <DateInfoContainer>
          <TodayInfo>{adjustedDate}</TodayInfo>
          <DayInfo>{day}요일</DayInfo>
        </DateInfoContainer>
      </TodoContainer>
    </TodoMain>
  );
}

export default App;

const DAY = ['월', '화', '수', '목', '금', '토', '일'];

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
  padding: 50px 50px 30px;
  border-radius: 20px;
  background-color: white;
`;

const DateInfoContainer = styled.div``;

const TodayInfo = styled.h2`
  padding-bottom: 20px;
  font-size: 30px;
  font-weight: bold;
`;

const DayInfo = styled.h3`
  color: #92a9bd;
  font-size: 20px;
`;
