import styled from 'styled-components'
import { ReactComponent as Icon } from '../../assets/images/Quero2Pay_logo.svg'

export const ContentHeader = styled.div`
  width: 100%;
  height: 100px;
  position: fixed;
  top: 0;
  left: 0;
  bottom:0vh;
  z-index: 999px;
  display: flex;
  flex-direction: row;
  align-items: center;
  
  background-color: #0054FF;
  box-shadow: 0px 0px 6px 0px rgba(0, 0, 0, 0.5);
  font-weight: bold;

 `

export const Brand = styled(Icon)`
  width: 150px;
  height: 50px;
`

export const Span = styled.span`
  color: #fff;
  font-size: 20px;
  margin-top: 5px;
  text-transform: uppercase;
`