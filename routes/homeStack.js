import {createStackNavigator} from 'react-navigation-stack'
import {createAppContainer} from 'react-navigation'
import openingScreen from '../screens/openingScreen';
import MenuPage from '../screens/MenuPage';
import RealEstatePage from '../screens/RealEstatePage'
import FinancePage from '../screens/FinancePage'
import DetailsPage from  '../screens/DetailsPage';
import TransportPage from '../screens/TransportPage';
import PetCarePage from '../screens/PetCarePage';
import FindingCarePage from '../screens/FindingCarePage';
import MaintainencePage from '../screens/MaintainencePage';
import ImageCaro from '../screens/ImageCaro';
import StartPage from '../screens/Start';
import LegalPage from '../screens/Legal';
import HomeDelivery from '../screens/HomeDeliveryPage';




//stack for screen views
const screens={
    Carethoz:{
        screen: StartPage,
    },
    Menu:{
        screen: MenuPage
    },
    MenuPage:{
        screen: MenuPage
    },
    RealEstate:{
        screen: RealEstatePage
    },
    Finance:{
        screen: FinancePage
    },
    Transport:{
        screen: TransportPage
    },
    PetCare:{
        screen: PetCarePage
    },
    Care:{
        screen: FindingCarePage
    },
    DetailsPage:{
        screen: DetailsPage
    },
    Maintainence:{
        screen: MaintainencePage
    },
    Legal:{
        screen: LegalPage
    },
    HomeDelivery: {
        screen: HomeDelivery

    }
    
}

const HomeStack =createStackNavigator(screens);

export default createAppContainer(HomeStack);