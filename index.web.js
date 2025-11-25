import { AppRegistry } from 'react-native';
import App from './src/App';

// 注册应用
AppRegistry.registerComponent('CalendarNative', () => App);

// 启动应用
AppRegistry.runApplication('CalendarNative', {
  initialProps: {},
  rootTag: document.getElementById('root'),
});

