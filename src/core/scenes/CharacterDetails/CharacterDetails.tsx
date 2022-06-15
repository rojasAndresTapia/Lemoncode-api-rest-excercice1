import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Button, TextField } from '@material-ui/core';

import { ICharacter } from 'api/api-model';

import { CharacterCard } from '../../pods/CharacterCard';
import { saveSentences } from '../../../api/api';

export interface ICharactersDetails {
  characters: ICharacter[];
}

export const CharacterDetails = ({ characters }: ICharactersDetails) => {
  const [inputValue, setIputValue] = useState('');

  const params = useParams<{ id: string }>();

  const characterSelected = characters.find((c) => c.id == params.id);

  const navigate = useNavigate();

  const handleSentenceClick = () => {
    characterSelected.bestSentences.push(inputValue);
    saveSentences(characterSelected);
    setIputValue('');
  };

  const handleInputChange = (ev) => {
    setIputValue(ev.target.value);
  };
  const handleRedirectClick = () => {
    navigate('/');
  };

  return (
    <CharacterCard character={characterSelected}>
      {(characterSelected.isList = false)}
      <TextField
        id="sentence"
        value={inputValue}
        label="Write a new sentence"
        variant="outlined"
        onChange={handleInputChange}
      />
      <Button onClick={handleSentenceClick} variant="contained">
        Add best sentence
      </Button>
      <Button onClick={handleRedirectClick} color="primary" variant="contained">
        Go back
      </Button>
    </CharacterCard>
  );
};
