import React from 'react';
import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
} from '@material-ui/core';
import { ICharacter } from '../../../api/api-model';
import * as classes from './CharacterCardStyles';
import { generatePath, Link } from 'react-router-dom';

interface ICharacterDetails {
  character: ICharacter;
  children?: React.ReactNode;
}

export const CharacterCard = ({ character, children }: ICharacterDetails) => {
  const getBestSentences = (arr) => {
    return arr.map((ar) => ar + ', ');
  };

  return (
    <section className={classes.characterSection}>
      <Card className={classes.characterCard}>
        <CardMedia component="img" image={character.image} />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {character.name}
          </Typography>
          <Typography variant="subtitle1" gutterBottom component="div">
            {character.species}
          </Typography>
          <Typography variant="subtitle1" gutterBottom component="div">
            {character.gender}
          </Typography>
          <Typography variant="body2" color="textSecondary">
            Status: {character.status}
          </Typography>
          <Typography variant="body2" color="textSecondary">
            Best sentence: {getBestSentences(character.bestSentences)}
          </Typography>
          {character.isList ? (
            <CardActions>
              <Link
                to={generatePath('/characters/:id', {
                  id: character.id,
                })}
              >
                <Button size="small" color="primary" id={character.id}>
                  Ver más
                </Button>
              </Link>
            </CardActions>
          ) : (
            ''
          )}
        </CardContent>
      </Card>
      {children}
    </section>
  );
};
