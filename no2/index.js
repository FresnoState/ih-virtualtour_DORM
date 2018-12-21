import React from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    asset,Animated,NativeModules,
    Environment,AsyncStorage,VrHeadModel
} from 'react-360';
import Entity from 'Entity';
import GazeButton from "react-360-gaze-button";
import SimpleRaycaster from "simple-raycaster";
const {MyModule} = NativeModules;

Environment.setBackgroundImage('./static_assets/360_world.jpg');



const State = {
    id: 0,
    gazed: false,
    post: "...",
};


class menu extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            id: '0',
            gazed: false,

            title_1: 'Community Style',
            title_2: 'Suite Style',
            title_3: 'Atrium',

            btn_1: this.setScene_commDouble,
            btn_2: this.setScene_suite,
            btn_3: this.setScene_atrium,

            preview_1: this.preview_commDouble(),
            preview_2: this.preview_suite(),
            preview_3: this.preview_atrium(),

            reset_1: this.reset_commDouble(),
            reset_2: this.reset_suite(),
            reset_3: this.reset_atrium(),

        };
        this.call_setID_home();
    }



    async setID(key,val) {
        AsyncStorage.setItem(key, val);
    }


    call_setID_home = () =>
    {
        (async () => {
            await this.setID('id','0');
        })();
        (async () => {
            await this.setID('preview','0');
        })();

    };

    setScene_lobby = () => {
        this.setState({
            id: '0',

            title_1: 'Community Style',
            title_2: 'Suite Style',
            title_3: 'Atrium',

            btn_1: this.setScene_commDouble,
            btn_2: this.setScene_suite,
            btn_3: this.setScene_atrium,

            preview_1: this.preview_commDouble(),
            preview_2: this.preview_suite(),
            preview_3: this.preview_atrium(),

            reset_1: this.reset_commDouble(),
            reset_2: this.reset_suite(),
            reset_3: this.reset_atrium(),
        });
        (async () => {
            await this.setID('id','0');
        })();
        (async () => {
            await this.setID('preview','0');
        })();

        // add hotspots to scene


        // remove hotspots to scene
        MyModule.remove_atrium_hs_1();
        MyModule.remove_suite_hs_1();
        MyModule.remove_suite_hs_2();

        Environment.clearBackground();
        Environment.setBackgroundImage('./static_assets/360_world.jpg');
    };
    setScene_atrium = () => {
        this.setState({
            id: '1',

            title_1: 'Community Style',
            title_2: 'Suite Style',
            title_3: 'Lobby',

            btn_1: this.setScene_commDouble,
            btn_2: this.setScene_suite,
            btn_3: this.setScene_lobby,

            preview_1: this.preview_commDouble(),
            preview_2: this.preview_suite(),
            preview_3: this.preview_lobby(),

            reset_1: this.reset_commDouble(),
            reset_2: this.reset_suite(),
            reset_3: this.reset_lobby(),

        });
        (async () => {
            await this.setID('id','1');
        })();
        (async () => {
            await this.setID('preview','0');
        })();

        // add hotspots to scene
        MyModule.add_atrium_hs_1();


        // remove hotspots to scene
        MyModule.remove_suite_hs_1();
        MyModule.remove_suite_hs_2();


        Environment.clearBackground();
        Environment.setBackgroundImage('./static_assets/Atrium2.jpg');
    };
    setScene_commDouble = () => {
        this.setState({
            id: '2',

            title_1: 'Suite Style',
            title_2: 'Atrium',
            title_3: 'Lobby',

            btn_1: this.setScene_suite,
            btn_2: this.setScene_atrium,
            btn_3: this.setScene_lobby,

            preview_1: this.preview_suite(),
            preview_2: this.preview_atrium(),
            preview_3: this.preview_lobby(),

            reset_1: this.reset_suite(),
            reset_2: this.reset_atrium(),
            reset_3: this.reset_lobby(),
        });
        (async () => {
            await this.setID('id','2');
        })();
        (async () => {
            await this.setID('preview','0');
        })();

        // add hotspots to scene


        // remove hotspots to scene
        MyModule.remove_atrium_hs_1();
        MyModule.remove_suite_hs_1();
        MyModule.remove_suite_hs_2();

        Environment.clearBackground();
        Environment.setBackgroundImage('./static_assets/comm_double2.jpg');
    };
    setScene_suite = () => {
        this.setState({
            id: '3',

            title_1: 'Community Style',
            title_2: 'Atrium',
            title_3: 'Lobby',

            btn_1: this.setScene_commDouble,
            btn_2: this.setScene_atrium,
            btn_3: this.setScene_lobby,

            preview_1: this.preview_commDouble(),
            preview_2: this.preview_atrium(),
            preview_3: this.preview_lobby(),

            reset_1: this.reset_commDouble(),
            reset_2: this.reset_atrium(),
            reset_3: this.reset_lobby(),
        });
        (async () => {
            await this.setID('id','3');
        })();
        (async () => {
            await this.setID('preview','0');
        })();

        // add hotspots to scene
        MyModule.add_suite_hs_1();
        MyModule.add_suite_hs_2();

        // remove hotspots to scene
        MyModule.remove_atrium_hs_1();

        Environment.clearBackground();
        Environment.setBackgroundImage('./static_assets/living_room2.jpg');
    };
    preview_lobby = () => {
        (async () => {
            await this.setID('id','0.5');
        })();
        return "See Lobby"
    };
    preview_atrium = () => {
        (async () => {
            await this.setID('id','1.5');
        })();
        return "See Atrium"
    };
    preview_suite = () => {
      //  this.setState({id: '2.5'});
        (async () => {
            await this.setID('id','2.5');
        })();
        return "See Suite Style"
    };
    preview_commDouble = () => {
        //  this.setState({id: '3.5'});
        (async () => {
            await this.setID('id','3.5');
        })();
        return "See Community Style"
    };

    reset_lobby = () => {
        // set preview
        (async () => {
            await this.setID('id',this.state.id);
        })();
        return "Lobby";

    };
    reset_atrium = () => {
        (async () => {
            await this.setID('id',this.state.id);
        })();
        return "Atrium";
    };
    reset_suite = () => {
        (async () => {
            await this.setID('id',this.state.id);
        })();
        return "Suite Style";
    };
    reset_commDouble = () => {
        (async () => {
            await this.setID('id',this.state.id);
        })();
        return "Community Style";
    };

    /* <View >
                        <GazeButton
                            duration={2000}
                            onClick={this.setScene_lobby}
                            render={(remainingTime, isGazed) => (
                                <View style={styles.greetingBox}>
                                    <Text style={styles.menuBox}>
                                        {gazed
                                            ? "Lobby"
                                            : isGazed
                                                ? this.preview_lobby()
                                                : this.reset_lobby() }
                                    </Text>

                                </View>
                            )}
                        />
                    </View>*/

