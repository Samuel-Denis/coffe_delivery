import {
  FormContainer,
  TaskInput,
  BairroCidadeUfInput,
  CepInput,
  NumberComplementInput,
} from './styles'
import { useFormContext } from 'react-hook-form'

export function NewAddressForm() {
  const { register } = useFormContext()

  return (
    <FormContainer>
      <CepInput id="cep" placeholder="CEP" {...register('cep')} />
      <TaskInput id="rua" placeholder="RUA" {...register('rua')} />
      <NumberComplementInput>
        <input id="numero" placeholder="NUMERO" {...register('numero')} />
        <input
          id="complemento"
          placeholder="COMPLEMENTO (opicional)"
          {...register('complemento')}
        />
      </NumberComplementInput>
      <BairroCidadeUfInput>
        <input id="bairro" placeholder="BAIRRO" {...register('bairro')} />
        <input id="cidade" placeholder="CIDADE" {...register('cidade')} />
        <input id="uf" placeholder="UF" {...register('uf')} max={2} />
      </BairroCidadeUfInput>
    </FormContainer>
  )
}
