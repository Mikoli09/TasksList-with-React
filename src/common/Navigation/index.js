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
                    O autorze
                </StyledNavLink>
            </li>
        </List>
    </StyledNav>
);