/*change button onClick and text of button*/


    render() {
        const {gazed} = this.state;
        return (
            <View style={styles.panel}>
                <View><Text style={styles.menuTitle}>Tour Rooms</Text></View>


                    <GazeButton
                        duration={2000}
                        onClick={this.state.btn_1}
                        render={(remainingTime, isGazed) => (
                            <View style={styles.greetingBox}>
                                <Text style={styles.menuBox}>
                                    {gazed
                                        ? this.state.title_1
                                        : isGazed
                                            ? this.state.preview_1
                                            : this.state.reset_1 }

                                </Text>
                            </View>

                        )}
                    />

                    <GazeButton
                        duration={2000}
                        onClick={this.state.btn_2}
                        render={(remainingTime, isGazed) => (
                            <View style={styles.greetingBox}>
                                <Text style={styles.menuBox}>
                                    {gazed
                                        ? this.state.title_2
                                        : isGazed
                                            ? this.state.preview_2
                                            : this.state.reset_2 }
                                </Text>
                            </View>

                        )}
                    />

                    <GazeButton
                        duration={2000}
                        onClick={this.state.btn_3}
                        render={(remainingTime, isGazed) => (
                            <View style={styles.greetingBox}>
                                <Text style={styles.menuBox}>
                                    {gazed
                                        ? this.state.title_3
                                        : isGazed
                                            ? this.state.preview_3
                                            : this.state.reset_3 }
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
        };
    }


    /*componentDidMount = async () => {
        this.setState({
            id: await AsyncStorage.getItem('id'),
        });
        console.log(this.state.id);
         /*try{
             let newID = await AsyncStorage.getItem('id');
             alert(newID);
         }
         catch(error) {
             alert(error);
         }*/

    //};

    async getIDS (){
        this.setState({
            id: await AsyncStorage.getItem('id'),
        });
    }


    call = () =>{
        (async () => {
            await this.getIDS();
        })();

    };


    displayPost = () => {
        this.call();
        switch (this.state.id) {
            /*case '0.5':
                return "Return to lobby.";
            case '1':
                return "Welcome to the Atrium.";
            case '1.5':
                return "HAS: \n * 24 hour Customer Service Desk \n * Free cable & wireless internet";
            case '2':
                return "This the Community Style Double room.";
            case '2.5':
                return "INCLUDES:\n * micro fridge \n * Free cable & wireless internet";
            case '3':
                return "This is the Suite Style room.";
            case '3.5':
                return "INCLUDES:\n * Free cable & wireless internet \n * Air conditioned & heated with thermostat control";
            default:
                return "Please pick a room to tour.";*/
            case '0.5':
                return "Return to lobby.";
            case '1.5':
                return "Check out the Atrium.";
            case '1':
                return "HAS: \n * 24 hour Customer Service Desk \n * Free cable & wireless internet";
            case '2.5':
                return "Check out the Suite Style room.";
            case '2':
                return "INCLUDES:\n * micro fridge \n * Free cable & wireless internet";
            case '3.5':
                return "Check out the Community Style Double room.";
            case '3':
                return "INCLUDES:\n * Free cable & wireless internet \n * Air conditioned & heated with thermostat control";
            default:
                return "Welcome to Student Housing.\n Here are our rooms and facilities.";
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

                <Text style={styles.infoBox}>
                    {this.displayPost()}
                </Text>


            </View>


        );
    }
}



class model extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            rotateX: 0.0,
            rotateY: 0.0,
        };
    }
    componentDidMount() {
        var vY;
    setTimeout(() => {
    this.interval = setInterval(() => {


            this.vX = -VrHeadModel.rotation()[0]-90.0;
           // console.log('y:' + this.state.rotateY + ' [] vy:'  + VrHeadModel.rotationOfHeadMatrix()[1]);
            this.setState({rotateX: this.vX,rotateY: -VrHeadModel.rotation()[1]});




            });
        }, 0);
    };
    componentWillUnmount() {
        clearInterval(this.interval);

    };

    render() {
        return (
                <Entity
                    source={{ obj:'./static_assets/dog.obj', mtl:'./static_assets/dog.mtl'}}
                    style={{
                        transform: [
                            {rotateY: this.state.rotateY},
                            {rotateX: this.state.rotateX},
                            {scale: 1/30},


                        ],

                    }}
                />


        );
    }
}

