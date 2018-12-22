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
const {MyModule} = NativeModules;                       // import class to resize surfaces
import {Atrium_hs_1,Atrium_hs_2,Comm_hs_1,Suite_hs_1,Suite_hs_2} from './Hotspots';
import {Closed_main,Atrium_hs_1_symb,Atrium_hs_2_symb,Comm_hs_1_symb,Suite_hs_1_symb,Suite_hs_2_symb} from './Symbols';

Environment.setBackgroundImage('./static_assets/Atrium2.jpg');



const State = {
    id: 0,
    gazed: false,
    post: "...",
};




class infoBoard extends React.Component {
    constructor(props) {
        super(props);
      //  this.animatedValue = new Animated.Value(0);
        this.state = {
            id: '1',        // keeps track of state (1 = Atrium; 2 = Community Style aka commDouble; 3 = Suite Style aka suite)
            reset: '1',     // should not be in use now

            // ONLY DISPLAYING FIRST 2 ****_1 & ****_2 OF EACH
            // title for menu options
            title_1: 'Community Style',
            title_2: 'Suite Style',
            title_3: 'Lobby',

            // onclick event for buttons
            btn_1: this.setScene_commDouble,
            btn_2: this.setScene_suite,
            btn_3: this.setScene_lobby,

            // display this in place of title when hovered over button
            preview_1: 'See Community Style',
            preview_2: 'See Suite Style',
            preview_3: 'See Lobby',

           /* reset_1: this.reset_commDouble(),
            reset_2: this.reset_suite(),
            reset_3: this.reset_lobby(),*/

           // set pictures for menu display
            pic_1: 'MemuPics/comm_double.jpg',
            pic_2: 'MemuPics/suite.jpg',
            pic_3: 'MemuPics/mountain.jpg',

            // set title for top bar
            main_title: 'Atrium',

            // code to display image and simulate animated

            // white x png
            x: <Image style={{width: 42, height: 42, marginRight: 14, marginTop: 18, }} source={asset('x3.png')}/>,
            // black x png
            xPressed: <Image style={{width: 42, height: 42, marginRight: 14, marginTop: 18, }} source={asset('xPressed.png')}/>,
        };
        // sets states, hotspots, and symbols on page load
        this.call_setID_home();
    }




    // function that sets state in broswer memory
    async setID(key,val) {
        AsyncStorage.setItem(key, val);
    }


    call_setID_home = () =>
    {
        //this.setState({id:'0',reset:'0.2'});

        // sets state in browser memory
        (async () => {
            //await this.setID('id','0');
            await this.setID('id','1');
        })();
        /*(async () => {
            await this.setID('preview','0');
        })();*/


        // add hotspots to scene
        MyModule.add_atrium_hs_1_symb();
        MyModule.add_atrium_hs_2_symb();



        // remove hotspots to scene
        MyModule.remove_atrium_hs_1();
        MyModule.remove_atrium_hs_2();
        MyModule.remove_comm_hs_1();
        MyModule.remove_comm_hs_1_symb();
        MyModule.remove_suite_hs_1();
        MyModule.remove_suite_hs_1_symb();
        MyModule.remove_suite_hs_2();
        MyModule.remove_suite_hs_2_symb();

    };

