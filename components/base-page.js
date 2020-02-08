import React from 'react';
import {StyleSheet, SafeAreaView, View, Image, Text, Easing, Button} from 'react-native';
import Drawer from 'react-native-drawer-menu';
import { TouchableOpacity } from 'react-native-gesture-handler';
import HomePage from './home-page';
import ProfilePage from './profile-page';

export default class BasePage extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      isDrawerOpen: false,
      activePage: <HomePage></HomePage>
    }
    this._drawer = React.createRef();
  }

  // componentDidMount = () => {
  //   this.switchPage('home')
  // }

  toggleLeftDrawer = () => {
    this.state.isDrawerOpen
      ? this._drawer.current.closeDrawer()
      : this._drawer.current.openDrawer();
  };

  switchPage = (menuName) => {
    this.toggleLeftDrawer();
    if (menuName == 'home') {
      this.setState({
        activePage: <HomePage></HomePage>
      })
    } else {
      this.setState({
        activePage: <ProfilePage></ProfilePage>
      })
    }
  }

  _renderLeftDrawerContent = () => {
    return (
      <View style={styles.drawerContainer}>
        <View style={styles.drawerBody}>
          {/* DRAWER IMAGE */}
          <View style={styles.headerImageContainer}>
            <Image
              style={styles.headerImage}
              source={require('../assets/background.png')}
            />
          </View>

          {/*  LIST MENU */}
          <View>
            <TouchableOpacity onPress={()=> {this.switchPage('home')}}>
              <View style={styles.leftMenu}> 
                <Text style={styles.leftMenuText}>Home</Text>
              </View>
            </TouchableOpacity>
          </View>
          <View>
            <TouchableOpacity onPress={()=> {this.switchPage('profile')}}>
              <View style={styles.leftMenu}> 
                <Text style={styles.leftMenuText}>Profile</Text>
              </View>
            </TouchableOpacity>
          </View>
          <View>
            <TouchableOpacity onPress={() => {this.props.navigation.replace('LoginPage')}}>
              <View style={styles.leftMenu}> 
                <Text style={styles.leftMenuText}>Logout</Text>
              </View>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    );
  };

  render() {
    return (
      <Drawer
        style={styles.container}
        drawerWidth={260}
        drawerContent={this._renderLeftDrawerContent()}
        type={Drawer.types.Overlay}
        drawerPosition={Drawer.positions.Left}
        maskAlpha={0.3}
        onDrawerOpen={() => {
          this.setState({isDrawerOpen: true});
        }}
        onDrawerClose={() => {
          this.setState({isDrawerOpen: false});
        }}
        easingFunc={Easing.ease}
        ref={this._drawer}>
          <SafeAreaView style={{flex: 1}}>
            <View style = {styles.body}>
              <Text>''' BASE PAGE '''</Text>

              <TouchableOpacity 
                onPress={()=>{this.toggleLeftDrawer()}}
                style ={{
                    height: 40,
                    width:160,
                    borderRadius:10,
                    backgroundColor : "blue",
                    marginTop: 20
                }}>
                <Button 
                  color="white"
                  title="Toggle Left Menu" />
              </TouchableOpacity>
              
              {/*  DI SINI DIMANA COMPONENT AKAN DIPANGGIL */}
              {this.state.activePage}
            </View>
          </SafeAreaView>
        </Drawer>
    );
  };

};


const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  drawerContainer: {
    width: 260,
    flexDirection: 'row',
    flex: 1,
  },
  drawerBody: {
    backgroundColor: 'white',
    width: 260,
    flex: 1,
  },

  headerImageContainer: {
    width: '100%',
    height: 150,
  },

  headerImage: {
    flex: 1,
    width: '100%',
    height: 150,
  },

  leftMenu: {
    flexDirection: 'row',
    alignItems: 'center',
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderBottomColor: 'gray',
    height: 55,
    paddingHorizontal: 4,
    marginBottom: 1,
  },

  leftMenuText: {
    marginLeft: 7,
    fontSize: 17,
    fontWeight: '500',
  },

  body: {
    flex: 1,
    padding: 2,
    alignItems: "center"
  }

})