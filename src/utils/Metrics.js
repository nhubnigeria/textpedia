import { Dimensions} from 'react-native'
import  {normalize} from './NormalizeSize'
const { height, width } = Dimensions.get('window')

  export const Metrics = {
  marginHorizontal:normalize(10),
  marginVertical: normalize(10),
  buttonHeight: normalize(50),
  layoutHeight: normalize(55),
  headerFontSize:normalize(20),

  keyboard:normalize(300),
  
  formMarginTop:normalize(250),
  formHeight:normalize(450),
  imageMargin:normalize(350),
  headerText:normalize(26),
  image:normalize(700),
  imageSize:normalize(85),

  //card designs
  cardTitle: normalize(40),
  cardHeader:normalize(2.5),
  cardMarginBottom:normalize(80),
  cardMarginTop:normalize(12.5),
  cardTitlePadding:normalize(1),
  splashContainerPadding:normalize(20),
  //layoutHeight: normalize(8),
  headerLabelMargin:normalize(55),


}