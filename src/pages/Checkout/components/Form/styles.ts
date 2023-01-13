import styled from 'styled-components'

export const FormContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  gap: 0.5rem;
  font-size: 1.125rem;
  font-weight: bold;
  flex-wrap: wrap;
`

const BaseInput = styled.input`
  background: ${(props) => props.theme['base-input']};
  height: 2.655rem;
  border: 2px solid ${(props) => props.theme['base-hover']};
  font-size: 0.75rem;
  padding: 0 0.5rem;
  color: ${(props) => props.theme['base-subtitle']};

  &::placeholder {
    color: ${(props) => props.theme['base-hover']};
  }

  &:hover {
    background: transparent;
  }
`

export const TaskInput = styled(BaseInput)`
  width: 35rem;
  flex: 1;
  margin: 0.25rem;
  padding: 0.75rem;
  border-radius: 0.25rem;
`

export const RuaInput = styled(BaseInput)`
  width: 35rem;
  height: 2.625rem;

  padding: 0.75rem;
  border-radius: 0.25rem;
`

export const CepInput = styled(BaseInput)`
  width: 12.5rem;
  height: 2.625rem;
  flex: 1;
  margin: 0.25rem;
  padding: 0.75rem;
  border-radius: 0.25rem;
`

export const NumberComplementInput = styled.div`
  display: flex;
  align-items: row;
  gap: 0.75rem;
  margin-left: 0.25rem;
  input {
    background: ${(props) => props.theme['base-input']};
    height: 2.625rem;
    border: 2px solid ${(props) => props.theme['base-hover']};
    font-size: 0.75rem;
    padding: 0 0.5rem;
    border: 2px solid ${(props) => props.theme['base-hover']};

    color: ${(props) => props.theme['base-subtitle']};

    &::placeholder {
      color: ${(props) => props.theme['base-hover']};
    }

    &:hover {
      background: transparent;
    }
  }

  input:first-child {
    width: 12.5rem;
  }
  input:last-child {
    width: 21.75rem;
  }
`

export const BairroCidadeUfInput = styled.div`
  display: flex;
  align-items: row;
  justify-content: start;
  gap: 0.75rem;
  margin-left: 0.25rem;
  margin-bottom: 2.5rem;
  input {
    background: ${(props) => props.theme['base-input']};
    height: 2.625rem;
    border: 2px solid ${(props) => props.theme['base-hover']};
    font-size: 0.75rem;
    padding: 0 0.5rem;
    border: 2px solid ${(props) => props.theme['base-hover']};

    color: ${(props) => props.theme['base-subtitle']};

    &::placeholder {
      color: ${(props) => props.theme['base-hover']};
    }

    &:hover {
      background: transparent;
    }
  }

  input:nth-child(1) {
    width: 12.5rem;
  }

  input:nth-child(2) {
    width: 17.25rem;
  }
  input:last-child {
    width: 3.75rem;
  }
`
