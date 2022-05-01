import React from 'react';
import Main from '@components/Main'
// import { Provider } from 'react-redux'
// import { store, persistor } from '@store/index'
// import { PersistGate } from 'redux-persist/integration/react';
// import { MenuProvider } from 'react-native-popup-menu';
import { LogBox } from 'react-native';

export default function App() {
  LogBox.ignoreAllLogs();

  return (
    // <Provider store={store}>
    //   <PersistGate loading={null} persistor={persistor}>
    //     <MenuProvider>
    //     </MenuProvider>
    //   </PersistGate>
    // </Provider>
    <Main />
  )
}
