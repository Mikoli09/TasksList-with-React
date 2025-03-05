import { call, delay, put, select, takeEvery } from "redux-saga/effects";
import { toast } from "react-toastify";
import { getExampleTasks } from "./getExampleTasks";
import { fetchExampleTasks, selectTasksTable, setTasks, setLoadingFalse } from "./tasksSlice";
import { saveTasksInLocalStorage } from "./tasksLocalStorage";

function* fetchExampleTasksHandler() {
    try {
        yield delay(2000);
        const exampleTasks = yield call(getExampleTasks);
        yield put(setTasks(exampleTasks));
    }
    catch (error) {
        toast.error("Nie udało się pobrać zawartości 😒 Spróbuj później.")
    }
    yield put(setLoadingFalse());
}

function* saveTasksInLocalStorageHandler() {
    const tasksTable = yield select(selectTasksTable);
    yield call(saveTasksInLocalStorage, tasksTable);
}

export function* tasksSaga() {
    yield takeEvery(fetchExampleTasks.type, fetchExampleTasksHandler);
    yield takeEvery("*", saveTasksInLocalStorageHandler);
}
