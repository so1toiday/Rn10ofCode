import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent:'center',
    paddingTop:'20%'
  },
  buttonWrapper: {
    flexDirection: 'row',
    justifyContent: "center"
  },
  btnPlay: {
    marginRight: 10,
  },
  btnReload: {
    marginLeft: 10
  },
  textRadius: {
    margin: 4,
    borderWidth: 2,
    borderColor: "yellow",
    paddingHorizontal: 4,
    textAlign: "center",
    fontSize: 25,
    fontWeight: "bold",
    color: "white",
    backgroundColor: "black"
  }
  , timeWrapper: {
    flexDirection: 'row',
    marginBottom: 20
  },
  textHistory: {
    margin: 4,
    borderWidth: 2,
    borderColor: "yellow",
    paddingHorizontal: 4,
    textAlign: "center",
    fontSize: 16,
    fontWeight: "bold",
    color: "white",
    backgroundColor: "red"
  },
  historyWrapper:{
    marginTop: 3,
    flexDirection: 'row'
  },
  listHistory:{
    marginTop: 20
  }
});
export default styles;