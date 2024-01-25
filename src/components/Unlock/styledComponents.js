// Style your elements here
import styled from 'styled-components'

export const AppContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-image: linear-gradient(to bottom, #161617, #0b0c1e, #3c2940);
  min-height: 100vh;
`
export const LockContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`
export const LockImage = styled.img`
  width: 100px;
`

export const LockText = styled.p`
  font-size: 16px;
  color: white;
  font-weight: 600;
  font-family: 'Roboto';
  margin-top: 24px;
  margin-bottom: 90px;
  line-height: 1.2;
  @media screen and (min-width: 768px) {
    font-size: 24px;
    margin-bottom: 68px;
    line-height: 1.5;
  }
`

export const LockButton = styled.button`
  background-color: #06b6d4;
  font-weight: 500;
  color: white;
  border-radius: 10px;
  height: 50px;
  width: 120px;
  font-size: 20px;
  font-family: 'Roboto';
  border-color: none;
  border-width: 0px;
  margin-top: 90px;
  line-height: 1.33;
  outline: none;
  cursor: pointer;
  @media screen and (min-width: 768px) {
    margin-top: 68px;
  }
`
