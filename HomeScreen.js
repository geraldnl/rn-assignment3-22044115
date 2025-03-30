import { ScrollView,FlatList,View, StyleSheet,Image,Text,TextInput, TouchableOpacity, Pressable } from "react-native";
import { SafeAreaView } from 'react-native-safe-area-context';
import person from './assets/person.png'
import filter from './assets/filter.png'
import Feather from '@expo/vector-icons/Feather'
import man from './assets/man.png';
import woman from './assets/woman.png'

const flatDataSets = [
  [
    { id: 1, title: "Work", subTitle: "8 tasks", image: man },
    { id: 2, title: "Study", subTitle: "5 tasks", image: woman }
  ],
  [
    { id: 3, title: "Exercise", subTitle: "8 tasks", image: man },
    { id: 4, title: "Cooking", subTitle: "5 tasks", image: woman }
  ],
  [
    { id: 5, title: "Cleaning", subTitle: "8 tasks", image: man },
    { id: 6, title: "Shopping", subTitle: "5 tasks", image: woman }
  ],
  [
    { id: 7, title: "Reading", subTitle: "8 tasks", image: man },
    { id: 8, title: "Meditation", subTitle: "5 tasks", image: woman }
  ],
];

const ongoingTasks = [
  { id: 1, name: "Mobile App Development" },
  { id: 2, name: "Web Development" },
  { id: 3, name: "Push Ups" },
  { id: 4, name: "Play Game" },
  { id: 5, name: "Creating a To-Do List App" },
  { id: 6, name: "Building a Personal Portfolio Website" },
  { id: 7, name: "Designing a Custom Theme for a Blog" },
  { id: 8, name: "Making a Weather App with Live Updates" },
  { id: 9, name: "Creating a Simple Online Quiz Game" },
  { id: 10, name: "Developing a Digital Flashcard App" },
  { id: 11, name: "Making a Recipe Finder App" },
  { id: 12, name: "Building a Virtual Pet App" },
  { id: 13, name: "Writing a Book" },
  { id: 14, name: "Creating a Workout Tracker" },
];

export default function HomeScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View>
          
          <View style={styles.header}>
            <View>
              <Text style={styles.mainText}>Hello, Devs</Text>
              <Text style={styles.subText}>14 tasks today</Text>
            </View>
            <View style={styles.profile}>
              <Image source={person} />
            </View>
          </View>

          
          <View style={styles.search}>
            <TextInput placeholder="Search" style={styles.input} />
            <TouchableOpacity style={styles.filter}>
              <Image source={filter} />
            </TouchableOpacity>
            <Feather name="search" size={24} color="black" style={styles.searchIcon} />
          </View>

          
          <Text style={styles.categories}>Categories</Text>
          <View style={styles.divider}>
            {flatDataSets.map((data, index) => (
              <FlatList
                key={index}
                data={data}
                renderItem={({ item }) => (
                  <Pressable style={styles.flatMain}>
                    <Text style={styles.title}>{item.title}</Text>
                    <Text style={styles.subtitle}>{item.subTitle}</Text>
                    <Image style={styles.image} source={item.image} />
                  </Pressable>
                )}
                keyExtractor={(item) => String(item.id)}
                horizontal
                showsHorizontalScrollIndicator={false}
              />
            ))}
          </View>

          
          <Text style={styles.ongoingTitle}>Ongoing Tasks</Text>
          <FlatList
            data={ongoingTasks}
            renderItem={({ item }) => (
              <View style={styles.ongoingTask}>
                <Text style={styles.ongoingText}>{item.name}</Text>
              </View>
            )}
            keyExtractor={(item) => String(item.id)}
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
       


const styles = StyleSheet.create({
    container:{
    flex: 1,
    backgroundColor: "#F7F0E8", 
    
    paddingLeft:20
},

    header:{
    marginRight:19,
    display:"flex",
    flexDirection:"row",
    justifyContent:'space-between',
    alightItems:'Center',
    marginBottom:30
},
    mainText   :{
        fontSize:32,
        fontWeight:"bold"

    } ,
    subText:{
        fontSize:12,
        fontWeight:'medium'
    },
    profile:{
        backgroundColor:'white',
        width:50,
        height:52,
        borderRadius:100,
        dislay:'flex',
        justifycontent:'center',
        alignItems:'centre'
    },
    input:{
        width:280,
        height:48,
        borderRadius:10,
        backgroundColor:'white',
        paddingLeft:45},
    filter:{
            width:50,
            height:48,
            backGroundColor:'#F0532f',
            display:'flex',
            alighnItems:'center',
            justifyContent:'center',
            borderRadius:20
            
    },
    search:{
        display:'flex',
        flexDirection:'row',
        marginRight:20,
        justifyContent:'space-between',
        alignItems:'center',
    },
    searchIcon:{
        position:'absolute',
        marginLeft:11,
        width:24,
        height:24,


    },
    categories:{
        fontSize:20,
        fontWeight:'Bold',
        marginTop:20
    
    },
    flatMain:{
        width:186,
        height:192,
        backgroundColor:'white',
        borderRadius:15,
        marginInlineEnd:24,
        marginTop:40
        
        

    },
    divider:{
        marginTop:12,
        
        


    },
    title:{
        fontsize:16,
        fontWeight:'bold',
        marginTop:16,
        marginLeft:14

    },
    subtitle:{
        fontsize:12,
        marginLeft:14,
    },
    Image:{
        alignLeft:21
    },
    swift:{ flex: 1,
         backgroundColor: "#F7F0E8",
         
        
    },
    two:{ paddingTop:12

    },
    three:{ paddingTop:12

    },
    four:{ paddingTop:12,
        

    },
    ongoingText: {
    
        color: 'black',
        fontSize: 16,
        fontWeight:700,
    },
    ongoingTitle: {
        width: "auto",
        textAlign: "left",
        height: 24,
        fontWeight:700,
        fontSize: 20,
        
        marginTop: 20,
      },
      ongoingTask: {
        flexDirection: 'row',
        fontWeight: 700,
        height: 128,
        alignItems: 'center',
        paddingVertical: 10,
        borderRadius: 20,
        padding: 12,
        backgroundColor:"white",
        marginTop:12,
        marginRight:19,
        borderColor:"#CBB8A4",
        borderWidth:1
      }



        


    







     
        
        


    
});
