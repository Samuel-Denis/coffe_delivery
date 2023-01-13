import styled from 'styled-components'

export const CardContainer = styled.div`
  flex: 1;
  width: 16rem;
  height: 20rem;

  background: ${(props) => props.theme['base-card']};
  border-top-right-radius: 20%;
  border-bottom-left-radius: 20%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;

  img {
    width: 7.5rem;
    height: 7.5rem;
    margin: -1.3rem;
    margin-bottom: 0.75rem;
  }

  h3 {
    margin-top: 1rem;
    font-family: 'Baloo 2';

    font-weight: 700;
    font-size: 1.25rem;
    line-height: 130%;

    display: flex;
    align-items: flex-end;
    text-align: center;

    color: ${(props) => props.theme['base-title']};
  }

  span {
    font-family: 'Roboto';
    font-weight: 400;
    font-size: 0.875;
    line-height: 130%;

    text-align: center;

    color: ${(props) => props.theme['base-subtitle']};
  }
`

export const TypeContainer = styled.div`
  width: 7rem;
  height: 1.5rem;
  background: ${(props) => props.theme['yellow-100']};

  display: flex;
  align-items: center;
  justify-content: center;

  border-radius: 3.125rem;
  p {
    margin: 0.25rem;
    font-size: 0.625;
    color: ${(props) => props.theme['yellow-500']};
  }
`
export const SectionTypeContainer = styled.div`
  max-width: 15rem;
  display: flex;
  direction: row;
  align-items: center;

  ul {
    display: flex;
    gap: 0.25rem;
    li {
      list-style: none;
      font-family: 'Roboto';
      font-weight: 700;
      font-size: 0.75rem;
      letter-spacing: 0.8px;
      line-height: 1.3;
      color: ${(props) => props.theme['yellow-500']};
      background-color: ${(props) => props.theme['yellow-100']};
      padding: 0.25rem 0.5rem;
      border-radius: 100px;
    }
  }
`
export const PriceAddCartContainer = styled.div`
  width: 13rem;
  height: 2.375rem;

  display: flex;
  flex-direction: row;
  align-items: stretch;
  justify-content: space-between;

  margin: 1.5rem;

  p {
    font-size: 0.875rem;
    span {
      font-family: 'Baloo 2';
      font-size: 1.5rem;
      font-weight: 700;
    }
  }

  div {
    margin-left: 1rem;
    display: flex;
    align-items: center;
    justify-content: center;
  }
`

export const CartContainer = styled.div`
  width: 2.375rem;
  height: 2.375;

  border-radius: 10%;
  font-size: 0.875rem;

  background: ${(props) => props.theme['pourple-500']};

  color: ${(props) => props.theme['white-100']};

  &:hover {
    background: ${(props) => props.theme['pourple-200']};
    &:hover {
      cursor: pointer;
    }
  }
`
