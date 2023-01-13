import styled from 'styled-components'

export const CartContainer = styled.div`
  width: 28rem;
  background: ${(props) => props.theme['base-card']};

  padding: 2.5rem;
  display: flex;
  align-items: stretch;
  flex-direction: column;
  gap: 1.5rem;
  border-radius: 0.375rem 2.75rem;
`

export const CoffeCheckoutContainer = styled.div`
  display: flex;
  align-items: flex-start;
  flex-direction: row;
  justify-content: space-between;

  padding-bottom: 1.5rem;

  border-bottom: 2px solid ${(props) => props.theme['base-button']};

  img {
    width: 4rem;
    height: 4rem;
  }

  h3 {
    font-weight: 700;
    font-size: 1rem;
    color: ${(props) => props.theme['base-text']};
  }
`

export const ButtonRemove = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  background: ${(props) => props.theme['base-button']};
  color: ${(props) => props.theme['pourple-200']};
  border: none;
  width: 5.6875rem;
  height: 2rem;

  &:hover {
    color: ${(props) => props.theme['base-delete']};
  }
`

export const NameAndRemoveContainer = styled.div`
  div {
    display: flex;
    align-items: center;
    flex-direction: row;
    justify-content: center;

    div:first-child {
      margin-right: 0.5rem;
    }

    h3 {
      font-weight: 700;
      font-size: 1rem;
      color: ${(props) => props.theme['base-subtitle']};
    }
  }
`

export const TotalContainer = styled.div`
  width: 23rem;
  height: 5.75rem;

  display: flex;
  flex-direction: column;
  gap: 0.75rem;

  div {
    display: flex;
    align-items: center;
    justify-content: space-between;

    p {
      font-size: 0.875rem;
      color: ${(props) => props.theme['base-subtitle']};
    }

    h3 {
      font-size: 1.25rem;
      font-weight: 700;
      color: ${(props) => props.theme['base-text']};
    }
  }
`

export const ButtonPedido = styled.button`
  width: 23rem;
  height: 2.875rem;
  background: ${(props) => props.theme['yellow-500']};

  border: none;
  border-radius: 0.375rem;

  font-size: 0.875rem;
  font-weight: 700;
  color: ${(props) => props.theme['white-100']};

  &:hover {
    background: ${(props) => props.theme['yellow-200']};

    cursor: pointer;
  }
`
