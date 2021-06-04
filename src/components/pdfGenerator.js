import { Page, Text, View ,Document, StyleSheet } from '@react-pdf/renderer';
import {setWorld, setCont}from "./../graph/funcoes"

const styles = StyleSheet.create({
    page: {
      flexDirection: 'column',
      backgroundColor: '#ffffff',
      // flexWrap: 'wrap',
    },
    section: {
      margin: 10,
      padding: 10,
      flexGrow: 1,
      flexDirection:'column'
    },
    sectiontwo:{
      flexGrow: 1,
      flexDirection:'row',
      fontSize: 10,
      flexWrap: 'wrap',
      maxHeight: '90%',
    },
    title:{
      fontSize:20,
      color: '#474f67',
      marginBottom: '2%',
      width: '40%',
      flex:5

    },
    linhas:{
      width: '100%',
      height: '2px',
      backgroundColor: '#474f67'
    },
    list:{
      flex: 1,
      flexDirection:"column",
      fontSize: '25px'
    },
    textList:{
      margin: '5px',
      flex:1,
      flexDirection: 'column'
    }
  });
  
  //Create pdf
  const MyDocument = props => {

    const listWorld = []
    //console.log(props.linkImage)
    setWorld().forEach((w,i)=>{ 
      //let list=[[]]
      // console.log(props.state)
      listWorld.push( 
      <View style={{width: '25%', textAlign: "justify", flexDirection: "row" }} key={i} >
        <Text style={{width:'70%', fontSize:'8'}} >{w}: </Text>
        <Text > ({setCont()[i]})</Text>
      </View> )
    })
    let data = new Date();
    let hh = data.getHours();
    let mn = data.getMinutes();
    let aa = data.getFullYear();
    let mm = data.getMonth();
    let dd = data.getDate();

    return (
      <Document>
        <Page size="A4" style={styles.page}>
          <View style={styles.section}> 
            <View style={{flexDirection: 'row' }} >
                <Text style={styles.title} >Relatório de Metodologia</Text>
                <Text style={{ fontSize: '10px', alignSelf:'center', flex:1 }} > {dd + '/' + (mm+1) + '/' + aa + ' ' + hh + ':' + mn} </Text>
            </View>
            <Text style={styles.linhas}>----------------------------------------------------------</Text>
            <Text style={{fontSize:'10px', width:'100%', marginBottom: '5px', marginTop: '5px' }} >Palavras &nbsp;&nbsp;&nbsp; | &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Repetições &nbsp;&nbsp;&nbsp; Palavras &nbsp;&nbsp;&nbsp; | &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Repetições &nbsp;&nbsp;&nbsp; Palavras &nbsp;&nbsp;&nbsp; | &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Repetições &nbsp;&nbsp;&nbsp; Palavras &nbsp;&nbsp;&nbsp; | &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Repetições</Text>
            <View style={styles.sectiontwo}>
              {listWorld}
            </View>
          </View>
        </Page>
      </Document>
    )    
  }
 
  
  export default MyDocument