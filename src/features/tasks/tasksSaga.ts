import { call, delay, put, select, takeEvery } from "redux-saga/effects";
import { toast } from "react-toastify";
import { getExampleTasks } from "./getExampleTasks";
import { fetchExampleTasks, selectTasksTable, setTasks, setLoadingFalse } from "./tasksSlice";
import { saveTasksInLocalStorage } from "./tasksLocalStorage";
import { TaskItem } from "../types";
import { RootState } from "../../store";

function* fetchExampleTasksHandler(): Generator<any, void, TaskItem[]> {
    try {
        yield delay(1000);
        const exampleTasks: TaskItem[] = yield call(getExampleTasks);
        yield put(setTasks(exampleTasks));
    }
    catch (error) {
        toast.error("Nie udało się pobrać zawartości 😒 Spróbuj później.")
    }
    yield put(setLoadingFalse());
}

function* saveTasksInLocalStorageHandler(): Generator<any, void, TaskItem[]> {
    const tasksTable: TaskItem[] = yield select((state: RootState) =>
    selectTasksTable(state)
);
    yield call(saveTasksInLocalStorage, tasksTable);
}

export function* tasksSaga(): Generator {
    yield takeEvery(fetchExampleTasks.type, fetchExampleTasksHandler);
    yield takeEvery("*", saveTasksInLocalStorageHandler);
}
