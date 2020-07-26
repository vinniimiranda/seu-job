
import Reactotron from 'reactotron-react-js'
import { reactotronRedux } from 'reactotron-redux'
import reactoTronSaga from 'reactotron-redux-saga'


declare global {
  interface Console {
    tron: any;
  }
}

interface PluginConfig {
  except?: string[];
}

if (process.env.NODE_ENV === 'development') {
  const tron = Reactotron.configure()
    .use(reactotronRedux())
    .use(reactoTronSaga({ except: [''] }))
    .connect();

  tron.clear!();

  console.tron = tron;
}