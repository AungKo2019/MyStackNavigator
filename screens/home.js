import React,{useState} from "react";
import {StyleSheet, View, Text, FlatList, TouchableOpacity} from 'react-native';

export default function HOME({navigation}){
    const [reviews,setReviews]= useState([
        {title:'ဘကြီးတော် မင်း နန်းတက် သောအခါ',
         rating:'5',
         body: 'lorem ipsum',
         key:1,
        },
        {title:'ဤ သို့ တိုက်ခိုက် နေ ကြ စဉ် အတွင်း',
         rating:'4',
         body: 'lorem ipsum',
         key:2,
        },
        {title:'ငြိမ်းချမ်း မှု ကို လိုလား သဖြင့်',
         rating:'3',
         body: 'lorem ipsum',
         key:3,
        },  

    ]);

    // const [reviews2, setReviews2] = useState([
    //     {title: 'asdfasdf', 
    //         rating: '5', body: 'lorem ipsum', key: '1'}, 
    //     {title: 'qwerwer', 
    //         rating: '4', body: 'lorem ipsum', key: '2'}, 
    //     {title: 'erwerwer', 
    //         rating: '3', body: 'lorem ipsum', key: '3'}, 
    // ]);

    // const onpressHandlar = (xitems)=> {
    //     //navigation.push('Review');
    //     navigation.navigate('Review',xitems);
    // }

    // const renderSeparator = () => {
    //     return (
    //         <View style={{height:1,height:10,backgroundColor:"#FFF5E4",}}/>
    //     );
    // };

    return (
        <View style={styles.container}>
            <FlatList
                data={reviews}
                renderItem={({item})=>(
                     <View>
                        <TouchableOpacity onPress={()=>navigation.navigate('Review',item)}>
                            <Text style={styles.item}>
                                {item.title}
                            </Text>
                        </TouchableOpacity>
                     </View>       
                )}
            />
        </View>
    )

};

const styles = StyleSheet.create({
    container : {
        flex:1,
        backgroundColor:'#FFF5E4'
    },
    titletext: {
        // fontFamily:'Nunito-Black',
        // fontSize:18,
        // color:'#8BBCCC',
        // justifyContent: 'center',
        // textAlign:"center",
    },
    buttonStyle:{
        textAlign:"right",
    },
    item: {
        justifyContent:'center',
        textAlign:"justify",
        //padding:15,
        margin:15

    }
});