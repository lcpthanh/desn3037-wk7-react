import { Tab, Tabs } from "@mui/material";
import { useLocation } from "react-router";
import { Link } from "react-router-dom";

export default function Menu() {
  // const path = "/contact";

  const {pathname} = useLocation();

  return (
    <Tabs value={pathname}>
      <Tab component={Link} to="/about" label="/about" label="About" />
      <Tab component={Link} to="/clients" label="/clients" label="Clients" />
      <Tab component={Link} to="/contact" label="/contact" label="Contact" />
    </Tabs>
  );
}
