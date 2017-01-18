/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
    AppRegistry,
    StyleSheet,
    ListView,
    Text,
    RefreshControl,
    ViewPagerAndroid,
    PanResponder,
    View
} from 'react-native';

const log = function() {
    let args = [].slice.call(arguments);
    args.unshift("RNLOG")
    console.log.apply(console, args)
}

class Main extends Component {
    // Initialize the hardcoded data
    constructor(props) {
        super(props);
        const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
        this.state = {
            dataSource: ds.cloneWithRows([
                'John', 'Joel1', 'James', 'Jimmy', 'Jackson', 'Jillian', 'Julie', 'Devin'
            ]),
            refreshing: false
        };
        this.onRefresh = this.onRefresh.bind(this);
    }

    componentWillMount() {
        this._panGesture = PanResponder.create({
            // Ask to be the responder:
            onMoveShouldSetPanResponder: (evt, gestureState) => {
                var take = Math.abs(gestureState.dy) > Math.abs(gestureState.dx)
                        && Math.abs(gestureState.dy) > 10;
                log('took responder?', take);
                return take;
            },
            onPanResponderMove: (evt, gestureState) => {
                log('dy:'+gestureState.dy);
            },
            onPanResponderTerminationRequest: (evt, gestureState) => true,
            onPanResponderRelease: (evt, gestureState) => {
                log('release responder', gestureState);
            },
        });
    }

    onRefresh() {
        setTimeout(_ => {
            this.setState({
                refreshing: false
            });
        }, 3000);
    }

    renderRow(item) {
        let ret = null;
        switch(item) {
            case 'John':
                ret = (
                    <View style={{height: 200}}>
                      <ViewPagerAndroid style={{flex: 1, backgroundColor: "#666666"}}>
                        <View style={{flex: 1, alignItems: "center", justifyContent: "center"}}>
                          <Text style={{color: "#ffffff"}}>1</Text>
                        </View>
                        <View style={{flex: 1, alignItems: "center", justifyContent: "center"}}>
                          <Text style={{color: "#ffffff"}}>2</Text>
                        </View>
                        <View style={{flex: 1, alignItems: "center", justifyContent: "center"}}>
                          <Text style={{color: "#ffffff"}}>3</Text>
                        </View>
                        <View style={{flex: 1, alignItems: "center", justifyContent: "center"}}>
                          <Text style={{color: "#ffffff"}}>4</Text>
                        </View>
                        <View style={{flex: 1, alignItems: "center", justifyContent: "center"}}>
                          <Text style={{color: "#ffffff"}}>5</Text>
                        </View>
                        <View style={{flex: 1, alignItems: "center", justifyContent: "center"}}>
                          <Text style={{color: "#ffffff"}}>6</Text>
                        </View>
                        <View style={{flex: 1, alignItems: "center", justifyContent: "center"}}>
                          <Text style={{color: "#ffffff"}}>7</Text>
                        </View>
                        <View style={{flex: 1, alignItems: "center", justifyContent: "center"}}>
                          <Text style={{color: "#ffffff"}}>8</Text>
                        </View>
                      </ViewPagerAndroid>
                    </View>
                );
                break;
            default:
                ret = (
                    <View style={{backgroundColor: "#eeeeee", height: 100, justifyContent: "center", alignItems: "center"}}>
                      <Text>{item}</Text>                      
                    </View>
                );
        }
        return ret;
    }

    onPullDown() {
        alert("hello")
    }

    render() {
        // tintColor="transparent"
        // colors={['transparent']}
        // style={{backgroundColor: 'transparent', zIndex: -1}}

        let rf = <RefreshControl refreshing={this.state.refreshing}
                                 progressBackgroundColor={"#666666"} 
                                 onRefresh={this.onRefresh} />;
        // ref = null; //
        return (
            <View style={{flex: 1, paddingTop: 22}} {...this._panGesture.panHandlers}>
              <ListView dataSource={this.state.dataSource}
                        contentContainerStyle={{}}
                        onResponderMove={this.onPullDown}
                        refreshControl={rf}
                        removeClippedSubviews={false}
                        renderRow={this.renderRow} />
            </View>
        );
    }
}

// App registration and rendering
AppRegistry.registerComponent('Refresh', () => Main);
