import{StyleSheet} from "react-native"

const styles = StyleSheet.create({
  contextImc:{
    flex:1,
    marginTop:20,
    paddingTop:60,
    borderRadius:50,
    alignItems:"center",
    width:"100%",
    justifyContent:"center",
  },
  
  resultImc:{
   fontSize:48,
   color:"#FF0043",
   fontWeight:"bold",
 },  
 numberImc:{
    fontSize:48,

   color:"#FF0043",
   fontWeight:"bold",
 },
 information:{
    fontSize:18,
    color:"#FF0043",
    fontWeight:"bold",
    marginTop:-50,
 },
 boxShareButton:{
 width:"100%",
 alignItems:"center",
 marginBottom:10,
 },
 shared:{
  backgroundColor:"#1877f2",
  borderRadius:50,
  paddingBottom:5,
  paddingTop:5,
  marginTop:15,
  shadowColor: '#000',
  shadowOffset: { width: 0, height: 2 },
  shadowOpacity: 0.3,
  shadowRadius: 4,
 },
 sharedText:{
  color:"#ffff",
  fontWeight:"bold",
  paddingHorizontal:30,

 },
});
export default styles
