import styled from 'styled-components';

export const Card = styled.div`
  margin-right: auto;
  margin-left: auto;
  margin-bottom: 30px;

  width: 300px;
  min-height: 300px;
  background-color: white;
  border-radius: 5px;
  box-shadow: rgba(136, 165, 191, 0.48) 6px 2px 16px 0px,
    rgba(255, 255, 255, 0.8) -6px -2px 16px 0px;
`;

export const CardHeader = styled.div`
  display: flex;
  flex-direction: column;
  align-content: center;
  padding: 30px;
  text-align: center;
`;

export const Avatar = styled.img`
  align-self: center;
  margin-bottom: 30px;
  width: 100px;
  height: 100px;
  border-radius: 50%;
  border: 1px solid #010101;
`;

export const P = styled.p`
  font-size: 16px;
  font-weight: 500;
  color: #7d8c9b;

  &.name {
    margin-bottom: 10px;
    font-size: 20px;
    font-weight: 700;
    color: #323e4f;
  }

  &.tag {
    margin-bottom: 10px;
  }
`;

export const List = styled.ul`
  display: flex;
  text-align: center;
`;

export const ListItem = styled.li`
  flex-basis: 100px;
  padding-top: 20px;
  padding-bottom: 20px;

  display: flex;
  flex-direction: column;

  font-size: 16px;
  color: #7d8c9b;
  background-color: #f3f6f9;

  &:first-child {
    border-bottom-left-radius: 5px;
    border-right: 1px solid #d0dae6;
  }

  &:last-child {
    border-bottom-right-radius: 5px;
    border-left: 1px solid #d0dae6;
  }
`;

export const Span = styled.span`
  &.quantity {
    font-weight: 700;
    color: #323e4f;
  }
`;
