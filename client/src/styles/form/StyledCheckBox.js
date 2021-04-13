import React from 'react';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import Checkbox from '@material-ui/core/Checkbox';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import CheckBoxOutlineBlankIcon from '@material-ui/icons/CheckBoxOutlineBlank';
import CheckBoxIcon from '@material-ui/icons/CheckBox';

export const useStyles = makeStyles({
  root: {
    marginTop: '4px',
    padding: '0px 10px',
    '& span:last-child': {
      color: '#757575',
      fontSize: '14px',
      fontWeight: '400',
      lineHeight: '42px',
    },
    '&:hover': {
      '& span': {
        color: '#3f51b5',
      },
    },
    '&:focus-within': {
      '& span': {
        color: '#3f51b5',
      },
    },
  },
});

const CheckboxStyles = withStyles({
  root: {
    color: '#c1c8f0',
    '&$checked': {
      color: '#3f51b5',
    },
  },
  checked: {},
})(props => <Checkbox color="default" {...props} />);

const StyledCheckBox = () => {
  const classes = useStyles();
  return (
    <FormControlLabel
      className={classes.root}
      control={
        <CheckboxStyles
          icon={<CheckBoxOutlineBlankIcon fontSize="small" />}
          checkedIcon={<CheckBoxIcon fontSize="small" />}
          name="loginControl"
        />
      }
      label="로그인 유지하기"
    />
  );
};

export default StyledCheckBox;
