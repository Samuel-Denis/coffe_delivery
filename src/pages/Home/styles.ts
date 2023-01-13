import styled from 'styled-components'
import image from '../../assets/background-banner.svg'

interface IconColorProps {
  cor: string
}

export const HomeContainer = styled.main`
  flex: 1;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`

export const ContentContainer = styled.div`
  background: url(${image});

  max-height: 34rem;
  width: 90rem;

  display: flex;
  flex-direction: row;
  align-items: top;
  justify-content: center;
  gap: 3.5rem;

  margin-top: 2rem;
  padding-top: 5.875rem;
  margin-left: 8.875rem;

  h1 {
    font-family: 'Baloo 2', sans-serif;
    font-weight: 800;
    font-size: 3rem;
    line-height: 130%;

    color: ${(props) => props.theme['base-title']};
  }

  p {
    font-size: 1.25rem;

    color: ${(props) => props.theme['base-subtitle']};
  }

  img {
    width: 29.75rem;
    height: 22.5rem;
  }
`

export const InfoContainer = styled.div`
  h1 {
    font-family: 'Baloo 2', sans-serif;
    font-weight: 800;
    font-size: 3rem;
    line-height: 130%;

    color: ${(props) => props.theme['base-title']};
  }

  p {
    font-size: 1.25rem;

    color: ${(props) => props.theme['base-subtitle']};
  }
`

export const ItensContainer = styled.div<IconColorProps>`
  display: flex;
  flex-direction: row;
  gap: 0.75rem;

  div {
    width: 2rem;
    height: 2rem;

    display: flex;
    align-items: center;
    justify-content: center;

    border-radius: 50%;
    background: ${({ cor }) => cor};

    p {
      font-size: 16px;
      color: ${(props) => props.theme['base-label']};

      flex: none;
      order: 1;
      flex-grow: 1;
    }
  }
`

export const GridItensContainer = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: 1fr 1fr;
  row-gap: 1.25rem;

  margin: 4.125rem auto;
`
