import nock from 'nock';
import React from 'react';
import { renderHook } from '@testing-library/react-hooks/pure';

import useGetMovieById from '../../hooks/useGetMovieById';
import GetMovieByIdMock from '../../utils/mocks/GetMovieByIdMock';

describe('useGetMovieById tests', () => {
  test('Normal render', async () => {
    const query = 1726;
    const useEffect = jest.spyOn(React, 'useEffect');
    nock('https://api.themoviedb.org/3/movie')
      .get(`/${query}?api_key=${process.env.REACT_APP_API_KEY}`)
      .reply(200, GetMovieByIdMock, { 'Access-Control-Allow-Origin': '*' });

    const { result, waitForNextUpdate } = renderHook(() =>
      useGetMovieById(query)
    );

    await waitForNextUpdate();

    expect(useEffect.mock.calls.length).not.toBe(undefined);
    expect(useEffect.mock.calls.length).not.toBe(0);
    expect(result.current.data).not.toBe(null);
    expect(result.current.data.title).toBe(GetMovieByIdMock.title);
  });
});
