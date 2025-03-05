import { StyledNav, List, StyledNavLink } from "./styled"

export const Navigation = () => (
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
);

