import { fr } from '@codegouvfr/react-dsfr'
import Button from '@codegouvfr/react-dsfr/Button'
import Input from '@codegouvfr/react-dsfr/Input'
import { useFieldArray, useFormContext } from 'react-hook-form'
import type { FormInputs } from './VisualizeForm'

export function SelectNomenclatures() {
  const { register, control } = useFormContext<FormInputs>()
  const { fields, append, remove } = useFieldArray({
    control,
    name: 'nomenclature',
  })

  const addNomenclature = () => {
    append({ name: '', uri: '' })
  }

  return (
    <>
      <h2>Référentiels de suggestion.</h2>
      <p>
        Ajouter de nouveaux référentiels du suggestion. Pour être utiliser, ils
        devront aussi figurer dans la section suggesters du fichier source.
      </p>
      <Button priority="secondary" onClick={addNomenclature}>
        Ajouter un nouveau référentiel
      </Button>
      <ul style={{ listStyle: 'none' }}>
        {fields.map((item, index) => {
          return (
            <li key={item.id} style={{ display: 'flex', flexDirection: 'row' }}>
              <Input
                {...register(`nomenclature.${index}.name`)}
                label="Nom"
                className={fr.cx('fr-mr-4v')}
                nativeInputProps={{ ...register(`nomenclature.${index}.name`) }}
              />
              <Input
                label="Uri"
                nativeInputProps={{
                  ...register(`nomenclature.${index}.uri`),
                }}
              />
              <Button
                iconId={'fr-icon-close-line'}
                onClick={() => remove(index)}
                title="Supprimer"
                priority="tertiary no outline"
              />
            </li>
          )
        })}
      </ul>
    </>
  )
}
