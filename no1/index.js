import React from 'react';
import Entity from 'react-360';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    asset,
    Environment
} from 'react-360';

import {Provider} from 'react-redux';
import {createStore} from 'redux';
import reducer from './store/reducer';

const store = createStore(reducer);
import GazeButton from "react-360-gaze-button";
import AsyncStorage from "react-native";


Environment.setBackgroundImage('./static_assets/360_world.jpg');

const State = {
    id: 0,
    gazed: false,
    post: "...",
};

// react 360 component bind
/*export default*/
class menu extends React.Component {

    state = {
        id: '0',
        gazed: false,
    };

    /* async storeID (newID)
     {
         try {
             await AsyncStorage.setItem('id',newID);
         } catch(error){
             console.log("Error while storing the id.");
         }
     }*/

    /* componentDidMount = async () => {
         await AsyncStorage.setItem('id', this.state.id);
     };*/

    async setID() {
       AsyncStorage.setItem('id', this.state.id);

    }


    setScene_home = () => {
        this.setState({id: 0, gazed: true});
        (async () => {
            await this.setID();
        })();



        //  State.id = '0';

        Environment.clearBackground();
        Environment.setBackgroundImage('./static_assets/360_world.jpg');
    };
    setScene_atrium = () => {
        this.setState({id: '1'});

        //State.id = '1';

        Environment.clearBackground();
        Environment.setBackgroundImage('./static_assets/Atrium.jpg');
    };
    setScene_commDouble = () => {
        //this.setState({id: 2, gazed: false});
        State.id = '2';

        Environment.clearBackground();
        Environment.setBackgroundImage('./static_assets/comm_double.jpg');
    };
    setScene_suite = () => {
        //this.setState({id: 2, gazed: false});
        State.id = '3';

        Environment.clearBackground();
        Environment.setBackgroundImage('./static_assets/living_room.jpg');
    };

    render() {
        const {gazed} = this.state;
        return (
            <View style={styles.panel}>
                <View><Text>HI</Text></View>
                <GazeButton
                    duration={2000}
                    onClick={this.setScene_home}
                    render={(remainingTime, isGazed) => (
                        <View style={styles.greetingBox}>
                            <Text style={styles.greeting}>
                                {"Home"}
                            </Text>
                        </View>

                    )}
                />
                <GazeButton
                    duration={2000}
                    onClick={this.setScene_atrium}
                    render={(remainingTime, isGazed) => (
                        <View style={styles.greetingBox}>
                            <Text style={styles.greeting}>
                                {"Atrium"}
                            </Text>
                        </View>

                    )}
                />
                <GazeButton
                    duration={2000}
                    onClick={this.setScene_commDouble}
                    render={(remainingTime, isGazed) => (
                        <View style={styles.greetingBox}>
                            <Text style={styles.greeting}>
                                {"Community Style"}
                            </Text>
                        </View>

                    )}
                />
                <GazeButton
                    duration={2000}
                    onClick={this.setScene_suite}
                    render={(remainingTime, isGazed) => (
                        <View style={styles.greetingBox}>
                            <Text style={styles.greeting}>
                                {"Style Style"}
                            </Text>
                        </View>

                    )}
                />
            </View>


        );
    }
}

/*export default*/
class infoBoard extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            id: 'null',
            gazed: false,
            post: "!!"
        };
    }


    componentDidMount = () => {
        this.setState({
            id: await AsyncStorage.getItem('id'),
        });
        console.log(this.state.id);
        /* try{
             let newID = await AsyncStorage.getItem('id');
             alert(newID);
         }
         catch(error){
             alert(error);
         }*/

    };


    displayPost = () => {
        // this.componentDidMount.then(function(){

        switch (this.state.id) {
            case '1':
                return "Welcome to the Atrium.";
            case '2':
                return "This the Community Style Double room.";
            case '3':
                return "This is the Suite Style room.";
            default:
                return "Please pick a room to tour.";
        }
        //  })

    };


    setGazed = () => {
        this.setState({id: 1});
    };

    render() {
        const {post} = State.post;
        const {gazed} = State.gazed;
        return (
            <View style={styles.panel2}>
                <View><Text>bye</Text></View>

                <Text style={styles.infoBox}>
                    {this.state.id}
                </Text>


            </View>


        );
    }
}

export default class model extends React.Component {


    render() {
        return (
            <View>

            </View>


        );
    }
}
const styles = StyleSheet.create({
    panel: {
        // Fill the entire surface
        flex: 1,
        flexDirection: 'column',
        width: 300,
        height: 600,
        backgroundColor: 'rgba(255, 255, 255, 0.4)',
        justifyContent: 'space-around',
        alignItems: 'center',
    },
    panel2: {
        // Fill the entire surface
        flex: 1,
        flexDirection: 'column',
        width: 300,
        height: 600,
        backgroundColor: 'rgba(255, 255, 255, 0.4)',
        paddingTop: 50,
        alignItems: 'center',
    },
    greetingBox: {
        padding: 20,
        backgroundColor: '#000000',
        borderColor: '#639dda',
        borderWidth: 2,
    },
    greetingBox2: {
        padding: 40,
        backgroundColor: '#000000',
        borderColor: '#639dda',
        borderWidth: 2,
    },
    greeting: {
        fontSize: 30,
    },
    infoBox: {
        fontSize: 40,
    },
});


// asyncStorage !!!!!!!!!!!!!!
AppRegistry.registerComponent('menu', () => menu);
AppRegistry.registerComponent('infoBoard', () => infoBoard);
AppRegistry.registerComponent('model', () => model);