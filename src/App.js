import { HashRouter, Redirect, Route, Switch } from "react-router-dom/cjs/react-router-dom";
import TasksPage from "./features/tasks/TasksPage"
import AuthorPage from "./features/author/AuthorPage";
import TaskPage from "../src/features/tasks/taskPage/index";
import { StyledNavLink } from "./styled";

export default () => (
    <HashRouter>
        <nav>
            <ul>
                <li>
                    <StyledNavLink to="/zadania">
                        Zadania
                    </StyledNavLink>
                </li>
                <li>
                    <StyledNavLink to="/autor">
                        Autor
                    </StyledNavLink>
                </li>
            </ul>
        </nav>
        <Switch>
            <Route path="/zadania/:id">
                <TaskPage />
            </Route>
            <Route path="/zadania">
                <TasksPage />
            </Route>
            <Route path="/autor">
                <AuthorPage />
            </Route>
            <Route path="/">
                <Redirect to="/zadania" />
            </Route>
        </Switch>
    </HashRouter>
); 