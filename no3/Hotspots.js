import React from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,Image,
    asset,NativeModules,
    Environment,AsyncStorage,VrHeadModel
} from 'react-360';

import Animated from 'react-native';
import Entity from 'Entity';
import GazeButton from "react-360-gaze-button";
import SimpleRaycaster from "simple-raycaster";
const {MyModule} = NativeModules;
const State = {
    id: 0,
    gazed: false,
    post: "...",
};
export class Atrium_hs_1 extends React.Component {

    closeHotspot = ()=>{
        MyModule.remove_atrium_hs_1();
        MyModule.add_atrium_hs_1_symb();
    };
    render() {
        const {gazed} = State.gazed;
        return (
            <View style={{width: 300,
                height: 360,
                backgroundColor: 'rgba(0, 44, 118, 0.45)',
                justifyContent: 'space-around',
                alignItems: 'center',
                borderWidth: 2,
                borderColor: '#e3e9f2',}}>

                <Text style={styles.infoBox}>
                    {"Down this hallway are an ice machine, vending machines, and the 24 hr fitness center."}
                </Text>
                        <View style={styles.panel3}>
                            <GazeButton
                                duration={2000}
                                onClick={this.closeHotspot}
                                render={(remainingTime, isGazed) => (
                                    <View style={styles.greetingBox}>
                                        <Text style={styles.menuBox}>
                                            {gazed
                                                ? "Close"
                                                : isGazed
                                                    ? "Closing"
                                                    : "Close" }
                                        </Text>
                                    </View>

                                )}
                            />
                        </View>
            </View>
        );
    }
}

export class Atrium_hs_2 extends React.Component {

    closeHotspot = ()=>{
        MyModule.remove_atrium_hs_2();
        MyModule.add_atrium_hs_2_symb();
    };
    render() {
        const {gazed} = State.gazed;
        return (
            <View style={{width: 320,
                height: 320,
                backgroundColor: 'rgba(0, 44, 118, 0.45)',
                justifyContent: 'space-around',
                alignItems: 'center',
                borderWidth: 2,
                borderColor: '#e3e9f2',}}>

                <Text style={styles.infoBox}>
                    {"Mailboxes on the wall to the left are for people who live in Suite Style buildings."}
                </Text>
                        <View style={styles.panel3}>
                            <GazeButton
                                duration={2000}
                                onClick={this.closeHotspot}
                                render={(remainingTime, isGazed) => (
                                    <View style={styles.greetingBox}>
                                        <Text style={styles.menuBox}>
                                            {gazed
                                                ? "Close"
                                                : isGazed
                                                    ? "Closing"
                                                    : "Close" }
                                        </Text>
                                    </View>

                                )}
                            />
                        </View>
            </View>
        );
    }
}

export class Comm_hs_1 extends React.Component {

    closeHotspot = ()=>{
        MyModule.remove_comm_hs_1();
        MyModule.add_comm_hs_1_symb();
    };
    render() {
        const {gazed} = State.gazed;
        return (
            <View style={styles.hotspot}>

                <Text style={styles.infoBox}>
                    {"Bathroom are down the hall and cleaned daily by our cleaning staff."}
                </Text>
                        <View style={styles.panel3}>
                            <GazeButton
                                duration={2000}
                                onClick={this.closeHotspot}
                                render={(remainingTime, isGazed) => (
                                    <View style={styles.greetingBox}>
                                        <Text style={styles.menuBox}>
                                            {gazed
                                                ? "Close"
                                                : isGazed
                                                    ? "Closing"
                                                    : "Close" }
                                        </Text>
                                    </View>
                                )}
                            />
                        </View>
            </View>
        );
    }
}

export class Suite_hs_1 extends React.Component {

    closeHotspot = ()=>{
        MyModule.remove_suite_hs_1();
        MyModule.add_suite_hs_1_symb();
    };

    render() {
        const {gazed} = State.gazed;
        return (
            <View style={{width: 300,
                height: 292,
                backgroundColor: 'rgba(0, 44, 118, 0.45)',
                justifyContent: 'space-around',
                alignItems: 'center',
                borderWidth: 2,
                borderColor: '#e3e9f2',}}>

                <Text style={styles.infoBox}>
                    {"Air conditioned & heated with thermostat control to the right."}
                </Text>
                        <View style={styles.panel3}>
                            <GazeButton
                                duration={2000}
                                onClick={this.closeHotspot}
                                render={(remainingTime, isGazed) => (
                                    <View style={styles.greetingBox}>
                                        <Text style={styles.menuBox}>
                                            {gazed
                                                ? "Close"
                                                : isGazed
                                                    ? "Closing"
                                                    : "Close" }
                                        </Text>
                                    </View>
                                )}
                            />
                        </View>
            </View>
        );
    }
}

export class Suite_hs_2 extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            gazed: false,
        };
    }

    closeHotspot = ()=>{
        MyModule.remove_suite_hs_2();
        MyModule.add_suite_hs_2_symb();
    };


    render() {
        const {gazed} = State.gazed;
        return (
            <View style={{width: 300,
                height: 320,
                paddingBottom:4,
                backgroundColor: 'rgba(0, 44, 118, 0.45)',
                justifyContent: 'space-around',
                alignItems: 'center',
                borderWidth: 2,
                borderColor: '#e3e9f2',}}>

                <Text style={styles.infoBox}>
                    {"Suite living room comes with a love seat, chair, coffee table, bookcase and micro fridge. "}
                </Text>

                        <View style={styles.panel3}>
                            <GazeButton
                                duration={2000}
                                onClick={this.closeHotspot}
                                render={(remainingTime, isGazed) => (
                                    <View style={styles.greetingBox}>
                                        <Text style={styles.menuBox}>
                                            {gazed
                                                ? "Close"
                                                : isGazed
                                                    ? "Closing"
                                                    : "Close" }
                                        </Text>
                                    </View>
                                )}
                            />
                        </View>
            </View>


        );
    }
}





const styles = StyleSheet.create({
    greetingBox: {
        padding: 6,
        marginRight: 4,
        marginLeft: 4,
        backgroundColor: 'rgba(0, 44, 118,1.0)',

    },
    panel3:{
        paddingTop: 4,
        paddingBottom: 4,
        backgroundColor: 'rgba(199, 211, 229, 1.0)',
    },
    menuBox: {
        fontSize: 30,
        alignSelf: 'center',
        textAlign: 'center',
    },
    infoBox: {
        padding: 8,
        fontSize: 36,
        fontWeight: '400',
        textAlign: 'center'
    },
    hotspot: {
        width: 300,
        height: 300,
        backgroundColor: 'rgba(0, 44, 118, 0.45)',
        justifyContent: 'space-around',
        alignItems: 'center',
        borderWidth: 2,
        borderColor: '#e3e9f2',
    },
});
