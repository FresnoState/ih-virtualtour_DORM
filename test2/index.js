import React from 'react';
import Entity from 'react-360';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    asset,
    Environment,
} from 'react-360';

import {Provider} from 'react-redux';
import {createStore} from 'redux';
import reducer from './store/reducer';

const store = createStore(reducer);
import GazeButton from "react-360-gaze-button";

Environment.setBackgroundImage('./static_assets/360_world.jpg');
const State = {
    id: 0,
    gazed: false,
    post: "...",
};

// react 360 component bind
/*export default*/
class test2 extends React.Component {
    state = {
        id: 0,
        gazed: false,
    };

    setScene_home = () => {
        //this.setState({id: 1, gazed: true});
        State.id = 0;

        Environment.clearBackground();
        Environment.setBackgroundImage('./static_assets/360_world.jpg');
    };

    setScene_atrium = () => {
       // this.setState({id: 2, gazed: false});
        State.id = 1;
        Environment.clearBackground();
        Environment.setBackgroundImage('./static_assets/Atrium.jpg');
    };
    setScene_commDouble = () => {
        //this.setState({id: 2, gazed: false});
        State.id = 2;

        Environment.clearBackground();
        Environment.setBackgroundImage('./static_assets/comm_double.jpg');
    };
    setScene_suite = () => {
        //this.setState({id: 2, gazed: false});
        State.id = 3;

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
class test3 extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            id: 0,
            gazed: false,
            post: "!!"
        };
    }

    displayPost = () => {
        switch (State.id) {
            case 1:
                return "Welcome to the Atrium.";
            case 2:
                return "This the Community Style Double room.";
            case 3:
                return "This is the Suite Style room."
            default:
                return "Please pick a room to tour.";
        }
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
                <GazeButton
                    duration={3000}
                    onClick={this.setGazed}
                    render={(remainingTime, isGazed) => (

                        <Text style={styles.infoBox}>
                            {this.displayPost()}
                        </Text>


                    )}
                />
            </View>


        );
    }
}

export default class test4 extends React.Component {



    render() {
        return (
            <View>
                <!--Entity
                    source={{
                        obj: asset('person.obj')
                    }}
                    lit={true}
                    style={{
                        transform: [
                            {translate: [120, -120, -100]},
                        ],
                    }}
                /-->
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

//AppRegistry.setWrapperComponentProvider(Provider);
//Provider.hasOwnProperty(store);
//Provider.setProperty('store');
AppRegistry.registerComponent('test2', () => test2);
AppRegistry.registerComponent('test3', () => test3);
AppRegistry.registerComponent('test4', () => test4);
