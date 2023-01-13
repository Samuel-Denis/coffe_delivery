import styled from 'styled-components'

export const HeaderContainer = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;

  nav {
    display: flex;
    gap: 0.75rem;

    a {
      text-decoration: none;
    }
  }
`

export const LocationContainer = styled.div`
  width: 10rem;
  height: 2.375rem;
  display: flex;
  align-items: center;
  justify-content: space-between;

  margin: 0.5rem auto;
  padding: 0.375rem;
  border-radius: 10%;

  span {
    font-size: 0.875rem;
    font-weight: 700;
  }

  background: ${(props) => props.theme['pourple-100']};

  color: ${(props) => props.theme['pourple-200']};

  &:hover {
    background: ${(props) => props.theme['yellow-100']};

    color: ${(props) => props.theme['yellow-500']};
  }
`

export const CartContainer = styled.div`
  width: 2rem;
  height: 2.375rem;
  display: flex;
  align-items: center;
  justify-content: space-between;

  margin: 0.5rem auto;
  padding: 0.375rem;
  border-radius: 10%;
  font-size: 0.875rem;

  a {
    border: none !important;
    outline: none !important;
  }

  background: ${(props) => props.theme['yellow-100']};

  color: ${(props) => props.theme['yellow-500']};

  &:hover {
    background: ${(props) => props.theme['pourple-200']};

    color: ${(props) => props.theme['white-100']};
  }
`

export const CountAndCart = styled.div`
  display: flex;
  align-items: flex-start;

  p {
    margin-top: -0.05rem;
    margin-left: -0.7rem;
    width: 1.25rem;
    height: 1.25rem;

    font-size: 0.75rem;
    color: ${(props) => props.theme['white-100']};
    outline: none !important;
    border: none !important;

    display: flex;
    align-items: center;
    justify-content: center;

    border-radius: 62.5rem;

    background: ${(props) => props.theme['yellow-500']};
  }
`
