import { HashRouter, Redirect, Route, Switch } from "react-router-dom/cjs/react-router-dom";
import TasksPage from "./features/tasks/TasksPage"
import AuthorPage from "./features/author/AuthorPage";
import TaskPage from "./features/tasks/TaskPage/index";
import { List, StyledNav, StyledNavLink } from "./styled";

export default () => (
    <HashRouter>
        <StyledNav>
            <List>
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
            </List>
        </StyledNav>
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