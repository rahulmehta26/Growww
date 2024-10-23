/* eslint-disable no-trailing-spaces */
/* eslint-disable eol-last */
/* eslint-disable semi */
/* eslint-disable quotes */
import AccProtectedScreen from "../screens/authScreens/AccProtectedScreen";
import AuthVerifySCreen from "../screens/authScreens/AuthVerifySCreen";
import ConfirmPinScreen from "../screens/authScreens/ConfirmPinScreen";
import DetailScreen from "../screens/authScreens/DetailScreen";
import EmailOtpScreen from "../screens/authScreens/EmailOtpScreen";
import EmailPassScreen from "../screens/authScreens/EmailPassScreen";
import EmailScreen from "../screens/authScreens/EmailScreen";
import ForgetPassword from "../screens/authScreens/ForgetPassword";
import LoginScreen from "../screens/authScreens/LoginScreen";
import PhoneScreen from "../screens/authScreens/PhoneScreen";
import PinScreen from "../screens/authScreens/PinScreen";
import ProfileScreen from "../screens/authScreens/ProfileScreen";
import RegisterScreen from "../screens/authScreens/RegisterScreen";
import SplashScreen from "../screens/splashScreen/SplashScreen";
import StockDetails from "../stockTools/StockDetails";
import TradingView from "../stockTools/TradingView";
import Transaction from "../stockTools/Transaction";
import TransactionSuccess from "../stockTools/TransactionSuccess";
import BottomTab from "./BottomTab";

export const authQueue = [
    {
        name: 'LoginScreen',
        component: LoginScreen,
    },

    {
        name: 'EmailScreen',
        component: EmailScreen,
    },

    {
        name: 'EmailPassScreen',
        component: EmailPassScreen,
    },

    {
        name: 'EmailOtpScreen',
        component: EmailOtpScreen,
    },

    {
        name: 'PhoneScreen',
        component: PhoneScreen,
    },

    {
        name: 'PinScreen',
        component: PinScreen,
    },

    {
        name: 'ConfirmPinScreen',
        component: ConfirmPinScreen,
    },

    {
        name: 'AccProtectedScreen',
        component: AccProtectedScreen,
    },

    {
        name: 'DetailScreen',
        component: DetailScreen,
    },

    {
        name: 'RegisterScreen',
        component: RegisterScreen,
    },

    {
        name: 'ForgetPassword',
        component: ForgetPassword,
    },

    {
        name: 'AuthVerifyScreen',
        component: AuthVerifySCreen,
    },

    {
        name: 'SplashScreen',
        component: SplashScreen,
    },

    {
        name: 'ProfileScreen',
        component: ProfileScreen,
    },

] 

export const dashBoardScreen = [

    {
        name: 'BottomTab',
        component: BottomTab ,
    },

    {
        name: 'StockDetails',
        component: StockDetails,
    },

    {
        name: 'TradingView',
        component: TradingView,
    },

    {
        name: 'Transaction',
        component: Transaction,
    },

    {
        name: 'TransactionSuccess',
        component: TransactionSuccess,
    },
]

export const mergedQueue = [...dashBoardScreen, ...authQueue]