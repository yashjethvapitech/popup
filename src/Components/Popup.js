"use client";
import * as React from 'react';
import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import ShieldIcon from '@mui/icons-material/Shield';
import FormatAlignRightIcon from '@mui/icons-material/FormatAlignRight';

import ExpandCircleDownIcon from '@mui/icons-material/ExpandCircleDown';
import FormatBoldIcon from '@mui/icons-material/FormatBold';
import FormatItalicIcon from '@mui/icons-material/FormatItalic';
import FormatUnderlinedIcon from '@mui/icons-material/FormatUnderlined';
import FormatAlignCenterIcon from '@mui/icons-material/FormatAlignCenter';
import FormatAlignLeftIcon from '@mui/icons-material/FormatAlignLeft'; 
import FormatAlignJustifyIcon from '@mui/icons-material/FormatAlignJustify';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import Link from '@mui/material/Link';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Box from '@mui/material/Box';
import SendIcon from '@mui/icons-material/Send';
import Stack from '@mui/material/Stack';
import TextField from '@mui/material/TextField';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';

import { MicRounded } from '@mui/icons-material';

export default function Popup() {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };


  const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
      backgroundColor: theme.palette.common.black,
      color: theme.palette.common.white,
    },
    [`&.${tableCellClasses.body}`]: {
      fontSize: 14,
    },
  }));
  
  const StyledTableRow = styled(TableRow)(({ theme }) => ({
    '&:nth-of-type(odd)': {
      backgroundColor: theme.palette.action.hover,
    },
    // hide last border
    '&:last-child td, &:last-child th': {
      border: 0,
    },
  }));

  function createData(factor, value) {
    return { factor, value };
  }
  
  const rows = [
    createData('Pars MOU Weight', 2),
    createData('AVG RIghtship', 4.00),
    createData('MIN RIghtship', 4.00),
    createData('Flawless PSC Rate', 1.00),
    createData('Eclair', 262),
    createData('Cupcake', 305),
    createData('Gingerbread', 356),
  ];

  return (
    <React.Fragment>
      <Button variant="outlined" onClick={handleClickOpen}>
        Open
      </Button>
      <Dialog
        onClose={handleClose}
        aria-labelledby="customized-dialog-title"
        open={open}
        maxWidth={"md"}
        fullWidth={true}
      >
        <DialogTitle sx={{ m: 0, p: 2, weight:500,fontSize:"14px" }} id="customized-dialog-title">
          Sentinel Insights
        </DialogTitle>
        <IconButton
          aria-label="close"
          onClick={handleClose}
          sx={{
            position: 'absolute',
            right: 8,
            top: 8,
            color: (theme) => theme.palette.grey[500],
          }}
        >
          <CloseIcon />
        </IconButton>
        <DialogContent dividers>
          <Typography gutterBottom sx={{ weight:400,fontSize:"16px" }}>
                What corrective actions did you take to resolve this issue.
          </Typography>
          <Grid container spacing={2}>
            <Grid item xs={12} md={6} sm={6}>
                <Card sx={{backgroundColor:"#F5F5F5"}}>
                    <Grid container sx={{p:"15px !important"}}>
                        <Grid item xs={12} sm={4} md={4} >
                            <Typography variant="caption" sx={{display:"flex",fontWeight:700}}>
                                <ShieldIcon sx={{color:"#FF451A"}}/> NORDIC AKI 
                            </Typography>
                        </Grid>
                        <Grid item xs={12} sm={8} md={8}>
                            <Breadcrumbs separator={<NavigateNextIcon fontSize="small" />} aria-label="breadcrumb" sx={{color:"#FF451A",fontSize:"12px"}}>
                                <Link underline="hover" color="inherit" href="/" >
                                Inspections, 2.3
                                </Link>
                                <Link
                                underline="hover"
                                color="inherit"
                                href="/material-ui/getting-started/installation/"
                                >
                                Port State Control, 3.2
                                </Link>
                                
                            </Breadcrumbs>
                        </Grid>
                    </Grid>
                    <Box>
                        <TableContainer >
                            <Table aria-label="customized table">
                                <TableHead >
                                    <TableRow>
                                        <StyledTableCell sx={{backgroundColor:"#fff !important", color:"#000 !important", weight:"700 !important", fontSize:"14px !important" }}>ACTIONABLE FACTORS</StyledTableCell>
                                        <StyledTableCell sx={{backgroundColor:"#fff !important", color:"#000 !important", weight:"700 !important", fontSize:"14px !important"}} align="right">VALUE</StyledTableCell>
                                    </TableRow>
                                </TableHead>
                                <TableBody key="tbody">
                                {rows.map((row) => (
                                    <StyledTableRow key={row.name}>
                                    <StyledTableCell component="th" scope="row">
                                        {row.factor}
                                    </StyledTableCell>
                                    <StyledTableCell align="right">{row.value}</StyledTableCell>
                                    </StyledTableRow>
                                ))}
                                </TableBody>
                            </Table>
                        </TableContainer>
                    </Box>
                </Card>

            </Grid>
            <Grid item xs={12} md={6} sm={6}>
                <Card>
                    <TextField
                        id="outlined-multiline-static"
                        label="Corrective Actions"
                        multiline
                        inputProps={{
                            style: {
                              height: "400px",
                            },
                        }}
                        sx={{mt:'5px'}}
                        defaultValue="Please enter your insights here"
                        
                        fullWidth 
                    />
                    <Grid container>
                        <Grid item xs={11} md={11} sm={11}>
                            <Typography  sx={{alignItems: "center",display: "flex",p: "10px"}}> 
                            
                                <FormatBoldIcon sx={{ml:"20px",fontSize:"14px"}}/>
                                <FormatItalicIcon sx={{ml:"20px",fontSize:"14px"}}/>
                                <FormatUnderlinedIcon sx={{ml:"20px",fontSize:"14px"}}/>
                                <FormatAlignCenterIcon sx={{ml:"20px",fontSize:"14px"}}/>
                                <FormatAlignLeftIcon sx={{ml:"20px",fontSize:"14px"}}/> 
                                <FormatAlignJustifyIcon sx={{ml:"20px",fontSize:"14px"}}/>
                                <FormatAlignRightIcon sx={{ml:"20px",fontSize:"14px"}}/> 
                                
                            </Typography>
                        </Grid>
                        <Grid item xs={1} md={1} sm={1}>
                            <MicRounded fontSize="large" sx={{color:"#00704B"}} />
                        </Grid>
                    </Grid>
                </Card>
            </Grid>

        </Grid>
        </DialogContent>
        <DialogActions>
            <Stack direction="row" spacing={2}>
                <Typography variant="caption" sx={{display:"flex",fontWeight:500, fontSize:"20px"}}>
                    +50 <ExpandCircleDownIcon fontSize="large" sx={{color:"#FBCF4E"}} />
                </Typography>
                <Button variant="contained" sx={{backgroundColor:"#E0E0E0", borderRadius:"25px"}} endIcon={<SendIcon />}>
                    Send
                </Button>
            </Stack>
        </DialogActions>
      </Dialog>
    </React.Fragment>
  );
}