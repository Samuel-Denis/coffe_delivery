import styled from 'styled-components'

export const SuccesContainer = styled.main`
  display: flex;
  align-items: flex-start;
  flex-direction: column;
  justify-content: center;
  gap: 0.25rem;

  margin-top: 5rem;

  section {
    display: flex;
    align-items: center;
    flex-direction: row;
    justify-content: center;
    gap: 10rem;

    img {
      width: 20rem;
      margin: 0 auto;
      margin-top: -3rem;
    }
  }

  h1 {
    color: ${(props) => props.theme['yellow-500']};
  }

  span {
    margin-bottom: 2.5rem;
  }
`

export const InformeDeliveryContainer = styled.div`
  width: 32.875rem;
  height: 18.875rem;

  display: flex;
  align-items: center;
  justify-content: center;

  background: linear-gradient(
    to right,
    ${(props) => props.theme['yellow-200']},
    ${(props) => props.theme['pourple-200']}
  );

  border-radius: 0.75rem;

  border-bottom-left-radius: 2rem;
  border-top-right-radius: 2rem;
`

export const Container = styled.div`
  width: 32.7rem;
  height: 18.7rem;

  display: flex;
  align-items: flex-start;
  flex-direction: column;
  justify-content: center;
  gap: 2rem;

  background: ${(props) => props.theme['background-color']};

  border-radius: 0.75rem;

  border-bottom-left-radius: 2rem;
  border-top-right-radius: 2rem;

  padding: 2.5rem;
`

export const InfoEndereco = styled.div`
  display: flex;
  align-items: flex-start;
  flex-direction: row;
  justify-content: center;
  gap: 0.75rem;
  div {
    width: 2rem;
    height: 2rem;
    background: ${(props) => props.theme['pourple-200']};
    border-radius: 62.5rem;

    display: flex;
    align-items: center;
    justify-content: center;

    svg {
      color: ${(props) => props.theme['white-100']};
      width: 1rem;
      height: 1rem;
    }
  }
`
export const InfoTimer = styled.div`
  display: flex;
  align-items: flex-start;
  flex-direction: row;
  justify-content: center;
  gap: 0.75rem;
  div {
    width: 2rem;
    height: 2rem;
    background: ${(props) => props.theme['yellow-200']};
    border-radius: 62.5rem;

    display: flex;
    align-items: center;
    justify-content: center;

    svg {
      color: ${(props) => props.theme['white-100']};
      width: 1rem;
      height: 1rem;
    }
  }
`
export const InfoPagamento = styled.div`
  display: flex;
  align-items: flex-start;
  flex-direction: row;
  justify-content: center;
  gap: 0.75rem;
  div {
    width: 2rem;
    height: 2rem;
    background: ${(props) => props.theme['yellow-500']};
    border-radius: 62.5rem;

    display: flex;
    align-items: center;
    justify-content: center;

    svg {
      color: ${(props) => props.theme['white-100']};
      width: 1rem;
      height: 1rem;
    }
  }
`
