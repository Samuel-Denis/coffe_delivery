import styled from 'styled-components'

export const CheckoutContainer = styled.main`
  display: flex;
  align-items: flex-start;
  flex-direction: row;
  justify-content: start;

  gap: 2rem;
`

export const CompleteSeuPedido = styled.div`
  margin-top: 2.5rem;

  display: flex;

  flex-direction: column;
  justify-content: start;
  gap: 0.9375rem;

  h3 {
    font-family: 'Baloo 2';

    font-weight: 700;
    font-size: 1.125rem;

    color: ${(props) => props.theme['base-subtitle']};
  }
`

export const CafesSelecionados = styled.div`
  margin-top: 2.5rem;

  display: flex;

  flex-direction: column;
  justify-content: start;
  gap: 0.9375rem;

  h3 {
    font-family: 'Baloo 2';

    font-weight: 700;
    font-size: 1.125rem;

    color: ${(props) => props.theme['base-subtitle']};
  }
`

export const AddressContainer = styled.div`
  background: ${(props) => props.theme['base-card']};

  border-radius: 0.375rem;

  width: 40rem;
  height: 25.5rem;
  display: flex;
  align-items: flex-start;
  flex-direction: column;
  justify-content: start;

  gap: 0.5rem;
  font-size: 1.125rem;
  font-weight: bold;
  flex-wrap: wrap;

  section {
    display: flex;
    flex-direction: column;
    justify-content: start;
    gap: 1rem;
    margin: 2rem 2.5rem 0 2.5rem;
  }
`

export const HeaderStyles = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: start;
  gap: 0.5rem;

  padding-top: 2.5rem;
  padding-right: 2.5rem;

  color: ${(props) => props.theme['yellow-200']};

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

  &:disabled {
    opacity: 0.7;
    cursor: not-allowed;
  }
`
export const AnimationCycle = styled.div`
  display: flex;
  align-items: center;
  justify-items: center;

  margin: 0 auto;

  margin-top: 15rem;

  animation: is-rotating 1s infinite;
  border: 6px solid #e5e5e5;
  border-radius: 50%;
  border-top-color: ${(props) => props.theme['pourple-200']};
  height: 50px;
  width: 50px;

  @keyframes is-rotating {
    to {
      transform: rotate(1turn);
    }
  }
`
