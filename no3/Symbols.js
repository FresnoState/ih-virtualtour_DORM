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

export class Closed_main extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            id:'',
            gazed: false,
            eye: <Image style={{width: 120, height: 120}} source={asset('menuEye_black.png')}/>,
            eyePressed: <Image style={{width: 120, height: 120}} source={asset('menuEye_white.png')}/>,
        };
    }

    async getIDS (){
        this.setState({
            id: await AsyncStorage.getItem('id'),
        });
    };


    call = () =>{
        (async () => {
            await this.getIDS();
        })();

    };

    openHotspot = () => {
        MyModule.remove_closed_menu();
        MyModule.add_menu();
        switch(this.state.id)
        {
            case '1': // atrium
                MyModule.add_atrium_hs_1_symb();
                MyModule.add_atrium_hs_2_symb();
                break;
            case '2': // community style
                MyModule.add_comm_hs_1_symb();
                break;
            case '3': // suites
                MyModule.add_suite_hs_1_symb();
                MyModule.add_suite_hs_2_symb();
                break;
        }
    };


    render() {
        // load what scene in
        this.call();
        const {gazed} = State.gazed;
        return (
            <View style={{width: 300,
                height: 200,
                padding: 10,
                backgroundColor: 'rgba(196, 30, 58, 0.54)',
                justifyContent: 'space-around',
                //  alignItems: 'center',
                borderWidth: 2,
                borderColor: '#e3e9f2',}}>
                <Text style={styles.infoBox}>
                    {"Open Menu & Hotspots"}
                </Text>
                <View style={styles.closedHotspot}>

                    <GazeButton
                        duration={2000}
                        onClick={this.openHotspot}
                        render={(remainingTime, isGazed) => (
                            <View>
                                {gazed
                                    ? this.state.eye
                                    : isGazed
                                        ? this.state.eyePressed
                                        : this.state.eye }
                            </View>

                        )}
                    />

                </View>
            </View>


        );
    }
}

export class Atrium_hs_1_symb extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            gazed: false,
            eye: <Image style={{width: 50, height: 50}} source={asset('eye_black.png')}/>,
            eyePressed: <Image style={{width: 50, height: 50}} source={asset('eye_white.png')}/>
        };
    }

    openHotspot = () => {
        MyModule.remove_atrium_hs_1_symb();
        MyModule.add_atrium_hs_1();
    };


    render() {
        const {gazed} = State.gazed;
        return (
            <View style={{width: 300,
                height: 180,
                paddingBottom: 24,
                backgroundColor: 'rgba(0, 44, 118, 0.45)',
                justifyContent: 'space-around',
                //  alignItems: 'center',
                borderWidth: 2,
                borderColor: '#e3e9f2',}}>
                <Text style={styles.infoBox}>
                    {"Do you like food and working out?"}
                </Text>
                <View style={styles.closedHotspot}>

                    <GazeButton
                        duration={2000}
                        onClick={this.openHotspot}
                        render={(remainingTime, isGazed) => (
                            <View>
                                {gazed
                                    ? this.state.eye
                                    : isGazed
                                        ? this.state.eyePressed
                                        : this.state.eye }
                            </View>
                        )}
                    />
                </View>
            </View>
        );
    }
}

export class Atrium_hs_2_symb extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            gazed: false,
            eye: <Image style={{width: 50, height: 50}} source={asset('eye_black.png')}/>,
            eyePressed: <Image style={{width: 50, height: 50}} source={asset('eye_white.png')}/>
        };
    }

    openHotspot = () => {
        MyModule.remove_atrium_hs_2_symb();
        MyModule.add_atrium_hs_2();
    };


    render() {
        const {gazed} = State.gazed;
        return (
            <View style={{width: 324,
                height: 192,
                paddingBottom: 16,
                backgroundColor: 'rgba(0, 44, 118, 0.45)',
                justifyContent: 'space-around',
                //  alignItems: 'center',
                borderWidth: 2,
                borderColor: '#e3e9f2',}}>
                <Text style={styles.infoBox}>
                    {"Interested where to pick up packages?"}
                </Text>
                <View style={styles.closedHotspot}>

                    <GazeButton
                        duration={2000}
                        onClick={this.openHotspot}
                        render={(remainingTime, isGazed) => (
                            <View >
                                {gazed
                                    ? this.state.eye
                                    : isGazed
                                        ? this.state.eyePressed
                                        : this.state.eye }
                            </View>
                        )}
                    />
                </View>
            </View>
        );
    }
}

