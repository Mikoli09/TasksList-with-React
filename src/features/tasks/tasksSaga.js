import { call, delay, put, select, takeEvery } from "redux-saga/effects";
import { getExampleTasks } from "./getExampleTasks";
import { fetchExampleTasks, selectTasksTable, setTasks, toggleLoadingToFalse } from "./tasksSlice";
import { saveTasksInLocalStorage } from "./tasksLocalStorage";

function* fetchExampleTasksHandler() {
    yield delay(2000);
    try {
        const exampleTasks = yield call(getExampleTasks);
        yield put(setTasks(exampleTasks));
    }
    catch (error) {
        yield call(alert, "Coś poszło nie tak");
    }
    yield put(toggleLoadingToFalse());
}

function* saveTasksInLocalStorageHandler() {
    const tasksTable = yield select(selectTasksTable);
    yield call(saveTasksInLocalStorage, tasksTable);
}


export function* tasksSaga() {
    yield takeEvery(fetchExampleTasks.type, fetchExampleTasksHandler);
    yield takeEvery("*", saveTasksInLocalStorageHandler);
}
