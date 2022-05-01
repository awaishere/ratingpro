// import AsyncStorage from '@react-native-community/async-storage';
// import { persistStore, persistReducer } from 'redux-persist';
// import immutableTransform from 'redux-persist-transform-immutable';

// const persistConfig = {
//   transforms: [immutableTransform()],
//   key: 'root',
//   storage: AsyncStorage,
//   blacklist: []
// };

// import { createStore, applyMiddleware } from 'redux'
// import rootReducer from '@store/reducers'

// const persistedReducer = persistReducer(persistConfig, rootReducer)

// import thunk from "redux-thunk"
// import Errorhandler from '@utils/middlewares/ErrorHandler'
// import { composeWithDevTools } from 'redux-devtools-extension'
// const middlewares = [thunk]

// const store = createStore(persistedReducer, composeWithDevTools(applyMiddleware(...middlewares)))
// const persistor = persistStore(store);
// export { store, persistor }