export class Comm_hs_1_symb extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            gazed: false,
            eye: <Image style={{width: 50, height: 50}} source={asset('eye_black.png')}/>,
            eyePressed: <Image style={{width: 50, height: 50}} source={asset('eye_white.png')}/>
        };
    }

    openHotspot = () => {
        MyModule.remove_comm_hs_1_symb();
        MyModule.add_comm_hs_1();
    };


    render() {
        const {gazed} = State.gazed;
        return (
            <View style={{width: 300,
                height: 228,
                paddingBottom: 20,
                backgroundColor: 'rgba(0, 44, 118, 0.45)',
                justifyContent: 'space-around',
                alignItems: 'center',
                borderWidth: 2,
                borderColor: '#e3e9f2',}}>

                <Text style={styles.infoBox}>
                    {"Want to know where the bathrooms are?"}
                </Text>
                <View style={styles.closedHotspot}>

                    <GazeButton
                        duration={2000}
                        onClick={this.openHotspot}
                        render={(remainingTime, isGazed) => (
                            <View >
                                {gazed
                                    ? this.state.eye
                                    : isGazed
                                        ? this.state.eyePressed
                                        : this.state.eye }
                            </View>
                        )}
                    />
                </View>
            </View>
        );
    }
}

export class Suite_hs_1_symb extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            gazed: false,
            eye: <Image style={{width: 50, height: 50}} source={asset('eye_black.png')}/>,
            eyePressed: <Image style={{width: 50, height: 50}} source={asset('eye_white.png')}/>
        };
    }

    openHotspot = () => {
        MyModule.remove_suite_hs_1_symb();
        MyModule.add_suite_hs_1();
    };


    render() {
        const {gazed} = State.gazed;
        return (
            <View style={{width: 330,
                height: 228,
                paddingBottom: 16,
                backgroundColor: 'rgba(0, 44, 118, 0.45)',
                justifyContent: 'space-around',
                //  alignItems: 'center',
                borderWidth: 2,
                borderColor: '#e3e9f2',}}>
                <Text style={styles.infoBox}>
                    {"Want to control the temperature in the room?"}
                </Text>
                <View style={styles.closedHotspot}>

                    <GazeButton
                        duration={2000}
                        onClick={this.openHotspot}
                        render={(remainingTime, isGazed) => (
                            <View >
                                {gazed
                                    ? this.state.eye
                                    : isGazed
                                        ? this.state.eyePressed
                                        : this.state.eye }
                            </View>
                        )}
                    />
                </View>
            </View>
        );
    }
}

export class Suite_hs_2_symb extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            gazed: false,
            eye: <Image style={{width: 50, height: 50}} source={asset('eye_black.png')}/>,
            eyePressed: <Image style={{width: 50, height: 50}} source={asset('eye_white.png')}/>
        };
    }

    openHotspot = () => {
        MyModule.remove_suite_hs_2_symb();
        MyModule.add_suite_hs_2();
    };


    render() {
        const {gazed} = State.gazed;
        return (
            <View style={{width: 340,
                height: 220,
                paddingBottom: 16,
                paddingLeft: 6,
                paddingRight: 6,
                backgroundColor: 'rgba(0, 44, 118, 0.45)',
                justifyContent: 'space-around',
                //  alignItems: 'center',
                borderWidth: 2,
                borderColor: '#e3e9f2',}}>
                <Text style={styles.infoBox}>
                    {"Want to know what the room comes with?"}
                </Text>
                <View style={styles.closedHotspot}>

                    <GazeButton
                        duration={2000}
                        onClick={this.openHotspot}
                        render={(remainingTime, isGazed) => (
                            <View>
                                {gazed
                                    ? this.state.eye
                                    : isGazed
                                        ? this.state.eyePressed
                                        : this.state.eye }
                            </View>
                        )}
                    />
                </View>
            </View>
        );
    }
}






const styles = StyleSheet.create({
    closedHotspot: {
      //  width: 300,
       // height: 300,
        justifyContent: 'center',
        alignItems: 'center',
    },
    infoBox: {
        padding: 8,
        fontSize: 36,
        fontWeight: '400',
        textAlign: 'center'
    },
    eye: {
        width: 300,
        height: 210,
        backgroundColor: 'rgba(0, 44, 118, 0.45)',
        justifyContent: 'space-around',
      //  alignItems: 'center',
        borderWidth: 2,
        borderColor: '#e3e9f2',
    },
});