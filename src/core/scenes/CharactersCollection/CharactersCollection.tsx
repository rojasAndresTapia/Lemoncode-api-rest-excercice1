import * as React from 'react';
import Button from '@material-ui/core/Button';
import { generatePath, Link } from 'react-router-dom';

import { ICharacter } from '../../../api/api-model';

import { CharacterCard } from '../../pods/CharacterCard';
import * as classes from './CharactersCollectionStyles';

export interface ICharactersCollection {
  characters: ICharacter[];
}

export const CharactersCollection = ({
  characters,
}: ICharactersCollection): JSX.Element => {
  return (
    <>
      <div className={classes.root}>
        <h1>Character collection</h1>
        <article className={classes.cardCollection}>
          {characters.map((character, index) => (
            <CharacterCard character={character} key={index}>
              {(character.isList = true)}
            </CharacterCard>
          ))}
        </article>
      </div>
    </>
  );
};
