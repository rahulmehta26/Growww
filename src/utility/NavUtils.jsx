/* eslint-disable quotes */
import { createNavigationContainerRef, CommonActions } from "@react-navigation/native";

export const navigationRef = createNavigationContainerRef();

export async function navigate(routeName, params) {

    if (await navigationRef.isReady()) {
    navigationRef.dispatch(CommonActions.navigate(routeName, params));
  }
}


export async function resetAndNavigate(routeName) {
  if (await navigationRef.isReady()) {
    navigationRef.dispatch(
      CommonActions.reset({
        index: 0,
        routes: [{ name: routeName }],
      })
    );
  }
}


export async function goBack() {
  if (await navigationRef.isReady()) {
    navigationRef.dispatch(CommonActions.goBack());
  }
}

export async function prepareNavigation() {
  await navigationRef.isReady();
}
