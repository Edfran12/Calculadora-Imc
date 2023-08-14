import{StyleSheet} from "react-native"

const styles = StyleSheet.create({
  formContext:{
    flex:1,
    backgroundColor:"#ffffff",
    alignItems:"center",
    borderTopLeftRadius:30,
    borderTopRightRadius:30,
    paddingTop:30,
    
 },  
 form:{
    width:"100%",
 },
 formLabel:{
    color:"#000000",
    fontSize:18,
    paddingLeft:20,

 },
 input:{
    width:"90%",
    borderRadius:50,
    backgroundColor:"white",
    height:40,
    margin:12,
    paddingLeft:10,
 },
 buttonCalculator:{
   borderRadius:40,
   shadowColor: '#000',
   shadowOffset: { width: 0, height: 2 },
   shadowOpacity: 0.3,
   shadowRadius: 4,
   borderColor:"#black",
   alignItems:"center",
   justifyContent:"center",
   width:"90%",
   backgroundColor:"#FF0043",
   paddingTop:14,
   paddingBottom:14,
   marginLeft:25,
   marginTop:30,
   
 },
 textButtonCalculator:{
    fontSize:23,
    color:"#ffff",
    fontWeight:"bold",
    textAlign:"center",
 },
 errorMessage:{
   fontSize:12,
   color:"red",
   fontWeight:"bold",
   paddingLeft:20,
 },
 exibitionResultImc:{
   width:"100%",
   height:"50%",

 },
 listImcs:{
   marginTop:20,

 },
 resultImcItem:{
   fontSize:24,
   color:"red",
   height:50,
   width:"100%",
   paddingRight:20,
 },
 textResultItemList:{
   fontSize:16,
   color:"red",
 }
});
export default styles
