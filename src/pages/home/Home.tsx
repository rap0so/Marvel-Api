import useLocalStorage from '@rehooks/local-storage';
import React, {
  FC,
  useContext,
  useState,
  useMemo,
  useReducer,
  useCallback,
} from 'react';
import { Flex, Box } from 'reflexbox';
import { PacmanLoader } from 'react-spinners';

import Card from 'components/Card';
import Container from 'components/Container';
import Navbar from 'components/Navbar';
import { getCharacter } from 'providers/request/request';
import { ThemeContext } from 'styled-components';
import FixedWrapper from 'components/FixedWrapper';
import { useHistory } from 'react-router-dom';
import { TMarvelPublicResult } from 'types';

const Home: FC = () => {
  const history = useHistory();

  const themeContext = useContext(ThemeContext);

  const [savedCharacters, setSavedCharacters] = useLocalStorage<{
    [key: string]: any;
  }>('characters', {});

  const [characters, setCharacters] = useState<TMarvelPublicResult[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  const [valueToSearch, setValueToSearch] = useReducer(
    (_: string, newState: string) => {
      setIsLoading(true);
      return newState;
    },
    'spider',
  );

  // TODO: test if it is a string or number
  const redirectToSeries = useCallback(
    (id: number | string) => () => history.push(`/series/${id}`),
    [history],
  );

  const hasNoResult = !isLoading && !characters.length;

  useMemo(() => {
    (async () => {
      const isSaved = savedCharacters[valueToSearch];
      if (isSaved) {
        setCharacters(isSaved);
        return setIsLoading(false);
      }

      const { data: dataResponse } = await getCharacter({
        name: valueToSearch,
      });

      const { results } = dataResponse?.data ?? {};

      if (results) {
        setSavedCharacters({ ...savedCharacters, [valueToSearch]: results });
        setCharacters(results);
      }

      return setIsLoading(false);
    })();
  }, [savedCharacters, setSavedCharacters, valueToSearch]);

  const mappedResult = characters.map((character, idx) => (
    <Box flexDirection="column" key={idx} mb={2} width="25%">
      <Card {...character} onClick={redirectToSeries(character.id)} />
    </Box>
  ));

  if (isLoading) {
    return (
      <FixedWrapper
        alignItems="center"
        display="flex"
        height="100%"
        justifyContent="center"
        position="fixed"
        width="100%"
      >
        <PacmanLoader color={themeContext.colors.base} />
      </FixedWrapper>
    );
  }

  return (
    <Container flexDirection="column">
      <Navbar onSearch={setValueToSearch} />
      <Flex flexWrap="wrap" m={-2}>
        {hasNoResult ? 'No character found, try again' : mappedResult}
      </Flex>
    </Container>
  );
};

export default Home;
