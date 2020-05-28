import React, { FC, useContext, useState, useMemo } from 'react';
import { useParams, Redirect } from 'react-router-dom';
import { PacmanLoader } from 'react-spinners';
import { Box, Flex } from 'reflexbox';
import { ThemeContext } from 'styled-components';

import Card from 'components/Card';
import Container from 'components/Container';
import FixedWrapper from 'components/FixedWrapper';
import { getSeriesFromCharacter } from 'providers/request/request';
import { TMarvelPublicResult } from 'types';

// import useLocalStorage from 'react-use-localstorage';

const Series: FC = () => {
  const { id } = useParams();
  const themeContext = useContext(ThemeContext);
  const [series, setSeries] = useState<TMarvelPublicResult[]>([]);

  const hasNoResult = !series.length;

  useMemo(() => {
    (async () => {
      if (id) {
        const { data: dataResponse } = await getSeriesFromCharacter({
          id,
        });
        return setSeries(dataResponse?.data?.results);
      }
    })();
  }, [id]);

  // TODO: store searched data
  // const [savedCharacters, setSavedCharacters] = useLocalStorage('characters', '')

  if (!id) {
    return <Redirect to="/404" />;
  }

  if (hasNoResult) {
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
      <Flex flexWrap="wrap" m={-2}>
        {series.map((serie, idx) => (
          <Box flexDirection="column" key={idx} mb={2} width="25%">
            <Card key={idx} isSerie={true} {...serie} />
          </Box>
        ))}
      </Flex>
    </Container>
  );
};

export default Series;
