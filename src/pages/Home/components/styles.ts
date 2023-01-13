import styled from 'styled-components'

export const SectionContainer = styled.main`
  flex: 1;

  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
`
export const ListCoffeContainer = styled.div`
  width: 1120px;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  gap: 2rem;
  row-gap: 2rem;

  padding-right: 10rem;
`
export const TitleContainer = styled.div`
  h1 {
    margin-bottom: 3.375rem;
    font-family: 'Baloo 2', sans-serif;
    font-weight: 800;
    font-size: 2rem;
  }
`