    setScene_lobby = () => {        // NOT IN USE
        this.setState({
            id: '0',
            //reset:'0',

            title_1: 'Community Style',
            title_2: 'Suite Style',
            title_3: 'Atrium',

            btn_1: this.setScene_commDouble,
            btn_2: this.setScene_suite,
            btn_3: this.setScene_atrium,

            preview_1: 'See Community Style',
            preview_2: 'See Suite Style',
            preview_3: 'See Atrium',

           /* reset_1: this.reset_commDouble(),
            reset_2: this.reset_suite(),
            reset_3: this.reset_atrium(),*/

            pic_1: 'MemuPics/comm_double.jpg',
            pic_2: 'MemuPics/suite.jpg',
            pic_3: 'MemuPics/atrium.jpg',

            main_title: 'Lobby',
        });
        (async () => {
            await this.setID('id','0');
        })();
        /*(async () => {
            await this.setID('preview','0');
        })();*/

        // add hotspots to scene


        // remove hotspots to scene
        MyModule.remove_atrium_hs_1();
        MyModule.remove_atrium_hs_2();
        MyModule.remove_comm_hs_1();
        MyModule.remove_comm_hs_1_symb();
        MyModule.remove_atrium_hs_1_symb();
        MyModule.remove_suite_hs_1();
        MyModule.remove_atrium_hs_2_symb();
        MyModule.remove_suite_hs_1_symb();
        MyModule.remove_suite_hs_2();
        MyModule.remove_suite_hs_2_symb();

        Environment.clearBackground();
        Environment.setBackgroundImage('./static_assets/mountain.jpg');
    };
    setScene_atrium = () => {
        this.setState({
            id: '1',
            reset: '1',

            title_1: 'Community Style',
            title_2: 'Suite Style',
            title_3: 'Lobby',

            btn_1: this.setScene_commDouble,
            btn_2: this.setScene_suite,
            btn_3: this.setScene_lobby,

            preview_1: 'See Community Style',
            preview_2: 'See Suite Style',
            preview_3: 'See Lobby',

           /* reset_1: this.reset_commDouble(),
            reset_2: this.reset_suite(),
            reset_3: this.reset_lobby(),*/

            pic_1: 'MemuPics/comm_double.jpg',
            pic_2: 'MemuPics/suite.jpg',
            pic_3: 'MemuPics/mountain.jpg',

            main_title: 'Atrium',
        });
        (async () => {
            await this.setID('id','1');
        })();
       /* (async () => {
            await this.setID('preview','0');
        })();*/


        // add hotspots to scene
        MyModule.add_atrium_hs_1_symb();
        MyModule.add_atrium_hs_2_symb();



        // remove hotspots to scene
        MyModule.remove_atrium_hs_1();
        MyModule.remove_atrium_hs_2();
        MyModule.remove_comm_hs_1();
        MyModule.remove_comm_hs_1_symb();
        MyModule.remove_suite_hs_1();
        MyModule.remove_suite_hs_1_symb();
        MyModule.remove_suite_hs_2();
        MyModule.remove_suite_hs_2_symb();


        // removes previous background
        Environment.clearBackground();
        // adds new background
        Environment.setBackgroundImage('./static_assets/Atrium2.jpg');
    };
    setScene_commDouble = () => {
        this.setState({
            id: '2',
            reset:'2',

            title_1: 'Suite Style',
            title_2: 'Atrium',
            title_3: 'Lobby',

            btn_1: this.setScene_suite,
            btn_2: this.setScene_atrium,
            btn_3: this.setScene_lobby,

            preview_1: 'See Suite Style',
            preview_2: 'See Atrium',
            preview_3: 'See Lobby',

           /* reset_1: this.reset_suite(),
            reset_2: this.reset_atrium(),
            reset_3: this.reset_lobby(),*/

            pic_1: 'MemuPics/suite.jpg',
            pic_2: 'MemuPics/atrium.jpg',
            pic_3: 'MemuPics/mountain.jpg',

            main_title: 'Community Double',
        });
        (async () => {
            await this.setID('id','2');
        })();
        /*(async () => {
            await this.setID('preview','0');
        })();*/

        // add hotspots to scene
        MyModule.add_comm_hs_1_symb();

        // remove hotspots to scene
        MyModule.remove_atrium_hs_1();
        MyModule.remove_atrium_hs_1_symb();
        MyModule.remove_atrium_hs_2();
        MyModule.remove_atrium_hs_2_symb();
        MyModule.remove_comm_hs_1();
        MyModule.remove_suite_hs_1();
        MyModule.remove_suite_hs_1_symb();
        MyModule.remove_suite_hs_2();
        MyModule.remove_suite_hs_2_symb();

        Environment.clearBackground();
        Environment.setBackgroundImage('./static_assets/comm_double2.jpg');
    };
    setScene_suite = () => {
        this.setState({
            id:'3',
            reset:'3',

            title_1: 'Community Style',
            title_2: 'Atrium',
            title_3: 'Lobby',

            btn_1: this.setScene_commDouble,
            btn_2: this.setScene_atrium,
            btn_3: this.setScene_lobby,

            preview_1: 'See Community Style',
            preview_2: 'See Atrium',
            preview_3: 'See Lobby',

          /*  reset_1: this.reset_commDouble(),
            reset_2: this.reset_atrium(),
            reset_3: this.reset_lobby(),*/

            pic_1: 'MemuPics/comm_double.jpg',
            pic_2: 'MemuPics/atrium.jpg',
            pic_3: 'MemuPics/mountain.jpg',

            main_title: 'Suite Style',
        });
        (async () => {
            await this.setID('id','3');
        })();
      /*  (async () => {
            await this.setID('preview','0');
        })();*/


        // add hotspots to scene
        MyModule.add_suite_hs_1_symb();
        MyModule.add_suite_hs_2_symb();


        // remove hotspots to scene
        MyModule.remove_atrium_hs_1();
        MyModule.remove_atrium_hs_1_symb();
        MyModule.remove_atrium_hs_2();
        MyModule.remove_atrium_hs_2_symb();
        MyModule.remove_comm_hs_1();
        MyModule.remove_comm_hs_1_symb();
        MyModule.remove_suite_hs_1();
        MyModule.remove_suite_hs_2();

        Environment.clearBackground();
        Environment.setBackgroundImage('./static_assets/living_room2.jpg');
    };
    preview_lobby = () => {
        this.setState({id:'0.5', menu_box_3: styles.highlightBox});
        /*(async () => {
            await this.setID('id','0.5');
        })();*/
     //   return "See Lobby"
    };

