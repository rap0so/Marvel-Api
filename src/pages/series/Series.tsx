import useLocalStorage from '@rehooks/local-storage';
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

import { TIdParam } from './types';

const Series: FC = () => {
  const { id }: TIdParam = useParams();

  const themeContext = useContext(ThemeContext);

  const [series, setSeries] = useState<TMarvelPublicResult[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  const [savedSeries, setSavedSeries] = useLocalStorage<{
    [key: string]: any;
  }>('series', {});

  useMemo(() => {
    (async () => {
      if (!id) return;

      const isSaved = savedSeries[id];
      if (isSaved) {
        setIsLoading(false);
        return setSeries(isSaved);
      }

      const { data: dataResponse } = await getSeriesFromCharacter({
        id,
      });

      const { results } = dataResponse?.data ?? {};

      if (results) {
        setSavedSeries({ ...savedSeries, [id]: results });
        setIsLoading(false);
        return setSeries(dataResponse?.data?.results);
      }
    })();
  }, [id, savedSeries, setSavedSeries]);

  const hasNoResult = !isLoading && !series.length;

  if (!id || hasNoResult) {
    return <Redirect to="/404" />;
  }

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
