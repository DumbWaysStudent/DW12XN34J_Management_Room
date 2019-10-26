import { createAppContainer, createSwitchNavigator} from 'react-navigation';
import GuestNav from './GuestNav';
// import MemberNav from './MemberNav';
import BottomTabNavigator from './BottomTabNavigator';


const SwitchNav = createSwitchNavigator({
    GuestNav: GuestNav,
    BottomTabNavigator: BottomTabNavigator,
    // MemberNav: MemberNav   
},
{
    initialRouteName: 'GuestNav'
}
)

export default createAppContainer(SwitchNav);