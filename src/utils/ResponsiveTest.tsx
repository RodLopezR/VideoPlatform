import { createTheme, ThemeProvider } from '@material-ui/core/styles';
import { Breakpoint } from '@material-ui/core/styles/createBreakpoints';

interface Props {
  initialWidth: Breakpoint;
  children: any;
}

const ResponsiveTest = (props: Props) => {
  const theme = createTheme({
    props: { MuiWithWidth: { initialWidth: `${props.initialWidth}` } },
  });

  return <ThemeProvider theme={theme}>{props.children}</ThemeProvider>;
};

export default ResponsiveTest;
