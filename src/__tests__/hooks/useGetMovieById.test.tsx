import nock from 'nock';
import React from 'react';
import { renderHook } from '@testing-library/react-hooks/pure';
//import axios from 'axios';
//axios.defaults.adapter = require('axios/lib/adapters/http');

import useGetMovieById from '../../hooks/useGetMovieById';
import GetMovieByIdMock from '../../utils/mocks/GetMovieByIdMock';
import { cleanup } from '@testing-library/react';
import { MockGetMovieByIdOk } from '../../utils/NockService';

describe('useGetMovieById tests', () => {
  afterAll(() => {
    cleanup();
    jest.restoreAllMocks();
  });
  test('Normal render', async () => {
    const query = 1726;
    const useEffect = jest.spyOn(React, 'useEffect');
    MockGetMovieByIdOk(query);

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
