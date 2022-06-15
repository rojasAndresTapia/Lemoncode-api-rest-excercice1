import React from 'react';
import { HashRouter, Routes, Route } from 'react-router-dom';
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
      <Routes>
        <Route
          path={switchRoutes.root}
          element={<CharactersCollection characters={charactersCollection} />}
        />
        <Route
          path={switchRoutes.editCharacter}
          element={<CharacterDetails characters={charactersCollection} />}
        />
      </Routes>
    </HashRouter>
  );
};
