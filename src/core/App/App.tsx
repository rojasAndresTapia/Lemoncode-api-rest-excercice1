import React from 'react';
import { HashRouter, Switch, Route } from 'react-router-dom';
import { CharactersCollection } from 'core/scenes';

import { api } from '../../api/api';
import { CharacterDetails } from 'core/scenes/CharacterDetails/CharacterDetails';
import { switchRoutes } from 'core/router';

export const App: React.FC = () => {
  const [charactersCollection, setCharactersCollection] = React.useState([]);

  React.useEffect(() => {
    api().then((res) => {
      setCharactersCollection(res.data);
    });
  }, []);

  return (
    <HashRouter>
      <Switch>
        <Route
          exact={true}
          path={[switchRoutes.root, switchRoutes.characterCollection]}
          component={() => (
            <CharactersCollection characters={charactersCollection} />
          )}
        />
        {/* <Route
          exact={true}
          path={switchRoutes.createCharacter}
          component={CharacterDetails}
        /> */}
        <Route
          exact={true}
          path={switchRoutes.editCharacter}
          component={() => (
            <CharacterDetails characters={charactersCollection} />
          )}
        />
      </Switch>
    </HashRouter>
  );
};
