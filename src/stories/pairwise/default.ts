import type { LunaticData, LunaticSource } from '@inseefr/lunatic'

export const source: LunaticSource = {
  maxPage: '3',
  cleaning: {},
  components: [
    {
      id: 'seq',
      componentType: 'Subsequence',
      label: {
        value: '"Description des individus de votre logement"',
        type: 'VTL',
      },
      conditionFilter: { value: 'true', type: 'VTL' },
      page: '1',
    },
    {
      id: 'loop-prenom',
      componentType: 'RosterForLoop',
      label: { value: '"Ajouter un individu"', type: 'VTL|MD' },
      conditionFilter: { value: 'true', type: 'VTL' },
      lines: {
        min: { value: '1', type: 'VTL' },
        max: { value: '10', type: 'VTL' },
      },
      page: '1',
      components: [
        {
          componentType: 'Input',
          label: { value: '"Prénom"', type: 'VTL' },
          conditionFilter: { value: 'true', type: 'VTL' },
          maxLength: 30,
          id: 'prenom',
          response: { name: 'PRENOM' },
        },
      ],
    },
    {
      id: 'pairwise-links',
      componentType: 'PairwiseLinks',
      conditionFilter: { value: 'true', type: 'VTL' },
      xAxisIterations: { value: 'count(PRENOM)', type: 'VTL' },
      yAxisIterations: { value: 'count(PRENOM)', type: 'VTL' },
      page: '2',
      symLinks: {
        LINKS: {
          '1': '1',
          '2': '3',
          '3': '2',
          '4': '4',
          '5': '6',
          '6': '5',
          '7': '8',
          '8': '7',
          '9': '10',
          '10': '9',
          '11': '13',
          '12': '12',
          '13': '11',
          '14': null,
          '15': '15',
          '16': '16',
          '17': '17',
          '18': '18',
        },
      },
      components: [
        {
          componentType: 'Dropdown',
          id: 'dropdown-1',
          conditionFilter: { value: 'xAxis <> yAxis', type: 'VTL' },
          label: {
            value: '"Qui est " || yAxis || " pour " || xAxis || " ?"',
            type: 'VTL',
          },
          response: { name: 'LINKS' },
          options: [
            {
              value: '1',
              label: { value: '"Son conjoint, sa conjointe"', type: 'VTL|MD' },
            },
            {
              value: '2',
              label: { value: '"Sa mère, son père"', type: 'VTL|MD' },
            },
            {
              value: '3',
              label: { value: '"Sa fille, son fils"', type: 'VTL|MD' },
            },
            {
              value: '4',
              label: {
                value: '"Sa soeur, son frère (y compris demi et quasi)"',
                type: 'VTL|MD',
              },
            },
            {
              value: '5',
              label: {
                value:
                  '"Sa belle-mère, son beau-père (conjoint.e d\'un des parents)"',
                type: 'VTL|MD',
              },
            },
            {
              value: '6',
              label: {
                value: '"L\'enfant du conjoint (belle-fille, beau-fils)"',
                type: 'VTL|MD',
              },
            },
            {
              value: '7',
              label: {
                value: '"Sa belle-mère, son beau-père (parent du conjoint)"',
                type: 'VTL|MD',
              },
            },
            {
              value: '8',
              label: {
                value:
                  '"Sa belle-fille, son beau-fils (conjoint.e d\'un enfant)"',
                type: 'VTL|MD',
              },
            },
            {
              value: '9',
              label: {
                value: '"Sa grand-mère, son grand-père"',
                type: 'VTL|MD',
              },
            },
            {
              value: '10',
              label: { value: '"Sa petite-fille, petit-fils"', type: 'VTL|MD' },
            },
            {
              value: '11',
              label: { value: '"Sa tante, son oncle"', type: 'VTL|MD' },
            },
            {
              value: '12',
              label: { value: '"Sa cousine, son cousin"', type: 'VTL|MD' },
            },
            {
              value: '13',
              label: { value: '"Sa nièce, son neveu"', type: 'VTL|MD' },
            },
            {
              value: '14',
              label: {
                value: '"Un enfant placé en famille d\'accueil"',
                type: 'VTL|MD',
              },
            },
            {
              value: '15',
              label: {
                value: '"Sa belle-soeur, son beau-frère"',
                type: 'VTL|MD',
              },
            },
            {
              value: '16',
              label: { value: '"Un autre lien familial"', type: 'VTL|MD' },
            },
            {
              value: '17',
              label: {
                value: '"Un colocataire, sous-locataire"',
                type: 'VTL|MD',
              },
            },
            {
              value: '18',
              label: {
                value:
                  '"Autre lien (employé de maison, salarié logé, jeune au pair …)"',
                type: 'VTL|MD',
              },
            },
          ],
        },
        {
          componentType: 'Input',
          label: {
            value:
              '"Pouvez-vous décrire le lien entre " || xAxis || " et " || yAxis || " ?"',
            type: 'VTL|MD',
          },
          conditionFilter: {
            value:
              'not(nvl(cast(LINKS, string), "") = "") and cast(LINKS, string) = "18"',
            type: 'VTL',
          },
          id: 'other',
          response: { name: 'OTHER' },
          maxLength: 249,
        },
      ],
    },
    {
      id: 'seq',
      componentType: 'Subsequence',
      label: { value: '"Bye !"', type: 'VTL' },
      conditionFilter: { value: 'true', type: 'VTL' },
      page: '3',
    },
  ],
  variables: [
    {
      variableType: 'COLLECTED',
      name: 'PRENOM',
      values: { COLLECTED: [null] },
    },
    {
      variableType: 'COLLECTED',
      name: 'LINKS',
      values: { COLLECTED: [[null]] },
    },
    {
      variableType: 'COLLECTED',
      name: 'OTHER',
      values: { COLLECTED: [[null]] },
    },
    {
      variableType: 'CALCULATED',
      name: 'xAxis',
      expression: { value: 'PRENOM', type: 'VTL' },
      bindingDependencies: ['PRENOM'],
      shapeFrom: 'PRENOM',
    },
    {
      variableType: 'CALCULATED',
      name: 'yAxis',
      expression: { value: 'PRENOM', type: 'VTL' },
      bindingDependencies: ['PRENOM'],
      shapeFrom: 'PRENOM',
    },
  ],
  resizing: {
    PRENOM: {
      sizeForLinksVariables: ['count(PRENOM)', 'count(PRENOM)'],
      linksVariables: ['LINKS'],
    },
  },
  pagination: 'question',
  label: { type: 'VTL|MD', value: 'Test-Dylan' },
  lunaticModelVersion: '2.5.0',
  modele: 'TESTDYLAN',
  enoCoreVersion: '2.7.1',
  generatingDate: '06-03-2024 12:46:44',
  id: 'lsvuvtbg',
}

export const data: LunaticData = {
  COLLECTED: {
    PRENOM: { COLLECTED: ['Dad', 'Mom', 'Son'] },
    AGE: { COLLECTED: [30, 29, 5] },
    LINKS: { COLLECTED: [[null]] },
    OTHER: { COLLECTED: [[null]] },
  },
}