    // preview_atrium = () => {
    //     this.setState({id:'1.5',});
    //     switch (this.state.id) {
    //         case '2':
    //         case '3':
    //             this.setState({menu_box_2:styles.highlightBox});
    //             break;
    //         default:
    //             this.setState({menu_box_3:styles.highlightBox});
    //             break;
    //     }
    //     /*(async () => {
    //         await this.setID('id','1.5');
    //     })();*/
    //   //  return "See Atrium"
    // };
    // preview_suite = () => {
    //     this.setState({id:'2.5',});
    //    /* (async () => {
    //         await this.setID('id','2.5');
    //     })();*/
    //  //   return "See Suite Style"
    // };
    // preview_commDouble = () => {
    //     this.setState({id:'3.5'});
    //    /* (async () => {
    //         await this.setID('id','3.5');
    //     })();*/
    //  //   return "See Community Style"
    // };

    // reset_lobby = () => {
    //  //   this.setState({id: r});
    //     /*(async () => {
    //         await this.setID('id',this.state.reset);
    //     })();*/
    //     return "Lobby";
    //
    // };
   //  reset_atrium = () => {
   //   //   let r = this.state.reset;
   //   //   this.setState({id: r});
   //      /*(async () => {
   //          await this.setID('id',this.state.id);
   //      })();*/
   //      return "Atrium";
   //  };
   //  reset_suite = () => {
   // //     let r = this.state.reset;
   // //     this.setState({id: r});
   //      /*(async () => {
   //          await this.setID('id',this.state.id);
   //      })();*/
   //      return "Suite Style";
   //  };
   //  reset_commDouble = () => {
   //   //   let r = this.state.reset;
   //    //  this.setState({id: r});
   //      /*(async () => {
   //          await this.setID('id',this.state.id);
   //      })();*/
   //      return "Community Style";
   //  };

    // displays message on infoboard with corresponding state
    displayPost = () => {
        switch (this.state.id) {
            case '0.2':
                return "Welcome to Student Housing.\n  Here are our rooms and facilities. \n Stare at the dog to close the menu.";
            case '0.5':
                return "Return to lobby.";
            case '1.5':
                return "Check out the Atrium.";
            case '1':
                return "Welcome to Student Housing. Here are our rooms and facilities.\n\nThe Atrium is the central hub of Student Housing. Here you can hang out with friends and see all the we have to offer.";
            case '2.5':
                return "Check out the Suite Style room.";
            case '2':
                return "Community Style room promote community living: a recreation room in each building and common areas on each floor each, with a big screen television in the lobby and recreation rooms.";
            case '3.5':
                return "Check out the Community Style Double room.";
            case '3':
                return "Suite Styles room are more private: only sharing a living room and bathroom with your suite mates.";
            default:
                return "Welcome to Student Housing.\n Here are our rooms and facilities.";
        }
    };


    // SHOULD NOT BE IN USE
    setGazed = () => {
        this.setState({id: 1,});
    };
    // SHOULD NOT BE IN USE
    setBTN1 = () => {
        switch (this.state.id) {
            case '0.2':
                this.setState({id:'3.5'});
              //  return "See Community Style";
            default:
                this.setState({id:'3.5'});
        }
    };

