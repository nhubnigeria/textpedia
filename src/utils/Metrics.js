import { Dimensions} from 'react-native'
import  {normalize} from './NormalizeSize'
const { height, width } = Dimensions.get('window')

  export const Metrics = {

  keyboard:normalize(300),

}