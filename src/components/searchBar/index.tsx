import {
  useState,
  ChangeEvent,
  SyntheticEvent,
  Dispatch,
  SetStateAction,
} from "react";
import { styled, alpha } from "@mui/material/styles";
import SearchIcon from "@mui/icons-material/Search";
import InputBase from "@mui/material/InputBase";

const Search = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  "&:hover": {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginLeft: 0,
  width: "100%",
  [theme.breakpoints.up("sm")]: {
    marginLeft: theme.spacing(1),
    width: "auto",
  },
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  width: "100%",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
    [theme.breakpoints.up("lg")]: {
      width: "20%",
      "&:focus": {
        width: "50%",
      },
    },
    boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px",
  },
}));

interface SearchBarProps {
  setQueryString: Dispatch<SetStateAction<string>>;
}

export default function SearchBar({ setQueryString }: SearchBarProps) {
  const [input, setInput] = useState<string>("");

  const handleChangeInput = (evt: ChangeEvent<HTMLInputElement>) => {
    setInput(evt.target.value);
  };

  const handleSubmit = (evt: SyntheticEvent) => {
    evt.preventDefault();

    if (!input) return;

    setQueryString(input);
    setInput("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <Search>
        <SearchIconWrapper>
          <SearchIcon />
        </SearchIconWrapper>
        <StyledInputBase
          placeholder="Search…"
          inputProps={{ "aria-label": "search" }}
          value={input}
          onChange={handleChangeInput}
        />
      </Search>
    </form>
  );
}