    // onclick event for closing menu: close hotspots & symbols in corresponding states aka scene
    menu = () =>{
        MyModule.remove_menu();
        MyModule.add_closed_menu();
        switch(this.state.id)
        {
            case '1': // atrium
                MyModule.remove_atrium_hs_1();
                MyModule.remove_atrium_hs_1_symb();
                MyModule.remove_atrium_hs_2();
                MyModule.remove_atrium_hs_2_symb();
                break;
            case '2': // community
                MyModule.remove_comm_hs_1();
                MyModule.remove_comm_hs_1_symb();
                break;
            case '3': // suites
                MyModule.remove_suite_hs_1();
                MyModule.remove_suite_hs_1_symb();
                MyModule.remove_suite_hs_2();
                MyModule.remove_suite_hs_2_symb();
                break;
        }

    };

    render() {
        const {post} = State.post;
        const {gazed} = State.gazed;
        return (
            <View style={{width:800,height: 675, flexWrap: 'wrap'}}>

                <View style={styles.panel4}>

                    <View style={{paddingLeft: 16}}>
                        <Text style={styles.mainTitle}>
                            {this.state.main_title}
                        </Text>
                    </View>

                    <GazeButton
                        duration={2000}
                        onClick={this.menu}
                        render={(remainingTime, isGazed) => (
                            <View>
                                {gazed
                                    ? this.state.x
                                        : isGazed
                                            ? this.state.xPressed
                                            : this.state.x }
                            </View>
                        )}
                    />
                </View>


                <View style={{flexDirection:'row'}}>

                    <View style={styles.panel2}>
                        <Text style={styles.infoBox}>
                            {this.displayPost()}
                        </Text>
                    </View>


                    <View style={styles.panel}>
                        <View><Text style={styles.menuTitle}>Tour Rooms</Text></View>

                        <View>
                        <GazeButton
                            duration={2000}
                            onClick={this.state.btn_1}
                            render={(remainingTime, isGazed) => (
                                <View style={styles.greetingBox}>
                                    <Image style={{width: 220, height: 100,backgroundColor: 'rgba(227, 233, 242,0.75)',borderWidth: 3,
                                        borderColor: 'rgba(227, 233, 242,0.75)', }} source={asset(this.state.pic_1)}>
                                        <Text style={styles.menuBox}>
                                            {gazed
                                                ? this.state.title_1
                                                : isGazed
                                                    ? this.state.preview_1
                                                    : this.state.title_1 }

                                        </Text>
                                    </Image>
                                </View>
                            )}
                        />
                        </View>

                        <View>
                        <GazeButton
                            duration={2000}
                            onClick={this.state.btn_2}
                            render={(remainingTime, isGazed) => (
                                <View style={styles.greetingBox}>
                                    <Image style={{width: 220, height: 100,backgroundColor: 'rgba(227, 233, 242,0.75)',borderWidth: 3,
                                        borderColor: 'rgba(227, 233, 242,0.75)', }} source={asset(this.state.pic_2)}>
                                        <Text style={styles.menuBox}>
                                            {gazed
                                                ? this.state.title_2
                                                : isGazed
                                                    ? this.state.preview_2
                                                    : this.state.title_2 }
                                        </Text>
                                    </Image>
                                </View>

                            )}
                        />
                        </View>


                    </View>

                </View>
            </View>


        );
    }
}
/*
<View>
                        <GazeButton
                            duration={2000}
                            onClick={this.state.btn_3}
                            render={(remainingTime, isGazed) => (
                                <View style={styles.greetingBox}>
                                    <Image style={{width: 220, height: 100,backgroundColor: 'rgba(227, 233, 242,0.75)',borderWidth: 3,
                                        borderColor: 'rgba(227, 233, 242,0.75)', }} source={asset(this.state.pic_3)}>
                                        <Text style={styles.menuBox}>
                                            {gazed
                                                ? this.state.title_3
                                                : isGazed
                                                    ? this.state.preview_3
                                                    : this.state.reset_3 }
                                        </Text>
                                    </Image>
                                </View>

                            )}
                        />
                        </View>
*/

