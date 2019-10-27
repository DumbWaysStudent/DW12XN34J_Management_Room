import { createAppContainer, createSwitchNavigator} from 'react-navigation';
import GuestNav from './GuestNav';
import BottomTabNavigator from './BottomTabNavigator';
import Loading from '../screen/Loading';


const SwitchNav = createSwitchNavigator({
    GuestNav: GuestNav,
    BottomTabNavigator: BottomTabNavigator,
    Loading: Loading
},
{
    initialRouteName: 'GuestNav'
}
)

export default createAppContainer(SwitchNav);