import React, {Dimensions} from 'react-native'

const base_unit_height = 400
const base_unit_width = 360
const{height, width} =Dimensions.get('window')

   export const normalize=(size)=>{
       return (size / height) * height
    }