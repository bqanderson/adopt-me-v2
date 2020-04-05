import React from 'react'
import { render, cleanup } from '@testing-library/react'
import pet, { ANIMALS, _breeds, _dogs } from '@frontendmasters/pet'
import SeachParams from '../SearchParams'

afterEach(cleanup)

test('SearchParams', async () => {
  const { getByTestId } = render(<SeachParams />)

  const animalDropdown = getByTestId('use-dropdown-animal')
  expect(animalDropdown.children.length).toEqual(ANIMALS.length + 1)
})
