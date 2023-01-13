import styled from 'styled-components'

export const PagamentoContainer = styled.div`
  width: 40rem;
  height: 12.9375rem;
  margin-top: 0.75rem;
  background: ${(props) => props.theme['base-card']};

  border-radius: 0.375rem;
`

export const PagHeader = styled.div`
  display: flex;
  align-items: row;
  justify-content: start;
  gap: 0.5rem;

  padding-left: 2.5rem;
  padding-top: 2.5rem;
  padding-right: 2.5rem;

  color: ${(props) => props.theme['pourple-200']};

  h3 {
    font-size: 1rem;
    font-weight: 800;
    color: ${(props) => props.theme['base-text']};
  }

  span {
    font-size: 0.875rem;
    color: ${(props) => props.theme['base-label']};
  }
`

export const ButtonPag = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 2rem;

  div {
    display: flex;
    align-items: center;
    justify-items: center;
    gap: 0.75rem;

    button {
      width: 11.2rem;
      height: 3.2rem;

      display: flex;
      align-items: center;
      justify-content: center;
      gap: 0.75rem;

      background: ${(props) => props.theme['base-button']};
      border: none;
      border-radius: 0.375rem;

      svg {
        color: ${(props) => props.theme['pourple-200']};
      }
      &:hover {
        background-color: ${(props) => props.theme['base-hover']};
      }

      &[data-state='on'] {
        border: 0.1rem solid ${(props) => props.theme['pourple-200']};
      }

      span {
        font-size: 0.875rem;
        color: ${(props) => props.theme['base-text']};
      }
    }
  }
`
