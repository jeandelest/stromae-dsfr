import { Button } from '@codegouvfr/react-dsfr/Button'
import { Input } from '@codegouvfr/react-dsfr/Input'
import { useNavigate } from '@tanstack/react-router'
import { useEffect } from 'react'
import { FormProvider, useForm } from 'react-hook-form'
import { Container } from 'shared/components/Container'
import { Grid } from 'shared/components/Grid'
import { SelectNomenclatures } from './SelectNomenclatures'

export type FormInputs = {
  source: string
  metadata: string
  data: string
  nomenclature: { name: string; uri: string }[]
}

export function VisualizeForm() {
  const navigate = useNavigate()
  const methods = useForm<FormInputs>({
    defaultValues: {
      nomenclature: [{ name: '', uri: '' }],
    },
  })

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = methods

  const onSubmit = handleSubmit((values) => {
    const { data, metadata, nomenclature, source } = values
    navigate({
      search: {
        source,
        data,
        metadata,
        nomenclature: nomenclature.reduce(
          (acc, { name, uri }) => ({ ...acc, [name]: uri }),
          {}
        ),
      },
    })
  })

  useEffect(() => {
    // Reset the scroll on component unmount
    return () => {
      window.scrollTo(0, 0)
    }
  }, [])

  return (
    <Container>
      <Grid>
        <FormProvider {...methods}>
          <form onSubmit={onSubmit}>
            <h1>Prévisualisation d'enquête.</h1>
            <h2>Fichier source de l'enquête.</h2>
            <Input
              nativeInputProps={{
                ...register('source', {
                  required:
                    'Vous devez au moins fournir un URI de fichier source',
                }),
              }}
              hintText="une url valide"
              label="Uri Source."
              state={errors.source ? 'error' : 'default'}
              stateRelatedMessage={errors.source?.message}
            />
            <h2>Fichier de métadonnées de l'enquête.</h2>
            <Input
              nativeInputProps={{ ...register('metadata') }}
              label="Uri metadata"
              hintText="une url valide"
              state="default"
              stateRelatedMessage="Text de validation / d'explication de l'erreur"
            />
            <h2>Fichier de données de l'enquête.</h2>
            <Input
              nativeInputProps={{ ...register('data') }}
              hintText="une url valide"
              label="Uri Data."
              state="default"
              stateRelatedMessage="Text de validation / d'explication de l'erreur"
            />
            <SelectNomenclatures />
            <Button type="submit">Visualiser le questionnaire</Button>
          </form>
        </FormProvider>
      </Grid>
    </Container>
  )
}