class platform extends React.Component {


    render() {
        return (
            <Entity
                source={{ obj:'./static_assets/wall.obj'}}
                style={{
                    transform: [

                        {rotateX: -90},
                        {scale: 1/4},


                    ],
                    color: 'grey',
                    opacity: '0.30'
                }}
            />


        );
    }
}


class Atrium_hs_1 extends React.Component {


    render() {
        return (
            <View style={styles.hotspot}>

                <Text style={styles.infoBox}>
                    {"Down this hallway are an ice machine, vending machines, and the 24 hr fitness center."}
                </Text>


            </View>


        );
    }
}

class Suite_hs_1 extends React.Component {


    render() {
        return (
            <View style={styles.hotspot}>

                <Text style={styles.infoBox}>
                    {"Thermo"}
                </Text>


            </View>


        );
    }
}

class Suite_hs_2 extends React.Component {


    render() {
        return (
            <View style={styles.hotspot}>

                <Text style={styles.infoBox}>
                    {"Room comes with all wood furniture and micro fridge."}
                </Text>


            </View>


        );
    }
}


const styles = StyleSheet.create({
    panel: {
        // Fill the entire surface
        flex: 1,
        flexDirection: 'column',
        width: 170,
        height: 600,
        backgroundColor: 'rgba(0, 0, 0, 0.20)',
        justifyContent: 'space-around',
        alignItems: 'stretch',
    },
    panel2: {
        // Fill the entire surface
        flex: 1,
        flexDirection: 'column',
        width: 300,
        height: 600,
        backgroundColor: 'rgba(0, 0, 0, 0.20)',
        justifyContent: 'center',
        alignItems: 'center',
    },
    greetingBox: {
        paddingTop: 20,
        paddingBottom: 20,
        paddingLeft: 10,
        paddingRight: 10,
        backgroundColor: 'rgba(0,0,0,0.84)',
        borderColor: '#639dda',
        borderWidth: 2,


    },
    greetingBox2: {
        padding: 40,
        backgroundColor: '#000000',
        borderColor: '#639dda',
        borderWidth: 2,
    },
    menuTitle: {
        fontSize: 40,
        fontWeight: 'bold',
        alignSelf: 'center',
        textAlign: 'center',
    },
    menuBox: {
        fontSize: 30,
        alignSelf: 'center',
        textAlign: 'center',
    },
    infoBox: {
        /*textShadowColor: 'rgba(0, 0, 0, 0.75)',
        textShadowOffset: {width: -1, height: 1},
        textShadowRadius: 10,*/
        padding: 6,
        fontSize: 36,
        fontWeight: 'bold',
        textAlign: 'center'
    },
    red: {
        color: 'red'
    },
    hotspot: {
        width: 300,
        height: 300,
        backgroundColor: 'rgba(0, 0, 0, 0.20)',
        justifyContent: 'center',
        alignItems: 'center',

    }
});



AppRegistry.registerComponent('menu', () => menu);
AppRegistry.registerComponent('infoBoard', () => infoBoard);
AppRegistry.registerComponent('model', () => model);
AppRegistry.registerComponent('platform', () => platform);
AppRegistry.registerComponent('Atrium_hs_1', () => Atrium_hs_1);
AppRegistry.registerComponent('Suite_hs_1', () => Suite_hs_1);
AppRegistry.registerComponent('Suite_hs_2', () => Suite_hs_2);
