import styled from 'styled-components'

export const ButtonAddContainer = styled.div`
  display: flex;
  align-items: center;
  flex-direction: row;
  justify-content: center;

  padding: 0.6rem;

  width: 4.5rem;
  height: 2rem;
  background: ${(props) => props.theme['base-button']};
  border-radius: 10%;
  span {
    font-size: 1rem;
    margin: 0.25rem;
  }

  button {
    display: flex;
    align-items: center;
    justify-content: center;
    background: transparent;
    color: ${(props) => props.theme['pourple-200']};
    border: none;
    &:focus {
      border: ${(props) => props.theme['pourple-500']};
    }

    &:hover {
      cursor: pointer;
    }
  }
`