/*
class model extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            rotateX: 0.0,
            rotateY: 0.0,
            menuOpen: true,
        };
    }

    menu = () =>{
        if (this.state.menuOpen === true)
        {
            MyModule.remove_menu();
            this.setState({menuOpen: false});
        }
        else
        {
            MyModule.add_menu();
            this.setState({menuOpen: true});
        }

    };
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
        const {gazed} = State.gazed;
        return (
            <GazeButton
                duration={2000}
                onClick={this.menu}
                render={(remainingTime, isGazed) => (
                <Entity
                    source={{ obj:'./static_assets/dog.obj', mtl:'./static_assets/dog.mtl'}}
                    style={{
                        transform: [
                            {rotateY: this.state.rotateY},
                            {rotateX: this.state.rotateX},
                            {scale: 1/30},


                        ],
                    }}
                >

                </Entity>
                )}
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
                    opacity: '0.30',
                    width: 100,
                    height: 100,
                }}
            />


        );
    }
}

*/




const styles = StyleSheet.create({
    panel: {
        paddingLeft: 30,
        paddingBottom: 80,
        paddingRight: 30,
        marginTop: 10,
        marginLeft: 10,
        flexDirection: 'column',
        width: 300,
        height: 475,
        backgroundColor: 'rgba(196, 30, 58, 0.54)',
        justifyContent: 'space-between',
        alignItems: 'stretch',
        borderWidth: 2,
        borderColor: 'rgba(227, 233, 242,0.75)',
    },
    panel2: {
        // Fill the entire surface
        flex: 1,
        padding: 16,
        marginTop: 10,
        flexDirection: 'column',
        width: 500,
        height: 475,
        backgroundColor: 'rgba(196, 30, 58, 0.54)',
        alignItems: 'center',
        borderWidth: 2,
        borderColor: 'rgba(227, 233, 242,0.75)',
    },
    panel3:{
        paddingTop: 4,
        paddingBottom: 4,
        marginRight: 10,
        backgroundColor: 'rgba(199, 211, 229, 1.0)',
    },
    panel4:{
        flexDirection: 'row',
        backgroundColor: 'rgba(196, 30, 58, 0.54)',
        width: 800,
        height: 75,
        borderWidth: 2,
        borderColor: 'rgba(227, 233, 242,0.75)',
        justifyContent: 'space-between',
    },
    greetingBox: {
        backgroundColor: 'rgba(0, 44, 118,1.0)',
        alignSelf: 'center',
    },
    highlightBox: {
        paddingTop: 4,
        paddingBottom: 4,
        backgroundColor: 'rgba(199, 211, 229, 0.45)',
    },
    menuBox: {
        fontSize: 28,
        fontWeight: '500',
        fontFamily: 'Lato, Arial, Helvetica, sans-serif',
        color: '#e3e9f2',
        alignSelf: 'center',
        textAlign: 'center',
        justifyContent: 'flex-end',
    },
    mainTitle: {
        fontSize: 48,
        fontFamily: 'Lato, Arial, Helvetica, sans-serif',
        fontWeight: '600',
       // paddingRight: 10,
        //alignSelf: 'center',
        //textAlign: 'center',
    },
    menuTitle: {
        fontSize: 38,
        fontFamily: 'Lato, Arial, Helvetica, sans-serif',
        fontWeight: '700',
        alignSelf: 'center',
        textAlign: 'center',
    },
    infoBox: {
        fontSize: 40,
        fontWeight: '400',
        textAlign: 'center',
    },
});




AppRegistry.registerComponent('infoBoard', () => infoBoard);
AppRegistry.registerComponent('Closed_main', () => Closed_main);
//AppRegistry.registerComponent('model', () => model);
//AppRegistry.registerComponent('platform', () => platform);
AppRegistry.registerComponent('Atrium_hs_1', () => Atrium_hs_1);
AppRegistry.registerComponent('Atrium_hs_1_symb', () => Atrium_hs_1_symb);
AppRegistry.registerComponent('Atrium_hs_2', () => Atrium_hs_2);
AppRegistry.registerComponent('Atrium_hs_2_symb', () => Atrium_hs_2_symb);
AppRegistry.registerComponent('Comm_hs_1', () => Comm_hs_1);
AppRegistry.registerComponent('Comm_hs_1_symb', () => Comm_hs_1_symb);
AppRegistry.registerComponent('Suite_hs_1', () => Suite_hs_1);
AppRegistry.registerComponent('Suite_hs_1_symb', () => Suite_hs_1_symb);
AppRegistry.registerComponent('Suite_hs_2', () => Suite_hs_2);
AppRegistry.registerComponent('Suite_hs_2_symb', () => Suite_hs_2_symb);

