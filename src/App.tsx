import React, { FC } from 'react';
import './App.css';
import WithFetch from './features/WithFetch';
import { getSampleData, initialSubState, SampleSubState } from './app/sampleSlice';

type Props = {
  data: SampleSubState;
  test: string;
}

const Example: FC<Props> = ({ data, test }: Props) => (
  <div>{test}: {data.data || data.error || 'Nefunguje to'}</div>
);

const WithFetchExample = WithFetch(
  ({ id }: { id: number }) => getSampleData(id),
  // @ts-ignore <- removing this should not rise react error when `WithFetch` is correctly typed
  ({ id }) => (state) => state.sample[id] || initialSubState,
)(Example);

function App() {
  return (
    <div className="App">
      <h1>Fetch HOC</h1>
      <WithFetchExample id={0} test={'Pokus 1'} />
      <WithFetchExample id={1} test={'Pokus 2'} />
      <WithFetchExample id={2} test={'Pokus 3'} />
      <WithFetchExample id={3} test={'Pokus 4'} />
    </div>
  );
}

export default App;
